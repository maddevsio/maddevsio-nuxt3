<script setup lang="ts">
import type { StartScreenDefaultProps } from '~/components/PageBlocks/StartScreen/interfaces/IStartScreenDefault'
import { StartScreenDefault } from '~/components/PageBlocks/StartScreen/classes/StartScreenDefault'

interface Props {
  slice: StartScreenDefaultProps
}
const { slice } = defineProps<Props>()
const {
  gradient,
  image,
  imageOpacity,
  title,
  subtitle,
  background,
} = new StartScreenDefault(slice)
</script>
<template>
  <LazyPageBlocksStartScreenDefaultTemplate
    :background="background"
    :gradient="gradient"
    :image="image"
    :image-opacity="imageOpacity"
    :subtitle="subtitle"
    :title="title"
  />
</template>
