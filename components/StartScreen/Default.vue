<script setup lang="ts">
import type { StartScreenDefaultProps } from '~/components/StartScreen/interfaces/IStartScreenDefault'
import { StartScreenDefault } from '~/components/StartScreen/classes/StartScreenDefault'

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
  <LazyStartScreenDefaultTemplate
    :background="background"
    :gradient="gradient"
    :image="image"
    :image-opacity="imageOpacity"
    :subtitle="subtitle"
    :title="title"
  />
</template>
