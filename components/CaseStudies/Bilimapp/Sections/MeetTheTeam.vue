<script setup lang="ts">
import { teamMDBilim } from '~/components/CaseStudies/Bilimapp/constants/bilimappConstants'
</script>
<template>
  <section class="container_regular m-96_bottom media-m-48_bottom">
    <h3
      class="case_title_h2 m-24_bottom"
    >
      Meet the team
    </h3>
    <LazyCaseStudiesUIListTeam
      class="m-72_bottom media-m-41_bottom"
    >
      <LazyCaseStudiesUIListTeamItem
        v-for="member in teamMDBilim"
        :key="member.name"
        v-bind="member"
      />
    </LazyCaseStudiesUIListTeam>
  </section>
</template>
