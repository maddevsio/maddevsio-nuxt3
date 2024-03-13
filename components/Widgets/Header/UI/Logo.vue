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
const showTextWhenLogoEnd = ref(false)
const changeLogo = ref(false)
const targetDate = ref(new Date('2024-02-15T06:00:00').getTime())

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
  let element = logoRef.value

  // @ts-ignore
  if (element!.$el) {
    // @ts-ignore
    element = element!.$el
  }

  activateLogo(element! as HTMLElement)
}

const checkAndUpdateLogo = () => {
  const currentDate = new Date().getTime()

  if (currentDate >= targetDate.value) {
    changeLogo.value = true
  } else {
    requestAnimationFrame(checkAndUpdateLogo)
  }
}

onMounted(() => {
  if (!changeLogo.value) {
    setTimeout(() => {
      showTextWhenLogoEnd.value = true
    }, 2000)
  }
  checkAndUpdateLogo()
})
</script>
<template>
  <div
    :class="{'logo-default': changeLogo}"
    @mouseenter="logoMouseOverHandler"
  >
    <Transition name="fade-logo">
      <svg
        v-if="!changeLogo"
        ref="logoRef"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"
        width="500"
        height="500"
        viewBox="0 0 500 500"
        class="logo-valentine"
      ><defs><animate
        repeatCount="1"
        dur="2s"
        begin="0s"
        xlink:href="#_R_G_L_2_G"
        fill="freeze"
        attributeName="opacity"
        from="0"
        to="1"
        keyTimes="0;0.1034483;1"
        values="0;1;1"
        keySplines="0.167 0.167 0.833 0.833;0 0 0 0"
        calcMode="spline"
      /><animate
        repeatCount="1"
        dur="2s"
        begin="0s"
        xlink:href="#_R_G_L_1_G"
        fill="freeze"
        attributeName="opacity"
        from="0"
        to="1"
        keyTimes="0;0.0998621;0.2413793;0.3965517;0.5517241;0.7241379;0.7758565;1"
        values="0;0;1;0.3;1;1;1;1"
        keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0"
        calcMode="spline"
      /><animateTransform
        repeatCount="1"
        dur="2s"
        begin="0s"
        xlink:href="#_R_G_L_1_G"
        fill="freeze"
        attributeName="transform"
        from="0 0"
        to="1.83 1.83"
        type="scale"
        additive="sum"
        keyTimes="0;0.0998621;0.2413793;0.3965517;0.5517241;0.7068966;0.7758621;0.8275806;1"
        values="0 0;0 0;5.14 5.14;2 2;5.5 5.5;3 3;2.6244099999999997 2.6244099999999997;1.83 1.83;1.83 1.83"
        keySplines="0.333 0 0.833 0.833;0.333 0 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.234 0 0.581 1;0.294 0 0.636 1;0 0 0 0"
        calcMode="spline"
      /><animateTransform
        repeatCount="1"
        dur="2s"
        begin="0s"
        xlink:href="#_R_G_L_1_G"
        fill="freeze"
        attributeName="transform"
        from="-12.25 -11.25"
        to="-12.25 -11.25"
        type="translate"
        additive="sum"
        keyTimes="0;1"
        values="-12.25 -11.25;-12.25 -11.25"
        keySplines="0 0 1 1"
        calcMode="spline"
      /><animate
        repeatCount="1"
        dur="2s"
        begin="0s"
        xlink:href="#_R_G_L_1_G_M"
        fill="freeze"
        attributeName="opacity"
        from="0"
        to="0"
        keyTimes="0;0.0862069;0.0862086;0.8448276;0.8448276;1"
        values="0;0;1;1;0;0"
        keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0"
        calcMode="spline"
      /><animate
        repeatCount="1"
        dur="2s"
        begin="0s"
        xlink:href="#_R_G_L_0_G"
        fill="freeze"
        attributeName="opacity"
        from="1"
        to="1"
        keyTimes="0;0.7068966;0.8620746;1"
        values="1;1;1;1"
        keySplines="0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0"
        calcMode="spline"
      /><animateMotion
        repeatCount="1"
        dur="2s"
        begin="0s"
        xlink:href="#_R_G_L_0_G"
        fill="freeze"
        keyTimes="0;0.7068966;0.8620746;1"
        path="M49.95 42.3 C49.95,42.3 49.95,42.3 49.95,42.3 C50.12,42.17 50.79,41.67 50.95,41.55 C50.95,41.55 50.95,41.55 50.95,41.55 "
        keyPoints="0;0;1;1"
        keySplines="0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0"
        calcMode="spline"
      /><animateTransform
        repeatCount="1"
        dur="2s"
        begin="0s"
        xlink:href="#_R_G_L_0_G"
        fill="freeze"
        attributeName="transform"
        from="0.07486 0.07486"
        to="0.69486 0.69486"
        type="scale"
        additive="sum"
        keyTimes="0;0.7068966;0.8620746;1"
        values="0.07486 0.07486;0.07486 0.07486;0.69486 0.69486;0.69486 0.69486"
        keySplines="0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0"
        calcMode="spline"
      /><animateTransform
        repeatCount="1"
        dur="2s"
        begin="0s"
        xlink:href="#_R_G_L_0_G"
        fill="freeze"
        attributeName="transform"
        from="-0.581 -9.884"
        to="-0.581 -9.884"
        type="translate"
        additive="sum"
        keyTimes="0;1"
        values="-0.581 -9.884;-0.581 -9.884"
        keySplines="0 0 1 1"
        calcMode="spline"
      /><animate
        repeatCount="1"
        dur="2s"
        begin="0s"
        xlink:href="#_R_G_L_0_G_N_1_T_0_M"
        fill="freeze"
        attributeName="opacity"
        from="0"
        to="1"
        keyTimes="0;0.7068966;0.7068983;1"
        values="0;0;1;1"
        keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
        calcMode="spline"
      /><animate
        attributeType="XML"
        attributeName="opacity"
        dur="2s"
        from="0"
        to="1"
        xlink:href="#time_group"
      /></defs><g id="_R_G"><g
        id="_R_G_L_2_G"
        transform=" translate(249.678, 247.849) scale(3.31, 3.31) translate(-75.513, -64.586)"
      ><path
        id="_R_G_L_2_G_D_0_P_0"
        fill="#ec1c24"
        fill-opacity="1"
        fill-rule="nonzero"
        d=" M75.84 128.92 C75.84,128.92 59.85,121.37 59.85,121.37 C15.63,95.49 0.25,69.53 0.58,41.27 C0.85,18.1 19.2,0.25 42.29,0.52 C55.34,0.67 67.78,6.89 75.84,16.51 C84.12,7.08 96.71,1.16 109.76,1.31 C132.85,1.58 150.78,19.86 150.5,43.02 C150.17,71.28 135.33,97.17 90.05,121.91 C90.05,121.91 75.84,128.92 75.84,128.92z "
      /></g><g id="_R_G_L_1_G_M"><g
        id="_R_G_L_1_G"
        transform=" translate(250, 230)"
      ><path
        id="_R_G_L_1_G_D_0_P_0"
        fill="#101113"
        fill-opacity="1"
        fill-rule="nonzero"
        d=" M12.25 22.25 C12.7,22.25 13.12,22.09 13.45,21.84 C13.45,21.84 24.25,13.14 24.25,6.8 C24.25,3.18 21.32,0.25 17.7,0.25 C14.25,0.25 12.25,3.25 12.25,3.25  M12.25 22.25 C11.8,22.25 11.39,22.09 11.05,21.84 C11.05,21.84 0.25,13.14 0.25,6.8 C0.25,3.18 3.18,0.25 6.8,0.25 C10.25,0.25 12.25,3.25 12.25,3.25 "
      /></g></g><g id="_R_G_L_0_G_N_1_T_0_M"><g
        id="_R_G_L_0_G_N_1_T_0"
        transform=" translate(251.5, 242) scale(2, 2) translate(-50.5, -51)"
      ><g id="_R_G_L_0_G"><path
        id="_R_G_L_0_G_D_0_P_0"
        fill="#101113"
        fill-opacity="1"
        fill-rule="nonzero"
        d=" M0.14 -44.49 C0.14,-44.49 85.95,-83.45 85.95,-83.45 C85.95,-83.45 85.95,-83.45 85.95,-83.45 C91.97,-86.7 99.99,-82.07 100,-73.73 C100,-73.73 100,88.97 100,88.97 C100,95.22 96.53,100.27 91.43,100.42 C91.2,100.45 90.96,100.45 90.73,100.42 C90.73,100.42 90.22,100.42 90.22,100.42 C90.22,100.42 34.04,94.62 34.04,94.62 C34.04,94.62 42.54,33.01 42.54,33.01 C42.54,33.01 42.54,32.76 42.54,32.76 C42.52,30.86 41.83,29.02 40.6,27.56 C39.36,26.11 37.64,25.13 35.76,24.81 C33.87,24.48 31.92,24.83 30.26,25.78 C28.6,26.73 27.33,28.23 26.67,30.02 C26.67,30.02 17.13,56.75 17.13,56.75 C16.4,52.78 13.15,49.09 8.96,49.09 C6.85,49.06 4.81,49.81 3.22,51.17 C1.63,52.54 0.59,54.44 0.31,56.51 C0.04,54.5 -0.94,52.64 -2.46,51.29 C-3.98,49.93 -5.93,49.15 -7.97,49.1 C-10.01,49.04 -12.01,49.72 -13.6,50.99 C-15.18,52.27 -16.26,54.07 -16.64,56.06 C-16.64,56.06 -32.69,16.69 -32.82,16.42 C-32.82,16.42 -32.82,16.35 -32.82,16.35 C-33.71,14.6 -35.2,13.23 -37.03,12.49 C-38.85,11.76 -40.88,11.7 -42.75,12.34 C-44.61,12.97 -46.18,14.26 -47.16,15.96 C-48.14,17.66 -48.47,19.65 -48.08,21.57 C-48.08,21.57 -48.08,21.68 -48.08,21.68 C-48.08,21.68 -47.98,22.04 -47.98,22.04 C-47.93,22.2 -47.88,22.37 -47.83,22.53 C-47.83,22.53 -33.72,69.85 -33.72,69.85 C-34.88,69.55 -36.19,70.12 -37.39,69.69 C-43.36,67.5 -49,73.12 -44.35,79.58 C-44.35,79.58 -33.69,94.67 -33.69,94.67 C-33.69,94.67 -89.93,100.48 -89.93,100.48 C-89.93,100.48 -90.44,100.48 -90.44,100.48 C-90.68,100.51 -90.92,100.51 -91.15,100.48 C-96.24,100.32 -100,95.24 -100,89.01 C-100,89.01 -100,-73.69 -100,-73.69 C-100,-82.03 -91.7,-86.7 -85.68,-83.45 C-85.68,-83.45 0.14,-44.49 0.14,-44.49z "
      /></g></g></g></g><g id="time_group" /></svg>
    </Transition>
    <svg
      v-if="showText && showTextLogoInTransparency && showTextWhenLogoEnd && !changeLogo"
      viewBox="0 0 256 446"
      class="header__logo-text"
    >
      <g
        fill="none"
        fill-rule="evenodd"
      >
        <path
          fill="#fff"
          fill-rule="nonzero"
          d="M205.78 270.83h-22.2a5.4 5.4 0 0 0-5.4 5.4v79.19a5.4 5.4 0 0 0 5.4 5.4h22.2c33.11 0 49.79-18 49.79-44.81 0-26.81-16.68-45.18-49.79-45.18zm7 62.6H207a3.6 3.6 0 0 1-3.6-3.6v-28.4a3.6 3.6 0 0 1 3.6-3.6h5.4c7.59 0 12.6 6.35 12.6 18.18s-4.58 17.43-12.17 17.43l-.05-.01zM5.4 360.82h16.2a5.4 5.4 0 0 0 5.4-5.4v-25.2L35.12 347a5.4 5.4 0 0 0 4.88 3h.22a5.4 5.4 0 0 0 4.78-2.83l9-16.94v25.2a5.4 5.4 0 0 0 5.4 5.4h16.2a5.4 5.4 0 0 0 5.4-5.4v-79.2a5.4 5.4 0 0 0-5.4-5.4H58.09a5.4 5.4 0 0 0-4.77 2.87L39.6 299.63l-13.73-25.92a5.4 5.4 0 0 0-4.77-2.87H5.4a5.4 5.4 0 0 0-5.4 5.4v79.19a5.4 5.4 0 0 0 5.4 5.39zM144 352.14l1.36 4.77a5.4 5.4 0 0 0 5.19 3.92h15a5.39 5.39 0 0 0 5.17-6.94c-5.39-17.9-19.62-65.18-23.76-79a5.38 5.38 0 0 0-5.16-3.83h-24.4a5.4 5.4 0 0 0-5.17 3.84l-23.75 79a5.4 5.4 0 0 0 5.17 7h15.66a5.4 5.4 0 0 0 5.19-3.92l1.36-4.77a5.4 5.4 0 0 1 5.19-3.92h17.76a5.4 5.4 0 0 1 5.19 3.85zm-21.62-24.76l7.2-25.2 7.2 25.2h-14.4zM27 377H5.4a5.4 5.4 0 0 0-5.4 5.4V440a5.4 5.4 0 0 0 5.4 5.4h23.4c24.78 0 36-14.17 36-34.2S51.77 377 27 377zm1.8 46.79h-3.6a1.8 1.8 0 0 1-1.8-1.8v-21.6a1.8 1.8 0 0 1 1.8-1.8h3.6c7 0 10.8 3.75 10.8 12.6s-3.82 12.63-10.8 12.63v-.03zM244.48 407.33c-2.32-1.553-7.293-3.3-14.92-5.24l-3.77-.93c-.267-.06-.653-.163-1.16-.31-5.74-1.447-8.61-3.253-8.61-5.42a3.79 3.79 0 0 1 1.64-3.37 9.06 9.06 0 0 1 5-1.11 10.32 10.32 0 0 1 5.88 1.42c1.38.95 3.83 2.53 4.15 4.46h13.75a3.59 3.59 0 0 0 3.51-4.41 18.63 18.63 0 0 0-7.09-10.94 33.18 33.18 0 0 0-19.86-6.26 32.71 32.71 0 0 0-20.12 6.49c-4.89 3.7-8 8.09-8 14.57a22.39 22.39 0 0 0 2.52 9.32 17.69 17.69 0 0 0 5.66 6.48 29.14 29.14 0 0 0 6.24 2.86c2.86 1.02 6.7 2.153 11.52 3.4l2.71.67c5.887 1.48 8.833 3.403 8.84 5.77a3.89 3.89 0 0 1-2.11 3.49 11.25 11.25 0 0 1-5.79 1.27c-2.933 0-5.14-.517-6.62-1.55-1.48-1-2.61-3.59-3.17-6h-15.6a3.61 3.61 0 0 0-3.54 4.33c1.09 5.26 3.39 9.84 7.4 12.9 5.08 3.88 11.38 6.16 20.05 6.16 9.41 0 17.21-2.28 22.26-6.16 5.05-3.88 7.25-10 7.25-17.24 0-3.35-.35-5.66-1.68-8.12a18.8 18.8 0 0 0-6.34-6.53zM185.94 377h-15.31a5.4 5.4 0 0 0-5.31 4.43l-6.39 35.16-6.39-35.16a5.4 5.4 0 0 0-5.31-4.43h-15.32a5.4 5.4 0 0 0-5.19 6.9l16.67 57.59a5.4 5.4 0 0 0 5.19 3.9h20.68a5.4 5.4 0 0 0 5.19-3.9l16.67-57.59a5.4 5.4 0 0 0-5.18-6.9zM115.19 377h-39.6a5.4 5.4 0 0 0-5.4 5.4V440a5.4 5.4 0 0 0 5.4 5.4h39.6a5.4 5.4 0 0 0 5.4-5.4v-9a3.6 3.6 0 0 0-3.6-3.6h-23.4a1.8 1.8 0 0 1-1.8-1.8V422a1.8 1.8 0 0 1 1.8-1.8h18a3.6 3.6 0 0 0 3.6-3.6v-10.8a3.6 3.6 0 0 0-3.6-3.6h-18a1.8 1.8 0 0 1-1.8-1.8v-3.6a1.8 1.8 0 0 1 1.8-1.8H117a3.6 3.6 0 0 0 3.6-3.6v-9a5.4 5.4 0 0 0-5.41-5.4z"
          data-testid="header-logo-text"
          class="header__logo-text-path"
        />
      </g>
    </svg>
    <LazySharedLottieMad
      v-if="changeLogo"
      ref="logoRef"
      :autoplay="true"
      :lottie-link="$getMediaFromS3('/images/core/md-logo-icon-animated.json')"
      height="30px"
      :set-min-height="false"
      class="logo"
    />
    <div
      v-if="changeLogo"
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

    @media screen and (max-width: 1026px) {
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

    @media screen and (max-width: 1026px) {
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
  @media screen and (max-width: 1026px) {
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
