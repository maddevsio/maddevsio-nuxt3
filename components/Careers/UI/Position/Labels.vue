<script setup lang="ts">
import type { PropType } from 'vue'

interface Label {
  remote: boolean
  relocation: boolean
}

defineProps({
  labels: {
    type: Object as PropType<Label>,
    default: () => ({}),
  },

  variant: {
    type: String,
    default: 'filled',
  },
})
</script>
<template>
  <div
    v-if="labels.remote || labels.relocation"
    class="position-labels"
  >
    <div
      v-if="labels.remote"
      :class="`position-labels__item--${variant}`"
      class="position-labels__item"
    >
      Remote
    </div>
    <div
      v-if="labels.relocation"
      :class="`position-labels__item--${variant}`"
      class="position-labels__item"
    >
      Open for relocation
    </div>
  </div>
</template>
<style lang="scss" scoped>
.position-labels {
  display: flex;
  &__item {
    margin-right: 8px;
    padding: 2px 10px;
    font-size: 9px;
    line-height: 15px;
    text-transform: uppercase;
    border-radius: 2px;
    border: 1px solid;
    transition: all 0.4s;
    &:first-child {
      border-color: $border-color--blue;
    }
    &:last-child {
      border-color: $border-color--green;
      margin-right: 0;
    }
    &--filled {
      color: $text-color--white-primary;
      &:first-child {
        background-color: $bgcolor--blue;
      }
      &:last-child {
        background-color: $bgcolor--green;
      }
    }
    &--outlined {
      &:first-child {
        color: $text-color--blue;
      }
      &:last-child {
        color: $text-color--green;
      }
    }
  }
}
</style>
