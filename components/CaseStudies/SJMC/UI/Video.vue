<script setup lang="ts">
const showIcon = ref(false)
const flagFirstStartVideo = ref(true)
const fullscreenModIsActive = ref(false)
const video = ref<HTMLVideoElement>()
const videoContainer = ref<HTMLElement>()

const { $eventBus } = useNuxtApp()
const { $getMediaFromS3 } = useMediaFromS3()

const onEnded = () => {
  showIcon.value = true
}

const closeFullscreen = () => {
  checkPermissionFullScreen.checkBrowserExitFullscreen()
  fullscreenModIsActive.value = false
}

const emitHandler = () => {
  checkPermissionFullScreen.checkBrowserReqFullscreen(videoContainer.value)
  fullscreenModIsActive.value = true
  if (flagFirstStartVideo.value) {
    try {
      if (video.value) {
        playVideo(video.value)
      }
    } catch (err) {
      showIcon.value = true
    }
    flagFirstStartVideo.value = false
  }
}

const pause = () => {
  if (video.value) {
    video.value.pause()
  }
}

const videoSetState = () => {
  if (video.value && video.value.paused) {
    try {
      playVideo(video.value)
    } catch (err) {
      showIcon.value = true
    }
    showIcon.value = false
  } else {
    pause()
    showIcon.value = true
  }
}

onMounted(() => {
  closeFullscreen()
  // event bus handler
  $eventBus.$on('open-fullscreen', () => emitHandler())

  // exit fullscreen handler
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement === null) {
      fullscreenModIsActive.value = false

      // Pause video when exit from fullscreen
      if (!video.value?.paused) {
        pause()
        showIcon.value = true
      }
    }
  })

  video.value?.addEventListener('ended', onEnded)
})

onUnmounted(() => {
  video.value?.removeEventListener('ended', onEnded)
})
</script>
<template>
  <div
    v-show="fullscreenModIsActive"
    ref="videoContainer"
  >
    <div
      class="video-wrapper"
      @click="videoSetState"
    >
      <img
        v-if="showIcon"
        class="pause-icon"
        :src="$getMediaFromS3('images/core/Studies/svg/pause-icon.svg')"
        alt="Pause"
      >
      <video
        ref="video"
        controls
        class="main-video"
      >
        <source
          :src="$getMediaFromS3('/videos/sjmc/sjmc-modal-video-compressed.mp4')"
          type="video/mp4"
        >
        Your browser does not support the video tag.
      </video>
    </div>
    <button
      class="exit"
      @click="closeFullscreen"
    >
      <img
        :src="$getMediaFromS3('images/core/Studies/svg/close-icon.svg')"
        width="24"
        height="24"
        alt="Close"
      >
    </button>
  </div>
</template>
<style lang="scss" scoped>
.main-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.exit {
  width: 24px;
  height: 24px;
  border: 0;
  position: absolute;
  top: 52px;
  right: 52px;
  background-color: transparent;
  cursor: pointer;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.pause-icon {
  width: 120px;
  height: 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>
