<script setup lang="ts">
defineProps({
  pageContent: {
    type: Object,
    default: () => ({}),
  },

  tags: {
    type: Array,
    default: () => [],
  },
})
const { tagChangedFromQuery, tagChangedHandler, activeTag } = useTagChanged('checklistPage', 'checklists')

</script>

<template>
  <section>
    <LazySharedHeadStartScreen
      :title="pageContent.title"
      :description="pageContent.description"
      :image="pageContent.image"
    >
      <LazySharedDynamicTagCloud
        :tags="tags"
        @changed="tagChangedHandler"
        @change-tag-from-query-params="tagChangedFromQuery"
      />
    </LazySharedHeadStartScreen>
  </section>
</template>

<style lang="scss" scoped>

</style>
