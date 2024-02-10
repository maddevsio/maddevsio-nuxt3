<script setup lang="ts">
import type {
  GridLottieWithCaseStudyTransformedCard,
} from '~/components/GridLottie/interfaces/IGridLottieWithCaseStudy'
import { renderCardContent } from '~/components/GridLottie/helpers/renderCardContent'

interface Props {
  card: GridLottieWithCaseStudyTransformedCard
}
const { card } = defineProps<Props>()
const { $getMediaFromS3 } = useMediaFromS3()
const VNodeTitle = () => h(card.titleTag || 'h3', { innerHTML: card.title })
</script>
<template>
  <div
    :class="[card.classNames.textAlignment]"
  >
    <div
      v-if="card.lottieAnimation"
      :class="[
        `card-item__lottie card-item__lottie-${card.lottiePosition}`,
      ]"
      :style="{
        'maxWidth': card.width ? `${card.width}px` : null,
        'height': card.height ? `${card.height}px` : null
      }"
    >
      <LazySharedLottieMad
        :id="`${card.lottieAnimation}`"
        :autoplay="true"
        :height="card.lottieHeight || '395px'"
        :lottie-link="$getMediaFromS3(`${card.lottieAnimation}`)"
        class="case_lottie"
      />
    </div>
    <VNodeTitle
      v-if="card.title"
      class="card-item__title"
    />
    <div
      v-if="card.description"
      class="card-item__content"
      v-html="renderCardContent(card.description)"
    />
  </div>
</template>
<style lang="scss" scoped>
.card-item {
  &__lottie {
    max-width: 385px;
    height: 95px;
    margin-bottom: 60px;
    grid-area: lottie;

    @media screen and (max-width: 430px) {
      margin-bottom: 24px;
      height: 75px !important;
    }

    &-bottom {
      max-width: 689px;
      height: auto;
      margin: 40px auto 0;

      @media screen and (max-width: 430px) {
        height: 85px !important;
      }

      @media screen and (max-width: 343px) {
        width: 289px;
        height: 117px;
      }
    }
  }

  &--text-center {
    .card-item__title {
      text-align: center;

      @media screen and (max-width: 1024px) {
        text-align: left;
      }
    }
    .card-item__content,
    :deep(p) {
      text-align: center;

      @media screen and (max-width: 1024px) {
        text-align: left;
      }
    }
  }

  &__title {
    grid-area: title;
    @include font('Inter', 56px, 800);
    line-height: 65px;
    letter-spacing: -0.04em;
    max-width: 1080px;

    @media screen and (max-width: 580px) {
      font-size: 30px;
      line-height: 37px;
    }

    @media screen and (max-width: 430px) {
      font-size: 22px;
      line-height: 26.63px;
    }
  }

  &__content {
    grid-area: content;
    @include font('Inter', 24px, 600);
    line-height: 38px;
    letter-spacing: -0.013em;
    word-break: break-word;
    max-width: 1080px;

    @media screen and (max-width: 1260px) {
      font-size: 24px;
      line-height: 38px;
    }

    @media screen and (max-width: 580px) {
      font-size: 20px;
      line-height: 30px;
    }

    @media screen and (max-width: 430px) {
      font-size: 16px;
      line-height: 23.8px;
    }

    :deep(p) {
      margin-top: 40px;

      @media screen and (max-width: 430px) {
        margin-top: 16px;
      }
    }

    :deep(li) {
      font-weight: 400;
      margin-top: 7px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    :deep(ul) {
      li {
        &:before {
          content: '';
          display: inline-block;
          width: 20px;
          min-width: 20px;
          height: 1.5px;
          background-color: $border-color--red;
          vertical-align: top;
          margin: 18px 12px 0 0;

          @media screen and (max-width: 1260px) {
            margin-top: 14px;
          }
        }
      }
    }
  }
}
</style>
