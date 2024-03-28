<script setup lang="ts">
import { teamMDMegauni, teamMegauni } from '~/components/CaseStudies/Megauni/constants/megauniConstants'
</script>
<template>
  <section class="container_regular m-96_bottom media-m-48_bottom">
    <h3
      class="case_title_h2 m-24_bottom"
    >
      Meet the team
    </h3>
    <h4
      class="case_megauni__title m-24_bottom"
    >
      Mad Devs:
    </h4>
    <LazyCaseStudiesUIListTeam
      class="m-72_bottom media-m-41_bottom"
    >
      <LazyCaseStudiesUIListTeamItem
        v-for="member in teamMDMegauni"
        :key="member.name"
        v-bind="member"
      />
    </LazyCaseStudiesUIListTeam>
    <h4
      class="case_megauni__meet_team-title m-24_bottom"
    >
      MegaUni:
    </h4>
    <LazyCaseStudiesUIListTeam
      class="m-72_bottom media-m-41_bottom"
    >
      <LazyCaseStudiesUIListTeamItem
        v-for="member in teamMegauni"
        :key="member.name"
        v-bind="member"
      />
    </LazyCaseStudiesUIListTeam>
  </section>
</template>
<style lang="scss" scoped>
.case_megauni__meet_team-title {
  @include font('Inter', 16px, 700);
  line-height: 24px;
  letter-spacing: -0.4px;
  color: $text-color--black-oil;
}
</style>
