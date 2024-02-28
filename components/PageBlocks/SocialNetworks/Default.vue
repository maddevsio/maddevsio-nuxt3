<script setup lang="ts">
import type { PropType } from 'vue'
import { type ISocialNetworks } from '~/components/Widgets/SocialNetworks/interfaces/ISocialNetworks'
import { SocialNetworks } from '~/components/Widgets/SocialNetworks/classes/SocialNetworks'

const props = defineProps({
  slice: {
    type: Object as PropType<ISocialNetworks>,
    default: () => ({}),
  },
})

const { items } = new SocialNetworks(props.slice.items)
</script>

<template>
  <div class="social-networks-slice">
    <div class="container">
      <LazyWidgetsSocialNetworks
        :social-networks="items"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.social-networks-slice {
  overflow: hidden;
  :deep(.social-networks) {
    justify-content: flex-start;
    gap: 66px;

    @media screen and (max-width: 768px) {
      gap: 42px;
    }
  }

  @media screen and (max-width: 500px) {
    :deep(.social-networks) {
      gap: 13px 42px;
    }

    :deep(.social-networks__icon) {
      width: 35px;
      min-width: 35px;
      height: 35px;
    }
  }
}
</style>
