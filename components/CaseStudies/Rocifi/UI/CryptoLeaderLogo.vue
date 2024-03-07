<script setup lang="ts">
import type { PropType } from 'vue'

interface Logo {
  name: string
  alt: string
  width: number
  height: number
}

defineProps({
  logo: {
    type: Object as PropType<Logo>,
    default: () => ({}),
  },

  delay: {
    type: Number,
    default: 0,
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div
    class="crypto-leader-logos__logo"
  >
    <div class="crypto-leader-logos__logo-wrapper">
      <img
        loading="lazy"
        :src="$getMediaFromS3(`images/Cases/rocifi/svg/${logo.name}.svg`)"
        :alt="logo.alt"
        :width="logo.width"
        :height="logo.height"
        :class="`crypto-leader-logos__logo-icon crypto-leader-logos__logo--${logo.name}`"
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.crypto-leader-logos__logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22.6%;
  min-height: 83px;
  max-height: 83px;
  background-color: rgba(35, 19, 82, 0.8);
  border-radius: 9px;
  padding: 4px 4%;
  box-sizing: border-box;

  &-icon {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
    opacity: 0.8;
  }

  @media screen and (max-width: 930px) {
    width: 22%;
  }

  @media screen and (max-width: 820px) {
    width: 48%;
    min-height: 71px;
    max-height: 71px;

    &--icon-scc-invest {
      width: 59px;
      height: 59px;
    }
  }
}
</style>
