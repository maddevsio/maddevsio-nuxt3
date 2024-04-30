<script setup lang="ts">
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

const route = useRoute()

const showFooter = ref(false)
const footerRef = ref<HTMLElement | null>(null)
const observer = ref<IntersectionObserverInstance | null>(null)
const displayCookieNotice = ref(false)
const careersPage = ref(false)
const timerId = ref<ReturnType<typeof setTimeout> | undefined>()
const footerLoaded = ref(false)
const { footerVisible } = storeToRefs(useFooterStore())

const handleChangeCookie = (cookieState: boolean) => {
  displayCookieNotice.value = cookieState
}

const footerLoadingHandler = (isLoading: boolean) => {
  footerLoaded.value = isLoading
}

watch(() => route.name, newRoute => {
  careersPage.value = newRoute === 'careers'
}, { deep: true, immediate: true })

onMounted(() => {
  timerId.value = setTimeout(() => {
    displayCookieNotice.value = !loadState(LOCAL_STORAGE_KEYS.ACCEPT_COOKIE)
  }, 5000)

  observer.value = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showFooter.value = true
        observer.disconnect()
      }
    }, {
      threshold: 1,
    })
  })

  if (footerRef.value) {
    observer.value.observe(footerRef.value)
  }
})

onUnmounted(() => {
  clearTimeout(timerId.value)
})
</script>
<template>
  <div class="default-layout">
    <NuxtLoadingIndicator
      color="#ec1c24"
      :height="2"
    />
    <WidgetsHeader />
    <DelayHydration>
      <main class="main-section">
        <NuxtPage />
      </main>
    </DelayHydration>
    <div
      v-if="!footerLoaded && !showFooter"
      ref="footerRef"
      class="intersecting-element"
    >
      <LazySharedLoadersSpinnerLoader
        v-if="!footerLoaded && !showFooter"
      />
    </div>
    <ClientOnly>
      <SharedUITransitionFade>
        <LazyWidgetsCookieNotice
          v-if="displayCookieNotice"
          @change-cookie="handleChangeCookie"
        />
      </SharedUITransitionFade>
      <NuxtLazyHydrate :on-interaction="showFooter">
        <LazyWidgetsFooter
          v-if="showFooter && footerVisible"
          @loading-footer="footerLoadingHandler"
        />
      </NuxtLazyHydrate>
    </ClientOnly>
  </div>
</template>
<style lang="scss" scoped>
.default-layout {
  background-color: $bgcolor--black;
}

.main-section {
  margin-top: -66px !important;
  position: relative;
  z-index: 1;
}

.intersecting-element {
  height: 350px;
}
</style>
