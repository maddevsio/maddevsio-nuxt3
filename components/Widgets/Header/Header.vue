<script setup lang="ts">
import { Header } from '~/components/Widgets/Header/classes/Header'
import { HeaderMenu } from '~/components/Widgets/Header/classes/HeaderMenu'
import { transformationHeaderData } from '~/components/Widgets/Header/helpers/transformationHeaderData'
import { fetchHeader } from '~/components/Widgets/Header/helpers/fetchHeader'

const { data } = await useAsyncData('header', () => fetchHeader())
const header = new Header(new HeaderMenu(transformationHeaderData(data.value)))
const {
  getHeaderHeight,
  setStylesForHeader,
  observeIsMobile,
  modalContactMeRef,
  resetState,
  menu,
  headerIsTransparent,
  logoTextIsActive,
  showModal,
  isMobile,
  isActiveMobileMenu,
  toggleMobileMenu,
} = header

// const { headerPlateData } = storeToRefs(useHeaderPlateStore())
const route = useRoute()
const headerRef = ref<Element | null>(null)
const isBlogPage = computed(
  () => (route.name as string).includes('blog-uid') ||
    (route.name as string).includes('blog-search-result') ||
    (route.name as string).includes('customer-university-uid'),
)
provide('resetState', resetState)

onMounted(() => {
  getHeaderHeight(headerRef.value!)
  setStylesForHeader()
  observeIsMobile()
  window.addEventListener('scroll', setStylesForHeader)
  window.addEventListener('resize', observeIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('scroll', setStylesForHeader)
  window.removeEventListener('resize', observeIsMobile)
})
</script>
<template>
  <div
    id="header"
    class="header-wrapper"
  >
    <header
      ref="headerRef"
      class="header"
      :class="{ 'header--transparent-bg': headerIsTransparent }"
      @mouseleave="menu.setActiveSubMenu('')"
    >
      <WidgetsHeaderUIPlate />
      <div
        id="header-container"
        class="container header__inner"
      >
        <NuxtLink
          to="/"
          class="header__logo"
          @click="resetState('/')"
        >
          <WidgetsHeaderUILogo
            :show-text-logo="logoTextIsActive"
          />
        </NuxtLink>
        <nav
          class="header__main-nav"
        >
          <WidgetsHeaderUINavigation
            :navigation-data="menu"
          />
        </nav>
        <LazyWidgetsHeaderUIHSearchPanel
          v-if="isBlogPage"
        />
        <WidgetsHeaderUIContactMeButton
          :show-modal="showModal"
        />
        <LazyWidgetsHeaderUIBurgerMenuButton
          v-if="isMobile"
          :is-active-mobile-menu="isActiveMobileMenu"
          :toggle-mobile-menu="toggleMobileMenu"
        />
        <div class="header__crumbs-wrapper">
          <Transition name="fade">
            <LazyWidgetsHeaderUICrumbs
              v-show="logoTextIsActive"
            />
          </Transition>
        </div>
      </div>
      <ClientOnly>
        <Teleport to="body">
          <LazyWidgetsModalContactMe
            ref="modalContactMeRef"
            form-uid="header-form"
            location="Header"
          />
        </Teleport>
      </ClientOnly>
    </header>
    <LazyWidgetsHeaderMobile
      v-if="header.isActiveMobileMenu.value && header.isMobile.value"
      :header="header"
      @open-modal="header.showModal()"
    />
  </div>
</template>
<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 10;
}

.header {
  width: 100%;
  background-color: $bgcolor--black;
  position: relative;
  z-index: 3;
  transition: 0.3s;

  &--transparent-bg {
    background-color: transparent;
  }

  &__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 66px;
    @media screen and (max-width: 1026px) {
      justify-content: space-between;
      padding: 0 10px 0 25px;
      max-width: 100%;
      height: 48px;
      flex-wrap: unset;
    }
  }

  &__crumbs-wrapper {
    position: relative;
    width: 100%;

    @media screen and (max-width: 1026px) {
      position: absolute;
      bottom: -20px;
      left: 25px;
      width: 600px;
    }
  }

  &__logo {
    display: inline-block;
    width: 38px;
    min-width: 34px;
    height: 58px;
    transform: translateX(-100%);
    padding-top: 8px;
    margin-left: -33px;
    @media screen and (max-width: 1026px) {
      transform: translateX(0);
      margin-left: 0;
      padding-top: 22px;
      width: 28px;
      min-width: 28px;
      height: 49px;
    }

    svg {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__main-nav {
    flex-grow: 1;
    @media screen and (max-width: 1026px) {
      display: none;
    }
  }

  &__section {
    color: $text-color--white-primary;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
