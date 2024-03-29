<script setup lang="ts">
import type { ImageField } from '@prismicio/types'

interface Props {
  slice: {
    primary: {
      imageOpacity: string
      background: string
      gradientColor: string
      title: string
      subtitle: string
      image: ImageField
    }
  }
}
const { slice } = defineProps<Props>()

const imageOpacity = Number(slice.primary.imageOpacity) || 0.8
const image = slice.primary.image
const background = setSliceBackground(slice.primary.background || 'black')
const gradient = setSliceGradient(slice.primary.gradientColor)
const title = slice.primary.title
const subtitle = slice.primary.subtitle
</script>
<template>
  <PageBlocksStartScreenDefaultTemplate
    :background="background"
    :gradient="gradient"
    :image="image"
    :image-opacity="imageOpacity"
    :subtitle="subtitle"
    :title="title"
  />
</template>
