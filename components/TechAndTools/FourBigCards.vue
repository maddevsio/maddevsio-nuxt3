<script setup lang="ts">
import type { TechAndToolsCardsProps } from '~/components/TechAndTools/interfaces/ITechAndToolsCards'
import { TechAndToolsCards } from '~/components/TechAndTools/classes/TechAndToolsCards'

interface Props {
  slice: TechAndToolsCardsProps
}

const { slice } = defineProps<Props>()
const {
  bigCards,
  littleCards,
  colorTheme,
  isPostPage,
} = new TechAndToolsCards(slice, 4, 'four')
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
      <div class="four-big-cards">
        <div
          v-if="bigCards.length"
          class="four-big-cards__big-cards"
          :class="{'four-big-cards__big-cards--with-little': littleCards.length}"
        >
          <LazyTechAndToolsUIBigCard
            v-for="(card, i) in bigCards"
            :key="card.title + i"
            v-bind="card"
          />
        </div>
        <div
          v-if="littleCards.length"
          class="four-big-cards__little-cards"
        >
          <LazyTechAndToolsUILittleCard
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
@import './styles/techAndToolsMainStyles';

.four-big-cards {
  &__big-cards {
    @include grid(repeat(4, 1fr), auto, 20px, 20px);

    &--with-little {
      margin-bottom: 20px;
    }

    @media screen and (max-width: 1024px) {
      @include grid(repeat(2, 1fr), auto, 20px, 20px);
    }
    @media screen and (max-width: 604px) {
      @include grid(repeat(1, 1fr), auto, 20px, 20px);
    }
  }

  &__little-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
}
</style>
