<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },

  rating: {
    type: String,
    default: '',
  },

  fivestar: {
    type: String,
    default: '',
  },

  text: {
    type: String,
    default: '',
  },

  author: {
    type: String,
    default: '',
  },

  verified: {
    type: String,
    default: '',
  },

  colorTheme: {
    type: String,
    default: 'black',
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    :class="`clutch-reviews__card clutch-reviews__card--${colorTheme}`"
  >
    <div class="clutch-reviews__rating-wrapper">
      <span class="clutch-reviews__rating-number">{{ rating }}</span>
      <div
        class="clutch-reviews__stars"
        v-html="fivestar"
      />
    </div>
    <div class="clutch-reviews__text-content">
      <p
        :class="`clutch-reviews__text clutch-reviews__text--${colorTheme}`"
      >
        {{ text }}
      </p>
    </div>
    <p class="clutch-reviews__review-author">
      {{ author }}
    </p>
    <div
      class="clutch-reviews__review-verified-wrapper"
    >
      <img
        loading="lazy"
        :src="$getMediaFromS3('images/custom/about/verifed-checkmark-clutch.svg')"
        alt="Verified checkmark"
        width="16.57"
        height="16"
        class="clutch-reviews__review-verified-icon"
      >
      <p
        class="clutch-reviews__review-verified"
      >
        {{ verified }}
      </p>
    </div>
  </a>
</template>
<style scoped lang="scss">
.clutch-reviews {
  &__card {
    display: flex;
    flex-direction: column;
    padding: 24px;
    text-decoration: none;
    border-radius: 9px;
    max-height: 260px;

    :deep(.fivestar) {
      display: flex;
      gap: 6px;
      padding-top: 3px;
    }

    :deep(.star) {
      .on {
        display: block;
        width: 18px !important;
        height: 18px;
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        background-color: $bgcolor--red;
      }
    }

    &--black {
      color: $text-color--white-primary;
      background: rgba(29, 29, 31, 0.6);
    }

    &--white {
      color: $text-color--chinese-black;
      background: $bgcolor--white;
    }

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      padding: 21px;

      :deep(.fivestar) {
        gap: 8px;
        padding-top: 2px;
      }

      :deep(.star) {
        .on {
          width: 14px !important;
          height: 14px;
        }
      }
    }
  }

  &__rating-wrapper {
    display: flex;
    column-gap: 12px;
    overflow: hidden;
    margin-bottom: 12px;
  }

  &__rating-number {
    @include font('Inter', 16px, 400);
    line-height: 130%;

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 14px;
      line-height: 130%;
    }
  }

  &__text-content {
    margin-bottom: 16px;
    flex-grow: 1;

    @media screen and (max-width: 768px) {
      column-gap: 0;
    }

    @media screen and (max-width: 650px) {
      column-gap: 1px;
    }
  }

  &__text {
    @include font('Inter', 18px, 400);
    line-height: 26px;

    &--black {
      color: $text-color--white-primary;
    }

    &--white {
      color: $text-color--chinese-black;
    }

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 16px;
      line-height: 23px;
    }
  }

  &__review-author,
  &__review-verified {
    @include font('Inter', 14px, 400);
    line-height: 20px;
    color: #586A72;

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 12px;
      line-height: 18px;
    }
  }

  &__review-author {
    margin-bottom: 14px;
  }

  &__review-verified-wrapper {
    display: flex;
    align-items: center;
    gap: 9px;
  }
}
</style>
