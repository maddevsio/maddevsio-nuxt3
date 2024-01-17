<script setup lang="ts">
interface Sizes {
	[key: string]: string;
}

const props = defineProps(
  getSliceComponentProps([
    'slice',
    'index',
    'slices',
    'context',
  ]),
);

const sliceBackground = computed(() => setSliceBackground(props.slice.primary.background))
const spacerSizes = computed((): Sizes => ({
  '--spacer-default': props.slice?.primary?.height || '72px',
  '--spacer-lg': props.slice?.primary['height-lg'],
  '--spacer-md': props.slice?.primary['height-md'],
  '--spacer-sm': props.slice?.primary['height-sm'],
  '--spacer-xl': props.slice?.primary['height-xl'],
}))
const spacerClasses = computed(() => Object.keys(spacerSizes.value)
  .filter(filterSize => spacerSizes.value[filterSize])
  .map(size => `spacer-slice${ size }`))
</script>
<template>
  <div
    class="spacer-slice"
    :class="spacerClasses"
    :style="{
      ...spacerSizes,
      backgroundColor: sliceBackground,
    }"
  />
</template>
<style lang="scss" scoped>
.spacer-slice {
  width: 100%;
  display: block;
  position: relative;
  background-color: $bgcolor--white-primary;
  margin: -1px 0;
  z-index: -1;

  &--with-article-header-plate {
    margin-top: 50px;
  }

  &--spacer-default {
    height: var(--spacer-default)
  }

  &--spacer-xl {
    @media screen and (min-width: 1025px) and (max-width: 1440px) {
      height: var(--spacer-xl);
    }
  }

  &--spacer-lg {
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      height: var(--spacer-lg);
    }
  }

  &--spacer-md {
    @media screen and (max-width: 767px) {
      height: var(--spacer-md);
    }
  }

  &--spacer-sm {
    @media screen and (max-width: 359px) {
      height: var(--spacer-sm);
    }
  }
}
</style>
