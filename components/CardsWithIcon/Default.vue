<script setup lang="ts">
import type { CardsWithIconProps } from '~/components/CardsWithIcon/interfaces/ICardsWithIcon'
import { CardsWithIcon } from '~/components/CardsWithIcon/classes/CardsWithIcon'

interface Props {
  slice: CardsWithIconProps
}

const { slice } = defineProps<Props>()
const {
  containerSize,
  cards,
} = new CardsWithIcon(slice)
</script>
<template>
  <section class="section cards-with-icons">
    <div
      class="cards-with-icons__wrapper container"
      :style="`max-width: ${containerSize}px`"
    >
      <div
        v-for="(card, i) of cards"
        :key="i"
        class="cards-with-icons__card"
      >
        <img
          v-if="card.iconImage.url"
          loading="lazy"
          :src="card.iconImage.url"
          width="54"
          height="54"
          :alt="card.iconImage.alt || 'Icon image'"
          class="cards-with-icons__card-icon"
        >
        <div
          class="cards-with-icons__card-title"
          v-html="$prismic.asHTML(card.title)"
        />
        <p class="cards-with-icons__card-description">
          {{ card.description }}
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.cards-with-icons {
  &__wrapper {
    @include grid(repeat(3, 1fr), auto, 30px, 30px);
    @media screen and (max-width: 960px) {
      @include grid(repeat(2, 1fr), auto, 30px, 30px);
    }
    @media screen and (max-width: 540px) {
      @include grid(repeat(1, 1fr), auto, 0, 30px);
    }
  }
  &__card {
    background-color: $bgcolor--black-pale;
    padding: 56px 54px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media screen and (max-width: 1024px) {
      padding: 24px;
    }
  }
  &__card-title {
    margin-bottom: 21px;
    color: $text-color--white-primary;
    line-height: 32.5px;
    letter-spacing: -0.013em;
    word-break: break-word;

    :deep(h1),
    :deep(h2),
    :deep(h3),
    :deep(h4),
    :deep(h5),
    :deep(h6) {
      @include font("Inter", 28px, 600);
      @media screen and (max-width: 1024px) {
        @include font("Inter", 21px, 600);
        line-height: 24px;
        letter-spacing: -1px;
      }
    }
  }
  &__card-description {
    @include font("Inter", 16px, 400);
    line-height: 24px;
    letter-spacing: -0.4px;
    color: $text-color--grey-20-percent;
  }
  &__card-icon {
    width: 54px;
    height: 54px;
    margin-bottom: 36px;
  }
}
</style>
