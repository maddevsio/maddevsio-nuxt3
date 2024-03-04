<script setup lang="ts">
const {
  digest,
  // schemaOrgSnippet,
  // openGraphUrl,
} = await useDigestContentData()
</script>

<template>
  <div>{{ digest }}</div>
</template>
