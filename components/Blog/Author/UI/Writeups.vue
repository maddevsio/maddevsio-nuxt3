<script setup lang="ts">
const props = defineProps({
  authorWriteups: {
    type: Array,
    default: () => [],
  },
})

const {
  countToShow,
  showMoreContent,
  buttonText,
  sectionRef,
  authorContent,
} = useAuthorContent(5, 'See all write-ups', props.authorWriteups)
</script>
<template>
  <div
    v-if="authorContent.length"
    ref="sectionRef"
    class="author-writeups"
  >
    <LazySharedContentTitle title="Write-ups" />
    <LazyWriteupCards
      :writeups="authorContent.slice(0, countToShow)"
    />
    <div
      v-if="authorContent.length >= countToShow"
      class="author-writeups__load-more"
    >
      <LazyBlogAuthorUILoadMoreButton
        :button-text="buttonText"
        @click="showMoreContent"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.author-writeups {
  padding-bottom: 128px;
  background-color: $bgcolor--white-primary;

  &__load-more {
    margin-top: 48px;

    :deep(.load-more-button) {
      width: 100%;
    }
  }

  @media screen and (max-width: 1280px) {
    padding-bottom: 96px;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 72px;
  }

  @media screen and (max-width: 690px) {
    padding-bottom: 48px;

    &__load-more {
      margin-top: 32px;
    }
  }
}
</style>
