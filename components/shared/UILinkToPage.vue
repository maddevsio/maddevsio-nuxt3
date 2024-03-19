<script setup lang="ts">
defineProps({
  linkToPage: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'black',
  },
})
</script>
<template>
  <NuxtLink
    :to="linkToPage"
    class="link-to-page"
    :class="`link-to-page--${color}`"
  >
    <slot />
  </NuxtLink>
</template>
<style lang="scss" scoped>
.link-to-page {
  @include font('Inter', 14px, 400);
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.4px;
  color: $text-color--chinese-black;
  padding: 12px 0;
  border: 1px solid $text-color--grey-opacity-40-percent;
  border-radius: 5px;
  display: block;
  transition: 0.3s ease;

  &--white {
    color: $text-color--white-primary;
    border-color: $border-color--grey-selected;
  }

  &:hover,
  &:active {
    border-color: $bgcolor--red;
    color: $text-color--red;
  }

  @media screen and (min-width: 880px) {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: initial;
    padding: 15px 0;
  }
}
</style>
