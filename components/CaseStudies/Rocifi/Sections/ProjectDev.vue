<script setup lang="ts">
import { rocifiProjectDevList } from '~/components/CaseStudies/Rocifi/constants/rocifiConstants'

useIntersectionObserver([
  'challenges-item-0',
  'challenges-item-1',
  'challenges-item-2',
  'challenges-item-3',
  'challenges-item-4',
  'challenges-item-5',
  'challenges-item-6',
  'challenges-item-7',
  'challenges-item-8',
  'challenges-item-9',
], setBackground)

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case_rocifi__project-dev m-96_bottom media-m-48_bottom">
    <div
      class="container_regular"
    >
      <h3
        class="case_title_h2 m-12_bottom"
      >
        Project Development Management
      </h3>
      <LazyCaseStudiesUITextParagraph
        class="m-24_bottom"
      >
        Mad Devs and RociFi enjoyed working together, and the Mad Devs team was glad to contribute to RociFi's mission.
        We provided service according to one of the delivery models — augmented staff members.
        This model involves expanding the team by attracting our specialists and management on the RociFi part.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph
        class="m-24_bottom"
      >
        During this process, with project stakeholders, we assessed the product's technological stack and collected
        additional information about its scope of work to determine the required competencies for specialists.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph
        class="m-24_bottom"
      >
        Work on both phases occurred in several stages:
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots
        class="m-24_bottom"
      >
        <LazyCaseStudiesUIListDotsCustomCheckMark
          v-for="(listItem, i) in rocifiProjectDevList"
          :id="`challenges-item-${i}`"
          :key="listItem.text"
          background-color="silver"
          :data-background="listItem.background"
          class="case_rocifi__project-dev-list-item"
        >
          <template #icon>
            <img
              loading="lazy"
              width="51.94"
              height="51.94"
              :src="$getMediaFromS3(`/images/Cases/rocifi/svg/${listItem.icon}.svg`)"
              :alt="listItem.icon"
              class="list-item__box-icon"
            >
          </template>
          <template #description>
            <LazyCaseStudiesUITextParagraph
              :class="`case-rocifi__challenges-list-item-description text-color-${listItem.textColor}`"
            >
              {{ listItem.text }}
            </LazyCaseStudiesUITextParagraph>
          </template>
        </LazyCaseStudiesUIListDotsCustomCheckMark>
      </LazyCaseStudiesUIListDots>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case_rocifi__project-dev {
  &-list-item {
    padding: 4.03px 16.78px;
    align-items: center;
    transition: 1s;
  }
}
</style>
