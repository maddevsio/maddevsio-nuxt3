<script setup lang="ts">
import type { PropType } from 'vue'
import type { IMenuLink } from '~/components/Widgets/shared/interfaces/IMenuLink'

defineProps({
  itemLink: {
    type: Object as PropType<IMenuLink>,
    default: () => ({}),
  },
})

const linkClickEvent = (event: Event, cb: Function) => {
  cb(event, 'Footer', getPrevRoutePath())
}

const footerActiveLink = inject('footerActiveLink')
const isHovered = inject('isHovered')
</script>
<template>
  <div>
    <NuxtLink
      :to="itemLink.url"
      data-testid="menu-item-internal-link"
      class="footer-menu__item-link"
      :class="{'footer-menu__item-link--active': itemLink.url === footerActiveLink && !isHovered}"
      @click="linkClickEvent($event, itemLink.sendAnalyticsEvent)"
    >
      {{ itemLink.name }}
    </NuxtLink>
  </div>
</template>
<style lang="scss" scoped>
.footer-menu {
  &__item-link {
    color: $text-color--white-primary;
    font-size: 12px;
    text-transform: capitalize;
    transition: color .2s;

    &--active  {
      color: $text-color--red;
    }

    &:hover {
      color: $text-color--red;
    }
  }
}
</style>
