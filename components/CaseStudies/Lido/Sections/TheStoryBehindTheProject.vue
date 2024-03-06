<script setup lang="ts">
import { theStoryBehindList } from '~/components/CaseStudies/Lido/constants/lidoConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="container_regular m-96_bottom media-m-48_bottom case-lido__story-behind">
    <h3 class="case_title_h2 m-12_bottom media-m-24_bottom">
      The story behind the project
    </h3>
    <LazyCaseStudiesUITextParagraph class="m-24_bottom media-m-48_bottom">
      This project came about as a result of a perfect match between the clients' desires and Mad Devs' capabilities.
      The client lacked the time and resources necessary to accelerate the rollout of new integrations,
      such as conducting research, comparing two codebases, and developing a plan for task scoping.
    </LazyCaseStudiesUITextParagraph>
    <LazyCaseStudiesUIListDots class="m-48_bottom media-m-24_bottom">
      <LazyCaseStudiesUIListDotsCustomCheckMark
        v-for="listItem in theStoryBehindList"
        :key="listItem.text"
        :background-color="listItem.backgroundColor"
        class="case-lido__story-behind-list-item"
      >
        <template #icon>
          <img
            loading="lazy"
            width="25"
            height="25"
            :src="$getMediaFromS3(`/images/Cases/lido/svg/check-mark.svg`)"
            :alt="listItem.text"
            class="list-item__box-icon"
          >
        </template>
        <template #description>
          <LazyCaseStudiesUITextParagraph
            :class="`text-color-${listItem.textColor}`"
          >
            {{ listItem.text }}
          </LazyCaseStudiesUITextParagraph>
        </template>
      </LazyCaseStudiesUIListDotsCustomCheckMark>
    </LazyCaseStudiesUIListDots>
  </section>
</template>
<style scoped lang="scss">
.list-item__box-icon {
  vertical-align: text-bottom;
  margin-right: 14.78px;
}
</style>
