<script setup lang="ts">
import type { GridLottieWithCaseStudyProps } from '~/components/GridLottie/interfaces/IGridLottieWithCaseStudy'
import { GridLottieWithCaseStudy } from '~/components/GridLottie/classes/GridLottieWithCaseStudy'

interface Props {
  slice: GridLottieWithCaseStudyProps
}
const { slice } = defineProps<Props>()
const {
  cards,
} = new GridLottieWithCaseStudy(slice)
</script>
<template>
  <div class="container">
    <ul
      class="grid-lottie__grid"
    >
      <li
        v-for="(card, i) in cards"
        :key="`${card.title}-${i}`"
        :class="[
          card.classNames.all,
          card.classNames.solution,
          card.classNames.caseStudy,
        ]"
        :style="{ backgroundColor: card.background || null }"
        class="card-item"
        data-testid="grid-lottie-animation-item"
      >
        <LazyGridLottieUICard
          v-if="!card.cardType"
          :card="card"
        />
        <LazySharedCaseStudiesItem
          v-else
          :id="createUID(card.title)"
          :card-width-type="card.fullWidth ? 'full' : 'small'"
          :title="card.title"
          :case-type="card.subtitle"
          :description="card.description"
          :logo="{
            width: card.logoWidth,
            height: card.logoHeight,
            folder: card.folder,
            file: card.file,
            alt: card.logoAlt,
          }"
          :link="card.link"
          :video-link="card.video"
          :video-poster-link="card.poster"
        />
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.grid-lottie {
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: 1260px) {
      grid-gap: 24px;
    }

    @media screen and (max-width: 1124px) {
      grid-template-columns: 1fr;
    }
  }
}

.card-item {
  box-sizing: border-box;
  padding: 80px;
  color: $text-color--white-primary;
  background-color: $bgcolor--black-pale;
  display: grid;
  grid-template-areas:"lottie"  "title"  "content";
  z-index: 1;
  &-bottom{
    padding-bottom: 0;
    grid-template-areas:"title" "content" "lottie";
  }
  &--without-lottie {
    padding-bottom: 80px;
  }
  &--case-study {
    padding: 0 !important;
    grid-template-areas: unset;

    &-full {
      height: 605px;
      max-height: 605px;
    }
  }

  :deep(.case-studies-item--small) {
    @media screen and (min-width: 1092px) {
      height: auto;
    }
  }

  @media screen and (max-width: 1124px) {
    padding: 60px;
    &-bottom{
      padding-bottom: 0;
    }
    &--without-lottie {
      padding-bottom: 60px;
    }
  }

  @media screen and (max-width: 580px) {
    padding: 32px;
    &-bottom{
      padding-bottom: 0;
    }
    &--without-lottie {
      padding-bottom: 32px;
    }
  }

  @media screen and (max-width: 430px) {
    padding: 24px;
    &-bottom{
      padding-bottom: 0;
    }
    &--without-lottie {
      padding-bottom: 24px;
    }

    &--case-study {
      height: 230px;
    }
  }

  &--full-width {
    grid-column: auto/span 2;

    @media screen and (max-width: 1124px) {
      grid-column: auto;
    }
  }
}
</style>
