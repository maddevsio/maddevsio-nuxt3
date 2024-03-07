<script setup lang="ts">
import { keyProjectMilestones } from '~/components/CaseStudies/Yourcast/constants/yourcastConstants'
</script>
<template>
  <section class="container_regular p-96_bottom p-96_top media-p-48_top media-p-0_bottom key-project-milestone">
    <h3
      class="case_title_h2 m-48_bottom media-m-24_bottom"
    >
      Key project milestones
    </h3>
    <LazyCaseStudiesUIParallaxCards :data-cards="keyProjectMilestones" />
  </section>
</template>
<style lang="scss">
.key-project-milestone {
  overflow: hidden;
}
</style>
