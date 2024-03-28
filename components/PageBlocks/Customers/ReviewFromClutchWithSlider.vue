<script setup lang="ts">
import type { PropType } from 'vue'
import type {
  ClutchReviewsWithSliderProps,
} from '~/components/PageBlocks/Customers/interfaces/IClutchReviewsWithSlider'
import { ClutchReviewsWithSlider } from '~/components/PageBlocks/Customers/classes/ClutchReviewsWithSlider'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<ClutchReviewsWithSliderProps>,
    default: () => ({}),
  },
})
const {
  colorTheme,
  title,
} = new ClutchReviewsWithSlider(slice)
</script>
<template>
  <div :class="`clutch-reviews-with-slider clutch-reviews-with-slider--${colorTheme}`">
    <div class="container">
      <LazySharedClutchReviewsSlider
        :title="title"
        :color-theme="colorTheme"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.clutch-reviews-with-slider {
  &--black {
    background-color: $bgcolor--black;
  }

  &--white {
    background-color: $bgcolor--white-primary;
  }
}
</style>
