<script setup lang="ts">
const props = defineProps({
  words: {
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
} = useAuthorContent(8, 'See other tech terms', props.words)

const { headerHeight } = storeToRefs(useHeaderStore())
</script>

<template>
  <div
    ref="sectionRef"
    class="tag-words"
    :style="`scroll-margin-top: ${headerHeight}px`"
  >
    <div class="container">
      <LazySharedContentTitle title="Technical terms" />
      <div class="tag-words__section">
        <LazyGlossaryUICard
          v-for="word in authorContent.slice(0, countToShow)"
          :key="word.wordUID"
          :word="word"
          color-theme="white"
        />
      </div>
      <div
        v-if="authorContent.length >= countToShow"
        class="tag-words__load-more"
      >
        <LazyBlogAuthorUILoadMoreButton
          :button-text="buttonText"
          @click="showMoreContent"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tag-words {
  background-color: $bgcolor--white-primary;
  padding: 57px 0 128px;

  &__load-more {
    margin-top: 48px;

    :deep(.load-more-button) {
      width: 100%;
    }
  }

  &__section {
    * {
      box-sizing: border-box;
    }

    @include grid(repeat(4, 1fr), auto, 20px, 20px);
  }

  @media screen and (max-width: 1280px) {
    padding-bottom: 96px;
  }

  @media screen and (max-width: 1100px) {
    &__section {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 72px;
  }

  @media screen and (max-width: 690px) {
    padding-bottom: 48px;

    &__load-more {
      margin-top: 32px;
    }

    &__section {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
