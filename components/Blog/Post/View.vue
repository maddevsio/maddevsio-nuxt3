<script setup lang="ts">
import { PostView } from '~/components/Blog/classes/Post/PostView'
import { transformationPostData } from '~/components/Blog/helpers/transformationPostData'
import type { PostComponents } from '~/components/Blog/interfaces/Post/IPostView'

const props = defineProps({
  postData: {
    type: Object,
    default: () => ({}),
  },
})

const prismic = usePrismic()

const {
  getEbooksFromPrismic,
  takeRandomEbook,
  id,
  postComponents,
  postType,
  ebook,
} = new PostView({
  id: props.postData.id,
  postType: props.postData.type,
  tags: props.postData.tags,
  postComponents: transformationPostData(props.postData) as PostComponents,
})

onMounted(async () => {
  await getEbooksFromPrismic(prismic)
  takeRandomEbook()
})
provide('postId', id)
</script>
<template>
  <div class="blog-post">
    <LazyBlogPostHeader
      :post-header="postComponents.postHeader"
    >
      <template
        v-if="postType === 'post'"
        #postMetaInfo
      >
        <LazyBlogUIPostMetaInfo
          :post-meta-info="postComponents.postHeader.postMetaInfo"
        />
      </template>
      <template
        v-if="postType === 'customer_university'"
        #cuNav
      >
        <LazyBlogUICUNavigation
          :cu-navigation="postComponents.postHeader.cuNavigation"
        />
      </template>
    </LazyBlogPostHeader>
    <LazyBlogPostContent
      v-if="!postComponents.postServiceContent.servicePost"
      :post-content="postComponents.postContent"
    />
    <LazyBlogPostServiceContent
      v-if="postComponents.postServiceContent.servicePost"
      :post-content="postComponents.postServiceContent"
    />
    <ClientOnly>
      <Teleport to="body">
        <LazyBlogUIContentLocker
          v-if="ebook && Object.keys(ebook).length"
          :content-locker="postComponents.contentLocker"
          :ebook="ebook"
        />
      </Teleport>
      <LazyBlogUIButtonScrollTop />
      <LazyBlogUIProgressBar />
    </ClientOnly>
  </div>
</template>
<style lang="scss" scoped>
.blog-post {
  overflow: initial;
}
</style>
