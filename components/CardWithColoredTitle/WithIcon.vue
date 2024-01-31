<script setup lang="ts">
import type { PropType } from 'vue'
import type {
  CardWithColoredTitleAndIconProps,
} from '~/components/CardWithColoredTitle/interfaces/ICardWithColoredTitleAndIcon'
import { CardWithColoredTitleAndIcon } from '~/components/CardWithColoredTitle/classes/CardWithColoredTitleAndIcon'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<CardWithColoredTitleAndIconProps>,
    default: () => ({}),
  },
})
const cardWithColoreTitleAndIcon = new CardWithColoredTitleAndIcon(slice)
</script>
<template>
  <div
    class="card-with-colored-title-and-icon"
    :class="cardWithColoreTitleAndIcon.backgroundColor"
  >
    <div class="container">
      <div class="card-with-colored-title-and-icon__cards">
        <LazySharedColoredTitleAndIconCard
          v-for="(card, idx) in cardWithColoreTitleAndIcon.cards"
          :key="`card-with-colored-title-and-icon__card--${idx}`"
          :title="card.title"
          :title-color="card.titleColor"
          :title-tag="card.titleTag"
          :description="card.description"
          :description-color="card.descriptionColor"
          :icon="card.icon"
          :card-background-color="card.cardBackgroundColor"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/styles/colorClasses/colors.scss';

.card-with-colored-title-and-icon {
  &__cards {
    @include grid(repeat(2, 1fr), auto, 40px, 20px);
  }

  @include laptop-media-query {
    &__cards {
      column-gap: 20px;
    }
  }

  @media screen and (max-width: 1210px) {
    &__cards {
      @include grid(repeat(1, 1fr), auto, 20px, 20px);
    }
  }
}
</style>
