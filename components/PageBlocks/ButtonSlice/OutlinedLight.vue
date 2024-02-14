<script setup lang="ts">
import { OutlinedLightButton } from '~/components/PageBlocks/ButtonSlice/classes/OutlinedLightButton'

const { slice } = defineProps({
  slice: {
    type: Object,
    default: () => ({}),
  },
})

const outlinedLightButton = new OutlinedLightButton(slice)
const {
  sliceBackground,
  fullWidth,
  maxWidth,
  buttonText,
  typeOfLink,
  internalLink,
  externalLink,
} = outlinedLightButton
</script>
<template>
  <div
    class="outlined-light-button-slice"
    :style="{ 'backgroundColor': sliceBackground }"
  >
    <div class="container">
      <div
        class="outlined-light-button-slice__button"
        :class="{ 'outlined-light-button-slice__button--full-width': fullWidth }"
        :style="{ 'maxWidth': maxWidth, 'width': maxWidth }"
      >
        <LazySharedUIButtonPowerCustom
          v-if="buttonText"
          :label="buttonText"
          have-border
          is-outlined
          hover-background-color="#fff"
          border-color="#A0A0A1"
          label-color="#A0A0A1"
          show-arrow
          hover-label-color="#111111"
          is-link
          :is-external-link="typeOfLink === 'external'"
          :link-to-page="typeOfLink === 'internal' ? internalLink : externalLink"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.outlined-light-button-slice {
  &__button {
    width: max-content;

    &--full-width {
      width: 100%;
    }
  }
}
</style>
