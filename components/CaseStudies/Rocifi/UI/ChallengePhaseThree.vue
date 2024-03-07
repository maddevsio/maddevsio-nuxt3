<script setup lang="ts">
import { phaseThreeResults, rocifiChallengePhaseThree } from '~/components/CaseStudies/Rocifi/constants/rocifiConstants'
</script>
<template>
  <div class="case_rocifi__challenge-phase-three m-48_bottom">
    <div class="container_regular m-48_bottom media-m-24_bottom">
      <h3 class="case_title_h4 m-24_bottom">
        Phase 3: Protocol Deployment
      </h3>
      <LazyCaseStudiesRocifiUIChallengeSolutionCards
        :cards-data="rocifiChallengePhaseThree"
        :margin-top-on-icon-wrapper="65"
        class="m-24_bottom"
      />
    </div>
    <LazyCaseStudiesRocifiUIChallengeResults :result-data="phaseThreeResults" />
  </div>
</template>
