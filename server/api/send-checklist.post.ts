export default defineEventHandler(async event => {
  const body = await readBody(event)
  const parsedReq = {
    body: {
      ...body.payload,
    },
  }
  if (checkIncludeRequiredText(parsedReq.body.email.variables.subject)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid Subject',
    })
  }
  const emailService = new EmailService()
  try {
    if (checkExistPathOnS3(parsedReq.body.email.variables)) {
      const params = {
        region: 'eu-west-1',
        bucket: 'maddevsio',
        file: getPdfFilePath(parsedReq.body.email.variables),
        expiresIn: 86400, // sec -> 24h
      }
      parsedReq.body.email.variables.pdfUrl = await getLinkWithLifeTime(params)
    }
    const emailReq = buildRequest(parsedReq, 'email')

    const emailRes = await emailService.sendMailFromVariables(emailReq.body)

    return { email: emailRes }
  } catch (e: any) {
    throw createError({
      statusCode: 500,
      statusMessage: e.toString(),
    })
  }
})
