import { CareersSubscribePayload, VacancySubscribeService } from '~/server/utils/VacancySubscribeService'
import { NODE_EMAIL_CV } from '~/server/config/envs'
import { JiraVariables } from '~/interfaces/server/JiraServiceInterfaces'

export default defineEventHandler(async event => {
  const reqBody: CareersSubscribePayload = await readBody(event)
  const vacancySubscribeService = new VacancySubscribeService()
  const ipService = new IPService()
  const emailService = new EmailService()

  try {
    const recaptchaVerify = await reCaptchaVerification(reqBody.token)
    if (!recaptchaVerify) {
      setResponseStatus(event, 400)
      return { success: false, message: 'Invalid reCaptcha' }
    }

    const ipFromRequest = ipService.getIPByRequest(getRequestHeaders(event), getRequestIP(event))

    const
      {
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

    const emailPayload = {
      ...reqBody.email,
      variables: {
        ...reqBody.email.variables,
        emailTo: NODE_EMAIL_CV,
        ip: ip || ipFromRequest,
        geoIp: `Country: ${ country }, City: ${ city }`,
      },
    }

    // eslint-disable-next-line camelcase
    const { fullName, email, vacancy_category, alreadySubscribed } = reqBody.email.variables
    await emailService.sendMailFromVariables(emailPayload)
    if (!alreadySubscribed) {
      await new JiraService('subscribe-form').createJiraIssue(emailPayload as JiraVariables)
    }
    // eslint-disable-next-line camelcase
    return await vacancySubscribeService.addSubscriber({ name: fullName, email, vacancy_category })
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.toString(),
    })
  }
})
