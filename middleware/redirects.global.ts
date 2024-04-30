export default defineNuxtRouteMiddleware(async to => {
  if (import.meta.server) { return }
  const nuxtApp = useNuxtApp()
  if (import.meta.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) { return }
  if (to.path === '/success-and-faq/') { return }
  try {
    const response = await $fetch<{ to_url: string, status_code: number }>(`/api/get-redirect?pagePath=${ to.path }`)
    if (response) {
      return navigateTo(response.to_url, { redirectCode: response.status_code, external: true })
    }
  } catch {}
})
