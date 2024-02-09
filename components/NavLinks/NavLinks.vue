<script setup lang="ts">
import type { NavLinksProps } from '~/components/NavLinks/interfaces/INavLinks'
import { NavLinks } from '~/components/NavLinks/classes/NavLinks'

interface Props {
  slice: NavLinksProps
}
const { slice } = defineProps<Props>()
const router = useRouter()
const {
  sliceBackgroundColor,
  prevLink,
  prevLinkText,
  nextLink,
  nextLinkText,
  position,
  disabledLink,
  colorThemeClass,
  redirectToUrl,
} = new NavLinks(slice, router)
</script>
<template>
  <section
    class="nav-link-slice"
    :class="colorConverterToClass('slice-bg', sliceBackgroundColor)"
  >
    <div
      data-testid="nav-link__container"
      class="container"
    >
      <div
        class="nav-link-slice__links"
        :class="[
          `nav-link-slice__links-${position}`,
        ]"
      >
        <LazyNavLinksUINavLink
          :link="prevLink"
          :link-text="prevLinkText"
          :tag="disabledLink === 'previous-page' || disabledLink === 'both' ? 'p' : 'a'"
          class="nav-link-slice__link"
          :class="colorThemeClass"
          :redirect-to-url="redirectToUrl"
        />
        <LazyNavLinksUINavLink
          :link="nextLink"
          :link-text="nextLinkText"
          :tag="disabledLink === 'next-page' || disabledLink === 'both' ? 'p' : 'a'"
          class="nav-link-slice__link"
          :class="colorThemeClass"
          :redirect-to-url="redirectToUrl"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/colorClasses/colors.scss';

.nav-link-slice {
  &__links {
    display: flex;
    justify-content: center;

    // Positions
    &-left {
      justify-content: flex-start;
    }

    &-center {
      justify-content: center;
    }

    &-right {
      justify-content: flex-end;
    }

    p {
      cursor: default;
      color: $text-color--grey-opacity-20-percent;
    }

    a {
      transition: all .15s ease;

      &:hover {
        color: $text-color--red;
      }
    }
  }

  &__link {
    @include font("Inter", 16px, 500);
    line-height: 24px;
    text-align: center;
    position: relative;

    &-white {
      color: $text-color--black-lighter;

      &:first-child {
        border-right: 1px solid $text-color--black-lighter;
      }
    }
    &-black {
      color: $text-color--white;

      &:first-child {
        border-right: 1px solid $text-color--white;
      }
    }

    &:before {
      content: "";
      position: absolute;
      top: 8px;
      width: 8px;
      height: 8px;
      border-width: 0 0 1px 1px;
      border-style: solid;
    }

    &:after {
      content: "";
      position: absolute;
      top: 12px;
      height: 1px;
      width: 11px;
      box-shadow: inset 0 0 0 32px;
      transform-origin: right top;
    }

    &:first-child {
      padding: 0 40px 0 30px;

      &:before {
        left: 0;
        transform: rotate(45deg);
      }

      &:after {
        left: -1px;
      }
    }
    &:last-child {
      padding: 0 30px 0 40px;

      &:before {
        right: 0;
        transform: rotate(230deg);
      }

      &:after {
        right: -1px;
      }
    }
  }

  @media screen and (max-width: 450px) {
    &__links {
      justify-content: space-between;
    }

    &__link {
      &:first-child {
        padding: 0 10px 0 30px;
        border: none;
      }

      &:last-child {
        padding: 0 30px 0 10px;
      }
    }
  }
}
</style>
