export default defineEventHandler(async event => {
  const reqBody = await readBody(event)
  if (checkIncludeRequiredText(reqBody.body.email.variables.subject)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid Subject',
    })
  }

  try {
    if (checkExistPathOnS3(reqBody.body.email.variables)) {
      const params = {
        region: 'eu-west-1',
        bucket: 'maddevsio',
        file: getPdfFilePath(reqBody.body.email.variables),
        expiresIn: 86400, // sec -> 24h
      }
      reqBody.body.email.variables.pdfUrl = await getLinkWithLifeTime(params)
    }
    const emailReq = buildRequest(reqBody, 'email')

    const emailRes = await new EmailService().sendMailFromVariables(emailReq.body)

    return { email: emailRes }
  } catch (e: any) {
    return sendError(event, e)
  }
})
