<script setup lang="ts">
import { team } from '~/components/CaseStudies/Peklo/constants/pekloConstants'
</script>
<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom">
      Meet the team
    </h2>
    <LazyCaseStudiesUIListTeam class="m-72_bottom media-m-41_bottom">
      <LazyCaseStudiesUIListTeamItem
        v-for="member in team"
        :key="member.name"
        v-bind="member"
      />
    </LazyCaseStudiesUIListTeam>
    <LazyCaseStudiesUITextQuoteAuthor
      class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
      author="Roman Leonov"
      position="Founder of Peklo Studio & Peklo Tool"
      file="roman-leonov"
      extension="png"
      alt="Roman Leonov"
      folder="peklo"
    >
      We don’t like the routine work that fellow digital marketing specialists have to do, so we’re happy to have created a solution for them. I’d like to thank our co-founders and partners at Mad Devs for this product. It lives, it works as intended, and it’s now bugless and supersmooth.
    </LazyCaseStudiesUITextQuoteAuthor>
  </section>
</template>
