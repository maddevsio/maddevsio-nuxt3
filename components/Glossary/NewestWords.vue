<script setup lang="ts">
import type { PropType } from 'vue'
import type { GlossaryPost } from '~/interfaces/common/commonInterfaces'
import { GlossaryNewestWords } from '~/components/Glossary/classes/GlossaryNewestWords'

const { tag, lastNewestFilteredWords } = defineProps({
  tag: {
    type: String,
    default: '',
  },

  lastNewestFilteredWords: {
    type: Array as PropType<GlossaryPost[]>,
    default: () => [],
  },
})

const { lastWords } = new GlossaryNewestWords(lastNewestFilteredWords)
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
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.glossary-newest-words {
  padding: 96px 0 128px;
  background-color: $bgcolor--grey-hover;

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
