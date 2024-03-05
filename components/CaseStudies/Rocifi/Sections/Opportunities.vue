<script setup lang="ts">
import { opportunitiesList } from '~/components/CaseStudies/Rocifi/constants/rocifiConstants'
</script>
<template>
  <section class="case_rocifi__opportunities m-48_bottom">
    <div
      class="container_regular"
    >
      <h2
        class="case_title_h2 m-12_bottom"
      >
        Opportunities with RociFi
      </h2>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        RociFi is the first DeFi protocol that allows borrowers to take loans with collateral values
        less than 100% of loan principles. Moreover, RociFi is
      </LazyCaseStudiesUITextParagraph>
      <LazySharedListNumberedBox class="m-24_bottom">
        <LazySharedListNumberedBoxItem
          v-for="(item, i) in opportunitiesList"
          :id="`data-item-${i}`"
          :key="item.text"
          :data-background="item.background"
        >
          {{ item.text }}
        </LazySharedListNumberedBoxItem>
      </LazySharedListNumberedBox>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        The main feature of this protocol, which distinguishes it from competitors,
        is the credit scoring mechanism. Credit scores are risk-based, so the lower the score, the better.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        Based on DeFi's history and behavior, the credit scores protocol determines whether a borrower is
        likely to default on their debts. Therefore, lower credit scores mean lower default risk.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        <i>
          For example, a user with a solid reputation will probably receive a high score if they
          have participated responsibly in DeFi, such as lending/borrowing/liquidity provisioning/DEXes.
        </i>
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        However, statistically speaking, the very best credit scores (1–3) are the most difficult to obtain.
        Accordingly, RociFi scored 10,000+ Aave borrowers and scores 1–3 made up only 7% of all unique borrowers.
      </LazyCaseStudiesUITextParagraph>
    </div>
  </section>
</template>
