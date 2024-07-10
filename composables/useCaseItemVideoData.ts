export const useCaseItemVideoData = () => {
  const videoRef = ref<HTMLVideoElement | null>(null)
  const { isMobile } = useCheckMobile(996)
  const play = () => {
    try {
      if (videoRef.value) { playVideo(videoRef.value) }
    } catch (e) {
      // eslint-disable-next-line
      console.warn(e)
    }
  }

  const pause = () => {
    try {
      if (videoRef.value) { videoRef.value.pause() }
    } catch (e) {
      // eslint-disable-next-line
      console.warn(e)
    }
  }

  const enableAutoPlay = () => {
    try {
      if (isMobile.value && videoRef.value) {
        autoPlayVideo(videoRef.value)
      } else {
        pause()
      }
    } catch (e) {
      // eslint-disable-next-line
      console.warn(e)
    }
  }

  onMounted(() => {
    enableAutoPlay()
    window.addEventListener('resize', enableAutoPlay)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', enableAutoPlay)
  })

  return {
    videoRef,
    play,
    pause,
  }
}
