<script setup lang="ts">
import { authorizationData } from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'
</script>
<template>
  <div class="authorization m-96_bottom media-m-48_bottom">
    <LazyCaseStudiesMobileBankingUIChallengeSection
      v-bind="authorizationData"
      :main-title-tag="'h3'"
    />
  </div>
</template>
