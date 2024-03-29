<script setup lang="ts">
import type { PropType } from 'vue'

interface ClutchReviewsWithSliderProps {
  primary: {
    colorTheme: string
    title: string
  }
}

const { slice } = defineProps({
  slice: {
    type: Object as PropType<ClutchReviewsWithSliderProps>,
    default: () => ({}),
  },
})

const colorTheme = slice.primary.colorTheme || 'black'
const title = slice.primary.title || 'Mad Devs\' Reviews on Clutch'
</script>
<template>
  <div :class="`clutch-reviews-with-slider clutch-reviews-with-slider--${colorTheme}`">
    <div class="container">
      <SharedClutchReviewsSlider
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
