<script setup lang="ts">
const CtaBannerSliceDefault = defineAsyncComponent(() => import('~/prismicSlices/CtaBannerSlice/variations/CtaBannerSliceDefault.vue'))
const CtaBannerWithBackgroundImage = defineAsyncComponent(() => import('~/prismicSlices/CtaBannerSlice/variations/CtaBannerWithBackgroundImageSlice.vue'))
const ExpertCtaSlice = defineAsyncComponent(() => import('~/prismicSlices/CtaBannerSlice/variations/ExpertCtaSlice.vue'))
const ChecklistCtaBannerSlice = defineAsyncComponent(() => import('~/prismicSlices/CtaBannerSlice/variations/ChecklistCtaBannerSlice.vue'))
const props = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <section class="cta-banner-slice">
    <CtaBannerSliceDefault
      v-if="props.slice.variation === 'default'"
      v-bind="props"
    />
    <CtaBannerWithBackgroundImage
      v-if="props.slice.variation === 'ctaBannerWithBackgroundImage'"
      v-bind="props"
    />
    <ExpertCtaSlice
      v-if="props.slice.variation === 'expertCtaSlice'"
      v-bind="props"
    />
    <ChecklistCtaBannerSlice
      v-if="props.slice.variation === 'checklistCtaBannerSlice'"
      v-bind="props"
    />
  </section>
</template>
