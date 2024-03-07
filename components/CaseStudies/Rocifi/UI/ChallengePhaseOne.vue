<script setup lang="ts">
import { phaseOneResults, rocifiChallengePhaseOne } from '~/components/CaseStudies/Rocifi/constants/rocifiConstants'
</script>
<template>
  <div class="case_rocifi__challenge-phase-one m-48_bottom">
    <div class="container_regular m-48_bottom media-m-24_bottom">
      <h3
        class="case_title_h4 m-24_bottom"
      >
        Phase 1: Preparation
      </h3>
      <LazyCaseStudiesRocifiUIChallengeSolutionCards
        :cards-data="rocifiChallengePhaseOne"
        :margin-top-on-icon-wrapper="15"
      />
    </div>
    <LazyCaseStudiesRocifiUIChallengeResults
      :result-data="phaseOneResults"
      class="m-48_bottom media-m-24_bottom"
    />
    <div class="container_middle">
      <div class="case_image-wrapper case_box-shadow">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-white"
          extension="jpg"
          alt="Project visibility"
        />
        <div class="case_image-main-image">
          <LazyCaseStudiesUIPicture
            :shadow="false"
            :lazy="false"
            :radius="false"
            :width="1028"
            :height="595.81"
            folder="rocifi"
            file="logs-pic"
            extension="png"
            alt="Phase 1"
          />
        </div>
      </div>
      <LazyCaseStudiesUITextParagraph
        class="case_text-align-center case-source-text m-12_top"
      >
        An example of an automated service for search and liquidation of overdue debts.
      </LazyCaseStudiesUITextParagraph>
    </div>
  </div>
</template>
