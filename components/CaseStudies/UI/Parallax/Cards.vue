<script setup lang="ts">
defineProps({
  dataCards: {
    type: Array,
    default: () => [],
  },

  startSlice: {
    type: Number,
    default: 2,
  },
})
</script>
<template>
  <div class="parallax_cards">
    <div
      v-mad-parallax
      class="parallax_cards__item"
    >
      <LazyCaseStudiesUIParallaxCard
        v-for="data in dataCards.slice(0, startSlice)"
        v-bind="data"
        :key="data.icon"
        :folder="data.folder"
        :icon="data.icon"
        :width="data.iconWidth"
        :height="data.iconHeight"
      />
    </div>
    <div
      class="parallax_cards__item"
    >
      <LazyCaseStudiesUIParallaxCard
        v-for="data in dataCards.slice(startSlice)"
        v-bind="data"
        :key="data.icon"
        :folder="data.folder"
        :icon="data.icon"
        :width="data.iconWidth"
        :height="data.iconHeight"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.parallax_cards {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  @media screen and (max-width: 976px) {
    flex-direction: column;
  }
  &__item {
    width: 50%;
    @include grid(repeat(1, 1fr), auto, 0, 24px);
    @media screen and (max-width: 976px) {
      width: 100%;
    }
    :deep(.card-content) {
      align-self: start;
    }
  }
}
</style>
