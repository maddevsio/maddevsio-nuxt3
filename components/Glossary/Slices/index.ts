import { defineAsyncComponent } from 'vue'
import { defineSliceZoneComponents } from '@prismicio/vue'
export const glossaryComponents = defineSliceZoneComponents({
  button_slice: defineAsyncComponent(() => import('../../../prismicSlices/ButtonSlice/index.vue')),
  cta_banner_slice: defineAsyncComponent(() => import('../../../prismicSlices/CtaBannerSlice/index.vue')),
  image_with_caption: defineAsyncComponent(() => import('../../PageBlocks/Image/CaptonBlog.vue')),
  spacer_slice: defineAsyncComponent(() => import('../../../prismicSlices/SpacerSlice/index.vue')),
  text: defineAsyncComponent(() => import('../../PageBlocks/Text/Text.vue')),
  key_takeaways_slice: defineAsyncComponent(() => import('../../../prismicSlices/KeyTakeawaysSlice/index.vue')),
})
