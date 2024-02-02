<script setup lang="ts">
import type { SharedCaseStudiesItemVideo } from '#components'

const {
  cardWidthType,
  caseType,
  id,
  logo,
  link,
  videoLink,
  videoPosterLink,
  title,
  description,
  threeSmallCards,
} = defineProps({
  cardWidthType: {
    type: String,
    default: 'full',
  },

  id: {
    type: String,
    default: '',
  },

  link: {
    type: String,
    default: '',
  },

  videoLink: {
    type: String,
    default: '',
  },

  caseType: {
    type: String,
    default: '',
  },

  title: {
    type: String,
    default: '',
  },

  description: {
    type: String,
    default: '',
  },

  videoPosterLink: {
    type: String,
    default: '',
  },

  logo: {
    type: Object,
    default: () => ({
      width: 0,
      height: 0,
      folder: '',
      file: '',
      alt: '',
    }),
  },

  threeSmallCards: {
    type: Boolean,
    default: false,
  },
})
const isShowContent = ref(false)
const videoComponentRef = ref<typeof SharedCaseStudiesItemVideo | null>(null)
const { isMobile } = useCheckMobile(992)
const mouseEventHandler = () => {
  isShowContent.value = !isShowContent.value
  if (videoComponentRef.value) {
    if (isShowContent.value) {
      videoComponentRef.value.play()
    } else {
      videoComponentRef.value.pause()
    }
  }
}
</script>
<template>
  <NuxtLink
    :id="id"
    :to="link"
    class="case-studies-item"
    :class="[`case-studies-item--${cardWidthType}`, { 'case-studies-item--three-small': threeSmallCards }]"
    @mouseenter="mouseEventHandler"
    @mouseleave="mouseEventHandler"
  >
    <SharedCaseStudiesItemVideo
      ref="videoComponentRef"
      :video-poster-link="videoPosterLink"
      :video-link="videoLink"
    />
    <SharedCaseStudiesItemLogo
      :logo="logo"
    />
    <div class="case-studies-item__content">
      <span class="case-studies-item__case-type">{{ caseType }}</span>
      <h3 class="case-studies-item__title">
        {{ title }}
      </h3>
      <SharedUITransitionHeight
        easing-enter="ease"
        easing-leave="ease"
      >
        <div
          v-show="isShowContent || isMobile"
          class="case-studies-item__collapse-content"
        >
          <p
            v-show="!isMobile"
            class="case-studies-item__description"
          >
            {{ description }}
          </p>
          <button
            class="case-studies-item__explore-btn"
          >
            Explore
          </button>
        </div>
      </SharedUITransitionHeight>
    </div>
  </NuxtLink>
</template>
<style lang="scss" scoped>
.case-studies-item {
  box-sizing: border-box;
  height: 230px;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 4px;
  overflow: hidden;

  * {
    box-sizing: border-box;
  }

  &--full {
    grid-column: auto / span 4;
    @media screen and (min-width: 1140px) {
      grid-column: auto / span 3;
    }
  }

  &--big {
    grid-column: auto / span 4;
    @media screen and (min-width: 992px) {
      grid-column: auto / span 2;
    }
  }

  &--small {
    grid-column: auto / span 4;
    @media screen and (min-width: 992px) {
      grid-column: auto / span 2;
    }

    @media screen and (min-width: 1140px) {
      grid-column: auto / span 1;
    }
  }

  &--three-small {
    @media screen and (min-width: 875px) {
      grid-column: auto / span 1;
    }
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(360deg, rgba(0, 0, 0, 0.78) 0%, rgba(53, 53, 53, 0.19) 100%);
  }

  &__content {
    margin-top: auto;
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    column-gap: 16px;

    @media screen and (min-width: 996px) {
      flex-direction: column;
      align-items: initial;
    }
  }

  &__case-type {
    @include font('Inter', 7px, 400);
    line-height: 8px;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: $text-color--white-primary;
    width: 100%;
    margin-bottom: 8px;
  }

  &__title {
    @include font('Poppins', 20px, 700);
    line-height: 130%;
    color: $text-color--white-primary;
    width: 72%;
    max-width: 205px;
    flex-grow: 1;

    @media screen and (min-width: 768px) {
      max-width: 350px;
    }
  }

  &__description {
    @include font('Inter', 16px, 400);
    letter-spacing: -0.013em;
    line-height: 140%;
    overflow: hidden;
    color: $text-color--white-primary;
    height: auto;
    max-width: 500px;
  }

  &__explore-btn {
    @include font('Inter', 11px, 400);
    line-height: 21px;
    letter-spacing: -0.4px;
    color: $text-color--black-oil;
    background: $bgcolor--white-primary;
    border-radius: 4px;
    border: none;
    padding: 2px 10px;
    overflow: hidden;
    cursor: pointer;
  }

  @media screen and (min-width: 875px) {
    &__explore-btn {
      margin-top: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    height: 294px;

    &__title {
      width: 100%;
    }
  }

  @media screen and (min-width: 993px) {
    height: 415px;
  }

  @media screen and (min-width: 1092px) {
    height: 525px;
    padding: 40px 24px 40px 40px;

    &__title {
      font-size: 33px;
      letter-spacing: -0.04em;
    }

    &__explore-btn {
      padding: 8px;
      font-size: 18px;
      line-height: 100%;
    }
  }
}
</style>
