<script setup lang="ts">
import { team } from '~/components/CaseStudies/Yourcast/constants/yourcastConstants'
</script>
<template>
  <section class="container_regular">
    <h3 class="case_title_h2 m-48_bottom media-m-38_bottom">
      Meet the team
    </h3>
    <LazyCaseStudiesUIListTeam class="m-72_bottom media-m-48_bottom">
      <LazyCaseStudiesUIListTeamItem
        v-for="member in team"
        :key="member.name"
        v-bind="member"
      />
    </LazyCaseStudiesUIListTeam>
    <LazyCaseStudiesUITextQuoteAuthor
      class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
      author="Andrew Minkin"
      position="CTO, Mad Devs"
      file="andrew-minkin"
      extension="png"
      alt="Andrew Minkin"
      folder="common"
    >
      While working on this project, we acquired extensive hands-on experience in building modern livestreaming and VoD
      services. We were amazed by the abundance of open-source tools available for building great OTT platforms and
      online movies. Yourcast.TV was the beginning; however, we now see that this internal project could become a
      cornerstone for many enterprise-level solutions.
    </LazyCaseStudiesUITextQuoteAuthor>
  </section>
</template>
