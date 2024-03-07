<script setup lang="ts">
import { deliveryModels } from '~/components/DeliveryModels/constants/deliveryModelsConstants'
</script>
<template>
  <div class="container models-grid_container">
    <div class="models-grid">
      <LazyDeliveryModelsUIModelCard
        v-for="(modelKey, i) in Object.keys(deliveryModels)"
        :key="modelKey"
        :full="i === 2 || i === 3"
        :uid="modelKey"
        v-bind="deliveryModels[modelKey]"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.models-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 48px;

  @media screen and (max-width: 1200px) {
    grid-gap: 23px 29px;
  }

  @media screen and (max-width: 1024px) {
    &_container {
      max-width: 100%;
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 29px;
    &_container {
      max-width: 100%;
      padding: 0 16px;
    }
  }
}
</style>
