<script setup lang="ts">
import { team } from '~/components/CaseStudies/Veeqo/constants/veeqoConstants'
</script>
<template>
  <section class="container_regular m-72_bottom media-m-48_bottom">
    <h2 class="case_title_h2 case_title m-48_bottom media-m-24_bottom">
      Meet the team
    </h2>
    <div class="case_team-list m-72_bottom media-m-48_bottom">
      <LazyCaseStudiesUIListTeamItem
        v-for="member in team"
        :key="member.name"
        v-bind="member"
      />
    </div>
    <LazyCaseStudiesUITextQuoteAuthor
      class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
      author="Daniel Vartanov"
      position="CTO, Veeqo"
      file="daniel-vartanov"
      extension="png"
      alt="Daniel Vartanov"
      folder="veeqo"
    >
      The resource provided by Mad Devs is excellent, bringing not only their own skill and expertise, but the input of the wider team to the project too. They manage the remote work seamlessly and fit well into the company’s workflow.
    </LazyCaseStudiesUITextQuoteAuthor>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_title {
    text-align: center;
  }

  &_team-list {
    @include grid(repeat(2, 258px), auto, 25px, 0);
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    &_title {
      text-align: left;
    }

    &_team-list {
      @include grid(repeat(2, 1fr), auto, 20, 0);
    }
  }
}
</style>
