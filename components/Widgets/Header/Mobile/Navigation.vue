<script setup lang="ts">
import type { PropType } from 'vue'
import type { IHeader } from '~/components/Widgets/Header/interfaces/IHeader'

const { header } = defineProps({
  header: {
    type: Object as PropType<IHeader>,
    default: () => ({}),
  },
})
useCurrentRoute(header.menu.setCurrentRoute)
const {
  currentRootRoute,
} = header.menu
</script>
<template>
  <ul class="header-mobile__navigation-list">
    <li
      v-for="(menuItem, menuItemIndex) in header.menu.navigationList"
      :key="menuItemIndex"
      class="header-mobile__navigation-item"
    >
      <LazyWidgetsHeaderMobileNavigationItemButton
        :label="menuItem.mainNav.name"
        :show-icon="menuItem.mainNav.showIcon"
        :icon="menuItem.mainNav.icon"
        :have-chapters="Boolean(menuItem.chapters.length)"
        :url="menuItem.mainNav.url"
        :current-root-route="currentRootRoute"
        emit-event-name="set-active-mobile-sub-menu"
        @set-active-mobile-sub-menu="header.menu.setActiveMobileSubMenu(menuItem.mainNav.name)"
      />
      <LazyWidgetsHeaderMobileNavSection
        :chapters="menuItem.chapters"
        :show-section="header.menu.activeMobileSubNavigation.value === menuItem.mainNav.name"
        :set-active-chapter="header.menu.setActiveChapter"
        :active-chapter="header.menu.activeChapter.value"
        :reset-state="header.resetState"
        @close-section="header.menu.setActiveMobileSubMenu('')"
      />
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.header-mobile {
  &__navigation {
    &-item {
      display: block;
      border-bottom: 1px solid $border-color--grey-dark-transparent;

      &:first-of-type {
        border-top: 1px solid $border-color--grey-dark-transparent;
      }
    }
  }
}
</style>
