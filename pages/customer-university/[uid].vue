<script setup lang="ts">
const {
  post,
  // schemaOrgSnippet,
  // openGraphUrl,
} = await useBlogContentData('customer_university')
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
