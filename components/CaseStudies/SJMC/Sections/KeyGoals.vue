<script setup lang="ts">

import { keyGoalsList } from '~/components/CaseStudies/SJMC/constants/sjmcConstants'
</script>
<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-48_bottom media-m-24_bottom">
      Key goals for Mad Devs
    </h2>
    <LazyCaseStudiesUIListDots class="m-96_bottom media-m-48_bottom">
      <LazyCaseStudiesUIListDotsBoxCheckMark
        v-for="goal in keyGoalsList"
        :key="goal"
      >
        {{ goal }}
      </LazyCaseStudiesUIListDotsBoxCheckMark>
    </LazyCaseStudiesUIListDots>
  </section>
</template>
