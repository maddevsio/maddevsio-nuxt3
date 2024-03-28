<script setup lang="ts">
import { teamNamba } from '~/components/CaseStudies/NambaTaxi/constants/nambaTaxiConstants'
</script>
<template>
  <section class="container_regular">
    <h3 class="case_title_h3 m-24_bottom case_team-title">
      Meet the team
    </h3>
    <LazyCaseStudiesUIListTeam class="m-72_bottom media-m-41_bottom">
      <LazyCaseStudiesUIListTeamItem
        v-for="member in teamNamba"
        :key="member.name"
        v-bind="member"
      />
    </LazyCaseStudiesUIListTeam>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_team-title{
    text-align: center;
  }
}
</style>
