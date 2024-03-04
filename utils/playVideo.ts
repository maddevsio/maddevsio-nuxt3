export const playVideo = (videoHtmlElement: HTMLVideoElement) => {
  // NOTE: https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
  if (videoHtmlElement) {
    // @ts-ignore
    const playPromise = videoHtmlElement.play ? videoHtmlElement.play() : videoHtmlElement.target.play()
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Automatic playback started!
        // Show playing UI.
        // @ts-ignore
        if (videoHtmlElement.target.play) {
          // @ts-ignore
          videoHtmlElement.target.play()
        }
      }).catch(() => {
        // Auto-play was prevented
        // Show paused UI.
      })
    }
  }
}
