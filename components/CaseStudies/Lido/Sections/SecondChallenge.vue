<script setup lang="ts">
import { migrationPlanData, migrationToWormholeData } from '~/components/CaseStudies/Lido/constants/lidoConstants'
</script>
<template>
  <section class="case-lido__second-challenge m-72_bottom media-m-48_bottom">
    <div class="container_regular">
      <h3 class="case_title_h4-28 m-24_bottom">
        Second challenge: Integration with cross-chain bridge
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        The
        <a
          href="https://docs.anchorprotocol.com/anchor-2/protocol/bonded-assets-bassets/bonded-eth-beth"
          target="_blank"
          class="case_link-in-text"
          rel="noopener"
        >
          bETH
        </a> token is a derisively-native asset used in the Anchor Protocol.
        Its integration was carried out through the
        <a
          href="https://bridge.terra.money/"
          target="_blank"
          class="case_link-in-text"
          rel="noopener"
        >
          Shuttle bridge
        </a>, which transfers it between Terra and Ethereum.
        In order to preserve its resilience, a decision was made to migrate to
        <a
          href="https://www.portalbridge.com/#/transfer"
          target="_blank"
          rel="noopener"
          class="case_link-in-text"
        >
          Wormhole bridge.
        </a>
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        The migration plan is:
      </LazyCaseStudiesUITextParagraph>
      <LazySharedListNumberedBox class="m-48_bottom media-m-24_bottom">
        <LazySharedListNumberedBoxItem
          v-for="(solution, i) in migrationPlanData"
          :id="`solution-item-${i}`"
          :key="solution.text"
        >
          {{ solution.text }}
        </LazySharedListNumberedBoxItem>
      </LazySharedListNumberedBox>
      <LazyCaseStudiesUIEmbedCard v-bind="migrationToWormholeData" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case-lido__second-challenge {
  :deep(.embed-card) {
    padding-right: 90px;
  }
}
</style>
