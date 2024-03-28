<script setup lang="ts">
import type { PropType } from 'vue'
import { Divider } from '~/components/PageBlocks/Divider/classes/Divider'
import type { DividerProps } from '~/components/PageBlocks/Divider/interfaces/IDivider'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<DividerProps>,
    default: () => ({}),
  },
})
const divider = new Divider(slice)
</script>
<template>
  <section class="divider-slice">
    <div class="container">
      <hr
        :class="`divider-slice__divider divider-slice__divider--${divider.backgroundInText}`"
        :style="{ 'height': divider.dividerHeight }"
      >
    </div>
  </section>
</template>
<style scoped lang="scss">
.divider-slice {
  &__divider {
    width: 100%;
    border: none;

    &--black {
      background: $bgcolor--black-pale;
    }

    &--white {
      background: $border-color--grey-20-percent;
    }
  }
}
</style>
