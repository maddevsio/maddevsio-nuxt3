<script setup lang="ts">
const { digestPostSidebar } = defineProps({
  slices: {
    type: Array,
    required: true,
    default: () => [],
  },

  digestPostSidebar: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const {
  postTableOfContentsInstance,
  subscribeFormBlock,
  openGraphUrl,
  metaTitle,
} = digestPostSidebar
</script>

<template>
  <section class="digest-content">
    <div class="digest-content__container container">
      <DigestPostSidebar
        :post-table-of-contents-instance="postTableOfContentsInstance"
        :subscribe-form-block-instance="subscribeFormBlock"
        :open-graph-url="openGraphUrl"
        :meta-title="metaTitle"
      />
      <LazyDigestSlicesComponents
        :slices="slices"
        class="digest-content__main"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.digest-content {
  background-color: $bgcolor--white-primary;

  &__container {
    display: flex;
  }

  &__main {
    max-width: 610px;
  }

  &__subscribe-form-block {
    :deep(.subscribe-form-block__link-wrapper) {
      margin-bottom: 14px;
      line-height: 19px;
    }
  }

  @media screen and (max-width: 1185px) {
    &__main {
      max-width: 100%;
    }
  }
}
</style>
