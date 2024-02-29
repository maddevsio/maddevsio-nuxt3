<script setup lang="ts">
import type { QuoteProps } from '~/components/PageBlocks/Quote/interfaces/IQuote'
import { Quote } from '~/components/PageBlocks/Quote/classes/Quote'

interface Props {
  slice: QuoteProps
}
const { slice } = defineProps<Props>()
const {
  authorName,
  quotationDesign,
  containerSize,
  quote,
  portraitAuthor,
  email,
  linkedinLink,
  colorTheme,
} = new Quote(slice)
</script>
<template>
  <section
    :class="`quote-slice ${colorTheme.backgroundSlice}`"
  >
    <div
      class="container"
      :style="{ 'max-width': `${containerSize || '816'}px` }"
    >
      <LazyPageBlocksQuoteUIText
        v-if="quotationDesign === 'brackets'"
        :class="`post-quote ${colorTheme.textColor}`"
      >
        {{ $prismic.asText(quote) }}
      </LazyPageBlocksQuoteUIText>
      <blockquote
        v-else
        :class="`block-quotation ${colorTheme.textColor}`"
        v-html="$prismic.asHTML(quote)"
      />
      <LazyPageBlocksQuoteUIAuthor
        :author-name="$prismic.asText(authorName)"
        :email="email"
        :linkedin-link="linkedinLink"
        :portrait-author="portraitAuthor"
        :quotation-design="quotationDesign"
        :color-theme="colorTheme"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '@/assets/styles/slices/quteslice';
@import '@/assets/styles/colorClasses/colors';

.post-quote {
  &.text--gray {
    :deep(.case_blockquote),
    :deep(p) {
      color: $border-color--grey-20-percent;
      margin-bottom: 24px;
    }
  }
}
</style>
