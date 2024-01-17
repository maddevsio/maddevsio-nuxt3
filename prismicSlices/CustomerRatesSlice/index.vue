<script setup lang="ts">
import { CustomersRates } from '~/componentClasses/Customers/CustomersRates'

const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
const customersRates = new CustomersRates(slice)
const { cards, backgroundInText, backgroundColor } = customersRates
</script>
<template>
  <section
    class="customer-rates-slice"
    :style="{ backgroundColor: backgroundColor }"
  >
    <div class="container customer-rates-slice__cards">
      <div
        v-for="(card, cardIdx) in cards"
        :key="`customer-rates-${cardIdx}`"
        :class="`customer-rates-slice__card customer-rates-slice__card--${backgroundInText || 'black' }`"
      >
        <p
          v-if="card.title"
          :class="`customer-rates-slice__title customer-rates-slice__title--${card.numberColor || 'pink-gradient'}`"
        >
          {{ card.title }}
        </p>
        <p
          v-if="card.subtitle"
          :class="`customer-rates-slice__description customer-rates-slice__description--${card.descriptionColor || 'white'}`"
        >
          {{ card.subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.customer-rates-slice {
  &__cards {
    @include grid(repeat(4, 1fr), auto, 20px, 20px);

    @media screen and (max-width: 850px) {
      @include grid(repeat(2, 1fr), auto, 20px, 20px);
    }
  }

  &__card {
    border-radius: 9px;
    padding: 11px 14px 30px 40px;
    display: flex;
    flex-direction: column;
    row-gap: 25px;

    &--white {
      background: $bgcolor--silver;
    }

    &--black {
      background: $bgcolor--black-pale;
    }

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      padding: 9px 24px 24px;
      row-gap: 12px;
    }

    @media screen and (max-width: 850px) {
      padding-top: 20px;
      row-gap: 21px;
    }

    @media screen and (max-width: 450px) {
      padding: 10px 13px 16px;
      row-gap: 16px;
    }

    @media screen and (max-width: 372px) {
      padding: 10px 10px 16px;
      row-gap: 16px;
    }
  }

  &__title {
    @include font('Inter', 60px, 900);
    line-height: 130%;
    letter-spacing: -1px;

    &--white {
      color: $text-color--white-primary;
    }

    &--black {
      color: $text-color--chinese-black;
    }

    &--blue-gradient {
      background: linear-gradient(to bottom, #4CA0F5 7.33%, #2E6FF9 85.42%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &--purple-gradient {
      background: linear-gradient(to bottom, #C598FF 0.47%, #9A4BFF 99.16%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &--pink-gradient {
      background: linear-gradient(314.49deg, #B428B4 11.9%, #F0288C 82.73%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    &--green-gradient {
      background: linear-gradient(to bottom, #4CC866 -2.34%, #099FBC 79.81%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media screen and (max-width: 920px) {
      font-size: 45px;
      line-height: 130%;
    }

    @media screen and (max-width: 450px) {
      font-size: 40px;
    }
  }

  &__description {
    @include font('Inter', 16px, 400);
    line-height: 130%;
    letter-spacing: -1px;
    transition: 0.3s ease-in-out;

    &--white {
      color: $text-color--white-primary;
    }

    &--black {
      color: $text-color--chinese-black;
    }

    @media screen and (max-width: 920px) {
      font-size: 14px;
    }

    @media screen and (max-width: 450px) {
      font-size: 13px;
      line-height: 150%;
      letter-spacing: -0.4px;
    }
  }
}
</style>
