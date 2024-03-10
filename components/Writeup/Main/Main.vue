<script setup lang="ts">
defineProps({
  pageContent: {
    type: Object,
    default: () => ({
      title: '',
      description: '',
      image: {},
    }),
  },

  tags: {
    type: Array,
    default: () => [],
  },
})
const { tagChangedFromQuery, tagChangedHandler, activeTag } = useTagChanged('page', 'writeUps')
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
