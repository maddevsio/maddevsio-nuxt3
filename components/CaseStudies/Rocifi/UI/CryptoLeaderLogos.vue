<script setup lang="ts">
import { leadersLogos } from '~/components/CaseStudies/Rocifi/constants/rocifiConstants'
</script>
<template>
  <div class="crypto-leader-logos m-24_bottom">
    <LazyCaseStudiesRocifiUICryptoLeaderLogo
      v-for="(logoItem, logoIndex) in leadersLogos"
      :key="logoIndex"
      :logo="logoItem.logo"
      :delay="logoItem.delay"
    />
  </div>
</template>
<style lang="scss" scoped>
.crypto-leader-logos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

  @media screen and (max-width: 820px) {
    gap: 12px;
  }
}
</style>
