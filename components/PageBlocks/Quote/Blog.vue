<script setup lang="ts">
import type { PropType } from 'vue'
import type { QuoteBlogProps } from '~/components/PageBlocks/Quote/interfaces/IQuoteBlog'
import { QuoteBlog } from '~/components/PageBlocks/Quote/classes/QuoteBlog'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<QuoteBlogProps>,
    default: () => ({}),
  },
})

const {
  quotationDesign,
  quote,
  portraitAuthor,
  nameOfTheAuthor,
  email,
  linkedinLink,
} = new QuoteBlog(slice)
</script>
<template>
  <div class="post-part single">
    <blockquote
      v-if="quotationDesign === 'border'"
      class="block-quotation"
      v-html="$prismic.asHTML(quote)"
    />
    <LazyPageBlocksQuoteUIText
      v-if="quotationDesign === 'brackets'"
    >
      {{ $prismic.asText(quote) }}
    </LazyPageBlocksQuoteUIText>
    <LazyPageBlocksQuoteUIAuthor
      v-if="portraitAuthor.url || $prismic.asText(nameOfTheAuthor)"
      :author-name="$prismic.asText(nameOfTheAuthor)"
      :email="email"
      :linkedin-link="linkedinLink"
      :portrait-author="portraitAuthor"
      :quotation-design="quotationDesign"
    />
  </div>
</template>
<style lang="scss" scoped>
.quote-slice {
  background-color: $bgcolor--white-primary;
}

.block-quotation {
  @include font('Inter', 17px, 400);
  display: inline-block;
  font-style: italic;
  line-height: 28px;
  margin: 24px 0;
  color: $text-color--black-oil;
  border-left: 2px solid $border-color--red;
  padding-left: 35px;

  :deep(p) {
    margin-bottom: 28px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.block-citation {
  display: inline-block;
  font-style: italic;
  border-left: solid #b4b4b4 4px;
}

:deep(.post-quote) {
  margin-left: 0;
  margin-right: 0;
}
</style>
