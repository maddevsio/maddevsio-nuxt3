<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <section class="cta-banner-slice">
    <NuxtLazyHydrate when-visible>
      <LazyPageBlocksCtaBannerDefault
        v-if="slice.variation === 'default'"
        :slice="slice"
      />
      <LazyPageBlocksCtaBannerWithBackgroundImage
        v-if="slice.variation === 'ctaBannerWithBackgroundImage'"
        :slice="slice"
      />
      <LazyPageBlocksCtaBannerWithExperts
        v-if="slice.variation === 'expertCtaSlice'"
        :slice="slice"
      />
      <LazyPageBlocksCtaBannerChecklist
        v-if="slice.variation === 'checklistCtaBannerSlice'"
        :slice="slice"
      />
    </NuxtLazyHydrate>
  </section>
</template>
