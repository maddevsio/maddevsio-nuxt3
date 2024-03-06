<script setup lang="ts">
import { teamMobileBanking } from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'
</script>
<template>
  <section class="meet-the-team container_regular m-96_bottom media-m-48_bottom">
    <h3
      class="case_title_h2 m-24_bottom"
    >
      Meet the team
    </h3>
    <LazyCaseStudiesUIListTeam
      class="m-72_bottom media-m-41_bottom"
    >
      <LazyCaseStudiesUIListTeamItem
        v-for="member in teamMobileBanking"
        :key="member.name"
        v-bind="member"
      />
    </LazyCaseStudiesUIListTeam>
  </section>
</template>
