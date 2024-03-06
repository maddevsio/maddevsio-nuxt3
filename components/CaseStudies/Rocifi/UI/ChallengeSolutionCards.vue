<script setup lang="ts">
const props = defineProps({
  cardsData: {
    type: Array,
    default: () => [],
  },

  marginTopOnIconWrapper: {
    type: Number,
    default: 0,
  },
})
useIntersectionObserver(props.cardsData.map((card, cardIndex) => `${ card.id }-${ cardIndex }`), setBackground)
</script>
<template>
  <div class="challenge-solutions__cards">
    <LazyCaseStudiesRocifiUIChallengeSolutionCard
      v-for="(card, cardIndex) in cardsData"
      v-bind="card"
      :id="`${card.id}-${cardIndex}`"
      :key="cardIndex"
      :background-color="card.background"
      :margin-top-on-icon-wrapper="marginTopOnIconWrapper"
    />
  </div>
</template>
<style lang="scss" scoped>
.challenge-solutions {
  &__cards {
    display: flex;
    gap: 25px;
    box-sizing: border-box;

    * {
      box-sizing: border-box;
    }

    @media screen and (max-width: 798px) {
      flex-direction: column;
      gap: 11.94px;
    }
  }
}
</style>
