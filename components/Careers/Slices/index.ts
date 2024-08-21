import { defineAsyncComponent } from 'vue'
import { defineSliceZoneComponents } from '@prismicio/vue'

export const careersComponents = defineSliceZoneComponents({
  text: defineAsyncComponent(() => import('../../PageBlocks/Text/Text.vue')),
  vacancy_text: defineAsyncComponent(() => import('../../PageBlocks/VacancyText/VacancyText.vue')),
  text_with_border: defineAsyncComponent(() => import('../../PageBlocks/TextWithBorder/Default.vue')),
  key_point_card: defineAsyncComponent(() => import('../../PageBlocks/KeyPointCard/Default.vue')),
})
