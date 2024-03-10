<script setup lang="ts">
defineProps({
  positions: {
    type: Array,
    default: () => [],
  },
})
</script>
<template>
  <div>
    <ul class="positions-grid">
      <LazyCareersUIPositionGridItem
        v-for="vacancy in positions"
        :key="vacancy.uid"
        v-bind="vacancy"
      />
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.positions-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 0.5px;
  margin-left: 0.5px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
