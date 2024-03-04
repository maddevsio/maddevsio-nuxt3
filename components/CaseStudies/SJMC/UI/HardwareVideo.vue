<script setup lang="ts">
import type { AnimationItem } from 'lottie-web'

const observerOptions = {
  threshold: 0.5,
  root: null,
  rootMargin: '0px',
}

useIntersectionObserver(
  ['iphone-video'],
  playVideo,
  observerOptions,
)

const { $getMediaFromS3 } = useMediaFromS3()

const animation = ref<AnimationItem>()
const video = ref<HTMLVideoElement>()

const animCreatedHandler = (animationItem: AnimationItem) => {
  animation.value = animationItem
  animation.value.goToAndStop(28, true) // Set default state for lottie
}

const toggleSound = () => {
  if (video.value) {
    video.value.muted = !video.value.muted

    if (video.value.muted) {
      animation.value?.playSegments([10, 28], true)
    } else {
      animation.value?.playSegments([0, 10], true)
    }
  }
}
</script>
<template>
  <div class="case_default-video">
    <div
      class="case_sound-control"
      data-testid="test-case_sound-control"
      @click="toggleSound"
    >
      <div class="case_sound-icon-wrap">
        <div class="case_lottie">
          <LazySharedLottieMad
            id="sound-icon"
            class="case_lottie"
            height="20px"
            :lottie-link="$getMediaFromS3(`/images/Cases/sjmc/lottie/sound-icon.json`)"
            @anim-created="animCreatedHandler"
          />
        </div>
      </div>
      <p class="case_sound-control-desc">
        Enable sound to the best expirience
      </p>
    </div>
    <div class="case_video-wrapper case_full-screen-video">
      <video
        id="iphone-video"
        ref="video"
        data-testid="test-case_video"
        width="100%"
        height="100%"
        :controls="false"
        autoplay="true"
        muted
        playsinline
        loop
        :data-poster="$getMediaFromS3('/images/Cases/sjmc/png/bluetooth-beacons-video-background.png')"
        class="lazy"
      >
        <source
          :data-src="$getMediaFromS3('/videos/bluetooth-beacons-video.9ca649c.mp4')"
          type="video/mp4"
        >
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.case {
  &_video-wrapper {
    width: 31.944vw;
    height: 63.3vw;
    max-width: 460px;
    max-height: 921px;
    min-width: 270px;
    min-height: 540px;

    video {
      display: block;
      &::-webkit-media-controls {
        display:none !important;
      }
    }
  }

  &_sound-control {
    width: max-content;
    display: flex;
    margin: auto auto 28px auto;
    border-radius: 26px;
    background-color: $bgcolor--sound-control;
    cursor: pointer;
  }

  &_sound-icon-wrap {
    width: 33px;
    height: 30px;
    position: relative;
    margin: 3px 0 3px 3px;
    border: none;
    border-radius: 100%;
    background-color: $bgcolor--black-oil;
    cursor: pointer;
  }

  &_sound-control-desc {
    @include font('Inter', 17px, 400);
    padding: 8px 20px;
    line-height: 20px;
    letter-spacing: -0.41px;
    color: $text-color--grey-opacity-40-percent;
  }

  &_lottie {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 1180px) {
    &_sound-icon-wrap {
      width: 29px;
      height: 26px;
    }

    &_sound-control-desc {
      padding: 6px 12px;
      font-size: 14px;
    }

    &_lottie {
      width: 17px;
    }
  }
}
</style>
