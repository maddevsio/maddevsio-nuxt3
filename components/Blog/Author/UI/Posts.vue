<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlogPost, TransformedAuthor } from '~/interfaces/common/commonInterfaces'

const props = defineProps({
  author: {
    type: Object as PropType<TransformedAuthor>,
    default: () => ({}),
  },
  authorPosts: {
    type: Array as PropType<BlogPost[]>,
    default: () => [],
  },
})

const {
  countToShow,
  showMoreContent,
  buttonText,
  sectionRef,
  authorContent,
  findTag,
  showButton,
} = useAuthorContent(4, 'See all articles', props.authorPosts)
</script>
<template>
  <div
    v-if="authorContent.length"
    ref="sectionRef"
    class="author-posts"
  >
    <LazySharedContentTitle title="Blog posts" />
    <div
      class="author-posts__featured-post"
      :class="[authorPosts.length === 1 ? 'author-posts__featured-post--mb-0' : '']"
    >
      <LazySharedFeaturedPost
        :post="authorContent[0]"
        :author="author"
        theme="light"
        :disable-author-link="true"
        title-tag="h3"
        :tag="findTag(authorContent[0])"
      />
    </div>
    <div
      class="author-posts__list"
    >
      <LazySharedArticleCard
        v-for="post in authorContent.slice(0, countToShow)"
        :key="post.id"
        :uid="post.uid"
        :article-link="post.articleLink"
        :title="post.title"
        :description="post.description"
        is-show-author
        is-show-tag
        :formatted-date="post?.formattedDate"
        :read-time="post?.readTime"
        :cover="post.cover"
        :author="author"
        :post="post"
        :tag="findTag(post) || post.tags[0]"
      />
    </div>
    <div
      v-if="authorContent.length >= countToShow && showButton"
      class="author-posts__load-more"
    >
      <LazyBlogAuthorUILoadMoreButton
        :button-text="buttonText"
        @click="showMoreContent"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.author-posts {
  background-color: $bgcolor--white-primary;
  padding-bottom: 128px;

  &__featured-post {
    margin-bottom: 48px;

    &--mb-0 {
      margin-bottom: 0;
    }
  }

  :deep(.article-card) {
    display: flex;
    flex-direction: column;

    &:first-of-type {
      display: none;
    }

    .article-card__info {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .article-card__info-text {
      margin-bottom: 16px;
    }
  }

  :deep(.article-card__body) {
    height: 100%;
  }

  :deep(.article-card__body-content) {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .article-card__description {
      margin-top: auto;
    }
  }

  &__list {
    @include grid(repeat(3, 1fr), auto, 20px, 72px);
  }

  &__load-more {
    margin-top: 48px;

    :deep(.load-more-button) {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1280px) {
    padding-bottom: 96px;
  }

  @media only screen and (max-width: 1024px) {
    &__featured-post {
      display: none;
      margin-bottom: 56px;
    }

    &__list {
      @include grid(repeat(2, 1fr), auto, 20px, 56px);
    }

    :deep(.article-card) {
      &:first-of-type {
        display: flex;
      }
    }

    &__load-more {
      margin-top: 56px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-bottom: 72px;
  }

  @media screen and (max-width: 690px) {
    padding-bottom: 48px;

    &__list {
      @include grid(repeat(1, 1fr), auto, 20px, 56px);
    }

    :deep(.article-card__cover-wrapper) {
      max-height: unset;
    }

    &__load-more {
      margin-top: 32px;
    }
  }
}
</style>
