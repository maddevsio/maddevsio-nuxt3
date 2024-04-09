<script setup lang="ts">
const props = defineProps({
  posts: {
    type: Array,
    default: () => [],
  },
  pageSize: {
    type: Number,
    default: 13,
  },
  tag: {
    type: String,
    default: '',
  },
})

const {
  countToShow,
  showMoreContent,
  buttonText,
  sectionRef,
  authorContent,
} = useAuthorContent(10, 'See all articles', props.posts)

const { headerHeight } = storeToRefs(useHeaderStore())

</script>
<template>
  <div
    ref="sectionRef"
    class="tag-posts"
    :style="`scroll-margin-top: ${headerHeight}px`"
  >
    <div class="container">
      <LazySharedContentTitle title="Blog posts" />
      <div
        class="tag-posts__featured-post"
        :class="[posts.length === 1 ? 'tag-posts__featured-post--mb-0' : '']"
      >
        <LazySharedFeaturedPost
          :post="posts[0]"
          :author="posts[0].author"
          theme="light"
          title-tag="h3"
          :tag="tag"
        />
      </div>
      <div
        class="tag-posts__list"
      >
        <LazySharedArticleCard
          v-for="post in posts.slice(0, countToShow)"
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
          :author="post.author"
          :post="post"
          :tag="tag"
        />
      </div>
      <div
        v-if="posts.length >= countToShow"
        class="tag-posts__load-more"
      >
        <LazyBlogAuthorUILoadMoreButton
          :button-text="buttonText"
          @click="showMoreContent"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tag-posts {
  background-color: $bgcolor--white-primary;
  padding: 60px 0 71px;

  &__featured-post {
    margin-bottom: 137px;
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
    &__title {
      font-size: 31px;
      line-height: 193%;
      margin-bottom: 32px;
    }
  }

  @media screen and (max-width: 690px) {
    padding-bottom: 48px;

    &__list {
      @include grid(repeat(1, 1fr), auto, 20px, 56px);
    }

    :deep(.article-card__cover-wrapper) {
      max-height: unset;
    }

    &__title {
      line-height: 116%;
      margin-bottom: 24px;
    }

    &__load-more {
      margin-top: 32px;
    }
  }
}
</style>
