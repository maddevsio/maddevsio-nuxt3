<script setup lang="ts">
import type { GridWithAnimationOptionCard } from '~/components/GridLottie/interfaces/IGridWithAnimationOption'
import { renderCardContent } from '~/components/GridLottie/helpers/renderCardContent'

interface Props {
  card: GridWithAnimationOptionCard
}
const { card } = defineProps<Props>()
const { $getMediaFromS3 } = useMediaFromS3()
const VNodeTitle = () => h(card.titleTag || 'h3', { innerHTML: card.title })
</script>
<template>
  <li
    :class="[
      card.fullWidth,
      `card-item--text-${card.alignText}`,
      `card-item-${card.lottiePosition}`,
      card.classNameWithoutLottie,
    ]"
    :style="{ backgroundColor: card.background }"
    class="card-item"
    data-testid="grid-lottie-animation-item"
  >
    <div
      v-if="card.lottieAnimation"
      :class="`card-item__lottie card-item__lottie-${card.lottiePosition}`"
      :style="{
        maxWidth: `${card.width}px`,
        height: `${card.height}px`,
      }"
    >
      <LazySharedLottieMad
        :id="`${card.lottieAnimation}-${card.title}`"
        :autoplay="true"
        :height="card.lottieHeight"
        :lottie-link="$getMediaFromS3(`${card.lottieAnimation}`)"
        class="case_lottie"
      />
    </div>
    <VNodeTitle
      v-if="card.title"
      class="card-item__title"
    />
    <div
      v-if="$prismic.asText(card.content)"
      class="card-item__content"
      v-html="renderCardContent($prismic.asHTML(card.content))"
    />
  </li>
</template>
<style lang="scss" scoped>
.card-item {
  box-sizing: border-box;
  padding: 80px;
  color: $text-color--white-primary;
  background-color: $bgcolor--black-pale;
  display: grid;
  grid-template-areas: "lottie" "title" "content";
  &-bottom {
    padding-bottom: 0;
    grid-template-areas: "title" "content" "lottie";
  }
  &--without-lottie {
    padding-bottom: 80px;
  }

  @media screen and (max-width: 1024px) {
    padding: 60px;
    &-bottom {
      padding-bottom: 0;
    }
    &--without-lottie {
      padding-bottom: 60px;
    }
  }

  @media screen and (max-width: 580px) {
    padding: 32px;
    &-bottom {
      padding-bottom: 0;
    }
    &--without-lottie {
      padding-bottom: 32px;
    }
  }

  @media screen and (max-width: 430px) {
    padding: 24px;
    &-bottom {
      padding-bottom: 0;
    }
    &--without-lottie {
      padding-bottom: 24px;
    }
  }

  &--full-width {
    grid-column: auto/span 2;

    @media screen and (max-width: 1024px) {
      grid-column: auto;
    }
  }

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
    :deep(p) {
      text-align: center;

      @media screen and (max-width: 1024px) {
        text-align: left;
      }
    }
  }

  &__title {
    grid-area: title;
    @include font("Inter", 56px, 800);
    line-height: 65px;
    letter-spacing: -0.04em;
    max-width: 1080px;
    word-break: break-word;

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
    @include font("Inter", 24px, 600);
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

    margin-top: 40px;

    @media screen and (max-width: 430px) {
      margin-top: 16px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  :deep(ul) {
    li {
      &:before {
        content: "";
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
</style>
