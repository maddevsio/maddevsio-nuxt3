<script setup lang="ts">
import type { PropType } from 'vue'
import type { IndustriesCardDescriptionProps } from '~/components/PageBlocks/Industries/interfaces/IIndustriesCardDescription'
import { IndustriesCardDescription } from '~/components/PageBlocks/Industries/classes/IndustriesCardDescription'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<IndustriesCardDescriptionProps>,
    default: () => ({}),
  },
})

const industriesCard = new IndustriesCardDescription(slice)
</script>
<template>
  <div
    :class="`industries-card-description ${industriesCard.sliceBackground}`"
  >
    <div class="container industries-card-description__cards">
      <LazyPageBlocksIndustriesUICardDescriptionItem
        v-for="(card, idx) in industriesCard.cards"
        :key="`industries-card-description--${idx}`"
        :icon="card.icon"
        :description="card.description"
        :card-background-color="card.cardBackgroundColor"
        :color-theme="industriesCard.colorTheme"
        :card-text-color="card.cardTextColor"
        :link-to-industry-page="card.linkToIndustryPage"
        :go-to-page="industriesCard.goToPage"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'assets/styles/colorClasses/colors';

.industries-card-description {
  &__cards {
    @include grid(repeat(3, 1fr), auto, 20px, 20px);

    * {
      box-sizing: border-box;
    }

    @media screen and (max-width: 1026px) {
      @include grid(repeat(2, 1fr), auto, 20px, 20px);
    }

    @media screen and (max-width: 768px) {
      @include grid(repeat(1, 1fr), auto, 10px, 10px);
    }
  }
}
</style>
