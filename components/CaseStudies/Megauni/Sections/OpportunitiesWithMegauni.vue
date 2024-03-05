<script setup lang="ts">
import { opportunitiesCards } from '~/components/CaseStudies/Megauni/constants/megauniConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case_megauni__opportunities m-96_bottom media-m-48_bottom">
    <div class="container_regular m-48_bottom">
      <h3
        class="case_title_h2 m-48_bottom"
      >
        Opportunities With MegaUni
      </h3>
      <div
        class="case_megauni__opportunities-items"
      >
        <div
          v-for="(card, i) in opportunitiesCards"
          :key="`${card.title}-${i}`"
          class="case_megauni__opportunities-item background-color-silver"
        >
          <img
            loading="lazy"
            :src="$getMediaFromS3(`/images/Cases/${card.folder}/svg/${card.icon}.svg`)"
            :alt="card.title || 'Icon'"
            :width="card.iconWidth"
            :height="card.iconHeight"
            class="case_megauni__opportunities-icon"
          >
          <h4
            class="case_title_h4 m-10-bottom case_megauni__opportunities-title"
          >
            {{ card.title }}
          </h4>
          <LazyCaseStudiesUITextParagraph>
            {{ card.descriptions }}
          </LazyCaseStudiesUITextParagraph>
        </div>
      </div>
    </div>
    <div class="container_middle m-48_bottom">
      <div class="case_image-wrapper case_box-shadow">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="true"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-black"
          extension="jpg"
          alt="Opportunities with MegaUni"
        />
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="true"
          :width="1028"
          :height="416.81"
          folder="megauni"
          file="course-interface"
          extension="png"
          alt="Course Interface MegaUni"
        />
      </div>
    </div>
    <div class="container_full background-color-silver p-72_top p-72_bottom m-96_bottom media-m-48_bottom">
      <div class="container_regular">
        <LazySharedLottieMad
          class="case_lottie"
          height="492px"
          :lottie-link="$getMediaFromS3(`/images/Cases/megauni/lottie/performance.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div
      class="container_regular m-48_bottom"
    >
      <h4 class="case_title_h4 m-12_bottom">
        Efficiency
      </h4>
      <LazyCaseStudiesUITextParagraph>
        Online learning makes it easier for teachers to provide lessons to students. MegaUni provides teachers
        or staff managers a Studio tool for creating content. As part of lesson preparation,
        teachers can utilize various online learning tools, including videos, PDFs, and podcasts.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_middle m-96_bottom media-m-48_bottom">
      <div class="case_image-wrapper case_box-shadow">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="true"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-black"
          extension="jpg"
          alt="Opportunities with MegaUni"
        />
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="true"
          :width="1028"
          :height="733.81"
          folder="megauni"
          file="studio-view"
          extension="png"
          alt="Studio view MegaUni"
        />
      </div>
      <LazyCaseStudiesUITextParagraph class="case_text-align-center case_megauni__opportunities-source-text m-24_top">
        Image from studio view
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div
      class="container_regular"
    >
      <h4 class="case_title_h4 m-12_bottom">
        Variety
      </h4>
      <LazyCaseStudiesUITextParagraph>
        Using the MegaUni platform, universities may offer programs for various levels and disciplines,
        unique educational experiences, and learning styles. With MegaUni platform, students can attend live classes,
        study existing courses, and listen to podcasts as well as earn their diploma, degree, or certificate online
        without setting foot on a university campus.
      </LazyCaseStudiesUITextParagraph>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case_megauni__opportunities {
  &-items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
    box-sizing: border-box;
  }

  &-item {
    flex: 1 1 auto;
    padding: 32px;
    border-radius: 8px;
    width: 48%;
    box-sizing: border-box;
  }

  &-icon {
    margin-bottom: 13px;
  }

  .case_megauni__opportunities-source-text {
    font-size: 14px;
    line-height: 166%;
    color: $text-color--grey-opacity-40-percent;
  }
}
</style>
