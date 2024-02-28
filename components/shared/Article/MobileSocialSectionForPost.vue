<script setup lang="ts">
defineProps({
  openGraphUrl: {
    type: String,
    default: '',
  },

  metaTitle: {
    type: String,
    default: '',
  },

  sideBarMobilePoint: {
    type: Number,
    default: 0,
  },
})
const {
  isMobile,
} = useCheckMobile(1185)
const pageId = inject('postId')
</script>
<template>
  <div
    v-if="isMobile"
    class="social-section"
  >
    <LazySharedSocialShare
      v-if="isMobile"
      :open-graph-url="openGraphUrl"
      :meta-title="metaTitle"
    />
    <div class="social-section__divider" />
    <LazyBlogUIPostStarRating
      v-if="isMobile"
      :page-id="pageId"
      :is-mobile="isMobile"
    />
  </div>
</template>
<style lang="scss" scoped>
.social-section {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 96px;

  &__divider {
    width: 1px;
    height: 50px;
    align-self: center;
    background: $text-color--grey-20-percent;
  }

  @media screen and (max-width: 1185px) {
    margin-top: 48px;
  }

  @media screen and (max-width: 702px) {
    flex-direction: column;
    gap: 24px;

    &__divider {
      display: none;
    }
  }
}
</style>
