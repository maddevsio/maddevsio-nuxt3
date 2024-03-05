<script setup lang="ts">
import { visaAliasData } from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'
</script>
<template>
  <div class="visa-alias m-96_bottom media-m-48_bottom">
    <LazyCaseStudiesMobileBankingUIChallengeSection
      v-bind="visaAliasData"
      :main-title-tag="'h3'"
    />
  </div>
</template>
