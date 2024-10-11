<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/client'

interface PageContent {
  title: string
  description: string
  image: ImageField
}

defineProps({
  pageContent: {
    type: Object as PropType<PageContent>,
    default: () => ({
      title: '',
      description: '',
      image: {},
    }),
  },

  tags: {
    type: Array as PropType<
      { name: string, icon: ImageField }[]>,
    default: () => [],
  },
})

const { allTagNames } = useDynamicTagCloudStore()
const { tagChangedFromQuery, tagChangedHandler } = useTagChanged('page', 'writeUps', allTagNames.writeUps, 'Writeup')
</script>

<template>
  <div>
    <LazySharedHeadStartScreen
      :title="pageContent?.title"
      :description="pageContent?.description"
      :image="pageContent?.image"
    >
      <LazySharedDynamicTagCloud
        :tags="tags"
        @changed="tagChangedHandler"
        @change-tag-from-query-params="tagChangedFromQuery"
      />
    </LazySharedHeadStartScreen>
    <LazyWriteupMainContent />
  </div>
</template>
