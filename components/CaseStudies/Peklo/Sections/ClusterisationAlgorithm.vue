<script setup lang="ts">
import { additionalFunctionsCards, slides } from '~/components/CaseStudies/Peklo/constants/pekloConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case-clusterisation">
    <div class="container_regular">
      <h2 class="case_title_h2 case_title m-24_bottom">
        Clusterisation algorithm
      </h2>
      <LazyCaseStudiesUITextParagraph class="case_introduction-paragraph m-24_bottom">
        The clusterisation algorithm was the project’s main challenge and is now its main strength. <br> <span class="case_bold">Here’s how it goes:</span>
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_full background-color-silver m-48_bottom media-m-24_bottom p-48_top p-48_bottom media-p-24_top media-p-24_bottom">
      <div
        class="container_regular"
      >
        <LazySharedLottieMad
          id="clusterisation-algorithm"
          class="case_lottie"
          height="416px"
          :lottie-link="$getMediaFromS3(`/images/Cases/peklo/lottie/clusterisation-algorithm.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div class="container_regular">
      <LazyCaseStudiesUITextParagraph class="m-12_bottom">
        *The looping-over process is problematic for many reasons. First, human language is messy and hard to codify. Second, phrases can contain different word forms. We also needed to consider that words can be misspelled and typoed. Finally, the system needs to recognise synonyms.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-12_bottom">
        Our first solution was to build parsers for extensive dictionaries having all possible word forms. Peklo Tool’s early version would load the dictionaries into RAM, but later, we switched to a database. The algorithm also uses thesauri and lists of typos and misspellings to interpret synonyms as one token and cluster them together.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        In clusterisation, Peklo Tool’s early version used the Aho–Corasick algorithm to find matches.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div
      class="container_middle m-48_bottom media-m-24_bottom slider"
    >
      <LazyCaseStudiesUISwiperWithThumbs
        :components="slides"
        :safari-top-bar="false"
        :box-shadow="true"
        :width="1026"
        :height="517"
      />
    </div>
    <div class="container_regular">
      <LazyCaseStudiesUITextParagraph class="case_bold m-8_bottom">
        Later on, we moved to a more brute-force algorithm:
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots class="m-12_bottom">
        <LazyCaseStudiesUIListDotsItem>Split a phrase into tokens</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>Loop over all other phrases</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>Split each of them into tokens</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>Count equal tokens (consider synonyms and prepositions)</LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
      <LazyCaseStudiesUITextParagraph class="m-96_bottom media-m-48_bottom">
        It’s simpler, faster, and more cache-friendly than the Aho–Corasick algorithm. Most importantly, it’s sufficient for lists of keywords for a contextual advertising campaign.
      </LazyCaseStudiesUITextParagraph>
      <h3 class="case_title_h4 m-12_bottom">
        Generation of ad texts
      </h3>
      <LazyCaseStudiesUITextParagraph>
        Another challenge was to automate the process of putting together different ad texts for each group of keywords. It’s an advanced combinatorial problem. We needed to implement an algorithm that would know how to write imperative sentences, what words to use in them, and how to connect those words.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextQuoteBox
        class="m-48_top m-48_bottom media-m-24_top media-m-24_bottom m-auto"
        author="Oleg Katkov, Software engineer"
      >
        No ready-made solutions were available anywhere on the Internet, so we built the algorithm from scratch using dynamic programming. It turned out to be quite efficient. It produces impressive results with little resources.
      </LazyCaseStudiesUITextQuoteBox>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom media-m-48_bottom">
        After collecting keywords and having them automatically grouped by Peklo Tool, the user can feed a few unique selling propositions to the ad text generation feature.
      </LazyCaseStudiesUITextParagraph>
      <h4 class="case_title_h5 m-12_bottom">
        Peklo Tool then creates hundreds of ad texts within seconds:
      </h4>
    </div>
    <div
      class="container_middle case_img-wrapper"
    >
      <LazyCaseStudiesUIPicture
        :width="1026"
        :height="517"
        file="generation-of-ad-texts"
        alt="Generation of ad texts"
        folder="peklo"
        extension="png"
      />
      <LazyCaseStudiesUITextParagraph
        class="case_img-alt m-12_top media-m-8_top m-96_bottom media-m-48_bottom m-auto"
        color="#a4a8b4"
      >
        The structure of a contextual advertising campaign for a car repair business. Ad texts have been generated automatically based on keyword groups and unique selling propositions.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div
      class="container_regular"
    >
      <h3 class="case_title_h3 m-24_bottom media-m-12_bottom">
        Additional functions
      </h3>
      <LazyCaseStudiesUIColoredCards
        :cards-data="additionalFunctionsCards"
        grid-type="two-one"
        class="m-72_bottom media-m-48_bottom"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_lottie  {
    max-width: 546px;
  }

  &_title,
  &_introduction-paragraph {
    text-align: center;
  }

  &_introduction-paragraph {
    @media screen and (max-width: 890px) {
      br {
        display: none;
      }
    }
  }

  &-clusterisation {
    :deep(.case_bold.case_paragraph) {
      font-weight: 700;
    }

    :deep(.case_img-alt.case_paragraph) {
      max-width: 606px;
      text-align: center;
      font-size: 13px;
      letter-spacing: -0.02em;
    }
  }

  &_img-wrapper {
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
  }

  @media screen and (max-width: 768px) {
    &-clusterisation {
      :deep(.case_img-alt.case_paragraph) {
        font-size: 11px;
      }
    }
  }
}

:deep(.list-item_dot) {
  margin-bottom: 0;
}

:deep(.swiper.gallery-thumbs .swiper-slide) {
  opacity: 0.6;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
}

:deep(.swiper.gallery-thumbs .swiper-slide-active) {
  opacity: 1;
}
</style>
