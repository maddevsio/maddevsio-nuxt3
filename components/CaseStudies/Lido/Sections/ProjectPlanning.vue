<script setup lang="ts">
import { projectPlanningList } from '~/components/CaseStudies/Lido/constants/lidoConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case-lido__project-planning m-96_bottom media-m-48_bottom">
    <div class="container_regular">
      <h3 class="case_title_h2 m-12_bottom">
        Project planning and management
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        To perform client tasks, the most qualified programmers were recruited.
        The project's first phase involved 4 people, while the second phase involved 3 developers.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        Work on both objectives occurred in several phases:
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots class="m-24_bottom">
        <LazyCaseStudiesUIListDotsCustomCheckMark
          v-for="listItem in projectPlanningList"
          :key="listItem.text"
          :background-color="listItem.backgroundColor"
          class="case-lido__story-behind-list-item"
        >
          <template #icon>
            <img
              loading="lazy"
              width="25"
              height="25"
              :src="$getMediaFromS3(`/images/Cases/lido/svg/${listItem.icon}.svg`)"
              :alt="listItem"
              class="list-item__box-icon"
            >
          </template>
          <template #description>
            <LazyCaseStudiesUITextParagraph
              :class="`case-lido__project-planning-list-item-description text-color-${listItem.textColor}`"
            >
              {{ listItem.text }}
            </LazyCaseStudiesUITextParagraph>
          </template>
        </LazyCaseStudiesUIListDotsCustomCheckMark>
      </LazyCaseStudiesUIListDots>
      <LazyCaseStudiesUITextParagraph>
        *IMPORTANT: Lido ensures that external companies always audit smart contracts because it is a matter of security and the right functionality.
      </LazyCaseStudiesUITextParagraph>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case-lido__project-planning {
  :deep(.list-item-custom-check-mark) {
    padding: 18.92px 29.5px;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and (max-width: 480px) {
      padding: 17.08px 13.5px;
    }
  }

  &-list-item-description {
    font-size: 20px;
    font-weight: 500;
    line-height: 166%;

    @media screen and (max-width: 480px) {
      font-size: 16px;
      line-height: 150%;
      letter-spacing: -0.02em;
    }
  }
}

.list-item__box-icon {
  vertical-align: text-bottom;
  margin-right: 27.44px;
  margin-top: 4px;

  @media screen and (max-width: 480px) {
    margin-right: 12.5px;
    margin-top: 0;
  }
}
</style>
