export default defineEventHandler(async event => {
  const cookie = getCookie(event, 'umdat')
  const body = await readBody(event)
  const ipService = new IPService()
  const ratingService = new RatingService()
  const matchToken = isValidToken(cookie!)

  if (!matchToken) {
    throw createError({ statusMessage: 'Access Denied', statusCode: 403 })
  }

  const ipFromRequest = ipService.getIPByRequest(getRequestHeaders(event), getRequestIP(event))

  const { ip } = await ipService.getLocation(ipFromRequest)
  const payload = {
    ...body,
    ip: ip || ipFromRequest,
  }

  return await ratingService.createRating(payload)
})
