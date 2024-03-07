<script setup lang="ts">
defineProps({
  uid: {
    type: String,
    default: '',
  },

  title: {
    type: String,
    default: '',
  },

  subtitle: {
    type: String,
    default: '',
  },

  optimalModelFor: {
    type: Array,
    default: () => ([]),
  },

  process: {
    type: Object,
    default: () => ({}),
  },
})
</script>
<template>
  <div class="delivery-model">
    <div class="container delivery-model__container">
      <LazyDeliveryModelsDynamicSectionsBanner
        :uid="uid"
        :title="title"
        :subtitle="subtitle"
      />
    </div>
    <div class="delivery-model--bg-white">
      <div class="container delivery-model__container">
        <LazyDeliveryModelsDynamicSectionsOptimal :list-items="optimalModelFor" />
        <LazyDeliveryModelsDynamicSectionsProcess v-bind="process" />
      </div>
      <LazyDeliveryModelsSectionsCTABanner />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.delivery-model {
  &--bg-white {
    background-color: $bgcolor--white-primary;
  }
  &__container {
    max-width: 816px;
  }
}
</style>
