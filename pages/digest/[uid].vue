<script setup lang="ts">
const {
  digest,
  // schemaOrgSnippet,
  // openGraphUrl,
} = await useDigestContentData()
</script>

<template>
  <DigestPostView
    :digest="digest"
  />
</template>
