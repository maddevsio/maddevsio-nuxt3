<script setup lang="ts">
import { theChallenges } from '~/components/CaseStudies/SJMC/constants/sjmcConstants'
</script>
<template>
  <section class="container_regular">
    <h3 class="case_title_h3 m-48_top m-12_bottom">
      The challenges
    </h3>
    <LazyCaseStudiesUIListDots>
      <LazyCaseStudiesUIListDotsHyphenItem
        v-for="challenge in theChallenges"
        :key="challenge"
      >
        {{ challenge }}
      </LazyCaseStudiesUIListDotsHyphenItem>
    </LazyCaseStudiesUIListDots>
  </section>
</template>
