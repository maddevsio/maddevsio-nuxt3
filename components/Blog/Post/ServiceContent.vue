<script setup lang="ts">
import type { PropType } from 'vue'
import type { IPostServiceContent } from '~/components/Blog/interfaces/Post/IPostServiceContent'

const props = defineProps({
  postContent: {
    type: Object as PropType<IPostServiceContent>,
    default: () => ({}),
  },
})

const {
  mobilePoint,
  slices,
  postSidebar,
  postAuthor,
  postCoAuthor,
  recommendedPosts,
  postForm,
  openGraphUrl,
  metaTitle,
} = props.postContent

provide('postAuthor', postAuthor)
provide('postCoAuthor', postCoAuthor)
provide('openGraphUrl', openGraphUrl)
provide('metaTitle', metaTitle)

const { isMobile } = useCheckMobile(mobilePoint)
</script>
<template>
  <section class="post-service-content">
    <div class="post-service-content__container">
      <LazyBlogSlicesComponents
        :slices="slices"
        class="post-service-content__slices"
      />
      <ClientOnly>
        <LazyBlogPostSidebar
          :post-sidebar-instance="postSidebar"
          class="post-service-content__sidebar"
        />
      </ClientOnly>
    </div>
    <LazyBlogPostRecommended
      :recommended-posts="recommendedPosts"
    />
    <LazyBlogUIPostMobileServiceForm
      v-if="isMobile"
      :post-form="postForm"
    />
  </section>
</template>
<style lang="scss" scoped>
.post-service-content {
  background-color: $bgcolor--white-primary;

  &__container {
    max-width: 1032px;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
  }

  :deep(.post-slices) {
    max-width: 620px;
  }

  &__sidebar {
    max-width: 350px;
    width: 100%;
  }

  @media screen and (max-width: 1087px) {
    &__container {
      flex-direction: column;
      justify-content: center;
    }

    :deep(.post-slices) {
      max-width: 680px;
      margin-inline: auto;
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
