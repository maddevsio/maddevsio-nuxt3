<script setup lang="ts">
defineProps({
  description: {
    type: String,
    default: '',
  },

  withLinkInText: {
    type: Boolean,
    default: false,
  },

  color: {
    type: String,
    default: 'white',
  },

  textColor: {
    type: String,
    default: 'white',
  },
})
</script>
<template>
  <div
    :class="`alert-plate background-color-${color}`"
  >
    <LazyCaseStudiesUITextParagraph
      v-if="!withLinkInText"
      :class="`text-color-${textColor}`"
    >
      {{ description }}
    </LazyCaseStudiesUITextParagraph>
    <slot
      v-if="withLinkInText"
    />
  </div>
</template>
<style lang="scss" scoped>
.alert-plate {
  width: 100%;
  padding: 10.5px 17px;
  text-align: center;
  border-radius: 5px;
  box-sizing: border-box;
}
</style>
