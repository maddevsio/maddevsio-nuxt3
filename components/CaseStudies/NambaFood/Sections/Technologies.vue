<script setup lang="ts">
import { technologies } from '~/components/CaseStudies/NambaFood/constants/nambaFoodConstants'
</script>
<template>
  <section class="container_regular">
    <LazyCaseStudiesUITextParagraph class="m-24_top media-m-48_top">
      Monitoring also helps Mad Devs to prevent service timeouts. When the load grows, we can track spikes, estimate the
      severity of an issue and quickly resolve it.
    </LazyCaseStudiesUITextParagraph>
    <h3 class="case_title_h3 m-96_top m-48_bottom media-m-72_top media-m-24_bottom">
      Technologies used for the Namba Food project
    </h3>
    <LazyCaseStudiesUIListTechnologies>
      <LazyCaseStudiesUIListTechnologiesItem
        v-for="technology in technologies"
        :key="technology.name"
        v-bind="technology"
      />
    </LazyCaseStudiesUIListTechnologies>
  </section>
</template>
