<script setup lang="ts">
import { Footer } from '~/components/Widgets/Footer/classes/Footer'
import {
  type FooterPrismicData,
  transformationFooterData,
} from '~/components/Widgets/Footer/helpers/transformationFooterData'
import type { FooterProps } from '~/components/Widgets/Footer/interfaces/IFooter'
import { fetchFooter } from '~/components/Widgets/Footer/helpers/fetchFooter'

const { data } = await useAsyncData('footer', () => fetchFooter())
const {
  presentations,
  currentRootRoute,
  activeLink,
  isHovered,
  goToPage,
  icons,
  activeColumnIndex,
  columns,
  activeSectionIndex,
  onChangeColumnAndSection,
  contacts,
  socials,
  subscribeFormBlock,
  setCurrentRoute,
  mobileBreakpoint,
  animationIconsRef,
  topLineSeparatorRef,
} = new Footer(transformationFooterData(data.value as FooterPrismicData) as FooterProps)

const router = useRouter()

provide('presentationLinks', presentations)
provide('currentRootRoute', currentRootRoute)
provide('footerActiveLink', activeLink)
provide('isHovered', isHovered)
provide('mobileBreakpoint', mobileBreakpoint)

const clickHandler = (path: string) => goToPage(path, router)

useCurrentRoute(setCurrentRoute)
</script>
<template>
  <footer
    class="footer"
  >
    <div
      class="container footer__container"
    >
      <div
        id="footer__top-line"
        class="footer__top-line"
      />
      <div
        v-if="icons && icons.length"
        class="footer__animated-icons"
      >
        <div
          id="footer__animated-top-line-separator"
          ref="topLineSeparatorRef"
          class="footer__animated-top-line-separator"
        />
        <img
          v-for="(icon, index) in icons"
          ref="animationIconsRef"
          :key="`animation-icon-${index}`"
          loading="lazy"
          :src="icon.url"
          :alt="icon.alt || 'Image'"
          width="68"
          height="58"
          class="footer__animated-icon"
          :class="[`footer__animated-icon--${index}`,
                   {'footer__animated-icon--active': activeColumnIndex === index}]"
        >
      </div>
      <div class="footer__content-wrapper">
        <div class="footer__content footer__content--left-section">
          <LazyWidgetsFooterUINavbar
            v-if="columns && columns.length"
            :navigations="columns"
            :go-to-page="clickHandler"
            :active-column-index="activeColumnIndex"
            :active-section-index="activeSectionIndex"
            :on-change-active-column-and-section="onChangeColumnAndSection"
          />
        </div>
        <div class="footer__content footer__content--right-section">
          <LazyWidgetsFooterUIContacts
            v-if="contacts && contacts.emailTitle && contacts.email"
            :contacts="contacts"
          />
          <LazyWidgetsSocialNetworks
            v-if="socials.items && socials.items.length"
            :social-networks="socials.items"
            class="footer__social-networks"
          />
          <div class="footer__content-subscribe-form">
            <LazyWidgetsFormSubscribeFormBlock
              :subscribe-form-block-instance="subscribeFormBlock"
              form-uid="footer"
            />
          </div>
          <LazyWidgetsFooterUIStaticNavigations />
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  position: relative;
  padding-top: 65px;
  padding-bottom: 130px;
  @media screen and (max-width: 991px) {
    padding-top: 48px;
    padding-bottom: 46px;
  }

  :deep(.social-networks) {
      margin: 0 -8px;
  }

  &__container {
    overflow: hidden;
  }

  &__top-line {
    width: 100%;
    margin: 8px 0 55px;
    height: 1px;
    border: 1px none $border-color--red-opacity;
    border-top-style: solid;
    @media screen and (max-width: 991px) {
      display: none;
    }
  }

  &__content {
    &-wrapper {
      display: flex;
      @media screen and (max-width: 991px) {
        display: block;
      }
    }

    &--left-section {
      width: 66.66%;
      @media screen and (max-width: 991px) {
        display: none;
      }
    }

    &--right-section {
      @media screen and (min-width: 992px) {
        width: 33.33%;
        padding-left: 60px;
        border-left: 1px solid $border-color--grey-05-opacity;
      }
      @media screen and (min-width: 993px) and (max-width: 1320px) {
        padding-left: 25px;
      }
    }

    &-subscribe-form {
      margin-top: 38px;
    }
  }

  &__animated {
    &-top-line-separator {
      background-color: $bgcolor--black;
      position: absolute;
      top: 63px;
      width: 68px;
      height: 20px;
      z-index: 4;
      transition: all;
      transition-timing-function: cubic-bezier(1, 0, .52, 1.65);
      transition-duration: 0.7s;
      left: 90px;
      @media screen and (max-width: 991px) {
        display: none;
      }
      @media screen and (min-width: 1420px) {
        left: calc((100vw - 1240px) / 2);
      }
    }

    &-icons {
      @media screen and (max-width: 991px) {
        display: none;
      }
    }

    &-icon {
      width: 68px;
      z-index: 5;
      transition: opacity .2s;
      position: absolute;
      top: 44px;
      opacity: 0;
      display: flex;
      justify-content: center;

      &--active {
        opacity: 1;
        transition-delay: 0.4s;
      }
    }
  }

  &__social-networks {
    @media screen and (max-width: 991px) {
      width: 100%;
    }
  }
}

</style>
