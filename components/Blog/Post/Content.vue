<script setup lang="ts">
import type { PropType } from 'vue'
import type { IPostContent } from '~/components/Blog/interfaces/Post/IPostContent'

const props = defineProps({
  postContent: {
    type: Object as PropType<IPostContent>,
    default: () => ({}),
  },
})

const {
  slices,
  type: postType,
  postAuthor,
  postCoAuthor,
  recommendedPosts,
  exploreChapters,
  postSidebar,
  openGraphUrl,
  metaTitle,
} = props.postContent

provide('postAuthor', postAuthor)
provide('postCoAuthor', postCoAuthor)
provide('openGraphUrl', openGraphUrl)
provide('metaTitle', metaTitle)
</script>
<template>
  <section class="post-content">
    <div class="post-content__container">
      <ClientOnly>
        <LazyBlogPostSidebar
          :post-sidebar-instance="postSidebar"
        />
      </ClientOnly>
      <LazyBlogSlicesComponents
        :slices="slices"
      />
    </div>
    <LazyBlogPostRecommended
      v-if="postType === 'post'"
      :recommended-posts="recommendedPosts"
    />
    <!--    <CustomerUniversityAllPosts-->
    <!--      v-if="postType === 'customer_university'"-->
    <!--      :customer-university-posts="exploreChapters"-->
    <!--    />-->
  </section>
</template>
<style lang="scss" scoped>
.post-content {
  background-color: $bgcolor--white-primary;

  &__container {
    max-width: 680px;
    margin: 0 auto;
    column-gap: 72px;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 1185px) {
    &__container {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 1024px) {
    padding-top: 15px;

    &__container {
      padding: 0 24px;
    }
  }
}
</style>
