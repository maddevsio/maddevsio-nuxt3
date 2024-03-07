<script setup lang="ts">
import { challengesBilimList } from '~/components/CaseStudies/Bilimapp/constants/bilimappConstants'

useIntersectionObserver(['challenges-item-0', 'challenges-item-1', 'challenges-item-2'], setBackground)

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case-bilim__challenges m-96_bottom media-m-48_bottom">
    <div
      class="container_regular"
    >
      <h3
        class="case_title_h2 m-24_bottom"
      >
        The Challenges Mad Devs Faced
      </h3>
      <LazyCaseStudiesUITextParagraph
        class="m-24_bottom"
      >
        When Mad Devs experts became involved in the project, Saglyk already had the first version of the application.
        The main challenges included:
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots
        class="m-24_bottom"
      >
        <LazyCaseStudiesUIListDotsCustomCheckMark
          v-for="(listItem, i) in challengesBilimList"
          :id="`challenges-item-${i}`"
          :key="listItem.text"
          background-color="silver"
          :data-background="listItem.background"
          class="case_bilim__main-stages-list-item"
        >
          <template #icon>
            <img
              loading="lazy"
              width="25"
              height="25"
              :src="$getMediaFromS3(`/images/Cases/bilimapp/svg/${listItem.icon}.svg`)"
              :alt="listItem.icon"
              class="list-item__box-icon"
            >
          </template>
          <template #description>
            <LazyCaseStudiesUITextParagraph
              :class="`case-bilim__challenges-list-item-description text-color-${listItem.textColor}`"
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
.case-bilim__challenges {
  :deep(.list-item-custom-check-mark) {
    padding: 11px 16px 11px 29.5px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    transition: 2s;

    &:last-child {
      margin-bottom: 0;
      padding: 19px 16px 19px 29.5px;
    }

    @media screen and (max-width: 768px) {
      align-items: flex-start;

      &:last-child {
        padding: 10px 11px 10px 11.5px;
      }
      padding: 10px 11px 10px 11.5px;
      margin-bottom: 10px;
    }
  }

  &-list-item-description {
    font-size: 20px;
    font-weight: 500;
    line-height: 166%;

    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 150%;
      letter-spacing: -0.02em;
    }
  }
}

.list-item__box-icon {
  vertical-align: text-bottom;
  margin-right: 27.44px;

  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin-right: 16.75px;
  }

  @media screen and (max-width: 430px) {
    width: 12.03px;
    height: 12.03px;
    margin-top: 7px;
  }
}
</style>
