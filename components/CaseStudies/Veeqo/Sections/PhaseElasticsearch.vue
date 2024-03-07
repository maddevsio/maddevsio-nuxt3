<script setup lang="ts">
import { elasticsearchCards } from '~/components/CaseStudies/Veeqo/constants/veeqoConstants'
</script>
<template>
  <section class="case-elast container_regular m-66_bottom media-m-48_bottom">
    <h2 class="case_title_h2 m-12_bottom">
      Phase 3: Elasticsearch
    </h2>
    <LazyCaseStudiesUITextParagraph class="m-24_bottom">
      Elasticsearch is crucial in the way users experience the Veeqo platform: the dashboard and the entire interface
      rely on Elasticsearch. Even if everything else functions flawlessly, delays in the search engine alone cause
      problems for user experience.
    </LazyCaseStudiesUITextParagraph>
    <LazyCaseStudiesUIColoredCards
      :cards-data="elasticsearchCards"
      grid-type="two-two"
      class="m-96_bottom media-m-48_bottom"
    />
    <h3 class="case_title_h4 m-8_bottom">
      Solution
    </h3>
    <LazyCaseStudiesUITextParagraph class="m-24_bottom media-m-12_bottom">
      There are two main ways to improve performance: Increase compute resources, Optimize the use of resources
    </LazyCaseStudiesUITextParagraph>
    <LazyCaseStudiesUITextParagraph class="m-34_bottom media-m-24_bottom">
      At any given moment DevOps specialists calculate and evaluate cost factors of different solutions. We applied both
      types of solutions as we started with enhancing the cluster and later optimized indexing to make searching as
      convenient for users as possible.
    </LazyCaseStudiesUITextParagraph>
    <div class="case_cards-container">
      <LazyCaseStudiesUICard
        class="background-color-silver"
        padding="24px"
      >
        <h4 class="case_title_h4 m-8_bottom">
          New cluster
        </h4>
        <LazyCaseStudiesUITextParagraph class="m-32_bottom">
          We implemented a new Elasticsearch cluster as a self-hosted solution on EC2 instances.
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph class="case_bold">
          Three reasons:
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUIListDots>
          <LazyCaseStudiesUIListDotsItem>Control over the security of our Elasticsearch</LazyCaseStudiesUIListDotsItem>
          <LazyCaseStudiesUIListDotsItem>Immediate response in case of incidents</LazyCaseStudiesUIListDotsItem>
          <LazyCaseStudiesUIListDotsItem>Independent monitoring and investigation of Elasticsearch performance</LazyCaseStudiesUIListDotsItem>
        </LazyCaseStudiesUIListDots>
      </LazyCaseStudiesUICard>
      <LazyCaseStudiesUICard
        class="background-color-silver"
        padding="24px"
      >
        <h4 class="case_title_h4 m-8_bottom">
          Indexing and performance
        </h4>
        <LazyCaseStudiesUITextParagraph class="m-32_bottom">
          The indices featured too much unnecessary information and non-optimized mapping.
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph class="case_bold">
          What we did:
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUIListDots>
          <LazyCaseStudiesUIListDotsItem>Refactored them to make them concise</LazyCaseStudiesUIListDotsItem>
          <LazyCaseStudiesUIListDotsItem>
            Used the replication and sharding mechanisms to distribute the indices among five nodes
          </LazyCaseStudiesUIListDotsItem>
        </LazyCaseStudiesUIListDots>
      </LazyCaseStudiesUICard>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_cards-container {
    @include grid(repeat(2, 1fr), auto, 25px, 0);

    @media screen and (max-width: 880px) {
      @include grid(repeat(1, 1fr), auto, 0, 10px);
    }
  }

  &-elast {
    :deep(.case_bold.case_paragraph) {
      font-weight: 700;
    }

    :deep(.list-item_dot) {
      margin-bottom: 0;
    }
  }
}
</style>
