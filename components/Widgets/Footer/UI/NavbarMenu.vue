<script setup lang="ts">
import type { PropType } from 'vue'
import type { IMenuLink } from '~/components/Widgets/shared/interfaces/IMenuLink'

defineProps({
  menuName: {
    type: String,
    default: '',
  },

  menuRoutes: {
    type: Array as PropType<IMenuLink[]>,
    default: () => [],
  },
})
</script>
<template>
  <div
    class="footer-menu"
  >
    <p
      v-if="menuName"
      class="footer-menu__name"
    >
      {{ menuName }}
    </p>
    <ul class="footer-menu__list">
      <li
        v-for="link in menuRoutes"
        :key="link.name"
        class="footer-menu__item"
      >
        <LazyWidgetsFooterUINavbarMenuLink
          v-if="link.name"
          :item-link="link"
        />
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>

a.router-link-exact-active {
  color: $text-color--red !important;

  &::before {
    opacity: 1;
  }
}

.footer-menu {
  margin-bottom: 30px;

  &__name {
    color: $text-color--grey-pale;
    font-size: 12px;
    margin-bottom: 15px;
    text-transform: capitalize;
    font-weight: normal;
  }

  &__item {
    margin-bottom: 8px;
  }
}
</style>
