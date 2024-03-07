<script setup lang="ts">
import { terminologyLido } from '~/components/CaseStudies/Lido/constants/lidoConstants'
</script>
<template>
  <section class="case-lido__terminology m-96_bottom media-m-48_bottom">
    <div class="container_regular">
      <h3
        id="terminology"
        class="case_title_h2 m-24_bottom case-lido__terminology-title"
      >
        Terminology
      </h3>
      <LazyCaseStudiesUIListDots>
        <LazyCaseStudiesUIListDotsTerminology
          v-for="(term, i) in terminologyLido"
          :key="term + i"
        >
          <LazyCaseStudiesUITextParagraph>
            <span v-html="term" />
          </LazyCaseStudiesUITextParagraph>
        </LazyCaseStudiesUIListDotsTerminology>
      </LazyCaseStudiesUIListDots>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case-lido__terminology {
  &-title {
    scroll-margin-top: 100px;
  }
}
</style>
