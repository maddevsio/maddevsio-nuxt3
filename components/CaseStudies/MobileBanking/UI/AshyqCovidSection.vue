<script setup lang="ts">
import { ashyqCovidData } from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'
</script>
<template>
  <div class="ashyq-covid m-96_bottom media-m-48_bottom">
    <LazyCaseStudiesMobileBankingUIChallengeSection
      v-bind="ashyqCovidData"
      :main-title-tag="'h3'"
    />
  </div>
</template>
