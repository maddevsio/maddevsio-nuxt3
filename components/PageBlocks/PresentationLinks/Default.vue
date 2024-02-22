<script setup lang="ts">
import type { PropType } from 'vue'
import type { PresentationLink } from '~/components/Widgets/Footer/interfaces/IPresentationLinks'

const { links } = defineProps({
  links: {
    type: Array as PropType<PresentationLink[]>,
    default: () => [],
  },
})
</script>
<template>
  <div class="presentation-links">
    <a
      v-for="item in links"
      :key="item.link.url"
      :href="item.link.url"
      class="presentation-links__item"
      target="_blank"
    >
      {{ item.name }}
    </a>
  </div>
</template>
<style lang="scss" scoped>
.presentation-links {
  margin-bottom: 8px;
  &__item {
    color: $text-color--grey;
    display: block;
    @include font('inter', 14px, 400);
    opacity: 0.7;

    @media screen and (max-width: 1320px) {
      font-size: 12px;
    }
    transition: color .2s;

    &:hover {
      color: $text-color--red;
    }

  }

  @media screen and (min-width: 992px) {
    margin-top: 30px;
  }
}
</style>
