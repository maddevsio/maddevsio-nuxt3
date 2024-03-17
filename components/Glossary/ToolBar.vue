<script setup lang="ts">
import { GlossaryToolBar } from '~/components/Glossary/classes/GlossaryToolBar'

const { getAllGlossaryPages, activeLetter } = defineProps({
  getAllGlossaryPages: {
    type: Function,
    default: () => ({}),
  },

  activeLetter: {
    type: String,
    default: '',
  },
})

const route = useRoute()
const router = useRouter()

const {
  withoutSearch,
  hideNavButtons,
  showNavButtons,
  searchIsActive,
  alphabetArray,
  addClassesToLetter,
  checkWordsForLetter,
  getLettersForFilter,
  filterWordsByLetter,
} = new GlossaryToolBar(route, router, getAllGlossaryPages, activeLetter)

onMounted(async () => {
  await getLettersForFilter()
})
</script>

<template>
  <div
    class="glossary-words-filter"
  >
    <div class="glossary-words-filter__container container">
      <div :class="['glossary-words-filter__nav', {'glossary-words-filter__nav--without-search': withoutSearch}]">
        <!--        <LazyGlossarySearchPanel-->
        <!--          v-if="!withoutSearch"-->
        <!--          :class="['glossary-words-filter__nav-search', {'glossary-words-filter__nav-search&#45;&#45;active': searchIsActive}]"-->
        <!--          @open-panel="hideNavButtons"-->
        <!--          @close-panel="showNavButtons"-->
        <!--        />-->
        <div
          :class="['glossary-words-filter__nav-buttons', {'glossary-words-filter__nav-buttons--hidden': searchIsActive}]"
        >
          <button
            v-for="(letter, i) in alphabetArray"
            :key="`glossary-filter-letter-${i}`"
            :class="addClassesToLetter(letter)"
            :disabled="!checkWordsForLetter(letter)"
            @click="filterWordsByLetter(letter)"
          >
            {{ letter }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.glossary-words-filter {
  width: 100%;
  margin-bottom: 103px;
  overflow: hidden;

  &__container {
    * {
      box-sizing: border-box;
    }
  }

  &__nav {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 9px 30px 9px 9px;
    border-radius: 10px;
    background-color: $bgcolor--black-pale;
    min-height: 50px;

    &--without-search {
      padding-left: 30px;

      .glossary-words-filter__nav-buttons {
        margin-left: 0;
      }
    }
  }

  &__nav-search {
    position: absolute;
    top: 9px;
    left: 9px;
    right: 9px;
    z-index: 0;

    &--active {
      z-index: 2;
    }
  }

  &__nav-buttons {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: 60px;
    margin-bottom: -16px;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.2s ease 0.4s, visibility 0.2s ease 0.4s, margin-top 0.2s ease 0.4s;

    &--hidden {
      opacity: 0;
      visibility: hidden;
      transition: 0.2s ease;
    }
  }

  &__button {
    @include font('Inter', 24px, 600);
    flex: 1 0 38px;
    max-width: 45px;
    line-height: 108%;
    margin-bottom: 16px;
    color: $text-color--white-primary;
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;

    &--disabled {
      color: $text-color--grey-pale;
    }

    &--active {
      color: $text-color--red;
    }
  }

  @media screen and (max-width: 1280px) {
    margin-bottom: 80px;
  }

  @media screen and (max-width: 800px) {
    margin-bottom: 48px;
    &__nav {
      padding-bottom: 13px;

      &--without-search {
        .glossary-words-filter__nav-buttons {
          margin-left: 0;
        }
      }
    }

    &__nav-buttons {
      margin-left: 46px;
      margin-bottom: -20px;
    }

    &__button {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 680px) {
    &__nav {
      flex-direction: column-reverse;
      padding: 13px 18px 16px;

      &--without-search {
        .glossary-words-filter__nav-buttons {
          padding-top: 0;
          margin-top: 0;
          margin-bottom: -20px;
          transition: none;
        }
      }
    }

    &__nav-search {
      position: relative;
      top: 0;
      right: 0;
      left: 0;
      width: 100%;
    }

    &__nav-buttons {
      margin-left: 0;
      margin-bottom: 8px;
      padding-top: 50px;
      margin-top: -50px;
      transition: margin-top 0.2s ease 0.2s;
    }

    &__button {
      font-size: 20px;
      flex: 1 0 32px;
      max-width: 32px;
    }
  }
}
</style>
