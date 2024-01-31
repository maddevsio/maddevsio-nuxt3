<script setup lang="ts">
import { OutlinedLightButton } from '~/components/ButtonSlice/classes/OutlinedLightButton'

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
// import { defineComponent } from '@nuxtjs/composition-api'
//
// export default defineComponent({
//   name: 'OutlinedLightButton',
//
//   components: {
//     UIButtonPowerCustom: () => import('@/components/shared/UIButtonPowerCustom.vue'),
//   },
//
//   props: {
//     instance: {
//       type: Object,
//       required: true,
//       default: () => ({}),
//     },
//   },
//
//   setup(props) {
//     return {
//       sliceBackground: props.instance.sliceBackground,
//       fullWidth: props.instance.fullWidth,
//       typeOfLink: props.instance.typeOfLink,
//       buttonText: props.instance.buttonText,
//       internalLink: props.instance.internalLink,
//       externalLink: props.instance.externalLink,
//       maxWidth: props.instance.maxWidth,
//     }
//   },
// })
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
