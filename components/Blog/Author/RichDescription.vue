<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'
import type { PropType } from 'vue'

defineProps({
  richDescription: {
    type: Array as unknown as PropType<RichTextField>,
    default: () => [],
  },
})
</script>

<template>
  <div class="author-rich-description">
    <div class="container">
      <PrismicRichText
        v-if="$prismic.asText(richDescription)"
        :field="richDescription"
        :html-serializer="prismicHtmlSerializer"
        class="author-rich-description__text"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.author-rich-description {
  background-color: $bgcolor--white-primary;
  padding-top: 48px;

  &__text {
    @include font('Inter', 17px, 400);
    letter-spacing: -.02em;
    line-height: 28px;

    :deep(p) {
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    :deep(a) {
      text-decoration: underline;
      color: inherit;
    }
  }
}
</style>
