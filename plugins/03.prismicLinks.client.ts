export default defineNuxtPlugin(_ => {
  window.addEventListener('click', event => {
    const target = event.target as HTMLElement
    if (target.tagName === 'STRONG' && target.parentElement && target.parentElement.matches('a[data-nuxt-link]')) {
      event.preventDefault()
      // @ts-ignore
      navigateTo(target.parentElement.pathname)
    }

    if (!target.matches('a[data-nuxt-link]')) { return }
    event.preventDefault()
    // @ts-ignore
    navigateTo(target.pathname)
  }, false)
})
