import { FF_ENVIRONMENT } from '~/server/config/envs'

export default defineEventHandler(async event => {
  const { pageId } = getQuery(event)
  const ratingService = new RatingService()
  const config = useRuntimeConfig()
  const cookie = getCookie(event, 'umdat')
  if (!cookie) {
    const token = getToken()
    setCookie(event, 'umdat', token, {
      maxAge: 3 * 60 * 60 * 1000,
      domain: config.public.domain.replace(/^https?:\/\//, ''),
      path: '/',
      secure: FF_ENVIRONMENT !== 'development',
      httpOnly: true,
      sameSite: 'lax',
    })
  }
  return await ratingService.getRating(pageId as string)
})
