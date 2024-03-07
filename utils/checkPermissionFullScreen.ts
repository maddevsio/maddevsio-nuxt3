export const checkPermissionFullScreen = {
  checkBrowserExitFullscreen() {
    if (document?.fullscreenElement) {
      document.exitFullscreen()
      // @ts-ignore
    } else if (document?.webkitFullscreenElement) { // WebKit (Safari) / Blink (Chrome & Opera) / Edge
      // @ts-ignore
      document.webkitExitFullscreen()
    }
  },

  checkBrowserReqFullscreen(videoContainer: any) {
    if (videoContainer?.requestFullscreen) {
      videoContainer.requestFullscreen()
    } else if (videoContainer?.webkitRequestFullScreen) { // WebKit (Safari) / Blink (Chrome & Opera) / Edge
      videoContainer?.webkitRequestFullScreen()
    }
  },
}
