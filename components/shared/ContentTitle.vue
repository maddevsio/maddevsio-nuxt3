<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <h2 class="content-title">
    {{ title }}
  </h2>
</template>

<style lang="scss" scoped>
.content-title {
  @include font('Inter', 60px, 700);
  line-height: 125%;
  margin-bottom: 32px;
  padding-bottom: 10px;
  border-bottom: 1px solid $border-color--black-border-03-opacity;

  @media only screen and (max-width: 768px) {
    font-size: 31px;
    line-height: 193%;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 690px) {
    line-height: 116%;
    margin-bottom: 24px;
  }
}
</style>
