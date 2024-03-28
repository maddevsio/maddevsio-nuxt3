import { defineAsyncComponent } from 'vue'
import { defineSliceZoneComponents } from '@prismicio/vue'

export const checklistComponents = defineSliceZoneComponents({
  spacer_slice: defineAsyncComponent(() => import('../../../prismicSlices/SpacerSlice/index.vue')),
  button_slice: defineAsyncComponent(() => import('../../../prismicSlices/ButtonSlice/index.vue')),
  cta_banner_slice: defineAsyncComponent(() => import('../../../prismicSlices/CtaBannerSlice/index.vue')),
  title_and_description: defineAsyncComponent(() => import('../../../prismicSlices/TitleAndDescription/index.vue')),
  start_screen: defineAsyncComponent(() => import('../../../prismicSlices/StartScreen/index.vue')),
  process_slice: defineAsyncComponent(() => import('../../../prismicSlices/ProcessSlice/index.vue')),
  writeup_list_slice: defineAsyncComponent(() => import('../../../prismicSlices/WriteupListSlice/index.vue')),
  card_with_colored_title: defineAsyncComponent(() => import('../../../prismicSlices/CardWithColoredTitle/index.vue')),
  posts_section_slice: defineAsyncComponent(() => import('../../../prismicSlices/PostsSectionSlice/index.vue')),
  form_slice: defineAsyncComponent(() => import('../../../prismicSlices/FormSlice/index.vue')),
})
