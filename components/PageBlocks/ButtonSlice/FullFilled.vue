<script setup lang="ts">
import type { PropType } from 'vue'
import { ButtonFullFilled } from '~/components/PageBlocks/ButtonSlice/classes/ButtonFullFilled'
import type { ButtonFullFilledProps } from '~/components/PageBlocks/ButtonSlice/interfaces/IButtonFullFilled'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<ButtonFullFilledProps>,
    default: () => ({}),
  },
})

const buttonFullFilled = new ButtonFullFilled(slice)
const {
  backgroundColor,
  text,
  alignment,
  fullWidth,
  link,
  buttonStyles,
  target,
} = buttonFullFilled
</script>

<template>
  <div
    class="button-slice"
    :style="{ backgroundColor }"
  >
    <div
      class="container"
      :class="`button-slice__content--align-${alignment}`"
      data-testid="button-slice-container"
    >
      <LazySharedUIButton
        class="button-slice__button button-slice__button--normal"
        :full-width="fullWidth"
        :style="buttonStyles"
        :to="link"
        data-testid="button-ui"
        is-link
        :target="target"
      >
        {{ text }}
      </LazySharedUIButton>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.button-slice {
  display: block;
  margin-top: -1px;

  &__content {
    &--align {
      &-center {
        text-align: center;
      }
      &-right {
        text-align: right;
      }
    }
  }

  &__button {
    box-sizing: border-box;
    padding: 16px 24px;
    line-height: 20px;
    &--normal:hover {
      background-color: lighten($bgcolor--red, 10%) !important;
    }
  }
}
</style>
