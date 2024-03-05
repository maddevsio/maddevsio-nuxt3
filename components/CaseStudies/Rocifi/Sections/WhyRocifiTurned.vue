<script setup lang="ts">
import { whyeRocifiTurnedCards } from '~/components/CaseStudies/Rocifi/constants/rocifiConstants'
</script>
<template>
  <section class="case_rocifi__turned m-96_bottom media-m-48_bottom">
    <div
      class="container_regular"
    >
      <h3
        class="case_title_h3 m-12_bottom"
      >
        Why RociFi Turned to Mad Devs
      </h3>
      <LazyCaseStudiesUITextParagraph
        class="m-48_bottom"
      >
        During the development process, RociFi realized that the development team needed 1 — 2 extra developers.
        RociFi turned to Mad Devs on the recommendation of their acquaintances — the
        <LazyCaseStudiesUILinkInsideText
          href="https://maddevs.io/case-studies/lido/"
          text-color="lavender"
        >
          Lido
        </LazyCaseStudiesUILinkInsideText>
        crypto project.
        In 2022 Mad Devs assisted Lido.fi in improving their products and securing staking for digital assets.
        Lido.fi assured RociFi that Mad Devs could help and assist them with everything related to crypto development.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextQuoteBox
        author="Pavel Zverev, Tech Lead and Advisor"
        class="m-48_top m-48_bottom media-m-24_top media-m-24_bottom m-auto"
      >
        This project was interesting to Mad Devs, not only because we could provide proper expertise in blockchain.
        But also to build processes that initially improve development and increase the final product quality.
      </LazyCaseStudiesUITextQuoteBox>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom">
        We began testing the entire system for stability and flexibility issues. We found that the architecture was
        overly complex, creating problems with operations' accuracy and deployment speed.
        Consequently, the project infrastructure and protocol also needed changes to provide more efficiency.
        We set goals to improve the solution's stability and reliability.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_regular">
      <div class="case_rocifi__cards">
        <LazyCaseStudiesRocifiUICardTechSolution
          v-for="card in whyeRocifiTurnedCards"
          v-bind="card"
          :key="card.icon"
          text-color="gray"
          :title-tag="'h4'"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case_rocifi {
  &__cards {
    @include grid(repeat(2, 1fr), auto, 25px, 25px);

    @media screen and (max-width: 690px) {
      @include grid(repeat(1, 1fr), auto, 20px, 20px);

      :deep(.case_title_h4) {
        font-size: 18px;
        line-height: 135%;
      }
    }
  }
}
</style>
