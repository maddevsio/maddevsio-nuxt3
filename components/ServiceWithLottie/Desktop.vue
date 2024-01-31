<script setup lang="ts">
import type { PropType } from 'vue'
import type {
  IServiceWithLottieDesktop,
} from '~/components/ServiceWithLottie/interfaces/IServiceWithLottieDesktop'

const props = defineProps({
  desktopInstance: {
    type: Object as PropType<IServiceWithLottieDesktop>,
    require: true,
    default: () => ({}),
  },
})
const serviceSliceRef = props.desktopInstance.serviceSliceRef
const { $getMediaFromS3 } = useMediaFromS3()

onMounted(() => {
  props.desktopInstance.initIntersectionObserver()
})

onUnmounted(() => {
  clearInterval(props.desktopInstance.intervalId.value)
  clearTimeout(props.desktopInstance.timeOutId.value)
  props.desktopInstance.removeListeners()
})
</script>
<template>
  <div
    ref="serviceSliceRef"
    class="container services-slice-desktop"
  >
    <div class="service-slice__buttons">
      <button
        v-for="(button, buttonIndex) in desktopInstance.buttons"
        :key="`${button.label.split(' ').join('-')}-${buttonIndex}`"
        class="service-slice__button"
        :class="{ 'service-slice__button--active': desktopInstance.activeButton.value === button.label }"
        @click="desktopInstance.changeActiveButton(buttonIndex, button.lottieFrame)"
      >
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/custom/about/${desktopInstance.getIcon(buttonIndex)}`)"
          :alt="button.label || 'Button group icon'"
          width="22.5"
          height="22.5"
          class="service-slice__button-icon"
        >
        {{ button.label }}
      </button>
    </div>
    <SharedLottieMad
      class="case_lottie"
      height="509px"
      :lottie-link="$getMediaFromS3(`/images/custom/about/final-main-page-lottie.json`)"
      :autoplay="true"
      @anim-created="desktopInstance.animHandler"
    />
    <div
      v-for="(link, linkIndex) in desktopInstance.links"
      :key="`${link.link}-${linkIndex}`"
    >
      <NuxtLink
        v-if="link.haveLink"
        :class="`service-slice__link ${link.lottieId}`"
        :to="link.link"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped lang="scss">
.services-slice-desktop {
  @media screen and (max-width: 875px) {
    display: none;
    visibility: hidden;
  }
}

.service-slice {
  &__buttons {
    display: flex;
    justify-content: center;
    column-gap: 60px;
    margin-bottom: 48px;
  }

  &__button {
    display: flex;
    align-items: center;
    column-gap: 11.75px;
    background: transparent;
    @include font('Inter', 18px, 600);
    line-height: 26px;
    color: $text-color--white-primary;
    border: none;
    cursor: pointer;
    opacity: 0.2;
    transition: 0.3s ease-in-out;
    will-change: opacity;
    padding: 0;

    &--active {
      opacity: 1;
    }
  }

  &__link {
    position: absolute;
    top: -1000000px;
    left: -1000000px;
    transform: scale(0);
    z-index: -1;
    opacity: 0;
  }

  @media screen and (max-width: 1008px) {
    &__button {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 875px) {
    display: none;
    visibility: hidden;
  }
}
</style>
