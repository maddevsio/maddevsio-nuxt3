<script setup lang="ts">
const props = defineProps({
  letterTitle: {
    type: String,
    default: 'A',
  },

  words: {
    type: Array,
    default: () => [],
  },

  showAllWords: {
    type: Boolean,
    default: false,
  },

  isLoadingMore: {
    type: Boolean,
    default: false,
  },
})

const glossaryWords = computed(() => {
  if (props.showAllWords) { return props.words }
  return props.words.slice(0, 11)
})

const { activeLetter } = storeToRefs(useGlossaryStore())
const { $eventBus } = useNuxtApp()
const loadMoreWords = (letter: string) => {
  $eventBus.$emit('load-more-words', letter)
}
</script>

<template>
  <div
    class="glossary-words-section"
  >
    <h2
      v-if="letterTitle"
      :id="letterTitle"
      :class="['glossary-words-section__title', {'glossary-words-section__title--active': activeLetter === letterTitle}]"
    >
      {{ letterTitle }}
    </h2>
    <div class="glossary-words-section__cards glossary-words-section-cards">
      <LazyGlossaryUICard
        v-for="word in glossaryWords"
        :key="word.wordTitle"
        :word="word"
      />
      <LazyGlossaryUIButtonMore
        v-if="words.length > 11 && !showAllWords"
        :is-loading-more="isLoadingMore"
        @click="loadMoreWords(letterTitle)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/components/Glossary/styles/wordsSection.scss';

.glossary-words-section {
  margin-bottom: 48px;

  * {
    box-sizing: border-box;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &__title {
    @include font('Inter', 36px, 600);
    line-height: 109%;
    color: $text-color--white-primary;
    margin-bottom: 32px;
    transition: color 0.2s ease;
    scroll-margin-top: 130px;

    &--active {
      color: $text-color--red;
    }
  }
}
</style>
