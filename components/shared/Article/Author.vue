<script setup lang="ts">
import type { ImageField } from '@prismicio/types'

interface Props {
  uid: string
  disabled?: boolean
  name: string
  position: string
  date: string
  image: ImageField | undefined
  theme: string
  readTime?: string
}

const { uid, name } = withDefaults(defineProps<Props>(), {
  uid: '',
  disabled: false,
  name: '',
  position: '',
  date: '',
  image: undefined,
  theme: 'light',
  readTime: '',
})

const link = linkResolver({ type: 'author', uid })
const shortName = name.substr(0, 100)
</script>
<template>
  <NuxtLink
    v-if="name"
    :event="disabled ? '' : 'click'"
    :to="link"
    :class="`post-author--${theme}-theme`"
    class="post-author"
  >
    <div
      v-if="image"
      class="post-author__image"
    >
      <NuxtImg
        provider="prismic"
        loading="lazy"
        :src="image.url"
        :alt="image.alt || 'Image'"
        width="70"
        height="70"
      />
    </div>
    <div
      v-else
      class="post-author__none-image"
    />
    <div class="post-author__info">
      <p
        class="post-author__name"
        :title="name"
      >
        {{ shortName }}
        <span
          class="post-author__position"
          :title="position"
        >
          {{ position }}
        </span>
      </p>
      <span
        v-if="date"
        class="post-author__date"
      >
        {{ date }} <span v-if="readTime" /> {{ readTime || '' }}
      </span>
    </div>
  </NuxtLink>
</template>
<style scoped lang="scss">
.post-author {
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  &--dark-theme {
    .post-author {
      &__image,
      &__none-image {
        background-color: $bgcolor--black-light;
      }
      &__name {
        color: $text-color--white;
        display: flex;
        flex-direction: column;
      }
    }
  }
  &--light-theme {
    .post-author {
      &__image,
      &__none-image {
        background-color: $bgcolor--silver;
      }
      &__name {
        color: $text-color--black;
        display: flex;
        flex-direction: column;
      }
    }
  }

  &__image,
  &__none-image {
    &,
    img {
      display: block;
      position: relative;
      width: 70px;
      min-width: 70px;
      height: 70px;
      border-radius: 9.4px;
    }
  }

  &__info {
    max-width: 100%;
    margin-left: 9px;
    overflow: hidden;
  }

  &__name,
  &__position {
    @include font('Inter', 15px, 400);
    display: block;
    line-height: 166%;
    letter-spacing: -0.1px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__divider {
    color: $text-color--ruddy;
  }

  &__position {
    display: inline;
    color: $text-color--grey-matterhorn;
  }

  &__date {
    color: $text-color--grey-pale;
    font-size: 12px;
    line-height: 166%;
    display: flex;
    gap: 12px;
    align-items: center;

    span {
      width: 4px;
      height: 4px;
      display: inline-block;
      border-radius: 50%;
      background: $bgcolor--grey-selected;
    }
  }
}
</style>
