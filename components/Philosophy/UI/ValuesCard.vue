<script setup lang="ts">
import type { PropType } from 'vue'

interface Card {
  color: string
  title: string
  subtitle: string
  descriptions: string[]
}

defineProps({
  cardValue: {
    type: Object as PropType<Card>,
    default: () => ({}),
  },
})
</script>
<template>
  <div
    class="our-values__value"
  >
    <div
      class="our-values__value-titles"
    >
      <h3
        :class="`our-values__value-title our-values__value-title--${cardValue.color}`"
      >
        {{ cardValue.title }}
      </h3>
      <p
        :class="`our-values__value-subtitle our-values__value-subtitle--${cardValue.color}`"
      >
        {{ cardValue.subtitle }}
      </p>
    </div>
    <div class="our-values__value-descriptions">
      <p
        v-for="(description, j) in cardValue.descriptions"
        :key="`${description}-${j}`"
        class="our-values__value-description"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.our-values__value {
  display: flex;
  justify-content: space-between;
  column-gap: 124px;
  padding-bottom: 56px;
  margin-bottom: 56px;
  border-bottom: 1px solid #36383A;

  &:last-child {
    border: none;
    padding: 0;
    margin: 0;
  }

  &-titles {
    width: 32%;
  }

  &-title {
    @include font('Poppins', 40px, 700);
    line-height: 130%;
    margin-bottom: 21px;

    &--red {
      color: #EC1C24;
    }

    &--purple {
      color: #9963F6;
    }

    &--green {
      color: #00C05B;
    }

    &--dark-red {
      color: #F24E1E;
    }

    &--orange {
      color: #F7C744;
    }
  }

  &-subtitle {
    @include font('Inter', 24px, 600);
    line-height: 130%;

    &--red {
      color: #EC1C24;
    }

    &--purple {
      color: #9963F6;
    }

    &--green {
      color: #00C05B;
    }

    &--dark-red {
      color: #F24E1E;
    }

    &--orange {
      color: #F7C744;
    }
  }

  &-descriptions {
    width: 58%;
  }

  &-description {
    @include font('Inter', 16px, 400);
    line-height: 26px;
    color: $text-color--white-primary;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 1100px) {
    column-gap: 90px;
    &-titles {
      width: 38%;
    }

    &-descriptions {
      width: 52%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 16px;
    padding-bottom: 45px;
    margin-bottom: 45px;

    &-titles {
      width: 100%;
    }

    &-descriptions {
      width: 100%;
    }

    &-title {
      font-size: 28px;
      line-height: 130%;
    }

    &-subtitle {
      font-size: 20px;
      line-height: 130%;
    }

    &-description {
      font-size: 14px;
      line-height: 150%;
      letter-spacing: -0.4px;
    }
  }
}
</style>
