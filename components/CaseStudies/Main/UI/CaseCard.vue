<script setup lang="ts">
import type { PropType } from 'vue'
import type { SharedCaseStudiesItemVideo } from '#components'
import type { TransformedCaseStudyCard } from '~/interfaces/common/commonInterfaces'

defineProps({
  item: {
    type: Object as PropType<TransformedCaseStudyCard>,
    default: () => {},
  },

  currentPage: {
    type: Number,
    default: 1,
  },
})

const caseCardRef = ref<{ $el: HTMLElement } | null>(null)
const isShowContent = ref(false)
const videoComponentRef = ref<InstanceType<typeof SharedCaseStudiesItemVideo> | null>(null)
const { isMobile } = useCheckMobile(1024)

const mouseEnterHandler = () => {
  if (!caseCardRef.value) { return }

  isShowContent.value = true
  if (isShowContent.value) { videoComponentRef.value.play() }
}

const mouseLeaveHandler = () => {
  isShowContent.value = false
  if (!isShowContent.value) { videoComponentRef.value.pause() }
}

const convertUid = (str: string) => (str === 'r4tca-web-application' ? str.replace('r4tca', 'R4TCA') : str)

onMounted(() => {
  if (caseCardRef.value && caseCardRef.value.$el) { caseCardRef.value.$el.classList.remove('cases-list-card--no-events') }
})
</script>
<template>
  <NuxtLink
    ref="caseCardRef"
    :key="item.uid"
    :to="`/case-studies/${convertUid(item.uid)}/`"
    class="cases-list-card cases-list-card--no-events"
    :class="`cases-list-card--${item.height}`"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
  >
    <LazySharedCaseStudiesItemVideo
      ref="videoComponentRef"
      :key="item.videoLink"
      :video-poster-link="item.posterLink"
      :video-link="item.videoLink"
      :lazy="false"
      class="cases-list-card__video"
    />
    <div
      v-if="item.tags.length"
      class="cases-list-card__tag-wrapper"
    >
      <div class="cases-list-card__tag">
        {{ item.tags[0] }}
      </div>
    </div>
    <div class="cases-list-card__info">
      <div class="cases-list-card__info-wrapper">
        <img
          v-if="item.logotype && item.logotype.url"
          loading="lazy"
          :src="item.logotype && item.logotype.url ? item.logotype.url : ''"
          width="70"
          height="30"
          :alt="item.logotype.alt || 'Image'"
          class="cases-list-card__logo"
        >
        <h2
          class="cases-list-card__title"
          :class="{'cases-list-card__title--without-logo': !item.logotype.url}"
        >
          {{ item.title }}
        </h2>
        <LazySharedUITransitionHeight
          :duration="350"
        >
          <div
            v-show="isShowContent || isMobile"
          >
            <p
              v-show="!isMobile"
              class="cases-list-card__desc"
            >
              {{ item.description }}
            </p>
            <button
              v-show="!isMobile"
              class="cases-list-card__btn"
            >
              Explore
            </button>
          </div>
        </LazySharedUITransitionHeight>
      </div>
    </div>
  </NuxtLink>
</template>
<style lang="scss" scoped>
.cases-list-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;

  &--no-events {
    pointer-events: none;
  }

  &--632 {
    grid-row: span 5;
  }

  &--505 {
    grid-row: span 4;
  }

  &--370 {
    grid-row: span 3;
  }

  @media screen and (max-width: 700px) {
    &--632, &--505, &--370 {
      grid-row: span 3;
    }
  }

  * {
    box-sizing: border-box;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 200%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.009) 11.7%, rgba(0, 0, 0, 0.034) 22.1%, rgba(0, 0, 0, 0.072) 31.2%, rgba(0, 0, 0, 0.123) 39.4%, rgba(0, 0, 0, 0.182) 46.6%, rgba(0, 0, 0, 0.249) 53.1%, rgba(0, 0, 0, 0.32) 58.9%, rgba(0, 0, 0, 0.394) 64.3%, rgba(0, 0, 0, 0.468) 69.3%, rgba(0, 0, 0, 0.54) 74.1%, rgba(0, 0, 0, 0.607) 78.8%, rgba(0, 0, 0, 0.668) 83.6%, rgba(0, 0, 0, 0.721) 88.7%, rgba(0, 0, 0, 0.762) 94.1%, rgba(0, 0, 0, 0.79) 100%);
    z-index: 1;
    pointer-events: none;
    opacity: 0.6;
    transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1) 0.4s;
  }

  &__video {
    display: block;
    border-radius: 7px;
  }

  &__tag-wrapper {
    padding: 15px;
  }

  &__tag {
    @include font('Inter', 10px, 400);
    position: relative;
    min-width: 75px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 3px 10px;
    line-height: 180%;
    background-color: $bgcolor--black-pale;
    color: $text-color--grey-20-percent;
    border-radius: 50px;
    letter-spacing: 0.02em;
    z-index: 2;
  }

  &__info {
    position: relative;
    padding: 13px 15px 20px;
    overflow: hidden;
    width: 100%;
    min-height: 119px;
    transition: all .4s ease-in-out;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: $bgcolor--black-pale;
      z-index: 2;
      pointer-events: none;
      opacity: 1;
      transition: opacity .2s ease-in-out .2s;
    }

    &-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      z-index: 2;
    }
  }

  &__logo {
    width: 70px;
    height: 30px;
    object-fit: contain;
    object-position: left;
    margin-bottom: 8px;
  }

  &__title, &__desc {
    color: $text-color--grey-20-percent;
    transition: all .2s ease .4s;
  }

  &__desc {
    line-height: 130%;
  }

  &__title {
    @include font('Inter', 24px, 700);
    line-height: 100%;
    letter-spacing: -0.04em;

    &--without-logo {
      margin-top: 38px;
    }
  }

  &__btn {
    @include font('Inter', 14px, 500);
    line-height: 130%;
    display: inline-block;
    padding: 5px 10px;
    border-radius: 4px;
    background-color: $bgcolor--white-primary;
    color: $text-color--chinese-black;
    outline: none;
    border: 0;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    &:hover {
      &::after {
        opacity: 1;
        transition-duration: .5s;
        transition-delay: 0s;
      }

      .cases-list-card__info {
        padding-bottom: 35px;

        &::before {
          opacity: 0;
          transition-duration: .3s;
          transition-delay: 0s;
        }
      }

      .cases-list-card__desc {
        padding: 10px 0;
      }

      .cases-list-card__title, .cases-list-card__desc {
        color: $text-color--white-primary;
        transition-duration: .3s;
        transition-delay: 0s;
      }
    }
  }
}

@media screen and (max-width: 1280px) {
  .cases-list-card {
    &__title {
      line-height: 104%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

@media screen and (max-width: 1024px) {
  .cases-list-card {
    &::after, &__info, &__info::before, &__title, &__desc {
      transition: none;
    }
  }
}

@media screen and (max-width: 900px) {
  .cases-list-card {
    &__title {
      font-size: 16px;
    }

    &__info {
      padding: 12px 15px 15px;
      min-height: 98px;
    }
  }
}

@media screen and (max-width: 600px) {
  .cases-list-card {
    &__logo {
      width: 60px;
      height: 25px;
    }

    &__info {
      min-height: 94px;
    }

    &__title {
      line-height: 108%;

      &--without-logo {
        margin-top: 33px;
      }
    }
  }
}
</style>
