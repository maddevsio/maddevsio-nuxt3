<script setup lang="ts">
defineProps({
  unorderedList: {
    type: [Object, Boolean],
    default: false,
  },
})
</script>
<template>
  <li
    class="case_list-numbered_item"
    :class="{'not-numbered': unorderedList}"
  >
    <span><slot name="bold" /></span>
    <slot />
  </li>
</template>
<style scoped lang="scss">
.case_list-numbered_item {
  @include list-item-box($bgcolor--silver, 16px 17px 16px 17px, 8px);
  @include default-text($text-color--black-oil, 17px, 166%, -0.035em, normal);
  list-style-type: none;

  &:not(.not-numbered) {
    padding-left: 40px;

    &::before {
      counter-increment: section;
      content: counter(section) '.';
      position: absolute;
      left: 16px;
    }
  }

  span {
    font-weight: 700
  }

  :deep(p) {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    @include list-item-box($bgcolor--silver, 8px 16px 8px 16px, 8px);
    @include default-text($text-color--black-oil, 16px, 150%, -0.02em, normal);
    margin-bottom: 10px;

    &:not(.not-numbered) {
      padding-left: 40px;
    }
  }
}
</style>
