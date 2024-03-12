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
</script>
<template>
  <div
    v-if="authorContent.length"
    ref="sectionRef"
    class="author-words"
  >
    <h2 class="author-words__title">
      Technical terms
    </h2>
    <div class="author-words__section">
      <LazyGlossaryUICard
        v-for="word in authorContent.slice(0, countToShow)"
        :key="word.wordUID"
        :word="word"
        color-theme="white"
      />
    </div>
    <div
      v-if="authorContent.length >= countToShow"
      class="author-words__load-more"
    >
      <LazyBlogAuthorUILoadMoreButton
        :button-text="buttonText"
        @click="showMoreContent"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.author-words {
  padding-bottom: 128px;
  background-color: $bgcolor--white-primary;

  &__title {
    @include font('Inter', 60px, 700);
    line-height: 125%;
    margin-bottom: 48px;
    padding-bottom: 10px;
    border-bottom: 1px solid $border-color--black-border-03-opacity;
  }

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
    &__title {
      font-size: 31px;
      line-height: 193%;
      margin-bottom: 32px;
    }
  }

  @media screen and (max-width: 690px) {
    padding-bottom: 48px;
    &__title {
      line-height: 116%;
      margin-bottom: 24px;
    }

    &__load-more {
      margin-top: 32px;
    }

    &__section {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
