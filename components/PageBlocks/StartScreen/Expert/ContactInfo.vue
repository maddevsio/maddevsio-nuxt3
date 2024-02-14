<script setup lang="ts">
import type { IVCard } from '~/components/PageBlocks/StartScreen/interfaces/IStartScreenExpert'

interface Props {
  vcard: IVCard
  description: string
  btnText: string
  location: string
}

defineProps<Props>()

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="expert-page-header__contact-info">
    <p class="expert-page-header__contact-info-description">
      {{ description }}
    </p>
    <div
      v-if="location"
      class="expert-page-header__contact-info-location"
    >
      <img
        :src="$getMediaFromS3('images/ExpertPages/svg/startScreen/location.svg')"
        alt="Location icon"
        class="expert-page-header__contact-info-location-icon"
        height="18"
        width="18"
      >
      <p
        class="expert-page-header__contact-info-location-country"
      >
        {{ location }}
      </p>
    </div>
    <LazySharedUISaveVCardButton
      :vcard="vcard"
      :btn-text="btnText"
    />
  </div>
</template>
<style lang="scss" scoped>
.expert-page-header {
  &__contact-info {
    display: flex;
    flex-direction: column;

    &-description {
      @include font('Inter', 20px, 600);
      line-height: 130%;
      color: $text-color--white-primary;
      margin-bottom: 4px;

      @media screen and (min-width: 1140px) {
        font-size: 24px;
        line-height: 130%;
        margin-bottom: 12px;
      }
    }

    &-location {
      display: flex;
      align-items: center;
      column-gap: 6px;
      margin-bottom: 24px;

      &-icon {
        width: 18px;
        height: 18px;
        display: block;
      }

      &-country {
        @include font('Inter', 14px, 400);
        line-height: 150%;
        letter-spacing: -0.4px;
        color: $text-color--grey-pale;
      }

      @media screen and (min-width: 1140px) {
        margin-bottom: 32px;

        &-icon {
          width: 24px;
          height: 24px;
        }

        &-country {
          font-size: 21px;
          line-height: 148%;
        }
      }
    }

    @media screen and (min-width: 845px) {
      width: 45%;
    }

    @media screen and (min-width: 1140px) {
      width: 29%;
    }
  }
}
</style>
