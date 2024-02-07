<script setup lang="ts">
const { slice } = defineProps(
  getSliceComponentProps([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)
</script>
<template>
  <LazyStartScreenMain
    v-if="slice.variation === 'mainStartScreen'"
    :slice="slice"
  />
  <LazyStartScreenDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyStartScreenWithButton
    v-if="slice.variation === 'startScreenwithButton'"
    :slice="slice"
  />
  <LazyStartScreenImageRightAndButton
    v-if="slice.variation === 'startScreenImageRightAndButton'"
    :slice="slice"
  />
  <LazyStartScreenExpert
    v-if="slice.variation === 'expertPage'"
    :slice="slice"
  />
  <LazyStartScreenCaseStudy
    v-if="slice.variation === 'caseStudyStartScreen'"
    :slice="slice"
  />
  <LazyStartScreenChecklist
    v-if="slice.variation === 'checklistStartScreenSlice'"
    :slice="slice"
  />
</template>
