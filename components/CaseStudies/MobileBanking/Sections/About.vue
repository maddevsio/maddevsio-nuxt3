<script setup lang="ts">
import {
  mobileBankingAchievementsCards,
  mobileBankingAchievementsFullCard,
} from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'
</script>
<template>
  <section class="case-mobile-banking-about m-96_bottom media-m-48_bottom">
    <div
      class="container_regular"
    >
      <div class="p-96_top p-96_bottom media-p-48_top media-p-48_bottom">
        <LazyCaseStudiesUITextParagraph
          class="m-12_bottom"
        >
          More and more banks are striving to create their ecosystem so customers can get more products
          and services online. Their number often grows much faster than the teams of specialists who develop and maintain them.
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph
          class="m-12_bottom"
        >
          One of the largest banks in Kazakhstan, with 2 million clients and dozens of products, also faced this.
          Constantly expanding functionality and increasing complexity led to the need for experts capable of quality
          integrating and empowering internal bank teams. That's why it's turned to Mad Devs.
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph>
          Due to NDA, we cannot disclose the name of the bank, but we are happy to tell you what challenges we faced,
          how we approached them, and what solutions we developed.
        </LazyCaseStudiesUITextParagraph>
      </div>
    </div>
    <div class="case-mobile-banking__achievements">
      <div class="case-mobile-banking__achievements-background">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1483"
          :height="597"
          folder="mobile-banking"
          file="about-map"
          extension="png"
          alt="Map"
        />
      </div>
      <div class="container_regular case-mobile-banking__container">
        <h2 class="case_title_h2 case_text-align-center case-mobile-banking__achievements-main-title">
          Our Achievements in Figures
        </h2>
        <div class="case-mobile-banking__achievements-cards">
          <LazyCaseStudiesMobileBankingUIAchievementsCard
            v-for="(achievement, index) in mobileBankingAchievementsCards"
            :key="index"
            :achievement="achievement"
          />
        </div>
        <LazyCaseStudiesMobileBankingUIAchievementFullCard
          :title="mobileBankingAchievementsFullCard.title"
          :description="mobileBankingAchievementsFullCard.description"
          :markets-icon="mobileBankingAchievementsFullCard.marketsIcon"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case-mobile-banking {
  &__achievements {
    padding: 100px 0 90px;
    background-color: $bgcolor--cultured;
    position: relative;
    overflow: hidden;

    &-background {
      position: absolute;
      inset: 51px 0 0;
      width: 100%;
      height: 100%;

      @media screen and (max-width: 1540px) {
        & :deep(.picture-component) {
          height: 100%;
          object-fit: cover;
        }
      }
    }

    &-main-title {
      margin-bottom: 40px;
    }

    &-cards {
      display: flex;
      gap: 40px;
      justify-content: space-between;
      margin-bottom: 40px;
    }

    @media screen and (max-width: 785px) {
      &-cards {
        flex-direction: column;
        gap: 24px;
        margin-bottom: 24px;
      }
    }

    @media screen and (max-width: 768px) {
      padding: 48px 0;
    }
  }

  &__container {
    position: relative;
    z-index: 1;
  }
}
</style>
