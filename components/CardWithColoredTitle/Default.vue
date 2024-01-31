<script setup lang="ts">
import { type PropType } from 'vue'
import type {
  CardWithColoredTitleProps,
} from '~/components/CardWithColoredTitle/interfaces/ICardWithColoredTitle'
import { CardWithColoredTitle } from '~/components/CardWithColoredTitle/classes/CardWithColoredTitle'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<CardWithColoredTitleProps>,
    default: () => ({}),
  },
})
const cardWithColoredTitle = new CardWithColoredTitle(slice)
</script>
<template>
  <section
    class="card-with-colored-title"
    :class="colorConverterToClass('slice-bg', cardWithColoredTitle.sliceBackgroundColor)"
  >
    <div class="container">
      <div
        v-if="cardWithColoredTitle.cards.length"
        class="card-with-colored-title__cards"
      >
        <div
          v-for="(card, index) in cardWithColoredTitle.cards"
          :key="`${card.title}-${index}`"
          class="card-with-colored-title__card"
          :class="colorConverterToClass('bg', cardWithColoredTitle.sliceBackgroundColor)"
        >
          <Component
            :is="card.titleTag || 'h3'"
            v-if="card.title"
            class="card-with-colored-title__card-title"
            :class="colorConverterToClass('text', card.titleColor)"
          >
            <span v-html="card.title.replace(/\n/g, '<br />')" />
          </Component>
          <p
            v-if="card.description"
            class="card-with-colored-title__card-description"
            :class="colorConverterToClass('text', cardWithColoredTitle.sliceBackgroundColor === 'white' ? 'black' : 'white')"
          >
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/colorClasses/colors.scss';

.card-with-colored-title {
  &__cards {
    display: grid;
    @include grid(repeat(3, 1fr), auto, 20px, 20px);

    * {
      box-sizing: border-box;
    }

    @media screen and (max-width: 1024px) {
      @include grid(repeat(2, 1fr), auto, 20px, 20px);
    }

    @media screen and (max-width: 600px) {
      @include grid(repeat(1, 1fr), auto, 20px, 20px);
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    padding: 30px 37px 24px 40px;
    border-radius: 10px;

    &-title, &-description {
      letter-spacing: -1px;
    }

    &-title {
      @include font('Inter', 30px, 900);
      line-height: 120%;
      margin-bottom: 30px;
    }

    &-description {
      @include font('Inter', 16px, 400);
      line-height: 163%;
    }

    @media screen and (max-width: 1370px) {
      &-title {
        flex-grow: 1;
      }
    }

    @media screen and (max-width: 1280px) {
      padding: 30px 40px;
    }

    @media screen and (max-width: 768px) {
      padding: 28px;
      border-radius: 4px;

      &-title {
        font-size: 24px;
        margin-bottom: 42px;
      }

      &-description {
        font-size: 14px;
      }

      &-title, &-description {
        line-height: 130%;
      }
    }

    @media screen and (max-width: 680px) {
      min-height: 154px;
      padding: 20px;

      &-title {
        letter-spacing: -0.52px;
        margin-bottom: 37px;
      }

      &-description {
        font-size: 16px;
        line-height: 150%;
        letter-spacing: -0.4px;
      }
    }
  }
}
</style>
