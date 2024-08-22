<script setup lang="ts">
import {
  type TextWithBorderDefaultProps,
} from '~/components/PageBlocks/TextWithBorder/interfaces/ITextWithBorderDefault'
import { TextWithBorderDefault } from '~/components/PageBlocks/TextWithBorder/classes/TextWithBorderDefault'

interface Props {
  slice: TextWithBorderDefaultProps
}
const { slice } = defineProps<Props>()
const { title, description } = new TextWithBorderDefault(slice)
</script>

<template>
  <div class="text-with-border">
    <h2 class="text-with-border__title">
      {{ title }}
    </h2>
    <p class="text-with-border__description">
      {{ description }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.text-with-border {
  padding-left: 24px;
  border-left: 4px solid $bgcolor--red;
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
