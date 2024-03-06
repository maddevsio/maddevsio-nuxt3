<script setup lang="ts">
import { googlePlayBg, googlePlayLogoBilim } from '~/components/CaseStudies/Bilimapp/constants/bilimappConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case-bilim__about m-96_bottom m-96_top media-m-48_top media-m-48_bottom">
    <div class="container_regular m-96_bottom media-m-48_bottom">
      <LazyCaseStudiesUITextParagraph>
        The non-profit program
        <LazyCaseStudiesUILinkInsideText
          href="https://saglyk.org/"
          text-color="blue"
        >
          Saglyk
        </LazyCaseStudiesUILinkInsideText>
        recognizes the importance of women’s health awareness.
        While working on a program to expand health education, Saglyk chose Mad Devs as a development company because
        our team knows the value of
        <LazyCaseStudiesUILinkInsideText
          href="https://maddevs.io/healthtech/"
          text-color="blue"
        >
          HealthTech software solutions.
        </LazyCaseStudiesUILinkInsideText>
        We had to improve and maintain a new mobile app
        for tracking periods/menstruation. Saglyk aims to help women and girls easily monitor their cycles and be
        better informed about health issues so they can focus on what matters most: their health and their rights.
        The Bilim app is the first health app in the Turkmen language.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_full background-color-silver p-72_top p-72_bottom media-p-48_top media-p-48_bottom">
      <div class="container_regular">
        <h2
          class="case_title_h2 case_text-align-center m-48_bottom media-m-24_bottom"
        >
          The first and only women's health and wellness app in the Turkmen language
        </h2>
        <LazySharedLottieMad
          :autoplay="true"
          :lottie-link="$getMediaFromS3(`/images/Cases/bilimapp/lottie/about-grid-desktop.json`)"
          class="case_lottie case_lottie__desktop"
          height="198.75px"
        />
        <LazySharedLottieMad
          :autoplay="true"
          :lottie-link="$getMediaFromS3(`/images/Cases/bilimapp/lottie/about-grid-mobile.json`)"
          class="case_lottie case_lottie__mobile"
          height="352px"
        />
        <LazyCaseStudiesUICardWithLinkDownload
          :background-image="googlePlayBg"
          :logo="googlePlayLogoBilim"
          class="m-48_top media-m-24_top"
          href="https://play.google.com/store/apps/details?id=com.maestro.womenhealth"
          title="10K+ downloads in Google Play"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case-bilim__about {
  & .case_lottie__desktop {
    display: block;
  }

  & .case_lottie__mobile {
    display: none;
  }

  @media screen and (max-width: 430px) {
    & .case_lottie__desktop {
      display: none;
    }
    & .case_lottie__mobile {
      display: block;
    }
  }
}
</style>
