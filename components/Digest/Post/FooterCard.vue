<script setup lang="ts">
import type { ImageField } from '@prismicio/client'
import type { PropType } from 'vue'

const { description } = defineProps({
  image: {
    type: Object as PropType<ImageField>,
    required: true,
    default: () => ({}),
  },

  title: {
    type: String,
    required: true,
    default: '',
  },

  description: {
    type: String,
    required: true,
    default: '',
  },

  uid: {
    type: String,
    required: true,
    default: '',
  },
})

const shortDescription = computed(() => textEllipsis(description, { limit: 60 }))
</script>

<template>
  <NuxtLink
    :to="`/digest/${uid}/`"
    class="digest-footer-card"
  >
    <div class="digest-footer-card__image-wrapper">
      <NuxtImg
        v-if="image.url"
        provider="prismic"
        loading="lazy"
        :src="image.url"
        :alt="image.alt || 'Digest cover'"
        width="252"
        height="136.92"
        class="digest-footer-card__image"
      />
    </div>
    <h3
      class="digest-footer-card__title"
    >
      {{ title }}
    </h3>
    <p
      class="digest-footer-card__description"
    >
      {{ shortDescription }}
    </p>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.digest-footer-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__image-wrapper {
    margin-bottom: 24px;
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  &__title {
    @include font('Inter', 21px, 700);
    line-height: 130%;
    color: $text-color--quote-box;
    margin-bottom: 16px;
  }

  &__description {
    @include font('Inter', 16px, 400);
    line-height: 26px;
    color: $text-color--grey-opacity-40-percent;
    margin-top: auto;
  }
}
</style>
