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
  <LazyPageBlocksStartScreenMain
    v-if="slice.variation === 'mainStartScreen'"
    :slice="slice"
  />
  <LazyPageBlocksStartScreenDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyPageBlocksStartScreenWithButton
    v-if="slice.variation === 'startScreenwithButton'"
    :slice="slice"
  />
  <LazyPageBlocksStartScreenImageRightAndButton
    v-if="slice.variation === 'startScreenImageRightAndButton'"
    :slice="slice"
  />
  <LazyPageBlocksStartScreenExpert
    v-if="slice.variation === 'expertPage'"
    :slice="slice"
  />
  <LazyPageBlocksStartScreenCaseStudy
    v-if="slice.variation === 'caseStudyStartScreen'"
    :slice="slice"
  />
  <LazyPageBlocksStartScreenChecklist
    v-if="slice.variation === 'checklistStartScreenSlice'"
    :slice="slice"
  />
</template>
