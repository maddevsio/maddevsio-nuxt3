<script setup lang="ts">
import type { TextWithBorderProps } from '~/components/PageBlocks/TextWithBorder/interfaces/ITextWithBorder'
import { TextWithBorder } from '~/components/PageBlocks/TextWithBorder/classes/TextWithBorder'

interface Props {
  slice: TextWithBorderProps
}
const { slice } = defineProps<Props>()
const { title, description } = new TextWithBorder(slice)
</script>

<template>
  <div class="text-with-border">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.text-with-border {
  padding-left: 24px;
  border-left: 4px solid $bgcolor--red;
}
</style>
