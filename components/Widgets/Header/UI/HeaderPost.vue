<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/client'
import type { Author } from '~/interfaces/common/commonInterfaces'
import type { IHeader } from '~/components/Widgets/Header/interfaces/IHeader'

defineProps({
  type: {
    type: String,
    default: '',
  },

  uid: {
    type: String,
    default: '',
  },

  title: {
    type: Array,
    default: () => ([]),
  },

  date: {
    type: String,
    default: '',
  },

  image: {
    type: Object as PropType<ImageField>,
    default: () => ({}),
  },

  tags: {
    type: Array,
    default: () => ([]),
  },

  paragraph: {
    type: String,
    default: '',
  },

  author: {
    type: Object as PropType<Author>,
    default: () => ({}),
  },

  link: {
    type: String,
    default: '',
  },
})

const route = useRoute()
const resetState = inject('resetState') as IHeader['resetState']
const isBlogPage = computed(() => route.fullPath.endsWith('/blog/'))
</script>
<template>
  <div class="header-post">
    <NuxtLink
      :to="link"
      class="header-post__content"
      data-testid="post-link"
      no-prefetch
      @click="resetState(link)"
    >
      <div class="header-post__text">
        <p class="header-post__text-title">
          {{ $prismic.asText(title) }}
        </p>
        <p class="header-post__text-paragraph">
          {{ paragraph }}
        </p>
      </div>
      <img
        loading="lazy"
        :src="image && image.url"
        :alt="image && image.alt"
        width="260"
        height="161"
        class="header-post__image"
      >
    </NuxtLink>
    <div class="header-post__meta">
      <LazySharedArticleAuthor
        v-bind="author"
        :date="date"
        theme="dark"
        class="header-post__meta-author"
        @click="resetState"
      />
      <LazySharedArticleTagBadge
        v-if="tags && tags.length"
        :tag="tags[0]"
        theme="dark"
        class="header-post__meta-tag"
        @click="resetState"
      />
    </div>
    <NuxtLink
      v-if="!isBlogPage"
      to="/blog/"
      class="header-post__more-btn"
      no-prefetch
      @click="resetState"
    >
      More articles
    </NuxtLink>
  </div>
</template>
<style lang="scss" scoped>
.header-post {
  a {
    color: $text-color--white-primary;
  }

  &__content {
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 1180px) {
      flex-direction: column-reverse;
    }
  }

  &__text {
    margin-right: 16px;
    @media screen and (max-width: 1180px) {
      margin-right: 0;
      margin-top: 20px;
    }
    &-title {
      @include font('Inter', 18px, 700);
      line-height: 22px;
      letter-spacing: -0.4px;
    }
    &-paragraph {
      @include font('Inter', 15px, 400);
      line-height: 24px;
      letter-spacing: -0.4px;
      margin-top: 8px;
      color: $text-color--grey-opacity-40-percent;
    }
  }

  &__image {
    border-radius: 4px;
    display: block;
    width: 260px;
    height: auto;
    object-fit: cover;
    @media screen and (max-width: 1180px) {
      width: 100%;
      height: auto;
    }
  }

  &__meta {
    margin-top: 18px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    overflow: hidden;
    @media screen and (max-width: 1180px) {
      flex-direction: column;
    }
    &-tag {
      margin-left: 20px;
      @media screen and (max-width: 1180px) {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }

  &__more-btn {
    @include font('Inter', 15px, 400);
    line-height: 25px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 4px;
    color: $text-color--white-primary;
    border: 1px solid $border-color--grey-selected;
    padding: 7px 20px;
    transition: 0.3s ease;
    &:hover {
      background-color: $bgcolor--grey-dark;
      color: $text-color--black-lighter;
    }
  }
}
</style>
