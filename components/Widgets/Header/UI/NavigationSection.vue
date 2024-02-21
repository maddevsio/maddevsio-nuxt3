<script setup lang="ts">
import type { PropType } from 'vue'
import type { IHeaderMenuPost } from '~/components/Widgets/Header/interfaces/IHeaderMenuPost'
import type { IHeader } from '~/components/Widgets/Header/interfaces/IHeader'
import type { IHeaderMenuChapter } from '~/components/Widgets/Header/interfaces/IHeaderMenuChapter'

const {
  navigationSection,
  showSection,
  post,
} = defineProps({
  navigationSection: {
    type: Array as PropType<IHeaderMenuChapter[]>,
    default: () => [],
  },

  showSection: {
    type: Boolean,
    default: false,
  },

  post: {
    type: Object as PropType<IHeaderMenuPost>,
    default: () => ({}),
  },
})

const sectionPaddingTop = 19
const headerStore = useHeaderStore()
const resetState = inject('resetState') as IHeader['resetState']
const linkClickEvent = (event: Event, cb: Function, path: string) => {
  cb(event, 'Header', getPrevRoutePath())
  resetState(path)
}

const headerVar = computed(() => ({
  '--headerHeight': `${ headerStore.headerHeight - (headerStore.headerHeight - sectionPaddingTop) }px`,
}))
</script>
<template>
  <div
    class="header-navigation-section"
    :class="{ 'header-navigation-section--active': showSection }"
    :style="headerVar"
  >
    <div class="header-navigation-section__inner container">
      <div class="header-navigation-section__menus">
        <div
          v-for="(section, sectionIndex) in navigationSection"
          :key="sectionIndex"
          class="header-navigation-section__menu"
        >
          <p
            v-if="section.title"
            class="header-navigation-section__title"
          >
            {{ section.title }}
          </p>
          <ul class="header-navigation-section__menu-list">
            <li
              v-for="(navItem, navItemIndex) in section.menus"
              :key="`${navItem.name}-${navItemIndex}`"
              class="header-navigation-section__menu-list-item"
            >
              <NuxtLink
                :to="navItem.url"
                class="header-navigation-section__menu-list-link"
                @click="linkClickEvent($event, navItem.sendAnalyticsEvent, navItem.url)"
              >
                {{ navItem.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <hr
        v-if="Object.keys(post).length"
        class="header-navigation-section__divider"
      >
      <LazyWidgetsHeaderUIHeaderPost
        v-if="Object.keys(post).length && showSection"
        v-bind="post"
        class="header-navigation-section__post"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header-navigation-section {
  overflow: hidden;
  cursor: auto;
  width: 100%;
  height: auto;
  min-height: 275px;
  position: absolute;
  right: 0;
  left: 0;
  z-index: 20;
  padding: 20px 0;
  background: rgba(17, 17, 17, 0.85);
  backdrop-filter: blur(16px);
  opacity: 0;
  transform-origin: top;
  transform: scaleY(0) translateY(var(--headerHeight));
  pointer-events: none;
  visibility: hidden;
  transition: all .5s ease;
  will-change: opacity, transform, pointer-events, visibility;
  &--active {
    opacity: 1;
    transform: scaleY(1) translateY(var(--headerHeight));
    pointer-events: auto;
    visibility: visible;
  }

  &__inner {
    display: flex;
  }

  &__menus {
    display: flex;
    flex-grow: 1;
    gap: 120px;
    width: calc(100% + 40px);
  }

  &__title {
    @include font('Inter', 15px, 400);
    line-height: 25px;
    color: $text-color--grey-pale;
    margin-bottom: 2px;
  }

  &__divider {
    display: block;
    width: 2px;
    border: 0 solid;
    background-color: $bgcolor--red;
    margin: 0 24px 0 12px;
  }

  &__menu-list {
    display: flex;
    flex-direction: column;
  }

  &__menu-list-link {
    @include font('Inter', 15px, 400);
    line-height: 25px;
    letter-spacing: -0.1px;
    display: block;
    padding: 8px 0;
    width: 100%;
    color: $text-color--white-primary;
    transition: all .15s ease;
    position: relative;

    &::before {
      content: '';
      display: block;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: -20px;
      transform: translateY(-50%) scale(1);
      width: 10px;
      height: 3px;
      background-color: $bgcolor--red;
      transition: all .15s ease-in;
    }

    &:hover {
      & {
        color: $text-color--red;
      }

      &::before {
        opacity: 1;
      }
    }
  }

  &__post {
    width: 100%;
    max-width: 540px;
    overflow: hidden;

    @media screen and (max-width: 1360px) {
      max-width: 55%;
    }
  }
}

.router-link-exact-active {
  color: $text-color--red !important;

  &::before {
    opacity: 1;
  }
}

.router-link-active {
  color: $text-color--red !important;

  &::before {
    opacity: 1;
  }
}
</style>
