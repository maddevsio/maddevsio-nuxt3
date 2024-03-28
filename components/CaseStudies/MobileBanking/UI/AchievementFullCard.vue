<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },

  description: {
    type: String,
    default: '',
  },

  marketsIcon: {
    type: Array,
    default: () => [],
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="achievement-full-card">
    <hr class="achievement-full-card__divider-tablet">
    <p class="achievement-full-card__title">
      {{ title }}
    </p>
    <hr class="achievement-full-card__divider">
    <p class="achievement-full-card__description">
      {{ description }}
    </p>
    <hr class="achievement-full-card__divider">
    <ul class="achievement-full-card__market-list">
      <li
        v-for="(market, index) in marketsIcon"
        :key="index"
        class="achievement-full-card__market-item"
      >
        <img
          loading="lazy"
          :src="$getMediaFromS3(market.url)"
          :alt="market.alt"
          :width="market.dimensions.width"
          :height="market.dimensions.height"
          class="achievement-full-card__icon"
        >
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.achievement-full-card {
  background-color: #697CFE;
  padding: 19px 68.5px 17px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  align-items: center;

  &__title {
    @include font('Poppins', 40px, 700);
    line-height: 130%;
    letter-spacing: -0.02em;
    color: $text-color--white-primary;
  }

  &__divider {
    width: 1px;
    height: 33px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    margin: 0;
  }

  &__divider-tablet {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    margin: 0;
    display: none;
  }

  &__description {
    @include font('Inter', 16px, 400);
    line-height: 135%;
    text-align: center;
    letter-spacing: -0.035em;
    color: $text-color--white-primary;
    position: relative;
    flex-grow: 1;
  }

  &__market-list {
    display: flex;
    gap: 32px;
  }

  @media screen and (max-width: 922px) {
    @include grid(1fr, auto, 0, 18px);
    justify-items: center;
    padding: 18px 24px;

    &__divider {
      display: none;
    }

    &__divider-tablet {
      display: block;
    }

    &__market-list {
      grid-row: 1 / 2;
    }
  }
}
</style>
