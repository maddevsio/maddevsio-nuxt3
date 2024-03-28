<script setup lang="ts">
import { rocifiGlossary } from '~/components/CaseStudies/Rocifi/constants/rocifiConstants'
</script>
<template>
  <section
    id="glossary"
    class="case_rocifi__glossary m-72_bottom media-m-48_bottom"
  >
    <div
      class="container_regular"
    >
      <h3
        class="case_title_h2 m-24_bottom case_rocifi__glossary-title"
      >
        Glossary
      </h3>
      <ul class="case_rocifi__glossary-list">
        <li
          v-for="(glossItem, glossIndex) in rocifiGlossary"
          :key="glossIndex"
          class="case_rocifi__glossary-list-item"
        >
          <LazyCaseStudiesUITextParagraph>
            <span v-html="glossItem" />
          </LazyCaseStudiesUITextParagraph>
        </li>
      </ul>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case_rocifi__glossary {
  &-title {
    scroll-margin-top: 115px;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-item {
      border-radius: 8px;
      padding: 16px;
      background-color: $bgcolor--silver;
    }
  }
}
</style>
