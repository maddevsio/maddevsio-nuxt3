<script setup lang="ts">
import type { PropType } from 'vue'
import type { IFooterNavbarSection } from '~/components/Widgets/Footer/interfaces/IFooterNavbarSection'

defineProps({
  section: {
    type: Object as PropType<IFooterNavbarSection>,
    default: () => ({}),
    required: true,
  },
})
</script>
<template>
  <div
    class="footer-section"
  >
    <div class="footer-section__content">
      <div class="footer-section__menus">
        <LazyWidgetsFooterUINavbarMenu
          v-for="(menu, idx) in section.menus"
          :key="menu.subtitle || `menu-${idx}`"
          :menu-name="menu.subtitle"
          :menu-routes="menu.links"
        />
      </div>
    </div>
  </div>
</template>
