<script setup lang="ts">
defineProps({
  starColors: {
    type: String,
    default: '',
  },

  rating: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div
    class="reviews__header-stars"
  >
    <span
      v-for="(count) in 5"
      :key="count"
      :class="`reviews__header-star ${starColors} ${count <= Number(rating) ? 'reviews__header-star--on' : 'reviews__header-star--off'}`"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'assets/styles/colorClasses/colors';

.reviews__header {
  &-stars {
    display: flex;
    gap: 6px;
    padding-top: 1px;
  }

  &-star {
    display: block;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    width: 24px;
    height: 24px;

    &--off {
      background-color: $bgcolor--grey-selected !important;
    }
  }

  &-stars {
    padding-top: 1px;
  }

  @media screen and (max-width: 900px) {
    &-stars {
      padding-top: 1px;
      gap: 4px;
    }

    &-star {
      width: 15px;
      height: 15px;
    }
  }
}
</style>
