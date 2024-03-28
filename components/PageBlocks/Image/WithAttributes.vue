<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageWithAttributesProps } from '~/components/PageBlocks/Image/interfaces/IImageWithAttributes'
import { ImageWithAttributes } from '~/components/PageBlocks/Image/classes/ImageWithAttributes'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<ImageWithAttributesProps>,
    default: () => ({}),
  },
})

const {
  image,
  url,
  target,
  rel,
} = new ImageWithAttributes(slice)
</script>
<template>
  <div class="image-with-attributes">
    <a
      v-if="$prismic.asText(url)"
      :href="$prismic.asText(url)"
      :target="target"
      :rel="rel"
      class="image-with-attributes__link"
    >
      <NuxtImg
        v-if="image && image.url"
        provider="prismic"
        loading="lazy"
        :src="image.url"
        :alt="image.alt || 'Image'"
        width="680"
        height="170"
        sizes="mobile:450px tablet:680px desktop:680px"
        class="image-with-attributes__img"
      />
    </a>
    <div v-else>
      <NuxtImg
        v-if="image && image.url"
        provider="prismic"
        loading="lazy"
        :src="image.url"
        :alt="image.alt || 'Image'"
        width="680"
        height="170"
        sizes="mobile:450px tablet:680px desktop:680px"
        class="image-with-attributes__img"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.image-with-attributes {
  &__link {
    display: block;
    height: 100%;
  }

  &__img {
    width: 100%;
  }
}
</style>
