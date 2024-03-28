<script setup lang="ts">
import type { PropType } from 'vue'
import type { IHeaderMenuChapter } from '~/components/Widgets/Header/interfaces/IHeaderMenuChapter'
import type { IHeader } from '~/components/Widgets/Header/interfaces/IHeader'
import type { IHeaderMenu } from '~/components/Widgets/Header/interfaces/IHeaderMenu'
import type { IHeaderMenuItem } from '~/components/Widgets/Header/interfaces/IHeaderMenuItem'

defineProps({
  chapters: {
    type: Array as PropType<IHeaderMenuChapter[]>,
    default: () => [],
  },

  showSection: {
    type: Boolean,
    default: false,
  },

  setActiveChapter: {
    type: Function as PropType<IHeaderMenu<IHeaderMenuItem[]>['setActiveChapter']>,
    required: true,
  },

  activeChapter: {
    type: String,
    default: '',
  },

  resetState: {
    type: Function as PropType<IHeader['resetState']>,
    required: true,
  },
})

defineEmits(['close-section'])

const { headerHeight } = storeToRefs(useHeaderStore())
const indentFromHeader = computed(() => headerHeight.value + 5)
</script>
<template>
  <SharedUITransitionFade>
    <div
      v-show="showSection"
      class="header-mobile-nav-section"
    >
      <div class="header-mobile-nav-section__scroll safari-only container">
        <div
          class="header-mobile-nav-section__content"
          :style="{ 'padding-top': `${indentFromHeader}px` }"
        >
          <button
            type="button"
            class="header-mobile-nav-section__back-btn"
            @click="$emit('close-section')"
          >
            Back
          </button>
          <LazyWidgetsHeaderMobileMenu
            v-for="(menuChapter, menuChapterIndex) in chapters"
            :key="menuChapterIndex"
            :menu-chapter="menuChapter"
            :is-active="activeChapter === menuChapter.title"
            :reset-state="resetState"
            @set-active-chapter="setActiveChapter(menuChapter.title)"
          />
        </div>
      </div>
    </div>
  </SharedUITransitionFade>
</template>
<style lang="scss" scoped>
.header-mobile-nav-section {
  overflow: hidden;
  cursor: auto;
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  min-height: calc(100vh - (100vh - 100%)); // 100vh height for mobile Safari browser
  padding-top: 63px; // 63px - height of sticky header
  background-color: $bgcolor--black;
  transition: all .3s ease;
  @media screen and (max-width: 1012px) {
    padding-top: 48px;
  }

  &__scroll {
    position: relative;
    height: calc(100vh - 63px);
    overflow: auto;
    @media screen and (max-width: 1012px) {
      height: calc(100vh - 48px);
    }
  }

  &__content {
    padding: 109px 0 200px;

    @media screen and (max-width: 768px) {
      padding: 90px 0 200px;
    }
  }

  &__back-btn {
    @include font('Inter', 16px, 400);
    line-height: 21px;
    cursor: pointer;
    border: none;
    width: 100%;
    background: transparent;
    padding: 18px 0;
    color: $text-color--grey-pale;
    text-align: left;
    letter-spacing: -.04em;
    transition: all .15s ease;
    &:hover {
      color: $text-color--red;
    }
  }
}
</style>
