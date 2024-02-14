<script setup lang="ts">
import type { ICustomerLogoInteractiveCards } from '~/components/PageBlocks/CustomerLogo/interfaces/ICustomerLogoInteractive'

interface Props {
  cardsInstance: ICustomerLogoInteractiveCards
}

const { cardsInstance } = defineProps<Props>()
const {
  currentActiveCard,
  littleCards,
  changeCard,
  secondCard,
  containerSize,
  cards,
  littleCardsLength,
  setClassnameToLittleCard,
} = cardsInstance
</script>
<template>
  <div
    class="customers-cards"
    :class="{ 'customers-cards--one-column': containerSize === '816' }"
  >
    <LazyPageBlocksCustomerLogoInteractiveCardBig
      :customer-big-card-instance="currentActiveCard"
    />
    <TransitionGroup
      v-if="cards.length > 2"
      name="list-complete"
      tag="div"
      class="customers-cards__little"
      :class="setClassnameToLittleCard()"
    >
      <LazyPageBlocksCustomerLogoInteractiveCardLittle
        v-for="(card) in littleCards"
        :key="card.id"
        :card-instance="card"
        :little-cards-length="littleCardsLength"
        @little-card-click="changeCard"
      />
    </TransitionGroup>
    <LazyPageBlocksCustomerLogoInteractiveCardBig
      v-if="cards.length <= 2"
      :customer-big-card-instance="secondCard"
    />
  </div>
</template>
<style lang="scss" scoped>
.customers-cards {
  @include grid(repeat(2, 1fr), auto, 30px, 24px);

  &--one-column {
    grid-template-columns: 1fr;
  }

  &__little {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    position: relative;
    overflow: hidden;
    min-height: 312.39px;

    &--middle-container {
      min-height: 338.38px;
    }
  }

  @media screen and (max-width: 1160px) {
    @include grid(repeat(1, 1fr), auto, 30px, 24px);

    &__little {
      min-height: unset;
    }
  }

  @media screen and (max-width: 768px) {
    grid-row-gap: 18px;

    &__little {
      gap: 18px;
    }
  }
}

.list-complete-move, /* apply transition to moving elements */
.list-complete-leave-active,
.list-complete-enter-active {
  transition: all .4s ease;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
//.list-leave-active {
//  position: absolute;
//}

//.list-complete-enter,
//.list-complete-leave-to {
//  opacity: 0;
//  transform: translateX(50px);
//}
//
//.list-complete-leave,
//.list-complete-enter-to {
//  opacity: 1;
//  transform: translateX(0);
//}
//
.list-complete-leave-active {
  position: absolute;
  opacity: 0;
  z-index: -10;
}

</style>
