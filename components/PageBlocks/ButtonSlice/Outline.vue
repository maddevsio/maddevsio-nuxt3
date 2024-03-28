<script setup lang="ts">
import type { PropType } from 'vue'
import { ButtonOutline } from '~/components/PageBlocks/ButtonSlice/classes/ButtonOutline'
import type { ButtonOutlineProps } from '~/components/PageBlocks/ButtonSlice/interfaces/IButtonOutline'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<ButtonOutlineProps>,
    default: () => ({}),
  },
})

const buttonOutline = new ButtonOutline(slice)
const { ourDomain, url } = checkAndExtractDomain(buttonOutline.buttonLink)
const {
  fullWidthClassName,
  buttonBackgroundColorClassName,
  maxWidth,
  buttonText,
} = buttonOutline
</script>
<template>
  <div
    v-if="url"
    :style="{
      backgroundColor: buttonOutline.background,
      marginTop: '-1px',
      padding: '1px 0',
    }"
  >
    <div class="container">
      <NuxtLink
        :to="url"
        :external="!ourDomain"
        :target="ourDomain ? '' : '_blank'"
        class="ui-outlined-button"
        :class="[fullWidthClassName, buttonBackgroundColorClassName]"
        :style="{ maxWidth }"
      >
        {{ buttonText }}
      </NuxtLink>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ui-outlined-button {
  @include font("Inter", 16px, 600);
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  box-shadow: none;
  border-radius: 4px;
  letter-spacing: -0.4px;
  padding: 16px 24px;
  line-height: 20px;
  border: 1px solid;
  transition: 0.4s;

  &--full-width {
    display: flex;
  }

  &--red {
    color: $text-color--red;
    border-color: $border-color--red;
    &:hover {
      background-color: $bgcolor--red;
      color: $text-color--white;
    }
  }

  &--blue {
    color: $text-color--blue;
    border-color: $border-color--blue;
    &:hover {
      background-color: $bgcolor--blue;
      color: $text-color--white;
    }
  }

  &--black {
    color: $text-color--black;
    border-color: $border-color--black;
    &:hover {
      background-color: $bgcolor--black;
      color: $text-color--white;
    }
  }

  &--grey {
    color: $text-color--quote-box;
    border-color: $border-color--grey-pale;
    &:hover {
      background-color: $border-color--grey-pale;
      color: $text-color--white;
    }
  }
}
</style>
