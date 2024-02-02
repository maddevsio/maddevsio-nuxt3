export const playVideo = (videoHtmlElement: HTMLVideoElement) => {
  // NOTE: https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
  if (videoHtmlElement) {
    const playPromise = videoHtmlElement.play()
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Automatic playback started!
        // Show playing UI.
      }).catch(() => {
        // Auto-play was prevented
        // Show paused UI.
      })
    }
  }
}
