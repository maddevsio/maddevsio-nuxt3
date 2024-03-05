<script setup lang="ts">
defineProps({
  mainTitle: {
    type: String,
    default: '',
  },

  mainTitleBig: {
    type: Boolean,
    default: true,
  },

  mainTitleTag: {
    type: String,
    default: 'h2',
  },

  mainTitleDescriptions: {
    type: Array,
    default: () => [],
  },

  solutionDescriptions: {
    type: Array,
    default: () => [],
  },

  haveSolutionList: {
    type: Boolean,
    default: false,
  },

  solutionList: {
    type: Array,
    default: () => [],
  },

  withResultsBlock: {
    type: Boolean,
    default: false,
  },

  quoteText: {
    type: String,
    default: '',
  },

  quoteAuthor: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="challenge-wrapper">
    <div
      class="container_regular"
    >
      <component
        :is="mainTitleTag"
        :class="`${mainTitleBig ? 'case_title_h2' : 'case_title_h4'} m-12_bottom`"
      >
        {{ mainTitle }}
      </component>
      <LazyCaseStudiesUITextParagraph
        v-for="(description, index) in mainTitleDescriptions"
        :key="`${description}-${index}`"
        :class="`${(index + 1) === mainTitleDescriptions.length ? 'm-48_bottom media-m-24_bottom' : 'm-12_bottom'}`"
      >
        {{ description }}
      </LazyCaseStudiesUITextParagraph>
      <h4 class="case_title_h4 m-12_bottom">
        Solution
      </h4>
      <LazyCaseStudiesUITextParagraph
        v-for="(description, index) in solutionDescriptions"
        :key="`${description}-${index}`"
        :class="`${(index + 1) === solutionDescriptions.length && !haveSolutionList ? 'm-48_bottom media-m-24_bottom' : 'm-12_bottom'}`"
      >
        {{ description }}
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots
        v-if="haveSolutionList"
        class="challenge-wrapper__list m-48_bottom media-m-24_bottom"
      >
        <LazyCaseStudiesUIListDotsItem
          v-for="(item, index) in solutionList"
          :key="`${item}-${index}`"
          class="challenge-wrapper__list-item"
        >
          {{ item }}
        </LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
      <LazyCaseStudiesMobileBankingUIResultsWithQuoteBox
        v-if="withResultsBlock"
        :quote-text="quoteText"
        :quote-author="quoteAuthor"
      />
    </div>
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.challenge-wrapper {
  &__list-item {
    margin-bottom: 0;

    &::before {
      left: 9px;
    }
  }
}
</style>
