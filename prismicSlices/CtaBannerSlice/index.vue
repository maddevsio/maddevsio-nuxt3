<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <section class="cta-banner-slice">
    <!--    <CtaBannerSliceDefault-->
    <!--      v-if="props.slice.variation === 'default'"-->
    <!--      v-bind="props"-->
    <!--    />-->
    <LazyPageBlocksCtaBannerWithBackgroundImage
      v-if="slice.variation === 'ctaBannerWithBackgroundImage'"
      :slice="slice"
    />
    <LazyPageBlocksCtaBannerWithExperts
      v-if="slice.variation === 'expertCtaSlice'"
      :slice="slice"
    />
    <!--    <ChecklistCtaBannerSlice-->
    <!--      v-if="props.slice.variation === 'checklistCtaBannerSlice'"-->
    <!--      v-bind="props"-->
    <!--    />-->
  </section>
</template>
