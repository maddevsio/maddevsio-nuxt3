<script setup lang="ts">
import type { PropType } from 'vue'
import type { IPostSidebar } from '~/components/Blog/interfaces/Post/IPostSidebar'

const props = defineProps({
  postSidebarInstance: {
    type: Object as PropType<IPostSidebar>,
    default: () => ({}),
  },
})

const {
  mobilePoint,
  showSubscribeForm,
  showSubscribeFormTimer,
  postRated,
  indentFromHeader,
  openGraphUrl,
  metaTitle,
  postTableOfContentsInstance,
  servicePost,
  postForm,
  subscribeFormBlock,
} = props.postSidebarInstance

const showTableWhenMounted = ref(false)
const { isMobile } = useCheckMobile(mobilePoint)
const { headerHeight } = storeToRefs(useHeaderStore())
const postId = inject('postId')

onMounted(() => {
  showTableWhenMounted.value = true
})

onUnmounted(() => {
  clearTimeout(showSubscribeFormTimer.value)
})
</script>
<template>
  <div
    v-show="!isMobile"
    class="sidebar"
    :style="{ 'top': `${headerHeight + indentFromHeader}px`, 'display': showTableWhenMounted ? 'block' : 'none' }"
  >
    <LazyBlogUIPostPostTableOfContents
      v-if="postTableOfContentsInstance.tableOfContents"
      :post-table-of-contents-instance="postTableOfContentsInstance"
    />
    <LazyWidgetsFormService
      v-if="servicePost"
      form-uid="post-form-slice"
      :slice="postForm"
    />
    <ClientOnly>
      <LazySharedSocialShare
        :open-graph-url="openGraphUrl"
        :meta-title="metaTitle"
      />
      <LazyBlogUIPostStarRating
        v-if="!postRated && !isMobile"
        :is-mobile="isMobile"
        :page-id="postId"
        @rated="showSubscribeForm"
      />
    </ClientOnly>
    <LazyWidgetsFormSubscribeFormBlock
      v-if="postRated"
      :subscribe-form-block-instance="subscribeFormBlock"
      form-uid="blog-sidebar"
      class="sidebar__subscribe-form-block"
    />
  </div>
</template>
<style lang="scss" scoped>
.sidebar {
  position: sticky;
  top: 130px;
  left: 0;
  align-self: flex-start;
  margin-left: -272px;
  margin-bottom: 10px;

  @media screen and (max-width: 1185px) {
    :deep(.share-links) {
      margin-top: 20px;
      margin-bottom: 33px;
    }
  }

  &__subscribe-form-block {
    :deep(.subscribe-form-block) {
      .subscribe-form-block__link-wrapper {
        margin-bottom: 14px;
        line-height: 19px;
      }
    }
  }
}
</style>
