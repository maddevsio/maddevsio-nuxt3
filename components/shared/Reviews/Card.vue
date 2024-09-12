<script setup lang="ts">
defineProps({
  rating: {
    type: String,
    default: '',
  },

  text: {
    type: String,
    default: '',
  },

  verified: {
    type: Boolean,
    default: true,
  },

  starColors: {
    type: String,
    default: 'green',
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div
    class="reviews__card"
  >
    <div class="reviews__rating-wrapper">
      <span class="reviews__rating-number">{{ rating }}</span>
      <SharedReviewsStars
        :rating="rating"
        :star-colors="starColors"
      />
    </div>
    <div class="reviews__text-content">
      <p
        class="reviews__text"
      >
        {{ text }}
      </p>
    </div>
    <div
      v-if="verified"
      class="reviews__review-verified-wrapper"
    >
      <img
        loading="lazy"
        :src="$getMediaFromS3('images/custom/about/verifed-checkmark-clutch.svg')"
        alt="Verified checkmark"
        width="16.57"
        height="16"
        class="reviews__review-verified-icon"
      >
      <p
        class="reviews__review-verified"
      >
        Verified Review
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.reviews {
  &__card {
    display: flex;
    flex-direction: column;
    padding: 24px;
    text-decoration: none;
    border-radius: 9px;
    max-height: 260px;
    color: $text-color--white-primary;
    background: rgba(29, 29, 31, 0.6);

    :deep(.reviews__header-star) {
      width: 18px;
      height: 18px;
    }

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      padding: 21px;

      :deep(.reviews__header-stars) {
        gap: 8px;
        padding-top: 2px;
      }

      :deep(.reviews__header-star) {
        width: 14px;
        height: 14px;
      }

      //:deep(.fivestar) {
      //  gap: 8px;
      //  padding-top: 2px;
      //}
      //
      //:deep(.star) {
      //  .on {
      //    width: 14px !important;
      //    height: 14px;
      //  }
      //}
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
    color: $text-color--white-primary;

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 16px;
      line-height: 23px;
    }
  }

  &__review-verified {
    @include font('Inter', 14px, 400);
    line-height: 20px;
    color: #586A72;

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 12px;
      line-height: 18px;
    }
  }

  &__review-verified-wrapper {
    display: flex;
    align-items: center;
    gap: 9px;
  }
}
</style>
