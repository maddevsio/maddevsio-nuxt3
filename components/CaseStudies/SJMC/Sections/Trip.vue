<script setup lang="ts">
import { swiperMadDevsTrip, team } from '~/components/CaseStudies/SJMC/constants/sjmcConstants'
</script>
<template>
  <section>
    <section class="container_regular">
      <h2 class="case_title_h2 m-24_bottom">
        Mad Devs’ trip to the SJMC
      </h2>
    </section>
    <section class="container_full case_full-screen-slider">
      <LazyCaseStudiesUISwiperWithThumbs
        :components="swiperMadDevsTrip"
        :safari-top-bar="false"
        :box-shadow="false"
        :width="1440"
        :height="651"
      />
    </section>
    <section class="container_regular">
      <LazyCaseStudiesUITextParagraph class="m-56_top media-m-24_top m-24_bottom media-m-12_bottom">
        In February 2020, just before the contract’s deadline, a Mad Devs’ team of eight travelled to the Сentre,
        which is located near the village of Villers-Bretonneux (Somme) in northern France.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-6_bottom">
        Although the small-scale version of the Сentre was built inside Mad Devs’ office, the team was pursuing the
        following goals:
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots class="m-56_bottom media-m-24_bottom">
        <LazyCaseStudiesUIListDotsItem>Understand the complexity of the SJMC hardware and software in person</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>Uncover the potential risks and problems</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>Deploy technical debts and test the changes</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>Deploy new content on large scale screens and test the changes</LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
      <LazyCaseStudiesUIListTeam class="m-96_bottom media-m-24_bottom">
        <LazyCaseStudiesUIListTeamItem
          v-for="member in team"
          :key="member.name"
          v-bind="member"
        />
      </LazyCaseStudiesUIListTeam>
    </section>
  </section>
</template>
