<script setup lang="ts">
const { color } = defineProps({
  color: {
    type: String,
    default: 'white',
  },
})

const colorClass = computed(() => `ui-arrow-button--${ color }`)
</script>
<template>
  <button
    type="button"
    class="ui-arrow-button"
    :class="colorClass"
  >
    <span>↓</span>
  </button>
</template>
<style lang="scss" scoped>
.ui-arrow-button {
  @include font('Inter', 16px, 400);
  padding: 0;
  line-height: 1;
  margin-top: 56px;
  cursor: pointer;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  min-width: 48px;
  height: 48px;
  border-radius: 50%;
  transition: all .3s ease;
  &--black {
    border: 1px solid $text-color--black-oil;
    color: $text-color--black-oil;
    &:hover,
    &--active {
      background-color: $text-color--black-oil;
      color: $text-color--white-primary;
    }
  }
  &--white {
    border: 1px solid $text-color--white-primary;
    color: $text-color--white-primary;
    &:hover,
    &--active {
      background-color: $text-color--white-primary;
      color: $text-color--black-oil;
    }
  }
  span {
    transform: rotate(-90deg); // right arrow is not supported by Inter font
  }
}
</style>
