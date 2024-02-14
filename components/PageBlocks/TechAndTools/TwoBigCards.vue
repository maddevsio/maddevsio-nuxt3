<script setup lang="ts">
import type { TechAndToolsCardsProps } from '~/components/PageBlocks/TechAndTools/interfaces/ITechAndToolsCards'
import { TechAndToolsCards } from '~/components/PageBlocks/TechAndTools/classes/TechAndToolsCards'

interface Props {
  slice: TechAndToolsCardsProps
}

const { slice } = defineProps<Props>()
const {
  bigCards,
  littleCards,
  colorTheme,
  isPostPage,
} = new TechAndToolsCards(slice, 2, 'two')
</script>
<template>
  <section
    class="technologies"
    :class="`technologies--${colorTheme}`"
  >
    <div
      class="container"
      :class="{'container--post': isPostPage}"
    >
      <div
        class="two-big-cards"
        :class="{'two-big-cards--post': isPostPage}"
      >
        <div
          v-if="bigCards.length"
          class="two-big-cards__big-cards"
          :class="{
            'two-big-cards__big-cards--post': isPostPage,
            'two-big-cards__big-cards--with-little': littleCards.length,
          }"
        >
          <LazyPageBlocksTechAndToolsUIBigCard
            v-for="(card, i) in bigCards"
            :key="card.title + i"
            v-bind="card"
            :color-theme="colorTheme"
          />
        </div>
        <div
          v-if="littleCards.length"
          class="two-big-cards__little-cards"
        >
          <LazyPageBlocksTechAndToolsUILittleCard
            v-for="(card, i) in littleCards"
            :key="card.title + i"
            v-bind="card"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import 'styles/techAndToolsMainStyles';

.two-big-cards {
  &__big-cards {
    @include grid(repeat(2, 1fr), auto, 20px, 20px);

    &--with-little {
      margin-bottom: 20px;
    }

    &--post {
      @media screen and (max-width: 1024px) {
        @include grid(repeat(1, 1fr), auto, 20px, 20px);
      }
    }

    @media screen and (max-width: 830px) {
      @include grid(repeat(1, 1fr), auto, 20px, 20px);
    }
  }

  &__little-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }

  &--post {
    margin: 20px 0;
  }
}
</style>
