import 'photoswipe/dist/photoswipe.css'
import PhotoSwipeLightbox from 'photoswipe/lightbox'

interface LightboxOptions {
  initialZoomLevel: string
  secondaryZoomLevel: number
  maxZoomLevel: number
}
export const useLightbox = (elemId: string, options: LightboxOptions) => {
  const lightbox = ref<PhotoSwipeLightbox>()

  onMounted(() => {
    if (!lightbox.value) {
      // @ts-ignore
      lightbox.value = new PhotoSwipeLightbox({
        gallery: elemId,
        children: 'a',
        imageClickAction: 'close',
        tapAction: 'close',
        ...options,
        pswpModule: () => import('photoswipe'),
      })

      if (lightbox.value && lightbox.value.init) { lightbox.value.init() }
    }
  })

  onUnmounted(() => {
    if (lightbox.value) {
      lightbox.value.destroy()
    }
  })

  return {
    lightbox,
  }
}
