<script setup lang="ts">
import { DigestPostView } from '~/components/Digest/classes/Post/DigestPostView'
import { transformationDigestPostData } from '~/components/Digest/helpers/transformationDigestPostData'
import type { DigestPostComponents } from '~/components/Digest/interfaces/Post/IDigestPostView'

const props = defineProps({
  digest: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const { postComponents } = new DigestPostView(transformationDigestPostData(props.digest) as DigestPostComponents)
const { digestPostHeader, digestPostContent, digestPostFooter } = postComponents
</script>

<template>
  <div class="digest">
    <LazyDigestPostHeader
      :title="digestPostHeader.title"
      :subtitle="digestPostHeader.subtitle"
      :featured-image="digestPostHeader.featuredImage"
      :prev-digest-url="digestPostHeader.prevDigestUrl"
      :next-digest-url="digestPostHeader.nextDigestUrl"
    />
    <LazyDigestPostContent
      :slices="digestPostContent.slices"
      :digest-post-sidebar="digestPostContent.digestPostSidebar"
    />
    <DigestPostFooter
      v-if="digestPostFooter.uid"
      :uid="digestPostFooter.uid"
      :date="digestPostFooter.date"
      :swiper-options="digestPostFooter.swiperOptions"
    />
  </div>
</template>

<style lang="scss" scoped>
.digest {
  overflow: initial;

  &__background {
    background-color: $bgcolor--black;
    height: 683px;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  @media screen and (max-width: 830px) {
    background-color: $bgcolor--white-primary;
  }
}
</style>
