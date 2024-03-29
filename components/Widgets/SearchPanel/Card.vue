<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/client'

const props = defineProps({
  uid: {
    type: String,
    default: '',
  },

  postType: {
    type: String,
    default: '',
  },

  featuredImage: {
    type: Object as PropType<ImageField>,
    default: () => ({
      url: '',
      alt: '',
    }),
  },

  postTitle: {
    type: String,
    default: '',
  },

  postCreatedDate: {
    type: String,
    default: '',
  },

  authorPhoto: {
    type: Object as PropType<ImageField>,
    default: () => ({
      url: '',
      alt: '',
    }),
  },

  authorName: {
    type: String,
    default: '',
  },

  authorPosition: {
    type: String,
    default: '',
  },

  authorUid: {
    type: String,
    default: '',
  },

  post: {
    type: Object,
    default: () => ({}),
  },
})

const $prismic = usePrismic()
const shortTitle = textEllipsis(props.postTitle, { limit: 45 })
const formattedDate = formatDate(props.postCreatedDate)
const postReadTime = calculateReadTime(props.post, $prismic).readTime
const articleLink = linkResolver(props.post as { isBroken?: boolean, type: string, uid: string })
</script>
<template>
  <div
    class="search-panel__result-card"
  >
    <NuxtLink
      :to="articleLink"
      no-prefetch
      class="search-panel__result-image-wrapper"
    >
      <img
        :src="featuredImage.url"
        :alt="postTitle"
        width="201"
        height="109"
        class="search-panel__result-image"
      >
    </NuxtLink>
    <div class="search-panel__result-content">
      <NuxtLink
        :to="articleLink"
        no-prefetch
        class="search-panel__result-title"
      >
        {{ shortTitle }}
      </NuxtLink>
      <div class="search-panel__result-meta">
        <p class="search-panel__result-meta-created-date">
          Created: <span>{{ formattedDate }}</span>
        </p>
        <hr class="search-panel__result-meta-divider">
        <span class="search-panel__result-meta-read-time">{{ postReadTime }}</span>
      </div>
      <LazyWidgetsSearchPanelPostAuthor
        :name="authorName"
        :position="authorPosition"
        :photo="authorPhoto"
        :uid="authorUid"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search-panel {
  &__result-card {
    width: 31%;
    display: flex;
    gap: 12px;
    box-sizing: border-box;

    @media screen and (max-width: 1405px) {
      width: 47%;
      &:nth-child(n+4) {
        display: none;
      }
    }

    @media screen and (max-width: 910px) {
      width: 65%;
      align-items: center;
      &:nth-child(n+3) {
        display: none;
      }
    }

    @media screen and (max-width: 705px) {
      width: 100%;
    }
  }

  &__result-image-wrapper {
    width: 51%;
    max-height: 112px;
    min-width: 201px;

    @media screen and (max-width: 1405px) {
      width: 36%;
      min-width: 201px;
    }

    @media screen and (max-width: 910px) {
      width: 25%;
    }

    @media screen and (max-width: 505px) {
      min-width: 157px;
    }

    @media screen and (max-width: 430px) {
      width: 42%;
      min-width: unset;
      min-height: unset;
    }
  }

  &__result-image {
    width: 100%;
    height: 100%;
    display: block;

    @media screen and (max-width: 1405px) {
      height: auto;
    }
  }

  &__result-content {
    width: 43%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 360px) {
      width: 54%;
    }
  }

  &__result-title {
    @include font('Inter', 15px, 700);
    line-height: 125%;
    color: $text-color--chinese-black;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (max-width: 505px) {
      font-size: 10px;
      line-height: 150%;
      letter-spacing: -0.4px;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: block;
      -webkit-line-clamp: initial;
      -webkit-box-orient: initial;
    }
  }

  &__result-meta {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin: 6px 0;

    &-created-date,
    &-read-time {
      @include font('Inter', 8px, 400);
      line-height: 150%;
      color: $text-color--grey-opacity-40-percent;
    }

    &-divider {
      width: 1px;
      height: 11px;
      border: none;
      margin: 0;
      background-color: $text-color--grey-opacity-40-percent;
    }

    span {
      color: $text-color--grey-pale;
    }

    @media screen and (max-width: 360px) {
      column-gap: 6px;
    }
  }
}
</style>
