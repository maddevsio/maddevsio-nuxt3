<script setup lang="ts">
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

const showFooter = ref(false)
const footerRef = ref<HTMLElement | null>(null)
const observer = ref<IntersectionObserverInstance | null>(null)
const { footerVisible } = storeToRefs(useFooterStore())
onMounted(() => {
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
</script>
<template>
  <div class="default-layout">
    <NuxtPwaManifest />
    <NuxtLoadingIndicator
      color="#ec1c24"
      :height="2"
    />
    <WidgetsHeader />
    <main class="main-section">
      <NuxtPage />
    </main>
    <div ref="footerRef" class="intersecting-element" />
    <ClientOnly>
      <LazyWidgetsFooter
        v-if="showFooter && footerVisible"
      />
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
  height: 1px;
}
</style>
