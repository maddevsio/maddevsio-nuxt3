export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook('app:chunkError', () => {
    reloadNuxtApp()
  })
})
