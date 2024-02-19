import VueGtag, { trackRouter } from 'vue-gtag-next'

export default defineNuxtPlugin(nuxtApp => {
  if (isMatchMainDomain(window.location.origin)) {
    const config = useRuntimeConfig()
    nuxtApp.vueApp.use(VueGtag, {
      property: {
        id: config.public.analytics4Key,
        params: {
          send_page_view: false,
        },
      },
      disableScriptLoader: true,
    })
    trackRouter(useRouter(), {
      template(to) {
        return {
          page_path: to.fullPath,
          page_title: document.title,
        }
      },
    })
  }
})
