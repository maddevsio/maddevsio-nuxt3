<script setup lang="ts">
import type { PropType } from 'vue'
import type { IFooter } from '~/components/Widgets/Footer/interfaces/IFooter'
import type { IFooterNavbarColumn } from '~/components/Widgets/Footer/interfaces/IFooterNavbarColumn'

const { onChangeActiveColumnAndSection, goToPage } = defineProps({
  navigations: {
    type: Array as PropType<IFooterNavbarColumn[]>,
    required: true,
    default: () => ([]),
  },

  goToPage: {
    type: Function as PropType<IFooter['goToPage']>,
    required: true,
    default: () => {},
  },

  onChangeActiveColumnAndSection: {
    type: Function as PropType<IFooter['onChangeColumnAndSection']>,
    required: true,
  },

  activeColumnIndex: {
    type: Number,
    required: true,
    default: 0,
  },

  activeSectionIndex: {
    type: Number,
    required: true,
    default: 0,
  },
})

const router = useRouter()

const clickHandler = (_: any, path: string) => goToPage(path, router)
const mobileBreakpoint = inject('mobileBreakpoint') as number
const { isMobile } = useCheckMobile(mobileBreakpoint)

onMounted(() => {
  if (!isMobile.value) {
    // @ts-ignore
    window.addEventListener('resize', onChangeActiveColumnAndSection)
  }
})

onUnmounted(() => {
  if (!isMobile.value) {
    // @ts-ignore
    window.removeEventListener('resize', onChangeActiveColumnAndSection)
  }
})
</script>
<template>
  <div
    class="footer-navbar"
    @mouseleave="onChangeActiveColumnAndSection($event, undefined, undefined)"
  >
    <ul
      v-for="(column, columnIndex) in navigations"
      :key="`footer-column-${columnIndex}`"
      :class="`footer-nav-column--${columnIndex}`"
      class="footer-main-navigation footer-nav-column"
    >
      <li
        v-for="(section, sectionIndex) in column.sections"
        :key="section.title"
        class="footer-sub-navigation__column"
        :class="{'footer-sub-navigation__column--active': activeSectionIndex === sectionIndex && activeColumnIndex === columnIndex }"
        @mouseenter="onChangeActiveColumnAndSection($event, columnIndex, sectionIndex)"
      >
        <span
          class="footer-main-navigation__column-title"
          :class="{'footer-main-navigation__column-title--link': section.link}"
          @click="clickHandler($event, section.link)"
        >
          {{ section.title }}
        </span>
        <hr class="footer-sub-navigation__separator">

        <LazyWidgetsFooterUINavbarColumn
          :section="section"
        />
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  &-navbar {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    justify-content: space-between;
    margin-right: 50px;
    align-items: flex-start;
  }

  &-main-navigation {
    display: flex;
    flex-direction: column;

    &__column-title {
      font-size: 18px;
      text-transform: capitalize;
      color: $text-color--white-primary;
      transition: color .2s;
      &--link {
        cursor: pointer;
      }
    }
  }

  &-sub-navigation {
    &__column--active {
      .footer-main-navigation__column-title {
        color: $text-color--red;
      }
      .footer-sub-navigation__separator {
        opacity: 1;
        border-color: $border-color--red;
      }
    }

    &__separator {
      border: 1px none $border-color--grey-footer;
      opacity: 0.5;
      border-top-style: solid;
      margin: 6px 0 15px;
      transition: border 0.2s;
    }
  }
}
</style>
