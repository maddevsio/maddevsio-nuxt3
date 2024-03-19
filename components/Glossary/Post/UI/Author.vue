<script setup lang="ts">
import type { ImageField } from '@prismicio/client'
import type { PropType } from 'vue'
interface Props {
  image: ImageField
  name: string
  position: string
  link: string
}
defineProps({
  author: {
    type: Object as PropType<Props>,
    default: () => ({}),
  },
})
</script>

<template>
  <NuxtLink
    class="glossary-post-author"
    :to="author.link"
  >
    <NuxtImg
      v-if="author.image && author.image.url"
      :src="author.image.url"
      :alt="author.name"
      class="glossary-post-author__image"
      sizes="mobile:100px tablet:100px desktop:100px"
      width="53"
      height="53"
    />
    <div class="glossary-post-author__info">
      <p class="glossary-post-author__name">
        {{ author.name }}
      </p>
      <p class="glossary-post-author__position">
        {{ author.position }}
      </p>
    </div>
  </NuxtLink>
</template>

<style lang="scss">
.glossary-post-author {
  display: flex;
  align-items: center;

  &__image {
    width: 53px;
    min-width: 53px;
    height: 53px;
    margin-right: 8px;
    border-radius: 5px;
  }

  &__name, &__position {
    @include font('Inter', 16px, 400);
    line-height: 140%;
  }

  &__name {
    color: $text-color--white-primary;
  }

  &__position {
    color: $text-color--grey-opacity-40-percent;
  }

  @media screen and (max-width: 768px) {
    &__image {
      width: 35px;
      min-width: 35px;
      height: 35px;
    }

    &__name, &__position {
      font-size: 14px;
    }
  }
}
</style>
