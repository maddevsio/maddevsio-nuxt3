<script setup lang="ts">
defineProps({
  postTableOfContentsInstance: {
    type: Object,
    required: true,
    default: () => ({}),
  },

  subscribeFormBlockInstance: {
    type: Object,
    required: true,
    default: () => ({}),
  },

  openGraphUrl: {
    type: String,
    required: true,
    default: '',
  },

  metaTitle: {
    type: String,
    required: true,
    default: '',
  },
})
</script>

<template>
  <div
    class="digest-content-sidebar"
  >
    <LazyBlogUIPostPostTableOfContents
      v-if="postTableOfContentsInstance"
      :post-table-of-contents-instance="postTableOfContentsInstance"
    />
    <LazySharedSocialShare
      :open-graph-url="openGraphUrl"
      :meta-title="metaTitle"
    />
    <ClientOnly>
      <LazyWidgetsFormSubscribeFormBlock
        :subscribe-form-block-instance="subscribeFormBlockInstance"
        form-uid="digest-sidebar"
        class="digest-content__subscribe-form-block"
      />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
  .digest-content-sidebar {
    position: sticky;
    top: 130px;
    align-self: flex-start;
    width: 212px;
    margin-right: 72px;
    margin-top: 10px;
    padding-bottom: 64px;

    @media screen and (max-width: 1185px) {
      display: none;
    }
  }
</style>
