export default defineEventHandler(async event => {
  const payload = await readBody(event)
  const emailService = new EmailService()
  try {
    if (checkExistPathOnS3(payload.body.email.variables)) {
      const params = {
        region: 'eu-west-1',
        bucket: 'maddevsio',
        file: getPdfFilePath(payload.body.email.variables),
        expiresIn: 86400, // sec -> 24h
      }
      payload.body.email.variables.pdfUrl = await getLinkWithLifeTime(params)
    }

    const emailRes = await emailService.sendMailFromVariables(payload.body.email)

    return { email: emailRes }
  } catch (e: any) {
    throw createError({
      statusCode: 500,
      statusMessage: e.toString(),
    })
  }
})
