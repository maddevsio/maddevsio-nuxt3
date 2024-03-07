<script setup lang="ts">
import {
  devOpsAndQAList,
  improveManagementList,
} from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'

useIntersectionObserver([
  'improve-item-0',
  'improve-item-1',
  'improve-item-2',
  'improve-item-3',
  'improve-item-4',
  'improve-item-5',
], setBackground)

useIntersectionObserver([
  'devops-item-0',
  'devops-item-1',
  'devops-item-2',
  'devops-item-3',
  'devops-item-4',
], setBackground)

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="processes-imp">
    <div class="container_regular">
      <div>
        <h3 class="case_title_h2 m-12_bottom">
          Processes Implementing
        </h3>
        <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
          We made many sessions with the bank's sales departments, technical heads, and scrum masters of the teams
          to agree on all the solutions. Then we implemented processes and tools to ensure agile development and
          transparent communication.
        </LazyCaseStudiesUITextParagraph>
        <h4 class="case_title_h4 m-24_bottom">
          We helped improve task management in Jira and set up documentation in Confluence.
        </h4>
      </div>
      <LazyCaseStudiesUIListDots
        class="m-48_bottom"
      >
        <LazyCaseStudiesUIListDotsCustomCheckMark
          v-for="(listItem, i) in improveManagementList"
          :id="`improve-item-${i}`"
          :key="listItem.text"
          background-color="silver"
          :data-background="listItem.background"
          class="processes-imp__improve-list-item"
        >
          <template #icon>
            <img
              loading="lazy"
              width="25"
              height="25"
              :src="$getMediaFromS3(`/images/Cases/mobile-banking/svg/${listItem.icon}.svg`)"
              :alt="listItem.icon"
              class="processes-imp__improve-list-item-box-icon"
            >
          </template>
          <template #description>
            <LazyCaseStudiesUITextParagraph
              :class="`processes-imp__improve-list-item-description text-color-${listItem.textColor}`"
            >
              {{ listItem.text }}
            </LazyCaseStudiesUITextParagraph>
          </template>
        </LazyCaseStudiesUIListDotsCustomCheckMark>
      </LazyCaseStudiesUIListDots>
      <h4 class="case_title_h4 m-24_bottom">
        We also focused on DevOps and QA processes.
      </h4>
      <LazyCaseStudiesUIListDots
        class="m-48_bottom media-m-24_bottom"
      >
        <LazyCaseStudiesUIListDotsCustomCheckMark
          v-for="(listItem, i) in devOpsAndQAList"
          :id="`devops-item-${i}`"
          :key="listItem.text"
          background-color="silver"
          :data-background="listItem.background"
          class="processes-imp__improve-list-item"
        >
          <template #icon>
            <img
              loading="lazy"
              width="25"
              height="25"
              :src="$getMediaFromS3(`/images/Cases/mobile-banking/svg/${listItem.icon}.svg`)"
              :alt="listItem.icon"
              class="processes-imp__improve-list-item-box-icon"
            >
          </template>
          <template #description>
            <LazyCaseStudiesUITextParagraph
              :class="`processes-imp__improve-list-item-description text-color-${listItem.textColor}`"
            >
              {{ listItem.text }}
            </LazyCaseStudiesUITextParagraph>
          </template>
        </LazyCaseStudiesUIListDotsCustomCheckMark>
      </LazyCaseStudiesUIListDots>
      <LazyCaseStudiesMobileBankingUIResultsWithQuoteBox
        quote-text="We shared our best-proven practices to improve development and communication processes.
        As a result, the set of tasks, their distribution among the teams, their performance,
        resources allocation, and reports about it became more agile, transparent, and exhaustive for all parties."
        quote-author="Gaukhar Taspolatova - Delivery Manager, Mad Devs"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.processes-imp {
  &__improve-list-item {
    gap: 27px;
    padding-inline: 29px;
    align-items: center;
    transition: 1s;

    &-description {
      font-size: 20px;
      line-height: 33.2px;
    }

    @media screen and (max-width: 768px) {
      padding: 10px 8px;
      gap: 10px;
      align-items: flex-start;

      &-description {
        font-size: 16px;
        line-height: 150%;
      }

      &-box-icon {
        width: 15px;
        height: 15px;
        margin-top: 5px;
      }
    }
  }
}
</style>
