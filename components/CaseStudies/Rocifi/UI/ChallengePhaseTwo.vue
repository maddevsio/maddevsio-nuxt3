<script setup lang="ts">
import { phaseTwoResults, rocifiChallengePhaseTwo } from '~/components/CaseStudies/Rocifi/constants/rocifiConstants'
</script>
<template>
  <div class="case_rocifi__challenge-phase-two m-48_bottom">
    <div class="container_regular m-48_bottom media-m-24_bottom">
      <h3 class="case_title_h4 m-24_bottom">
        Phase 2: Testing
      </h3>
      <LazyCaseStudiesRocifiUIChallengeSolutionCards
        :cards-data="rocifiChallengePhaseTwo"
        class="m-24_bottom"
      />
      <LazyCaseStudiesUITextParagraph>
        Moreover, we wrote tools that helped us check smart contract configurations and that their
        operational parameters were within acceptable values.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <LazyCaseStudiesRocifiUIChallengeResults :result-data="phaseTwoResults" />
  </div>
</template>
