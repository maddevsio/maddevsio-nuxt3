<script setup lang="ts">
const { glossaryPostSidebarInstance } = defineProps({
  glossaryPostSidebarInstance: {
    type: Object,
    default: () => ({}),
  },
})

const { postTableOfContentsInstance } = glossaryPostSidebarInstance
</script>

<template>
  <div
    class="glossary-post-sidebar"
  >
    <BlogUIPostPostTableOfContents
      :post-table-of-contents-instance="postTableOfContentsInstance"
    />
  </div>
</template>

<style lang="scss" scoped>
.glossary-post-sidebar {
  position: sticky;
  top: 130px;
  align-self: flex-start;
  width: 212px;
  margin-right: 72px;
  margin-top: 10px;

  @media screen and (max-width: 1185px) {
    display: none;
  }
}
</style>
