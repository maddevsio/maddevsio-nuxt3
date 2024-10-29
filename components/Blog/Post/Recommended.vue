<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlogPost } from '~/interfaces/common/commonInterfaces'

defineProps({
  recommendedPosts: {
    type: Array as PropType<BlogPost[]>,
    default: () => [],
  },
})
</script>
<template>
  <section
    class="post-content__recommended-posts"
  >
    <div
      class="post-content__container container"
    >
      <h2 class="post-content__title">
        Latest articles here
      </h2>
      <div
        class="post-content__recommended-posts-list"
      >
        <LazySharedArticleCard
          v-for="post in recommendedPosts"
          :key="post.id"
          :uid="post.uid"
          :article-link="linkResolver(post)"
          :title="$prismic.asText(post.data?.title)"
          :description="getFirstParagraph(post.data?.body!, 150)"
          is-show-author
          is-show-tag
          :formatted-date="formatDate(post.data?.date)"
          :read-time="calculateReadTime(post, $prismic).readTime"
          :cover="post.data?.featured_image"
          :author="extractAuthorData(post.data?.post_author!)"
          :post="post"
          :disable-tag-link="post.tags.includes('Cost Optimization')"
          :tag="post.tags[0]"
          color-theme="white"
          class="post-content__recommended-post"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.post-content {
  &__recommended-posts {
    background-color: $bgcolor--silver;
    margin-top: 88px;
  }

  &__container {
    padding: 100px;
    box-sizing: border-box;
  }

  &__title {
    @include font('Inter', 40px, 700);
    line-height: 48px;
    margin-bottom: 40px;
    color: $text-color--black-oil;
  }

  &__recommended-posts-list {
    @include grid(repeat(3, minmax(200px, 1fr)), auto, 20px, 20px);
    box-sizing: border-box;
  }

  &__recommended-post {
    border-radius: 3px;
    transition: 0.2s;
    box-sizing: border-box;

    :deep(.article-card) {
      display: flex;
      flex-direction: column;
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

    :deep(.post-tag) {
      background-color: $bgcolor--white-primary;
    }

    :deep(.post-author) {
      .post-author__image,
      .post-author__none-image {
        background-color: $bgcolor--white-primary;
      }
    }
  }

  @media screen and (max-width: 992px) {
    &__recommended-posts-list {
      grid-template-columns: repeat(2, minmax(200px, 1fr));
      grid-row-gap: 40px;
    }
  }

  @media screen and (max-width: 768px) {

    &__title {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 24px;
    }

    &__container {
      padding: 31px 24px;
    }

    &__recommended-posts-list {
      display: block;
    }

    &__recommended-post {
      margin-bottom: 40px;
    }
  }
}
</style>
