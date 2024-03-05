<script setup lang="ts">
import { team } from '~/components/CaseStudies/R4TCA/constants/r4tcaConstants'
</script>
<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom">
      Meet the team
    </h2>
    <LazyCaseStudiesUIListTeam class="m-96_bottom media-m-48_bottom">
      <LazyCaseStudiesUIListTeamItem
        v-for="member in team"
        :key="member.name"
        v-bind="member"
      />
    </LazyCaseStudiesUIListTeam>
  </section>
</template>
