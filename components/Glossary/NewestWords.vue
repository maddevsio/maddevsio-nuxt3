<script setup lang="ts">
import type { PropType } from 'vue'
import { GlossaryNewestWords } from '~/components/Glossary/classes/GlossaryNewestWords'
import type { GlossaryPage } from '~/interfaces/common/commonInterfaces'

const { tag, lastNewestFilteredWords } = defineProps({
  tag: {
    type: String,
    default: '',
  },

  lastNewestFilteredWords: {
    type: Array as PropType<GlossaryPage[]>,
    default: () => [],
  },
})

const { lastWords, allLastWords, isShowMore, showMore } = new GlossaryNewestWords(lastNewestFilteredWords)
</script>

<template>
  <section class="glossary-newest-words">
    <div class="glossary-newest-words__container container">
      <h2 class="glossary-newest-words__title">
        {{ `More terms related to ${tag}` }}
      </h2>
      <div class="glossary-newest-words__cards">
        <LazyGlossaryUICard
          v-for="word in lastWords"
          :key="word.wordTitle"
          :word="word"
        />
        <LazyGlossaryUIButtonMore
          v-if="allLastWords.length > 4 && !isShowMore"
          @click="showMore"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.glossary-newest-words {
  padding: 96px 0 128px;

  &__container {
    * {
      box-sizing: border-box;
    }
  }

  &__title {
    @include font('Inter', 48px, 900);
    line-height: 130%;
    color: $text-color--white-primary;
    margin-bottom: 32px;
  }

  &__cards {
    @include grid(repeat(4, 1fr), auto, 20px, 20px);
  }

  @media screen and (max-width: 1024px) {
    &__title {
      font-size: 40px;
    }

    &__cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 550px) {
    padding: 48px 0;
    &__title {
      font-size: 31px;
    }

    &__cards {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
