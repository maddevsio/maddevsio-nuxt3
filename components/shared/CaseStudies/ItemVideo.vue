<script setup lang="ts">
const {
  videoLink,
  videoPosterLink,
} = defineProps({
  videoPosterLink: {
    type: String,
    default: '',
  },

  videoLink: {
    type: String,
    default: '',
  },
})

const {
  videoRef,
  play,
  pause,
} = useCaseItemVideoData()
const { $getMediaFromS3 } = useMediaFromS3()

defineExpose({
  play,
  pause,
})
</script>
<template>
  <video
    ref="videoRef"
    preload="none"
    :controls="false"
    muted
    loop
    playsinline
    width="100%"
    height="100%"
    class="case-studies-video"
    :poster="$getMediaFromS3(videoPosterLink)"
  >
    <source
      :src="$getMediaFromS3(videoLink)"
      type="video/mp4"
    >
    Your browser does not support the video tag.
  </video>
</template>
<style lang="scss" scoped>
.case-studies-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  object-fit: cover;
  object-position: 65%;
}
</style>
