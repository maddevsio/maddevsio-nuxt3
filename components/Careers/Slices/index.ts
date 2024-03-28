import { defineAsyncComponent } from 'vue'
import { defineSliceZoneComponents } from '@prismicio/vue'

export const careersComponents = defineSliceZoneComponents({
  text: defineAsyncComponent(() => import('../../PageBlocks/Text/Text.vue')),
  vacancy_text: defineAsyncComponent(() => import('../../PageBlocks/VacancyText/VacancyText.vue')),
})
