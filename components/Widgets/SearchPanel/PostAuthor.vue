<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/client'

const props = defineProps({
  uid: {
    type: String,
    default: '',
  },

  name: {
    type: String,
    default: '',
  },

  position: {
    type: String,
    default: '',
  },

  photo: {
    type: Object as PropType<ImageField>,
    default: () => ({
      url: '',
      alt: '',
    }),
  },
})
const authorLink = linkResolver({ type: 'author', uid: props.uid })
</script>
<template>
  <NuxtLink
    :to="authorLink"
    class="search-panel__result-author"
  >
    <img
      :src="photo.url"
      :alt="name"
      width="29"
      height="29"
      class="search-panel__result-author-photo"
    >
    <div class="search-panel__result-author-info">
      <h6 class="search-panel__result-author-name">
        {{ name }}
      </h6>
      <p class="search-panel__result-author-position">
        {{ position }}
      </p>
    </div>
  </NuxtLink>
</template>
<style lang="scss" scoped>
.search-panel {
  &__result-author {
    margin-top: auto;
    display: flex;
    align-items: center;
    column-gap: 8px;

    @media screen and (max-width: 910px) {
      margin-top: unset;
    }
  }

  &__result-author-info {
    overflow: hidden;
  }

  &__result-author-photo {
    border-radius: 5px;
  }

  &__result-author-name,
  &__result-author-position {
    @include font('Inter', 10px, 400);
    line-height: 150%;
    color: $text-color--chinese-black;
  }

  &__result-author-position {
    margin-top: 4px;
    color: $text-color--grey-matterhorn;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
