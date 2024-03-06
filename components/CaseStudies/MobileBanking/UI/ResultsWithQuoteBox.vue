<script setup lang="ts">
defineProps({
  mainTitle: {
    type: String,
    default: 'Results',
  },

  quoteText: {
    type: String,
    default: '',
  },

  quoteAuthor: {
    type: String,
    default: '',
  },

  titleTag: {
    type: String,
    default: 'h4',
  },
})
</script>
<template>
  <div class="results">
    <Component
      :is="titleTag"
      class="case_title_h4 m-48_bottom media-m-24_bottom"
    >
      {{ mainTitle }}
    </Component>
    <LazyCaseStudiesUITextQuoteBox
      :author="quoteAuthor"
      class="m-48_bottom media-m-24_bottom m-auto"
    >
      {{ quoteText }}
    </LazyCaseStudiesUITextQuoteBox>
  </div>
</template>
