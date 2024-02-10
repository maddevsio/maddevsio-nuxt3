<script setup lang="ts">
import type { GridWithAnimationOptionProps } from '~/components/GridLottie/interfaces/IGridWithAnimationOption'
import { GridWithAnimationOption } from '~/components/GridLottie/classes/GridWithAnimationOption'

interface Props {
  slice: GridWithAnimationOptionProps
}
const { slice } = defineProps<Props>()
const {
  cards,
} = new GridWithAnimationOption(slice)
</script>
<template>
  <div class="container">
    <ul class="grid-lottie__grid">
      <LazyGridLottieUICardWIthAnimationOption
        v-for="(item, i) in cards"
        :key="`${createUID(item.title)}-${i}`"
        :card="item"
      />
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.grid-lottie {
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: 1260px) {
      grid-gap: 24px;
    }

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
