<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'
import type { PropType } from 'vue'
import type { ITransformedQuestion } from '~/components/PageBlocks/Accordion/interfaces/IAccordion'

const props = defineProps({
  questions: {
    type: Array as PropType<ITransformedQuestion[]>,
    default: () => [],
  },
})
const prismic = usePrismic()
const getID = (text: RichTextField) => prismic.asText(text)
  .replace(/ /g, '-')
  .toLowerCase()

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: `{"@context": "https://schema.org","@type": "FAQPage","mainEntity": [${ props.questions.map(item => `{"@type": "Question","name": "${ prismic.asText(item.question).replace(/"/g, '\\"') }","acceptedAnswer": {"@type": "Answer","text": "${ prismic.asText(item.answer).replace(/"/g, '\\"') }"}}`) }]}`,
  }],
})
</script>
<template>
  <div>
    <LazySharedUIAccordion
      v-for="(faq, faqIndex) in questions"
      :key="`${getID(faq.question)}-${faqIndex}`"
      :use-default="false"
      is-prismic
    >
      <template
        #custom="{ showAnswer, expanded }"
      >
        <div
          class="accordion-for-post__wrapper"
        >
          <Component
            :is="faq.questionTag"
            :id="getID(faq.question)"
            :class="{ 'accordion-for-post__question--active': expanded === $prismic.asText(faq.question) }"
            class="accordion-for-post__question"
            @click="showAnswer($prismic.asText(faq.question))"
          >
            <span class="accordion-for-post__question-text">{{ $prismic.asText(faq.question) }}</span>
            <span
              :class="{ 'accordion-for-post__question-icon-wrapper--active': expanded === $prismic.asText(faq.question) }"
              class="accordion-for-post__question-icon-wrapper"
            >
              <svg
                fill="none"
                height="6"
                viewBox="0 0 11 6"
                width="11"
                xmlns="http://www.w3.org/2000/svg"
                class="accordion-for-post__question-icon"
              >
                <path
                  clip-rule="evenodd"
                  d="M0.5 1.09905L1.62126 0L5.5 3.80191L9.37874 0L10.5 1.09905L5.5 6L0.5 1.09905Z"
                  fill="#CFCFD0"
                  fill-rule="evenodd"
                  class="accordion-for-post__question-icon-path"
                />
              </svg>
            </span>
          </Component>
          <LazySharedUITransitionHeight :duration="200">
            <div
              v-show="expanded"
              class="accordion-for-post__answer-wrapper"
            >
              <div
                :id="getID(faq.answer)"
                class="accordion-for-post__answer"
                v-html="$prismic.asHTML(faq.answer)"
              />
            </div>
          </LazySharedUITransitionHeight>
        </div>
      </template>
    </LazySharedUIAccordion>
  </div>
</template>
<style lang="scss" scoped>
.accordion-for-post {
  &__wrapper {
    margin-bottom: 48px;
    padding-bottom: 32px;
    border-bottom: 1px solid $border-color--grey-20-percent;
    @media screen and (max-width: 768px) {
      margin-bottom: 32px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  &__question {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    width: 100%;
    cursor: pointer;
    transition: 0.3s linear;

    &--active {
      color: $text-color--red !important;
    }

    &-text {
      width: 80%;
    }

    &-icon-wrapper {
      padding: 9px 7px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      border: 2px solid $border-color--grey-20-percent;
      transition: 0.3s linear;

      & .accordion-for-post__question-icon-path {
        transition: 0.3s linear;
      }

      &--active {
        border-color: $border-color--red;
        transform: rotate(180deg);

        & .accordion-for-post__question-icon-path {
          fill: $text-color--red;
        }
      }
    }
  }

  &__answer {
    &-wrapper {
      overflow: hidden;
    }
  }
}
</style>
