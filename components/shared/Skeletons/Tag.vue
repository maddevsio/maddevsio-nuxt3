<script setup lang="ts">
defineProps({
  colorTheme: {
    type: String,
    default: 'white',
  },
})
</script>
<template>
  <div
    :class="`skeleton-tag skeleton-tag--${colorTheme}`"
  />
</template>
<style lang="scss" scoped>
.skeleton-tag {
  width: 118px;
  height: 34px;
  border-radius: 2px;
  &--white {
    background-color: $bgcolor--silver;
    background-image: linear-gradient(90deg, $bgcolor--grey-extra-dark, $bgcolor--silver, $bgcolor--grey-extra-dark);
  }

  &--black {
    background: $bgcolor--skeleton-gradient-dark;
  }

  @media screen and (max-width: 650px)  {
    width: 85px;
    height: 20px;
  }
}
</style>
