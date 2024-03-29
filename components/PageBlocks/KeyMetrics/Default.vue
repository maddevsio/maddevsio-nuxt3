<script setup lang="ts">
import type { PropType } from 'vue'
import setSliceBackground from '~/utils/setSliceBackground'
interface IKeyMetricsItem {
  title: string
  subtitle: string
  numberColor: string
  descriptionColor: string
}

interface IKeyMetricsProps {
  items: IKeyMetricsItem[]
  primary: {
    background: string
    bigCardTitle: string
    lottieFileName: string
  }
}

const { slice } = defineProps({
  slice: {
    type: Object as PropType<IKeyMetricsProps>,
    default: () => ({}),
  },
})

const cards = slice.items || []
const backgroundInText = slice.primary.background || 'black'
const backgroundColor = setSliceBackground(slice.primary.background || 'black')
const bigCardTitle = slice.primary?.bigCardTitle?.replace(/\n/g, '<br />') || ''
const lottieFileName = slice.primary.lottieFileName || 'key-metrics'
const { $getMediaFromS3 } = useMediaFromS3()

</script>
<template>
  <section
    class="key-metrics-slice"
    :style="{ backgroundColor: backgroundColor }"
  >
    <div class="container  key-metrics-slice__cards">
      <div
        :class="`key-metrics-slice__big-card key-metrics-slice__big-card--${backgroundInText || 'black' }`"
      >
        <h4
          v-if="bigCardTitle"
          :class="`key-metrics-slice__big-card-title key-metrics-slice__big-card-title--${backgroundInText || 'black'}`"
          v-html="bigCardTitle"
        />
        <LazySharedLottieMad
          height="296px"
          :lottie-link="$getMediaFromS3(`/images/custom/about/${lottieFileName}.json`)"
          :autoplay="true"
        />
      </div>
      <div class="key-metrics-slice__little-cards">
        <div
          v-for="(card, cardIdx) in cards"
          :key="`key-metrics-${cardIdx}`"
          :class="`key-metrics-slice__card key-metrics-slice__card--${backgroundInText || 'black' }`"
        >
          <p
            v-if="card.title"
            :class="`key-metrics-slice__title key-metrics-slice__title--${card.numberColor || 'gray-gradient'}`"
          >
            {{ card.title }}
          </p>
          <p
            v-if="card.subtitle"
            :class="`key-metrics-slice__description key-metrics-slice__description--${card.descriptionColor || 'white'}`"
            v-html="card.subtitle.replace(/\n/g, '<br />')"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.key-metrics-slice {
  &__little-cards,
  &__cards {
    @include grid(repeat(2, 1fr), auto, 20px, 20px);

    * {
      box-sizing: border-box;
    }
  }

  &__cards {
    @media screen and (max-width: 1110px) {
      @include grid(repeat(1, 1fr), auto, 20px, 20px);
    }
  }

  &__big-card {
    border-radius: 9px;
    padding: 21.26px 26px 0;

    &--white {
      background: $bgcolor--silver;
    }

    &--black {
      background: $bgcolor--black-pale;
    }

    &-title {
      @include font('Inter', 20px, 400);
      line-height: 130%;
      color: $text-color--white-primary;
      margin-left: 17px;

      &--white {
        color: $text-color--chinese-black;
      }

      &--black {
        color: $text-color--white-primary;
      }
    }

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      padding-top: 20px;

      &-title {
        font-size: 18px;
        margin-left: 3%;
      }

      :deep(.lottie-container) {
        min-height: max-content;
      }
    }

    @media screen and (max-width: 768px) {
      &-title {
        font-size: 16px;
        line-height: 150%;
      }
    }

    @media screen and (max-width: 600px) {
      padding-top: 17px;
      padding-left: 13px;

      &-title {
        font-size: 14px;
        line-height: 150%;
        letter-spacing: -0.4px;
      }
    }

  }

  &__card {
    border-radius: 9px;
    padding: 23.5px 22.5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 107px;
    max-height: 107px;

    &--white {
      background: $bgcolor--silver;
    }

    &--black {
      background: $bgcolor--black-pale;
    }

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      min-height: 84px;
      max-height: 90px;
      padding: 10px 10px 10px 19px;
    }

    @media screen and (max-width: 1110px) {
      padding: 10px 20px;
      justify-content: flex-start;
      gap: 12px;
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
      min-height: 120px;
      max-height: unset;
      padding: 10px 12px;
      gap: 6px;
    }
  }

  &__title {
    @include font('Inter', 35px, 700);
    line-height: 41px;

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

    &--gray-gradient {
      background: linear-gradient(to top, #A9C4FF -2.59%, #FFFFFF 98.88%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 31px;
      line-height: 36px;
    }

    @media screen and (max-width: 1200px), screen and (max-width: 1420px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 26px;
    }

    @media screen and (max-width: 1110px) {
      font-size: 28px;
      line-height: 130%;
    }
  }

  &__description {
    @include font('Inter', 14px, 400);
    line-height: 130%;
    letter-spacing: -1px;
    transition: 0.3s ease-in-out;
    width: 56%;

    &--white {
      color: $text-color--white-primary;
    }

    &--black {
      color: $text-color--chinese-black;
    }

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 13px;
      width: 60%;
      line-height: 119%;
      letter-spacing: -0.888136px;
    }

    @media screen and (max-width: 1110px) {
      font-size: 14px;
    }

    @media screen and (max-width: 600px) {
      width: 100%;
      font-size: 13px;
    }
  }
}
</style>
