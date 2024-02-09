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
} = new TechAndToolsCards(slice, 1, 'one')
</script>
<template>
  <section
    ref="sectionRef"
    :class="`technologies--${colorTheme}`"
    class="technologies"
  >
    <div
      :class="{'container--post': isPostPage}"
      class="container"
    >
      <div
        :class="{'one-big-cards--post': isPostPage}"
        class="one-big-cards"
      >
        <LazyTechAndToolsUIBigCard
          v-for="(card, i) in bigCards"
          :key="card.title + i"
          v-bind="card"
        />
        <LazyTechAndToolsUILittleCard
          v-for="(card, i) in littleCards"
          :key="card.title + i"
          v-bind="card"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import './styles/techAndToolsMainStyles';

.one-big-cards {
  margin-bottom: 20px;
  @include grid(repeat(10, 1fr), auto, 20px, 20px);
  @media screen and (max-width: 1170px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 15px;
  }

  &--post {
    margin-top: 20px;
  }

  @media screen and (max-width: 1214px) {
    :deep(.technologies__little-card) {
      min-width: auto;
    }
  }

  @media screen and (min-width: 1170px) {
    :deep(.technologies__little-card-icon) {
      min-width: 20px;
    }

    &--post {
      :deep(.technologies__little-card-icon) {
        min-width: 35px;
      }
    }
  }
}
</style>
