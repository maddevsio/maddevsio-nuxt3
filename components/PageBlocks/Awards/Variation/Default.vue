<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/types'
export interface AwardsProps {
  items: {
    isBig: boolean
    image: ImageField
    description: string
  }[]
  primary: {
    background: string
  }
}
const { slice } = defineProps({
  slice: {
    type: Object as PropType<AwardsProps>,
    default: () => ({}),
  },
})

const bigCard = slice.items.find(card => card.isBig)
const littleCards = slice.items.filter(card => !card.isBig)
const background = setSliceBackground(slice.primary.background)
const backgroundInText = slice.primary.background
</script>

<template>
  <section
    class="awards-slice"
    :style="{ backgroundColor: background }"
  >
    <div class="container">
      <div class="awards-slice__cards">
        <LazyPageBlocksAwardsBigCard
          v-if="bigCard"
          :image="bigCard.image"
          :description="bigCard.description"
          :color-theme="backgroundInText"
        />
        <LazyPageBlocksAwardsLittleCard
          v-for="(card, cardIdx) in littleCards"
          :key="`${card.image.url}-${cardIdx}`"
          :image="card.image"
          :color-theme="backgroundInText"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.awards-slice {
  &__cards {
    @include grid(repeat(6, 1fr), auto, 20px, 20px);

    @media screen and (max-width: 1200px), screen and (max-width: 1420px) and (-webkit-min-device-pixel-ratio: 2)  {
      @include grid(repeat(4, 1fr), auto, 20px, 20px);
    }

    @media screen and (max-width: 660px) {
      @include grid(repeat(2, 1fr), auto, 20px, 20px);
    }
  }
}
</style>
