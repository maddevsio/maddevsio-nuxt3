<script setup lang="ts">
import { ILIAndELIData } from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'
</script>
<template>
  <div class="ili-and-eli m-96_bottom media-m-48_bottom">
    <LazyCaseStudiesMobileBankingUIChallengeSection
      v-bind="ILIAndELIData"
      :main-title-tag="'h3'"
    />
  </div>
</template>
