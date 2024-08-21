<script setup lang="ts">
import { KeyPointCardDefault } from '~/components/PageBlocks/KeyPointCard/classes/KeyPointCardDefault'
import type { KeyPointCardProps } from '~/components/PageBlocks/KeyPointCard/interfaces/IKeyPointCardDefault'

interface Props {
  slice: KeyPointCardProps
}
const { slice } = defineProps<Props>()
const { title, description } = new KeyPointCardDefault(slice)
</script>

<template>
  <div class="key-point-card">
    <h2 class="key-point-card__title">
      {{ title }}
    </h2>
    <p class="key-point-card__description">
      {{ description }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.key-point-card {
  padding: 20px;
  border-radius: 10px;
  background-color: $bgcolor--grey-light;
  margin: 30px 0 50px;

  &__title {
    font-size: 26px;
    margin: 0 0 15px;
  }

  &__description {
    margin: 0;
  }
}
</style>
