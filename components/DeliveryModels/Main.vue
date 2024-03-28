<template>
  <div class="delivery-models">
    <LazyDeliveryModelsSectionsBanner />
    <LazyDeliveryModelsSectionsModelsGrid />
    <LazyDeliveryModelsSectionsPresentation />
    <div class="delivery-models--bg-white">
      <LazyDeliveryModelsSectionsTestimonials />
      <LazyDeliveryModelsSectionsCTABanner />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.delivery-models {
  &--bg-white {
    background-color: $bgcolor--white-primary;
  }
}
</style>
