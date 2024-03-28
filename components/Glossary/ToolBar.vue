<script setup lang="ts">
import { GlossaryToolBar } from '~/components/Glossary/classes/GlossaryToolBar'
import type { IGlossaryService } from '~/components/Glossary/interfaces/IGlossaryService'
const props = defineProps({
  activeLetterProp: {
    type: String,
    default: 'A',
  },
})
const route = useRoute()
const router = useRouter()

const glossaryService = inject('glossaryService') as IGlossaryService
const glossaryNavStore = useGlossaryNavStore()
const { searchIsActive, activeLetter, navIsOpened, searchValue, resizeObserver } = storeToRefs(glossaryNavStore)
const { setActiveLetter, toggleNavPanel, getNavHeight } = glossaryNavStore
const { headerHeight } = storeToRefs(useHeaderStore())
const { isMobile } = useCheckMobile(680)

const {
  homePage,
  updateIsScrolling,
  setInitialNavOffset,
  glossaryFilterRef,
  alphabetArray,
  addClassesToLetter,
  checkWordsForLetter,
  getLettersForFilter,
  navigateToHomePage,
  filterClasses,
} = new GlossaryToolBar(
  route,
  router,
  headerHeight.value,
  glossaryService.getAllGlossaryPages,
  activeLetter,
  searchValue,
  isMobile)

onMounted(async () => {
  getNavHeight(glossaryFilterRef.value!)
  setInitialNavOffset()
  setActiveLetter(route.hash ? route.hash.replace('#', '') : props.activeLetterProp)
  window.addEventListener('scroll', updateIsScrolling)
  await getLettersForFilter()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateIsScrolling)
  resizeObserver.value?.disconnect()
})

const buttonClickHandler = (letter: string, e: Event) => {
  if (route.path === '/glossary/') {
    setActiveLetter(letter)
  } else {
    e.preventDefault()
    navigateToHomePage(letter)
  }
}
</script>

<template>
  <div
    ref="glossaryFilterRef"
    class="glossary-words-filter"
    :class="filterClasses"
    :style="`top: ${headerHeight}px`"
  >
    <div class="glossary-words-filter__container container">
      <div
        class="glossary-words-filter__nav"
        :class="[{'glossary-words-filter__nav--without-search': !homePage,
                  'glossary-words-filter__nav--opened': navIsOpened}]"
      >
        <LazyGlossarySearchPanel
          v-if="homePage"
          class="glossary-words-filter__nav-search"
          :class="{'glossary-words-filter__nav-search--active': searchIsActive}"
        />
        <div class="glossary-words-filter__nav-panel">
          <div
            class="glossary-words-filter__nav-buttons"
            :class="{'glossary-words-filter__nav-buttons--hidden': searchIsActive}"
          >
            <a
              v-for="(letter, i) in alphabetArray"
              :key="`glossary-filter-letter-${i}`"
              :href="checkWordsForLetter(letter) && homePage ? `#${letter}` : ''"
              class="glossary-words-filter__button"
              :class="[addClassesToLetter(letter), {'glossary-words-filter__button--active': activeLetter === letter}]"
              @click="buttonClickHandler(letter, $event)"
            >
              {{ letter }}
            </a>
          </div>
          <button
            v-if="isMobile"
            class="glossary-words-filter__btn-arrow"
            :class="{'glossary-words-filter__btn-arrow--opened': navIsOpened}"
            @click="toggleNavPanel"
          />
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

  &--sticky {
    position: sticky;
  }

  &--transparent {
    background-color: #1d1d1fcc;
    .glossary-words-filter__nav {
      background-color: transparent;
    }
  }

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

      .glossary-words-filter__nav-panel {
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

  &__nav-panel {
    width: 100%;
    margin-left: 60px;
    margin-bottom: -16px;
  }

  &__nav-buttons {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.2s ease 0.4s, visibility 0.2s ease 0.4s, margin-top 0.2s ease 0.4s;

    &--hidden {
      opacity: 0;
      visibility: hidden;
      transition: 0.2s ease;
    }
  }

  &__btn-arrow, &__button {
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  &__btn-arrow {
    @include arrow-in-circle(16px, 4px, $bgcolor--grey-opacity-40-percent);
    align-self: flex-start;
    transform: rotate(90deg);
    transition: transform 0.5s ease-in-out;
    margin-left: 5px;
    &--opened {
      transform: rotate(270deg);
    }
  }

  &__button {
    @include font('Inter', 24px, 600);
    flex: 1 0 38px;
    max-width: 45px;
    line-height: 108%;
    margin-bottom: 16px;
    color: $text-color--white-primary;
    text-align: center;

    &--disabled {
      color: $text-color--grey-pale;
      pointer-events: none;
    }

    &--active {
      color: $text-color--red;
    }

    &--all-disabled {
      color: $text-color--grey-pale !important;
      pointer-events: none;
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
        .glossary-words-filter__nav-panel {
          margin-left: 0;
        }
      }
    }

    &__nav-panel {
      margin-left: 46px;
      margin-bottom: -20px;
    }

    &__button {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 680px) {
    &__container {
      padding: 0;
    }

    &__nav-buttons {
      width: 100%;
      margin-left: -12px;
    }

    &__nav {
      flex-direction: column-reverse;
      padding: 13px 18px 16px;
      max-height: 50px;
      transition: max-height 0.5s ease-in-out;
      &--opened {
        max-height: 350px;
      }

      &--without-search {
        .glossary-words-filter__nav-panel {
          padding-top: 0;
          margin-top: 0;
          margin-bottom: -20px;
          transition: none;
        }

        .glossary-words-filter__nav-buttons {
          margin-left: 0;
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

    &__nav-panel {
      display: flex;
      align-items: flex-start;
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
