export const useCaseItemVideoData = () => {
  const videoRef = ref<HTMLVideoElement | null>(null)
  const { isMobile } = useCheckMobile(996)
  const play = () => {
    if (videoRef.value) { playVideo(videoRef.value) }
  }

  const pause = () => {
    if (videoRef.value) { videoRef.value.pause() }
  }

  const enableAutoPlay = () => {
    if (isMobile.value && videoRef.value) {
      autoPlayVideo(videoRef.value)
    } else {
      pause()
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
