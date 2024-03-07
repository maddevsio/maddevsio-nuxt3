<script setup lang="ts">
import { team } from '~/components/CaseStudies/Guardrails/constants/guardrailsConstants'
</script>
<template>
  <section class="container_regular m-72_bottom media-m-48_bottom">
    <h2 class="case_title_h2 case_title m-48_bottom media-m-24_bottom">
      Meet the team
    </h2>
    <div class="m-72_bottom media-m-48_bottom">
      <LazyCaseStudiesUIListTeam class="m-72_bottom media-m-41_bottom">
        <LazyCaseStudiesUIListTeamItem
          v-for="member in team"
          :key="member.name"
          v-bind="member"
        />
      </LazyCaseStudiesUIListTeam>
    </div>
    <LazyCaseStudiesUITextQuoteAuthor
      class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
      author="Stefan Streichsbier"
      position="Founder & CEO, GuardRails"
      file="stefan"
      extension="png"
      alt="Stefan Streichsbier"
      folder="guardrails"
    >
      “I am very happy with Mad Devs services so far. Looking forward to a long and fruitful partnership”.
    </LazyCaseStudiesUITextQuoteAuthor>
  </section>
</template>
