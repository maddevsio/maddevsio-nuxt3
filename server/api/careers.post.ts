import { readFile } from 'node:fs/promises'
import { createReadStream } from 'node:fs'
import multer, { diskStorage } from 'multer'
import FormData from 'form-data'
import { NODE_EMAIL_CV } from '~/server/config/envs'

let fileNameTransformed = ''
const storage = diskStorage({
  /* eslint-disable */
  destination(req, file, cb) {
    cb(null, '/tmp')
  },
  filename(req, file, cb) {
    const { originalname } = file
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0]
    const lastDotIndex = originalname.lastIndexOf('.')
    let fileName = originalname

    if (lastDotIndex !== -1) {
      fileName = originalname.substring(0, lastDotIndex)
    }
    fileNameTransformed = `${ fileName }${ Date.now() }${ fileExtension }`

    cb(null, fileNameTransformed)
  },
  /* eslint-enable */
})

const upload = multer({ storage })

export default defineEventHandler(async event => {
  // @ts-expect-error: Nuxt 3
  await callNodeListener(upload.single('cvFile'), event.node.req, event.node.res)
  let file
  // @ts-ignore
  if (event.node.req?.file) {
    // @ts-ignore
    file = event.node.req.file
  }
  // @ts-ignore
  const data = JSON.parse(event.node.req.body.payload)

  if (data.email.variables.fullName === 'Test Testovich') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Test error',
    })
  }
  if (!data.email.variables.subject.includes('Job Candidate Application for')) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid Subject for Email',
    })
  }

  const recaptchaVerify = await reCaptchaVerification(data.token)
  if (!recaptchaVerify) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Invalid reCaptcha',
    })
  }

  let formData
  let base64: string
  const ipService = new IPService()
  const emailService = new EmailService()

  if (file) {
    base64 = await readFile(file.path, { encoding: 'base64' })
    base64 = base64.replace(/^data:(.*,)?/, '')
    data.email.attachment.base64 = base64
    formData = new FormData()
    const fileData = createReadStream(file.path)
    // @ts-ignore
    formData.append('file', fileData)
  }
  const parsedReq = {
    body: {
      ...data,
    },
  }
  const ipFromRequest = ipService.getIPByRequest(getRequestHeaders(event), getRequestIP(event))
  const {
    ip,
    city,
    country,
  } = await ipService.getLocation(ipFromRequest)

  if (ipService.isBlockedIP(ip)) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Your ip is in a blacklist',
    })
  }

  const rawBodyReq = buildRequest(parsedReq, 'email')
  const emailReq = {
    ...rawBodyReq,
    body: {
      ...rawBodyReq.body,
      variables: {
        ...rawBodyReq.body.variables,
        emailTo: NODE_EMAIL_CV,
        ip: ip || ipFromRequest,
        geoIp: `Country: ${ country }, City: ${ city }`,
      },
    },
  }
  const jiraService = new JiraService(emailReq.body.type)
  try {
    const hrEmailResponse = await emailService.sendMailFromVariables(emailReq.body)
    const userEmailResponse = await emailService.sendCVResponseMail(emailReq.body)
    // const createdIssue = await jiraService.createJiraIssue(emailReq.body)
    // if (file && createdIssue?.key && formData) {
    //   await jiraService.attachFileToIssue(createdIssue.key, formData)
    // }

    return {
      email: hrEmailResponse,
      userEmail: userEmailResponse,
      // jira: createdIssue?.key && 'created',
    }
  } catch (error: any) {
    if (error?.response && error?.response?.data) {
      throw createError({
        statusCode: 500,
        statusMessage: `URL: ${ error.config.url } | ${ JSON.stringify(error.response.data) }`,
      })
    }
    throw createError({
      statusCode: 500,
      statusMessage: error.toString(),
    })
  }
})
