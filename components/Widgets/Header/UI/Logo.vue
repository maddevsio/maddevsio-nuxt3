<script setup lang="ts">
const props = defineProps({
  showTextLogo: {
    type: Boolean,
    default: true,
  },

  isStaticLogo: {
    type: Boolean,
    default: false,
  },
})

const route = useRoute()
const { $getMediaFromS3 } = useMediaFromS3()
const { showTextLogo } = toRefs(props)
const showText = ref(!props.isStaticLogo)
const logoRef = ref(null)
const showTextLogoInTransparency = ref(true)

watch(showTextLogo, () => {
  showText.value = showTextLogo.value
}, { immediate: true })

watch(() => route.path, newValue => {
  showTextLogoInTransparency.value = newValue !== '/transparency/'
}, { immediate: true })

const activateLogo = (element: HTMLElement) => {
  if (!element.classList.contains('logo--active')) {
    element.classList.add('logo--active')
    setTimeout(() => {
      element.classList.remove('logo--active')
    }, 1000)
  }
}

const logoMouseOverHandler = () => {
  if (!logoRef.value) { return }
  let element = logoRef.value

  // @ts-ignore
  if (element!.$el) {
    // @ts-ignore
    element = element!.$el
  }

  activateLogo(element! as HTMLElement)
}
</script>
<template>
  <div
    class="logo-default"
    @mouseenter="logoMouseOverHandler"
  >
    <LazySharedLottieMad
      ref="logoRef"
      :autoplay="true"
      :lottie-link="$getMediaFromS3('/images/core/md-logo-icon-animated.json')"
      height="30px"
      :set-min-height="false"
      class="logo"
    />
    <div
      class="logo-text"
    >
      <Transition name="fade">
        <LazySharedLottieMad
          v-show="showText && showTextLogoInTransparency"
          :autoplay="true"
          :lottie-link="$getMediaFromS3('/images/core/md-text-logo.json')"
          height="30px"
          :set-min-height="false"
        />
      </Transition>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 34px;
  transform-origin: bottom;
  transition: 0.8s ease-in-out;
  transform: scale(1) rotate(0);

  &-default {
    padding-top: 10px;

    @media screen and (max-width: 1200px) {
      padding-top: 0;
      margin-top: -4px;
    }
  }

  &-valentine {
    width: 37px;
    height: 37px;
    padding-top: 8px;
    transform: scale(0);
    opacity: 0;
    transition: 0.33s ease 0.2s;

    @media screen and (max-width: 1200px) {
      width: 32px;
      height: 32px;
      margin-top: -5px;
    }

    &--is-ready {
      opacity: 1;
      transform: scale(1);
    }
  }

  &--active {
    animation: shakeLogo 0.8s ease-in-out forwards;
  }
}

.logo-text {
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    margin-top: -5px;
  }
}

.header__logo-text {
  transform: translate(1px, -39px);
  width: 35px;

  &-path {
    transform: translateY(-100px) translateX(5%) scale(0.9);
    opacity: 0;
    animation: showTextLogo 0.2s ease-in-out forwards;
  }

  @media screen and (max-width: 1026px) {
    transform: translate(1px, -32px);
    width: 30px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active was before 2.1.8 version */ {
  transform: translateY(-100px) translateX(5%) scale(0.9);
  opacity: 0;
}

.fade-logo-enter-active,
.fade-logo-leave-active {
  transition: all 0.4s ease-in-out;
}
.fade-logo-enter, .fade-logo-leave-to /* .fade-leave-active was before 2.1.8 version */ {
  opacity: 0;
}

@keyframes showTextLogo {
  0% {
    transform: translateY(-100px) translateX(5%) scale(0.9);
    opacity: 0;
  }
  100% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 1;
  }
}

@keyframes shakeLogo {
  0% {
    transform: scale(1) rotate(0);
  }
  45% {
    transform: scale(1.08) rotate(0);
  }
  60% {
    transform: scale(1.08) rotate(-5deg);
  }
  75% {
    transform: scale(1.08) rotate(5deg);
  }
  90% {
    transform: scale(1.08) rotate(0);
  }
  100% {
    transform: scale(1) rotate(0);
  }
}
</style>
