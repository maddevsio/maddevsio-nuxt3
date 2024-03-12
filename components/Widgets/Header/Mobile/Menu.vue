<script setup lang="ts">
import type { PropType } from 'vue'
import type { IHeaderMenuChapter } from '~/components/Widgets/Header/interfaces/IHeaderMenuChapter'
import type { IHeader } from '~/components/Widgets/Header/interfaces/IHeader'

defineProps({
  menuChapter: {
    type: Object as PropType<IHeaderMenuChapter>,
    default: () => ({}),
  },

  isActive: {
    type: Boolean,
    default: false,
  },

  resetState: {
    type: Function as PropType<IHeader['resetState']>,
    required: true,
  },
})

defineEmits(['set-active-chapter'])
const route = useRoute()
</script>
<template>
  <div
    class="header-mobile-menu"
    :class="{ 'header-mobile-menu--active': isActive }"
  >
    <LazyWidgetsHeaderMobileNavigationItemButton
      v-show="menuChapter.title"
      :label="menuChapter.title"
      emit-event-name="set-active-chapter"
      :is-active="isActive"
      @set-active-chapter="$emit('set-active-chapter')"
    />
    <LazySharedUITransitionHeight
      :duration="350"
    >
      <ul
        v-show="isActive || !menuChapter.title"
        class="header-mobile-menu__list"
      >
        <li
          v-for="(subMenuItem, subMenuIndex) in menuChapter.menus"
          :key="subMenuIndex"
          class="header-mobile-menu__list-item"
        >
          <NuxtLink
            :to="subMenuItem.url"
            class="header-mobile-menu__page"
            :class="{ 'header-mobile-menu__page--active': route.path.includes(subMenuItem.url) }"
            @click.prevent="resetState"
          >
            {{ subMenuItem.name }}
          </NuxtLink>
        </li>
      </ul>
    </LazySharedUITransitionHeight>
  </div>
</template>
<style lang="scss" scoped>
.header-mobile-menu {
  border-bottom: 1px solid $border-color--grey-dark-transparent;

  &:first-of-type {
    border-top: 1px solid $border-color--grey-dark-transparent;
  }

  &__list {
    overflow: hidden;

    &-item {
      @include font('Inter', 24px, 400);
      line-height: 31px;
      letter-spacing: -0.04em;
      color: $text-color--grey-opacity-20-percent;
      border-top: 1px solid $border-color--grey-dark-transparent;

      &:hover .header-mobile-menu__page {
        color: $text-color--red;
      }

      .header-mobile-menu__page {
        display: block;
        padding: 18px 0;
        color: $text-color--grey-opacity-20-percent;
        transition: all .15s ease;

        &--active {
          color: $text-color--red;

          &::before {
            opacity: 1;
          }
        }

        &.router-link-active {
          color: $text-color--red;
        }
      }
    }
  }
}
</style>
