<script setup lang="ts">
import type { QuoteProps } from '~/components/Quote/interfaces/IQuote'
import { Quote } from '~/components/Quote/classes/Quote'

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
      <LazyQuoteUIText
        v-if="quotationDesign === 'brackets'"
        :class="`post-quote ${colorTheme.textColor}`"
      >
        {{ $prismic.asText(quote) }}
      </LazyQuoteUIText>
      <blockquote
        v-else
        :class="`block-quotation ${colorTheme.textColor}`"
        v-html="$prismic.asHTML(quote)"
      />
      <div
        v-if="portraitAuthor.url || authorName"
        :class="`p-${quotationDesign || 'border'}`"
        class="author"
      >
        <div
          v-if="portraitAuthor.url"
          class="author__image"
        >
          <NuxtImg
            v-if="portraitAuthor.url"
            provider="prismic"
            loading="lazy"
            :src="portraitAuthor.url.replace('compress,', '')"
            :alt="portraitAuthor.alt || authorName"
            width="40"
            height="40"
          />
        </div>
        <div class="author__info">
          <div
            v-if="$prismic.asText(authorName)"
            :class="`author__name ${colorTheme.textColor}`"
          >
            {{ $prismic.asText(authorName) }}
          </div>
          <hr
            v-if="email || linkedinLink"
            class="author__divider"
          >
          <LazySharedUIAuthorSocialList
            :email="email"
            :linkedin-link="linkedinLink"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '../../assets/styles/slices/quteslice';
@import '../../assets/styles/colorClasses/colors';

.text--gray {
  :deep(p) {
    color: $text-color--grey-opacity-40-percent;
  }
}

.author__name {
  &.text--gray {
    color: $border-color--grey-20-percent;
  }
}

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
