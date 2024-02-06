<script setup lang="ts">
interface Props {
  marginBottom: number
  colorTheme: string
}

withDefaults(defineProps<Props>(), {
  marginBottom: 11,
  colorTheme: 'light',
})
</script>
<template>
  <div
    class="skeleton-full-width-card"
    :class="colorTheme === 'black' ? 'skeleton-full-width-card--dark' : 'skeleton-full-width-card--light'"
    :style="`margin-bottom: ${marginBottom}px`"
  />
</template>
<style lang="scss">
.skeleton-full-width-card {
  width: 100%;
  margin-bottom: 11px;
  border-radius: 10px;
  &:last-child {
    margin-bottom: 0;
  }

  &--light {
    background-color: $bgcolor--silver;
    background-image: linear-gradient(90deg, $bgcolor--grey-extra-dark, $bgcolor--silver, $bgcolor--grey-extra-dark);
  }

  &--dark {
    background: $bgcolor--skeleton-gradient-dark;
  }
}

</style>
