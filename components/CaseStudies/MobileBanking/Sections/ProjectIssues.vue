<script setup lang="ts">
import { projectIssuesCards } from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'

const projectIssuesLastCard = projectIssuesCards.slice(4)[0]
</script>
<template>
  <section class="project-issues m-96_bottom media-m-48_bottom">
    <div
      class="container_regular"
    >
      <h2 class="case_title_h2 m-12_bottom">
        Project Issues and How We Resolved Them
      </h2>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        The banking system was huge, with many teams and departments. So setting up and managing any task took a lot
        of time and required more flexibility and transparency. The architecture was initially monolithic,
        and with the increasing functionality, its transition to microservices became slower and slower.
        Also, the infrastructure was extremely overcomplicated in delivering new features quickly and efficiently.
        Testing only covered the core functionality and was mainly manual, not allowed to fix the many accumulated bugs.
        All this was hurting the development cost, speed, and quality. So we needed to work at all levels and review
        the entire code base to improve existing features and develop new ones.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIParallaxCards
        :data-cards="projectIssuesCards.slice(0, 4)"
        :start-slice="2"
      />
      <LazyCaseStudiesUIParallaxCard
        v-bind="projectIssuesLastCard"
        :key="projectIssuesLastCard.icon"
        :folder="projectIssuesLastCard.folder"
        :icon="projectIssuesLastCard.icon"
        :width="projectIssuesLastCard.iconWidth"
        :height="projectIssuesLastCard.iconHeight"
        class="m-24_top"
      />
    </div>
  </section>
</template>
