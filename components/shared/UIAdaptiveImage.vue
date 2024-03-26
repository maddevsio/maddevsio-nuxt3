<script setup lang="ts">
import type { PropType } from 'vue'

interface SourcePaths {
  desktop?: string
  laptop?: string
  tablet?: string
  mobile?: string
}

const props = defineProps({
  sourcePaths: {
    type: Object as PropType<SourcePaths>,
    default: () => ({}),
  },

  width: {
    type: Number,
    default: 1920,
  },

  height: {
    type: Number,
    default: 600,
  },

  alt: {
    type: String,
    default: '',
  },
})

type WidthMapType = {
  [key: string]: string
}

const widthMap: WidthMapType = {
  desktop: '2400w',
  laptop: '1200w',
  tablet: '768w',
  mobile: '400w',
}

const { $getMediaFromS3 } = useMediaFromS3()
const src = computed(() => {
  return `${ $getMediaFromS3(props.sourcePaths?.desktop as string) } ${ widthMap.desktop }`
})

const srcSet = computed(() => {
  const transformedObj: Record<string, string | null> = {}
  if (!props.sourcePaths && Object.keys(props.sourcePaths).length) { return '' }
  for (const key in props.sourcePaths) {
    const sourcePath = props.sourcePaths[key as keyof SourcePaths] ?? 'desktop';
    transformedObj[key] = `${ $getMediaFromS3(sourcePath) } ${ widthMap[key] }`
  }
  return Object.values(transformedObj).toString()
})
</script>

<template>
  <img
    :src="src"
    :srcset="srcSet"
    :alt="alt"
    sizes="(max-width: 800px) 380px, (max-width: 1200px) 512px, 100vw"
    :width="width"
    :height="height"
    class="image-background"
    loading="lazy"
  >
</template>

<style lang="scss" scoped>
.image-background {
    display: block;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
