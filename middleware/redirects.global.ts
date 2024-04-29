export default defineNuxtRouteMiddleware(async to => {
  if (import.meta.server) { return }
  const nuxtApp = useNuxtApp()
  if (import.meta.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) { return }
  if (to.path === '/success-and-faq/') { return }
  try {
    const { data } = await useFetch<{ to_url: string, status_code: number }>(`/api/get-redirect?pagePath=${ to.path }`)
    if (data.value) {
      return navigateTo(data.value.to_url, { redirectCode: data.value.status_code, external: true })
    }
  } catch {}
})
