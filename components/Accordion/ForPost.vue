<script setup lang="ts">
import type { AccordionForPostProps } from '~/components/Accordion/interfaces/IAccordion'
import { AccordionForPost } from '~/components/Accordion/classes/AccordionForPost'

interface Props {
  slice: AccordionForPostProps
}
const { slice } = defineProps<Props>()

const accordionForPost = new AccordionForPost(slice)
</script>

<template>
  <section
    itemscope
    itemtype="https://schema.org/FAQPage"
    class="accordion-for-post"
  >
    <h2
      v-if="$prismic.asText(accordionForPost.mainTitle)"
      class="accordion-for-post__main-title"
    >
      {{ $prismic.asText(accordionForPost.mainTitle) }}
    </h2>
    <LazyAccordionWithRichSnippet
      :questions="accordionForPost.questions"
    />
  </section>
</template>

<style scoped lang="scss">
.accordion-for-post {
  background: $bgcolor--white-primary;
  margin-bottom: 12px;
}
</style>
