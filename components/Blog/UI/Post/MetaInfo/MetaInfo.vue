<script setup lang="ts">
import type { PropType } from 'vue'
import type { IPostMetaInfo } from '~/components/Blog/interfaces/Post/IPostMetaInfo'

const props = defineProps({
  postMetaInfo: {
    type: Object as PropType<IPostMetaInfo>,
    default: () => ({}),
  },
})

const postId = inject('postId') as string

onMounted(async () => {
  await props.postMetaInfo.fetchArticleRate(postId)
})

const {
  articleRate,
  date,
  updatedDate,
  readTime,
} = props.postMetaInfo
</script>
<template>
  <div
    class="post-meta-info"
  >
    <BlogUIPostMetaInfoRating
      :article-rate="articleRate"
    />
    <BlogUIPostMetaInfoDates
      :date="date"
      :updated-date="updatedDate"
      :read-time="readTime"
    />
  </div>
</template>
<style lang="scss" scoped>
.post-meta-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  @media screen and (max-width: 580px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 8px;
  }
}
</style>
