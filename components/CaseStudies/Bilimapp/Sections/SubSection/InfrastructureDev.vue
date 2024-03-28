<script setup lang="ts">
import { infrastructureList } from '~/components/CaseStudies/Bilimapp/constants/bilimappConstants'
</script>
<template>
  <div
    class="container_regular"
  >
    <h4
      class="case_title_h4 m-24_bottom"
    >
      Infrastructure Development
    </h4>
    <LazyCaseStudiesUITextParagraph
      class="m-24_bottom"
    >
      One of the main goals was to switch the project from an old infrastructure to a new, fully
      automated infrastructure. In addition, Mad Devs updated the app’s infrastructure to make the project more sustainable.
    </LazyCaseStudiesUITextParagraph>
    <LazyCaseStudiesUIListDots
      class="m-48_bottom"
    >
      <LazyCaseStudiesUIListDotsItem
        v-for="(item, i) in infrastructureList"
        :key="`${item}-${i}`"
      >
        <span v-html="item" />
      </LazyCaseStudiesUIListDotsItem>
    </LazyCaseStudiesUIListDots>
  </div>
</template>
