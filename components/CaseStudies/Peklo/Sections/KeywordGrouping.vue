<script setup lang="ts">
import { keywordGroupingCards } from '~/components/CaseStudies/Peklo/constants/pekloConstants'
</script>
<template>
  <section class="case-keyword-grouping container_regular">
    <h2 class="case_title_h2 m-24_bottom">
      Keyword grouping
    </h2>
    <LazyCaseStudiesUITextParagraph class="m-24_bottom">
      The heart of Peklo Tool is a smart technology that groups keywords. Performed manually, grouping can take an overwhelmingly long time. It gets virtually unmanageable if a planned contextual advertising campaign uses thousands or tens of thousands of keywords, which they often do.
    </LazyCaseStudiesUITextParagraph>
    <div>
      <div
        class="case_img-wrapper m-12_bottom media-m-8_bottom"
      >
        <LazyCaseStudiesUIPicture
          :width="817"
          :height="459"
          file="keyword-grouping"
          alt="Keyword grouping"
          folder="peklo"
          extension="jpg"
        />
      </div>
      <LazyCaseStudiesUITextParagraph
        class="case_img-alt m-56_bottom media-m-32_bottom"
        color="#a4a8b4"
      >
        The “Appliance Repair” niche 379 keywords in 369 ad groups within 0.176 seconds
      </LazyCaseStudiesUITextParagraph>
    </div>
    <LazyCaseStudiesUITextParagraph class="m-24_bottom">
      Automating the grouping process was challenging because human language was involved. All the possible spelling options (including typos) for keywords need to be considered. Normally, neural networks and natural language processing (NLP) technologies would be used to handle the linguistic variations. But with them, grouping would’ve been slow, so we found an alternative solution.
    </LazyCaseStudiesUITextParagraph>
    <div>
      <LazyCaseStudiesUIColoredCards
        :cards-data="keywordGroupingCards"
        grid-type="two-two"
      />
    </div>
    <LazyCaseStudiesUITextQuote
      class="m-auto m-96_top m-96_bottom media-m-48_top media-m-48_bottom"
      author="Oleg Katkov, Software engineer"
    >
      Speed was a priority. We wanted to create a tool that could impress the user by grouping keywords instantly. By integrating the dictionaries, we achieved it. The grouping process takes Peklo Tool only a few seconds.
    </LazyCaseStudiesUITextQuote>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_img-wrapper {
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
  }

  &-keyword-grouping {
    :deep(.case_img-alt.case_paragraph) {
      text-align: center;
      font-size: 13px;
      letter-spacing: -0.02em;
    }
  }

  @media screen and (max-width: 768px) {

    &_img-alt {
      font-size: 11px;
    }
  }
}
</style>
