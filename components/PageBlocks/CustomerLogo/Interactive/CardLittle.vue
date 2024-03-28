<script setup lang="ts">
import type { ICustomerLogoInteractiveCard } from '~/components/PageBlocks/CustomerLogo/interfaces/ICustomerLogoInteractive'

interface Props {
  cardInstance: ICustomerLogoInteractiveCard
  littleCardsLength: number
}

const {
  cardInstance,
  littleCardsLength,
} = withDefaults(defineProps<Props>(), {
  littleCardsLength: 0,
})

const emit = defineEmits(['little-card-click'])
const {
  getCardWidth,
  logo,
  colorTheme,
} = cardInstance
const clickHandler = () => cardInstance.clickHandler(emit)
</script>
<template>
  <button
    class="customer-logo-interactive-card-little"
    :class="`customer-logo-interactive-card-little--${colorTheme}`"
    :style="`flex-basis: ${getCardWidth(littleCardsLength)}%`"
    @click="clickHandler"
  >
    <NuxtImg
      v-if="logo.url"
      provider="prismic"
      loading="lazy"
      :src="logo.url"
      :alt="logo.alt || cardInstance.title || 'Logo icon'"
      width="110"
      height="110"
      class="customer-logo-interactive-card-little__image"
    />
  </button>
</template>
<style lang="scss" scoped>
.customer-logo-interactive-card-little {
  background: #1D1D1F;
  border-radius: 9px;
  border: none;
  flex: 1 1;
  box-sizing: border-box;
  padding: 17px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  min-height: 146px;
  max-height: 146px;

  &--white {
    background: $bgcolor--silver;
  }

  &__image {
    width: 100%;
    height: auto;
    max-width: 110px;
    max-height: 110px;
    object-fit: cover;
    display: block;
  }

  @media screen and (max-width: 1160px) {
    min-height: 120px;
    max-height: 120px;
  }

  @media screen and (max-width: 620px) {
    min-height: 100px;
    max-height: 100px;
  }
}
</style>
