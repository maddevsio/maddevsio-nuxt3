<script setup lang="ts">
defineProps({
  isLoadingMore: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="glossary-section-button-more"
  >
    <button
      v-if="!isLoadingMore"
      class="glossary-section-button-more__btn"
    >
      Load More Words
    </button>
    <LazySharedLoadersThreeDotsLoader v-else />
  </div>
</template>

<style lang="scss" scoped>
.glossary-section-button-more {
  display: flex;
  justify-content: center;
  align-items: center;
  &__btn {
    @include font('Inter', 20px, 400);
    line-height: 150%;
    color: $text-color--grey-opacity-20-percent;
    letter-spacing: -1px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 166px;
    background-color: $bgcolor--black-pale;
    border: 0;
    margin: 0;
    border-radius: 4px;
    padding: 32px;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      opacity: 1;
      color: $text-color--white-primary;
    }

    @media screen and (max-width: 1280px) {
      height: 142px;
      padding: 20px;
    }

    @media screen and (max-width: 850px) {
      height: 100px;
    }

    @media screen and (max-width: 550px) {
      font-size: 18px;
      height: 62px;
      padding: 10px 20px;
    }
  }
}
</style>
