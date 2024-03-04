<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlogPost } from '~/interfaces/common/commonInterfaces'

defineProps({
  posts: {
    type: Array as PropType<BlogPost[]>,
    default: () => [],
  },
})
</script>
<template>
  <div class="posts-section">
    <div class="container">
      <div class="posts-section__list">
        <template v-if="posts && posts.length">
          <section
            v-for="post in posts"
            :key="post.id"
            class="posts-section__list-item"
          >
            <LazySharedArticleCard
              :uid="post.uid"
              :article-link="post.articleLink"
              :title="post.title"
              :description="post.description"
              is-show-author
              is-show-tag
              :cover="post.cover"
              :author="post.author"
              :formatted-date="post.formattedDate"
              :tag="post.tags[0]"
              :read-time="post.readTime"
            />
          </section>
        </template>
        <template v-else>
          <section
            v-for="i in 6"
            :key="i"
            class="posts-section__list-item"
          >
            <LazySharedSkeletonsPostBlog
              show-author
              show-meta
            />
          </section>
        </template>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.posts-section {
  background-color: $bgcolor--white-primary;
  padding: 96px 0 80px;

  &__list {
    display: flex;
    flex-flow: row wrap;
    margin: 0 -10px;
  }

  &__list-item {
    box-sizing: border-box;
    width: 33.3333%;
    margin-bottom: 103px;
    padding: 0 10px;

    @media only screen and (min-width: 991px) {
      &:nth-last-child(-n+3) {
        margin-bottom: 0;
      }
    }
  }

  &__banner {
    display: block;
    max-width: 100%;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  @media only screen and (max-width: 991px) {
    padding: 29px 0 56px;

    &__list-item {
      width: 100%;
      margin-bottom: 56px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
