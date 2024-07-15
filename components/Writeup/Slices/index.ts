import { defineAsyncComponent } from 'vue'
import { defineSliceZoneComponents } from '@prismicio/vue'

export const writeupComponents = defineSliceZoneComponents({
  spacer_slice: defineAsyncComponent(() => import('../../../prismicSlices/SpacerSlice/index.vue')),
  button_slice: defineAsyncComponent(() => import('../../../prismicSlices/ButtonSlice/index.vue')),
  cta_banner_slice: defineAsyncComponent(() => import('../../../prismicSlices/CtaBannerSlice/index.vue')),
  title_and_description: defineAsyncComponent(() => import('../../../prismicSlices/TitleAndDescription/index.vue')),
  divider_slice: defineAsyncComponent(() => import('../../../prismicSlices/DividerSlice/index.vue')),
  start_screen: defineAsyncComponent(() => import('../../../prismicSlices/StartScreen/index.vue')),
  image_with_caption: defineAsyncComponent(() => import('../../../prismicSlices/ImageWithCaption/index.vue')),
  writeup_text_slice: defineAsyncComponent(() => import('../../../prismicSlices/WriteupTextSlice/index.vue')),
  post_authors_slice: defineAsyncComponent(() => import('../../PageBlocks/Authors/Customizable.vue')),
  table_slice: defineAsyncComponent(() => import('../../../prismicSlices/TableSlice/index.vue')),
})
