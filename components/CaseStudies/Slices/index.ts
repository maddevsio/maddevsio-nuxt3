import { defineAsyncComponent } from 'vue'
import { defineSliceZoneComponents } from '@prismicio/vue'

export const caseStudiesComponents = defineSliceZoneComponents({
  spacer_slice: defineAsyncComponent(() => import('../../../prismicSlices/SpacerSlice/index.vue')),
  button_slice: defineAsyncComponent(() => import('../../../prismicSlices/ButtonSlice/index.vue')),
  cta_banner_slice: defineAsyncComponent(() => import('../../../prismicSlices/CtaBannerSlice/index.vue')),
  title_and_description: defineAsyncComponent(() => import('../../../prismicSlices/TitleAndDescription/index.vue')),
  horizontal_to_c: defineAsyncComponent(() => import('../../../prismicSlices/HorizontalToC/index.vue')),
  customers_slice: defineAsyncComponent(() => import('../../../prismicSlices/CustomersSlice/index.vue')),
  customers_card_slice: defineAsyncComponent(() => import('../../../prismicSlices/CustomersCardSlice/index.vue')),
  customer_testimonials: defineAsyncComponent(() => import('../../../prismicSlices/CustomerTestimonials/index.vue')),
  divider_slice: defineAsyncComponent(() => import('../../../prismicSlices/DividerSlice/index.vue')),
  start_screen: defineAsyncComponent(() => import('../../../prismicSlices/StartScreen/index.vue')),
  title_and_paragraph_slice: defineAsyncComponent(() => import('../../../prismicSlices/TitleAndParagraphSlice/index.vue')),
  image_with_caption: defineAsyncComponent(() => import('../../../prismicSlices/ImageWithCaption/index.vue')),
  tech_and_tools_new_slice: defineAsyncComponent(() => import('../../../prismicSlices/TechAndToolsNewSlice/index.vue')),
  process_slice: defineAsyncComponent(() => import('../../../prismicSlices/ProcessSlice/index.vue')),
  text_list: defineAsyncComponent(() => import('../../../prismicSlices/TextList/index.vue')),
  quote_slice: defineAsyncComponent(() => import('../../../prismicSlices/QuoteSlice/index.vue')),
  team_cards: defineAsyncComponent(() => import('../../../prismicSlices/TeamCards/index.vue')),
  accordion_slice: defineAsyncComponent(() => import('../../../prismicSlices/AccordionSlice/index.vue')),
})
