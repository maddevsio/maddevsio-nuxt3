<script setup lang="ts">
import type { ImageSliceProps } from '~/components/Image/interfaces/IImage'
import { ImageSlice } from '~/components/Image/classes/ImageSlice'

interface Props {
  slice: ImageSliceProps
}
const { slice } = defineProps<Props>()
const {
  backgroundColor,
  image,
} = new ImageSlice(slice)
</script>
<template>
  <section
    class="image-slice"
    :style="{ backgroundColor }"
  >
    <div
      class="container"
    >
      <NuxtImg
        provider="prismic"
        loading="lazy"
        :style="{ backgroundColor }"
        :src="image.url"
        :alt="image.alt"
        :width="image.dimensions!.width"
        :height="image.dimensions!.height"
        sizes="mobile:380px tablet:512px desktop:1240px"
        class="image-slice__image"
        data-testid="test-picture-img"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.image-slice {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__image{
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>
