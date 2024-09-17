<script setup lang="ts">
import type { ImageField } from '@prismicio/types'
import type { Author } from '~/interfaces/common/commonInterfaces'

interface Props {
  uid?: string
  articleLink?: string
  cover?: ImageField | undefined
  title?: string
  description?: string
  isShowTag?: boolean
  isShowAuthor?: boolean
  tag?: string
  disableTagLink?: boolean
  author?: Author | undefined
  disableAuthorLink?: boolean
  formattedDate?: string
  readTime?: string
  colorTheme?: string
}

withDefaults(defineProps<Props>(), {
  uid: '',
  articleLink: '',
  cover: undefined,
  title: '',
  description: '',
  isShowTag: true,
  isShowAuthor: true,
  tag: '',
  disableTagLink: false,
  author: undefined,
  disableAuthorLink: false,
  formattedDate: '',
  readTime: '',
  colorTheme: 'light',
})
</script>
<template>
  <div class="article-card">
    <NuxtLink
      v-if="cover && cover.url"
      :to="articleLink"
      class="article-card__cover-wrapper"
    >
      <NuxtImg
        loading="lazy"
        provider="prismic"
        :src="cover.url.replace(/\?.*/, '?auto=format')"
        :alt="cover.alt || title"
        width="400"
        height="216"
        sizes="mobile:400px tablet:400px desktop:800px"
        class="article-card__cover"
      />
    </NuxtLink>
    <div class="article-card__body">
      <LazySharedArticleCardBodyContent
        :title="title"
        :description="description"
        :article-link="articleLink"
      />
      <LazySharedArticleTagBadge
        v-if="isShowTag"
        :tag="tag"
        :disabled="disableTagLink"
        :theme="colorTheme"
      />
      <LazySharedArticleAuthor
        v-if="isShowAuthor"
        v-bind="author"
        :disabled="disableAuthorLink"
        theme="light"
        :date="formattedDate"
        :read-time="readTime"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.article-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;

  &__cover-wrapper,
  &__body {
    width: 100%;
  }

  &__cover-wrapper {
    position: relative;
    overflow: hidden;
    padding: 0 0 58%;
    margin-bottom: 16px;
  }

  &__cover {
    display: block;
    width: 100%;
    max-width: 100%;
    height: 93%;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    object-fit: cover;
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
  }
}
</style>
