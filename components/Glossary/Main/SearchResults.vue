<script setup lang="ts">
defineProps({
  words: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="glossary-search-results">
    <div class="glossary-search-results__container container">
      <div class="glossary-search-results__cards glossary-words-section-cards">
        <LazyGlossaryUICard
          v-for="word in words"
          :key="word.wordTitle"
          :word="word"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/components/Glossary/styles/wordsSection.scss';
.glossary-search-results {
  &__container {
    * {
      box-sizing: border-box;
    }
  }
}
</style>
