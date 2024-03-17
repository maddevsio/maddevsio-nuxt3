<script setup lang="ts">
import type { PropType } from 'vue'
import type { IGlossaryWord } from '~/components/Glossary/interfaces/IGlossaryWord'

defineProps({
  word: {
    type: Object as PropType<IGlossaryWord>,
    default: () => ({}),
  },

  colorTheme: {
    type: String,
    default: 'black',
  },
})
</script>
<template>
  <NuxtLink
    :to="`/glossary/${word.wordUID}/`"
    :class="`glossary-word-card glossary-word-card--${colorTheme}`"
  >
    <h3 class="glossary-word-card__title">
      {{ word.wordTitle }}
    </h3>
    <span class="glossary-word-card__arrow" />
  </NuxtLink>
</template>
<style lang="scss" scoped>
.glossary-word-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 166px;
  padding: 32px 32px 18px 32px;
  border-radius: 4px;

  &--black {
    background-color: $bgcolor--black-pale;
    color: $text-color--white-primary;
    .glossary-word-card__arrow {
      @include arrow-in-circle(28px, 9px, $border-color--grey-selected);
      align-self: flex-end;
    }

    &:hover {
      .glossary-word-card__arrow {
        border-color: $border-color--white;

        &::before {
          border-top-color: $border-color--white;
          border-left-color: $border-color--white;
        }
      }
    }
  }

  &--white {
    background-color: $bgcolor--white;
    color: $text-color--quote-box;
    .glossary-word-card__arrow {
      @include arrow-in-circle(28px, 9px, $border-color--grey-selected);
      align-self: flex-end;
    }

    &:hover {
      background-color: $bgcolor--grey-light;
    }
  }

  &__title {
    @include font('Inter', 24px, 700);
    line-height: 150%;
    color: inherit;
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: -1px;
  }

  &__title, &__arrow, &__arrow::before {
    transition: 0.2s ease;
  }

  &:hover {
    .glossary-word-card__title {
      color: $text-color--red;
    }
  }

  @media screen and (max-width: 1280px) {
    height: 142px;
    padding: 20px 20px 12px 20px;
    &__title {
      -webkit-line-clamp: 2;
    }
  }

  @media screen and (max-width: 960px) {
    flex-direction: row;
    align-self: center;
    height: 100px;
    padding: 20px;

    &__title {
      font-size: 20px;
      margin-bottom: 0;
    }

    &--black, &--white {
      .glossary-word-card__arrow {
        align-self: center;
        margin-left: 10px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    height: 62px;
    padding: 10px 20px;
    &__title {
      font-size: 18px;
      line-height: 185%;
      -webkit-line-clamp: 1;
    }

    &--black, &--white {
      .glossary-word-card__arrow {
        width: 20px;
        min-width: 20px;
        height: 20px;
        min-height: 20px;

        &::before {
          width: 6px;
          min-width: 6px;
          height: 6px;
        }
      }
    }
  }
}
</style>
