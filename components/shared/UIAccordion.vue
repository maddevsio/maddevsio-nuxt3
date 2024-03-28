<script setup lang="ts">
import type { RichTextField, SelectField } from '@prismicio/types'

interface Question {
  question: string
  questionTag: SelectField
  answer: RichTextField
}

interface Props {
  questions?: Question[] | null
  isPrismic: boolean
  useDefault?: boolean
}

withDefaults(defineProps<Props>(), {
  useDefault: true,
  isPrismic: true,
  questions: null,
})

const expanded = ref('')
const showAnswer = (question: string) => {
  expanded.value = question === expanded.value ? '' : question
}
</script>
<template>
  <slot
    v-if="!useDefault"
    name="custom"
    :show-answer="showAnswer"
    :expanded="expanded"
  />
  <div v-if="useDefault">
    <div
      v-for="(item, index) in questions"
      :key="item.question.split(' ').join('-')"
      class="accordion"
    >
      <div class="accordion__question-wrapper">
        <Component :is="item.questionTag || 'h4'">
          <button
            :id="item.question.split(' ').join('-')"
            ref="accordionQuestionRef"
            :aria-expanded="Boolean(expanded)"
            :aria-controls="`section-${index}`"
            class="accordion__question"
            :class="{ 'accordion__question--active': expanded === item.question }"
            data-testid="accordionBtn"
            @click="showAnswer(item.question)"
          >
            <span class="accordion__question-text">{{ item.question }}</span>
            <span
              ref="accordionIconRef"
              class="accordion__question-icon"
              :class="{ 'accordion__question-icon--active': expanded === item.question }"
            >
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.5 1.09905L1.62126 0L5.5 3.80191L9.37874 0L10.5 1.09905L5.5 6L0.5 1.09905Z"
                  fill="#CFCFD0"
                />
              </svg>
            </span>
          </button>
        </Component>
      </div>
      <LazySharedUITransitionHeight :duration="200">
        <div
          v-show="expanded === item.question"
          :id="`section-${index}`"
          ref="accordionAnswer"
          :aria-labelledby="`${index}`"
          class="accordion__answer"
        >
          <div
            v-if="isPrismic"
            class="prismic-html-tags"
            v-html="$prismic.asHTML(item.answer)"
          />
          <slot v-else />
        </div>
      </LazySharedUITransitionHeight>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.accordion {
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid $border-color--grey-20-percent;
  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
  }
  &:last-child {
    margin-bottom: 0;
  }

  &__question {
    @include font('Inter', 26px, 400);
    line-height: 34px;
    letter-spacing: -1px;
    color: $bgcolor--chinese-black;
    transition: 0.3s linear;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    width: 100%;
    padding: 0;
    @media screen and (max-width: 768px) {
      font-size: 21px;
      line-height: 30px;
    }

    @media screen and (max-width: 580px) {
      align-items: flex-start;
    }

    &-wrapper {
      margin-bottom: 16px;
    }

    &--active {
      color: $text-color--red;
    }
    &-text {
      @media screen and (max-width: 580px) {
        width: 70%;
      }
    }
    &-icon {
      padding: 9px 7px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      border: 2px solid $border-color--grey-20-percent;
      transition: 0.3s linear;
      svg path {
        transition: 0.3s linear;
      }
      &--active {
        border-color: $border-color--red;
        transform: rotate(180deg);
        svg path {
          fill: $text-color--red;
        }
      }
    }
  }

  .prismic-html-tags {
    :deep(a) {
      text-decoration: underline;
      color: inherit;
      font-family: inherit;
      font-weight: inherit;
    }

    :deep(img) {
      max-width: 100%;
      height: auto;
      vertical-align: middle;
    }

    :deep(hr) {
      border-bottom: none;
      border-left: none;
      border-right: none;
      border-top: 1px solid $border-color--grey-20-percent;
      margin: 48px 0;
    }

    :deep(strong) {
      font-weight: 700;
    }

    :deep(ul),
    :deep(ol) {
      padding-left: 18px;
    }

    :deep(ul) {
      list-style: disc;
    }

    :deep(ol) {
      list-style: decimal;
    }

    :deep(p),
    :deep(li) {
      font-size: 17px;
      line-height: 28px;
      letter-spacing: -0.02em;
    }

    :deep(li) {
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }

    :deep(p) {
      margin: 12px 0;
      & + p {
        margin-top: 24px;
      }
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }

    :deep(pre) {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      font-weight: 400;
      padding: 20px;
      overflow: auto;
      background: $bgcolor--grey-light;
      border-radius: 2px;
      line-height: 24px;
    }
  }
}
</style>
