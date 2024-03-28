<script setup lang="ts">
import { mainStagesList } from '~/components/CaseStudies/Megauni/constants/megauniConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case_megauni__main-stages m-96_bottom media-m-48_bottom">
    <div class="container_regular">
      <h3
        class="case_title_h2 m-12_bottom"
      >
        Main Stages of Development
      </h3>
      <LazyCaseStudiesUITextParagraph
        class="m-24_bottom"
      >
        The development process was divided into several stages:
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots class="m-24_bottom">
        <LazyCaseStudiesUIListDotsCustomCheckMark
          v-for="listItem in mainStagesList"
          :key="listItem.text"
          :background-color="listItem.backgroundColor"
          class="case_megauni__main-stages-list-item"
        >
          <template #icon>
            <img
              loading="lazy"
              width="25"
              height="25"
              :src="$getMediaFromS3(`/images/Cases/megauni/svg/${listItem.icon}.svg`)"
              :alt="listItem"
              class="list-item__box-icon"
            >
          </template>
          <template #description>
            <LazyCaseStudiesUITextParagraph
              :class="`case_megauni__main-stages-list-item-description text-color-${listItem.textColor}`"
            >
              {{ listItem.text }}
            </LazyCaseStudiesUITextParagraph>
          </template>
        </LazyCaseStudiesUIListDotsCustomCheckMark>
      </LazyCaseStudiesUIListDots>
      <div>
        <LazyCaseStudiesUITextParagraph class="m-24_bottom">
          The work was divided into three milestones to launch the MVP. Each milestone lasted 1 month,
          including specified features the team must deploy to the platform. After the launch of the MVP,
          the team completed the features (within two months) that the client demanded but Open edX does not provide.
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph>
          Both teams did their best to release the product by mid-March to allow the first group of students to begin using MegaUni courses.
        </LazyCaseStudiesUITextParagraph>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case_megauni__main-stages {
  :deep(.list-item-custom-check-mark) {
    padding: 18.92px 29.5px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and (max-width: 768px) {
      padding: 17.08px 13.5px;
    }
  }

  &-list-item-description {
    font-size: 20px;
    font-weight: 500;
    line-height: 166%;

    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 150%;
      letter-spacing: -0.02em;
    }
  }
}

.list-item__box-icon {
  vertical-align: text-bottom;
  margin-right: 27.44px;
  margin-top: 4px;

  @media screen and (max-width: 768px) {
    margin-right: 16.75px;
    margin-top: 0;
  }
}
</style>
