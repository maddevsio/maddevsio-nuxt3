<script setup lang="ts">
const {
  post,
  // schemaOrgSnippet,
  // openGraphUrl,
} = await useBlogContentData('post')
</script>

<template>
  <div v-if="post">
    <LazyBlogPostView
      :post-data="post"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
