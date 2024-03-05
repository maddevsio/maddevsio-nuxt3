<script setup lang="ts">
import { team } from '~/components/CaseStudies/Godee/constants/godeeConstants'
</script>
<template>
  <section class="container_regular m-72_bottom media-m-48_bottom">
    <h2 class="case_title_h2 m-48_bottom media-m-24_bottom">
      Meet the team
    </h2>
    <LazyCaseStudiesUIListTeam class="m-72_bottom media-m-48_bottom">
      <LazyCaseStudiesUIListTeamItem
        v-for="member in team"
        :key="member.name"
        v-bind="member"
      />
    </LazyCaseStudiesUIListTeam>
    <LazyCaseStudiesUITextQuoteAuthor
      class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
      author="Ruslan Karabukaev"
      position="Co-founder of GoDee"
      file="ruslan-karabukaev"
      extension="png"
      alt="Ruslan Karabukaev"
      folder="godee"
    >
      We built the platforms from scratch with the Mad Devs team, who dedicatedly supported and guided us to take
      proper action on several ideas and requirements. We have attracted 27,000 users so far, thanks to their
      continuous support for improvement and development.
    </LazyCaseStudiesUITextQuoteAuthor>
  </section>
</template>
