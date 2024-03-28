<script setup lang="ts">
import type { PropType } from 'vue'
import type { Slice } from '@prismicio/types'
import { Awards } from '~/components/PageBlocks/Awards/classes/Awards'

const props = defineProps({
  slice: {
    type: Object as PropType<Slice>,
    default: () => ({}),
  },
})

const awards = new Awards(props.slice)
</script>
<template>
  <section
    class="awards-slice"
    :style="{ backgroundColor: awards.background }"
  >
    <div class="container">
      <div class="awards-slice__cards">
        <LazyPageBlocksAwardsBigCard
          v-if="awards.bigCard"
          :image="awards.bigCard.image"
          :description="awards.bigCard.description"
          :color-theme="awards.backgroundInText"
        />
        <LazyPageBlocksAwardsLittleCard
          v-for="(card, cardIdx) in awards.littleCards"
          :key="`${card.image.url}-${cardIdx}`"
          :image="card.image"
          :color-theme="awards.backgroundInText"
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
