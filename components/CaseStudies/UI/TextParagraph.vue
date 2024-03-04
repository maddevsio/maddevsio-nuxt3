<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: '',
  },
})

const textColor = props.color ? `color: ${ props.color }` : null
</script>
<template>
  <p
    :style="textColor"
    class="case_paragraph"
  >
    <slot />
  </p>
</template>
<style lang="scss" scoped>
.case {
  &_paragraph {
    @include default-text($text-color--black-oil, 17px, 166%, -0.035em, normal);

    @media screen and (max-width: 768px) {
      @include default-text($text-color--black-oil, 16px, 150%, -0.02em, normal);
    }

    &--bold {
      font-weight: 700;
    }
  }
}
</style>
