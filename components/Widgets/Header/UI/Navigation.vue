<script setup lang="ts">
import type { PropType } from 'vue'
import type { IHeaderMenu } from '~/components/Widgets/Header/interfaces/IHeaderMenu'
import type { IHeaderMenuItem } from '~/components/Widgets/Header/interfaces/IHeaderMenuItem'
import type { IHeader } from '~/components/Widgets/Header/interfaces/IHeader'

const props = defineProps({
  navigationData: {
    type: Object as PropType<IHeaderMenu<IHeaderMenuItem[]>>,
    default: () => ({}),
  },
})

const pageIsLoad = ref(false)
const nuxtApp = useNuxtApp()

const resetState = inject('resetState') as IHeader['resetState']
const linkClickEvent = (event: Event, cb: Function, path: string) => {
  cb(event, 'Header', getPrevRoutePath())
  resetState(path)
}

useCurrentRoute(props.navigationData.setCurrentRoute)

const {
  navigationList,
  activeSubNavigation,
  currentRootRoute,
  setActiveSubMenu,
} = props.navigationData

const mouseEnterHandler = (name: string) => {
  if (pageIsLoad.value) {
    setActiveSubMenu(name)
  }
}

nuxtApp.hook('page:finish', () => {
  pageIsLoad.value = true
})
</script>
<template>
  <ul
    class="header__navigation"
  >
    <li
      v-for="(menuItem, menuItemIndex) in navigationList"
      :key="`${menuItem.mainNav.name}-${menuItemIndex}`"
      class="header__navigation-item"
      :class="{ 'header__navigation-item--active': activeSubNavigation === menuItem.mainNav.name }"
    >
      <NuxtLink
        v-if="menuItem.mainNav.url"
        :to="menuItem.mainNav.url"
        class="header__navigation-main-link"
        :class="{ 'header__navigation-main-link--active': currentRootRoute === menuItem.mainNav.name }"
        no-prefetch
        @mouseenter="mouseEnterHandler(menuItem.mainNav.name)"
        @click="linkClickEvent($event, menuItem.sendAnalyticsEvent, menuItem.mainNav.url)"
      >
        {{ menuItem.mainNav.name }}
        <img
          v-if="menuItem.mainNav.showIcon && menuItem.mainNav.icon!.url"
          loading="lazy"
          :src="menuItem.mainNav.icon!.url"
          :alt="menuItem.mainNav.icon!.alt || 'Link icon'"
          width="12"
          height="12"
          class="header__navigation-link-icon"
        >
      </NuxtLink>
      <span
        v-else
        class="header__navigation-main-link"
        :class="{ 'header__navigation-main-link--active': currentRootRoute === menuItem.mainNav.name }"
        @mouseenter="mouseEnterHandler(menuItem.mainNav.name)"
      >
        {{ menuItem.mainNav.name }}
      </span>
      <ClientOnly>
        <Transition
          name="fade-collapse"
        >
          <WidgetsHeaderUINavigationSection
            v-if="menuItem.chapters.length && activeSubNavigation === menuItem.mainNav.name"
            :show-section="activeSubNavigation === menuItem.mainNav.name"
            :navigation-section="menuItem.chapters"
            :post="menuItem.post"
          />
        </Transition>
      </ClientOnly>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.header__navigation {
  color: white;
  display: flex;
  gap: 32px;

  &-item {
    &--active {
      .header__navigation-main-link {
        color: $text-color--red;
      }
    }
  }

  &-main-link {
    @include font('Inter', 15px, 400);
    line-height: 25px;
    letter-spacing: -0.1px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 6px;
    color: $text-color--white-primary;
    transition: all .15s ease;

    &--active {
      color: $text-color--red;
    }
  }

  &-link-icon {
    width: 12px;
    height: 12px;
    display: block;
    align-self: flex-start;

    @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
      @supports not (translate: 0) { /* Проверка на версию Safari */
        margin-left: 6px;
      }
    }
  }
}

.router-link-exact-active {
  color: $text-color--red;
}

.fade-collapse-enter-active,
.fade-collapse-leave-active {
  transition: all .5s ease;
  will-change: opacity, transform, pointer-events, visibility;
}

.fade-collapse-enter-from,
.fade-collapse-leave-to {
  opacity: 0;
  transform: scaleY(0);
  pointer-events: auto;
  visibility: hidden;
}
</style>
