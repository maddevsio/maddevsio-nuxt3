<script setup lang="ts">
import type { PropType } from 'vue'
import type { AccordionCustomPageProps } from '~/components/Accordion/interfaces/IAccordion'
import { AccordionCustomPage } from '~/components/Accordion/classes/AccordionCustomPage'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<AccordionCustomPageProps>,
    default: () => ({}),
  },
})
const accordion = new AccordionCustomPage(slice)
</script>
<template>
  <section class="section accordion-slice">
    <div
      class="container"
      :style="{ maxWidth: accordion.containerSize }"
    >
      <PrismicRichText
        v-if="$prismic.asText(accordion.mainTitle)"
        :field="accordion.mainTitle"
        data-testid="accordion-slice__title"
        class="accordion-slice__title"
        :html-serializer="prismicHtmlSerializer"
      />
      <LazySharedUIAccordion
        is-prismic
        :questions="accordion.questions"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.accordion-slice {
  background: $bgcolor--white-primary;
  &__title {
    :deep(h1),
    :deep(h2),
    :deep(h3),
    :deep(h4),
    :deep(h5),
    :deep(h6) {
      @include font('Inter', 68px, 700);
      line-height: 72px;
      letter-spacing: -2px;
      margin-bottom: 96px;
      @media screen and (max-width: 768px) {
        font-size: 42px;
        line-height: 48px;
        margin-bottom: 72px;
      }
      @media screen and (max-width: 580px) {
        font-size: 28px;
        line-height: 32px;
        letter-spacing: -1px;
        margin-bottom: 48px;
      }
    }
  }
}
</style>
