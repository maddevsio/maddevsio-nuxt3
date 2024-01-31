<script setup lang="ts">
import type { PropType } from 'vue'
import type { ProcessInlineProps } from '~/components/Process/interfaces/IProcessInline'
import { ProcessInline } from '~/components/Process/classes/ProcessInline'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<ProcessInlineProps>,
    default: () => ({}),
  },
})
const processInline = new ProcessInline(slice)
</script>
<template>
  <div
    :class="`process-inline-slice process-inline-slice--${processInline.colorTheme}`"
  >
    <div class="container">
      <div class="process-inline-slice__cards">
        <ProcessInlineCard
          v-for="(card, idx) in processInline.cards"
          :key="`process-inline-slice__card--${idx}`"
          :icon="card.icon"
          :title="card.title"
          :description="card.description"
          :show-bottom-divider="card.showBottomDivider"
          :color-theme="processInline.colorTheme"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.process-inline-slice {
  &--black {
    background-color: $bgcolor--black;
  }

  &--white {
    background-color: $bgcolor--white-primary;
  }

  &__cards {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
}
</style>
