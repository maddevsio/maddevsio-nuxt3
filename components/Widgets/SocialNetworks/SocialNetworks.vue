<script setup lang="ts">
import type { PropType } from 'vue'
import type { SocialNetwork } from '~/components/Widgets/SocialNetworks/interfaces/ISocialNetworks'

defineProps({
  socialNetworks: {
    type: Array as PropType<SocialNetwork[]>,
    default: () => [],
  },
})
</script>
<template>
  <ul class="social-networks">
    <li
      v-for="network in socialNetworks"
      :key="`network-${network.link.url.split('/').filter(Boolean).join('-')}`"
      class="social-networks__link-wrapper"
    >
      <a
        :href="network.link && network.link.url ? network.link.url : ''"
        class="social-networks__link"
        target="_blank"
        rel="noopener"
      >
        <img
          v-if="network.icon.url"
          loading="lazy"
          class="social-networks__icon"
          :src="network.icon.url"
          :alt="network.icon.alt || 'Image'"
          width="42"
          height="42"
        >
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@mixin social-network-list-grid {
  .social-networks {
    display: grid;
    grid-template-columns: repeat(4, max-content);
  }
}

.social-networks {
  display: flex;
  justify-content: space-between;

  &__icon {
    display: block;
  }
}

@media screen and (max-width: 640px) {
  @include social-network-list-grid;
}
</style>
