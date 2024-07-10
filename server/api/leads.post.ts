import { NODE_EMAIL_CONTACT } from '~/server/config/envs'
import { JiraVariables } from '~/interfaces/server/JiraServiceInterfaces'

export default defineEventHandler(async event => {
  const reqBody: JiraVariables = await readBody(event)
  const emailService = new EmailService()
  const ipService = new IPService()
  const formsWithSubscription = ['ebook-form', 'careers-subscribe-form', 'contact-me', 'service-form']

  Object.keys(reqBody.variables).forEach(variable => {
    if (variable !== 'token') { reqBody.variables[variable] = escapeHtml(reqBody.variables[variable]) }
  })
  const recaptchaVerify = await reCaptchaVerification(reqBody.variables.token)
  if (!recaptchaVerify) {
    setResponseStatus(event, 400)
    return { success: false, message: 'Invalid reCaptcha' }
  }

  const ipFromRequest = ipService.getIPByRequest(getRequestHeaders(event), getRequestIP(event))

  const { ip, city, country } = await ipService.getLocation(ipFromRequest)
  if (ipService.isBlockedIP(ip)) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Your ip is in a blacklist',
    })
  }

  const body: any = {
    ...reqBody,
    variables: {
      ...reqBody.variables,
      emailTo: NODE_EMAIL_CONTACT,
      ip: ip || ipFromRequest,
      geoIp: `Country: ${ country }, City: ${ city }`,
    },
  }

  const { testIP, testEmail } = ipService.isTestIP(ip)
  if (testIP) {
    body.variables.emailTo = testEmail
    if (testEmail === '') {
      throw createError({
        statusCode: 400,
        statusMessage: 'Test email is absent',
      })
    }
    await emailService.sendMailFromVariables(body)
    return { message: 'Request sent to test email' }
  }

  if ((reqBody.variables?.addressBooksId && reqBody.variables?.newsLetter === 'Yes') || reqBody.variables.fromId === 'subscribe-form') {
    await emailService.addToAddressBookEmail(body)
    if (formsWithSubscription.includes(reqBody.variables.fromId)) {
      await new JiraService('subscribe-form').createJiraIssue(body)
    }

    if (reqBody.variables.fromId !== 'subscribe-form') {
      await emailService.sendMailFromVariables(body)
    }
  } else {
    await emailService.sendMailFromVariables(body)
  }

  let response = 'Success sending'

  if (reqBody.type !== 'checklist') {
    response = await new JiraService(reqBody?.type).createJiraIssue(body)
  }

  return response
})
