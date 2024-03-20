export default defineNuxtRouteMiddleware(to => {
  if (to.path === '/success-and-faq/' && (!sessionStorage?.getItem('canSeeSuccessAndFaqPage'))) { return navigateTo('/') }
  if (to.path.startsWith('/about')) { return navigateTo('/') }
  if (to.path.startsWith('/ru/about/careers/')) { return navigateTo(to.path.replace(/\/ru\/about\/careers\//ig, '/careers/')) }
  if (to.path.startsWith('/about/careers/')) { return navigateTo(to.path.replace(/\/about\/careers\//ig, '/careers/')) }
  if (to.path.startsWith('/ru/careers/')) { return navigateTo(to.path.replace(/\/ru\/careers\//ig, '/careers/')) }
  if (to.path.startsWith('/tag/customer-university/')) { return navigateTo(to.path.replace(/\/tag\/customer-university\//ig, '/blog/#customer-university')) }
})
