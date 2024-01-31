<script setup lang="ts">
defineProps({
  colorTheme: {
    type: String,
    default: 'black',
  },
})
</script>
<template>
  <div
    :class="`skeleton-clutch-header-rating skeleton-clutch-header-rating--${colorTheme}`"
  />
</template>
<style lang="scss" scoped>
.skeleton-clutch-header-rating {
  width: 287px;
  height: 31px;
  background-size: 500% 500%;
  border-radius: 3px;

  &--black {
    background: $bgcolor--skeleton-gradient-dark;
  }

  &--white {
    background: $bgcolor--skeleton-gradient-light;
  }

  @media screen and (max-width: 900px) {
    width: 183px;
    height: 21px;
  }
}
</style>
