<script setup lang="ts">
defineProps({
  colorTheme: {
    type: String,
    default: 'black',
  },
})
</script>
<template>
  <div :class="`skeleton-clutch-reviews skeleton-clutch-reviews--${colorTheme}`" />
</template>
<style lang="scss" scoped>
.skeleton-clutch-reviews {
  height: 281px;
  background-size: 500% 500%;
  border-radius: 9px;

  &--black {
    background: $bgcolor--skeleton-gradient-dark;
  }

  &--white {
    background: $bgcolor--skeleton-gradient-light;
  }

  @media screen and (max-width: 1050px) {
    height: 207px;
  }
}
</style>
