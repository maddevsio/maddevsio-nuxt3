<script setup lang="ts">
import type { BenefitCardsProps } from '~/components/Benefit/interfaces/IBenefitCards'
import { BenefitCards } from '~/components/Benefit/classes/BenefitCards'

interface Props {
  slice: BenefitCardsProps
}

const { slice } = defineProps<Props>()
const benefitCards = new BenefitCards(slice)
const { background } = benefitCards
</script>
<template>
  <section
    class="benefit-slice"
    :style="{ 'background-color': background }"
  >
    <div
      class="benefit-slice__container container"
      data-testid="benefit-animation-test"
    >
      <Component
        :is="benefitCards.tag"
        class="benefit-slice__title"
      >
        {{ benefitCards.title }}
      </Component>
      <div class="benefit-slice__cards">
        <div
          v-for="(benefit, i) in benefitCards.cards"
          :key="`benefit-${i}-${benefit.description.split(' ').join('-')}`"
          class="benefit-slice__card"
          data-testid="benefit-test"
        >
          <div class="benefit-slice__icon-container">
            <img
              loading="lazy"
              :src="benefit.icon.url"
              :alt="benefit.icon.alt || benefit.description"
              :width="benefit.icon.dimensions!.width ? benefit.icon.dimensions!.width : 33"
              :height="benefit.icon.dimensions!.height ? benefit.icon.dimensions!.height : 36"
              class="benefit-slice__icon"
            >
          </div>
          <p
            class="benefit-slice__description"
          >
            {{ benefit.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.benefit-slice {
  &__container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 24px;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }

  &__title {
    letter-spacing: -1.3px;
    @include font("Inter", 42px, 700);
    line-height: 46px;
    color: $text-color--red;
    max-width: 350px;
  }

  &__card {
    padding: 28px 26px 70px;
    background-color: $bgcolor--silver;
    border-radius: 4px;
  }

  &__icon-container {
    width: 36px;
    height: 38px;
    margin-bottom: 17px;
  }

  &__icon {
    display: block;
    max-width: 100%;
    height: auto;
  }

  &__description {
    line-height: 24px;
    letter-spacing: -0.013em;
    color: $text-color--black-oil;
  }
  @media screen and (max-width: 1100px) {
    &__title {
      font-size: 38px;
    }
    &__card {
      padding-bottom: 50px;
    }
  }

  @media screen and (max-width: 980px) {
    &__container {
      grid-template-columns: 1fr;
    }

    &__title {
      max-width: 100%;
      padding: 0 30px;
      text-align: center;
    }
    &__card {
      padding-bottom: 26px;
    }
  }
  @media screen and (max-width: 675px) {
    &__title {
      padding: 0;
      text-align: left;
    }
    &__cards {
      grid-template-columns: repeat(2, 1fr);
    }
    &__card {
      padding: 16px 16px;
    }
  }

  @media screen and (max-width: 350px) {
    &__cards {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
