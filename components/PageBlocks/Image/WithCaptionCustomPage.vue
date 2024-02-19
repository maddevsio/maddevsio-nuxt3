<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageWithCaptionProps } from '~/components/PageBlocks/Image/interfaces/IImageWithCaption'
import { ImageWithCaption } from '~/components/PageBlocks/Image/classes/ImageWithCaption'

const { slicePrismic } = defineProps({
  slicePrismic: {
    type: Object as PropType<ImageWithCaptionProps>,
    default: () => ({}),
  },
})
const {
  slice,
  containerSize,
  videoSpeed,
  videoUrl,
  openFullScreenVideo,
} = new ImageWithCaption(slicePrismic)

const video = ref<HTMLVideoElement | null>(null)
const timerId = ref<ReturnType<typeof setTimeout> | null>(null)
const openFullScreenVideoHandler = () => openFullScreenVideo(video)

onMounted(() => {
  lazyLoadVideo()
  if (video.value) {
    timerId.value = setTimeout(() => {
      video.value!.playbackRate = videoSpeed
    }, 50)
  }
})

onUnmounted(() => {
  if (timerId.value) {
    clearTimeout(timerId.value)
  }
})
</script>
<template>
  <section
    class="image-with-caption"
    :class="`image-with-caption image-with-caption--${slice.primary.backgroundColor}`"
  >
    <div
      :class="`container image-with-caption__container--${containerSize}`"
    >
      <LazyPageBlocksImageCaptonBlog
        v-if="!videoUrl"
        :slice="slice"
      />
      <video
        v-else-if="videoUrl"
        ref="video"
        :controls="false"
        muted
        loop
        playsinline
        autoplay
        class="image-with-caption__video lazy"
        @click="openFullScreenVideoHandler"
      >
        <source
          :data-src="videoUrl"
          type="video/mp4"
        >
      </video>
    </div>
  </section>
</template>
<style scoped lang="scss">
.image-with-caption {
  padding-top: 16px;
  padding-bottom: 6px;
  &--black {
    background-color: $bgcolor--black;
  }

  &--white {
    background-color: $bgcolor--white-primary;
  }

  &__container {
    &--small {
      max-width: 816px;
    }

    &--big {
      max-width: 1240px;
    }
  }

  &__video {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 16px;
    cursor: pointer;
  }

  :deep(img) {
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>
