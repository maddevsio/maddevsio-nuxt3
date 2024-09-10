import { NODE_EMAIL_HR, NODE_SENDPULSE__FEEDBACK_TEMPLATE } from '~/server/config/envs'

interface RequestBody {
  [key: string]: string
  feedback: string
  fullName: string
  email: string
  token: string
}

export default defineEventHandler(async event => {
  const reqBody = await readBody<RequestBody>(event)
  Object.keys(reqBody).forEach(variable => {
    if (variable !== 'token') { reqBody[variable] = escapeHtml(reqBody[variable]) }
  })
  const recaptchaVerify = await reCaptchaVerification(reqBody.token)
  if (!recaptchaVerify) {
    setResponseStatus(event, 400)
    return { success: false, message: 'Invalid reCaptcha' }
  }
  const emailConfig = {
    variables: {
      ...reqBody,
      emailTo: NODE_EMAIL_HR,
      modalTitle: 'MD Feedback Form',
    },
    templateId: NODE_SENDPULSE__FEEDBACK_TEMPLATE,
  }

  try {
    const emailRes = await new EmailService().sendMailFromVariables(emailConfig)

    return { email: emailRes }
  } catch (e: any) {
    return sendError(event, e)
  }
})
