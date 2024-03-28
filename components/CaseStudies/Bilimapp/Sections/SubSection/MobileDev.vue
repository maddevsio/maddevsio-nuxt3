<script setup lang="ts">
import { mobileDevList } from '~/components/CaseStudies/Bilimapp/constants/bilimappConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case-bilim__mobile-dev m-48_bottom">
    <div
      class="container_regular"
    >
      <h4
        class="case_title_h4 m-24_bottom"
      >
        Mobile Development
      </h4>
      <LazyCaseStudiesUITextParagraph
        class="m-24_bottom"
      >
        While working on the new version of the Bilim app, Mad Devs aimed to create workable, long-term solutions,
        and through the updates to the app, period tracking became easier. The updated app has the following mobile features:
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots
        class="m-48_bottom"
      >
        <LazyCaseStudiesUIListDotsItem>
          Firebase Auth, a proven and reliable technology that is easy to integrate into a mobile application, allows
          users to authorize their accounts quickly. In this way, users can provide authorization through an email
          address, a phone number, or a Google account. Digital literacy is often underdeveloped in Turkmenistan,
          so the goal was to make the authorization process simple and accessible for everyone.
        </LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
    </div>
    <div class="container_full background-color-silver p-48_top media-p-24_top p-48_bottom media-p-24_bottom">
      <div class="container_middle">
        <div class="case-bilim__mobile-dev-image-wrapper">
          <LazyCaseStudiesUIPicture
            :shadow="false"
            :width="269"
            :height="583"
            :lazy="false"
            extension="png"
            folder="bilimapp"
            file="authorization"
            alt="Authorization Interface"
          />
        </div>
      </div>
    </div>
    <LazyCaseStudiesUITextParagraph
      class="case_text-align-center case-source-text m-12_top m-48_bottom"
    >
      Login screen
    </LazyCaseStudiesUITextParagraph>
    <div class="container_regular m-48_bottom">
      <LazyCaseStudiesUIListDots
        class="m-48_bottom"
      >
        <LazyCaseStudiesUIListDotsItem
          v-for="(item, i) in mobileDevList"
          :key="`${item}-${i}`"
        >
          <span v-html="item" />
        </LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
    </div>
    <div class="container_full background-color-silver p-48_top p-48_bottom media-p-24_top media-p-24_bottom">
      <div class="container_regular">
        <LazySharedLottieMad
          class="case_lottie case_lottie__desktop"
          height="229px"
          :lottie-link="$getMediaFromS3(`/images/Cases/bilimapp/lottie/cash-free-stat.json`)"
          :autoplay="true"
        />
        <LazySharedLottieMad
          class="case_lottie case_lottie__mobile"
          height="461px"
          :lottie-link="$getMediaFromS3(`/images/Cases/bilimapp/lottie/cash-free-stat-mobile.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <LazyCaseStudiesUITextParagraph
      class="case_text-align-center case-source-text m-12_top m-48_bottom"
    >
      List of actual crashes
    </LazyCaseStudiesUITextParagraph>
    <div
      class="container_regular"
    >
      <LazyCaseStudiesUIListDots
        class="m-48_bottom"
      >
        <LazyCaseStudiesUIListDotsItem>
          A <strong>word highlighting</strong> feature makes articles easy to read and understand. This functionality was made through
          the backend, making it easier for the admins to link articles to a glossary. To read more about a highlighted
          word, a user can click on it and be redirected to the glossary entry.
        </LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
    </div>
    <div class="container_full background-color-silver p-48_top media-p-24_top p-48_bottom media-p-24_bottom">
      <div class="container_middle">
        <div class="case-bilim__mobile-dev-two-phones-image-wrapper">
          <LazyCaseStudiesUIPicture
            :shadow="false"
            :width="449"
            :height="401"
            :lazy="false"
            extension="png"
            folder="bilimapp"
            file="two-phones"
            alt="Authorization Interface"
          />
        </div>
      </div>
    </div>
    <LazyCaseStudiesUITextParagraph
      class="case_text-align-center case-source-text m-12_top m-48_bottom"
    >
      Word highlighting feature
    </LazyCaseStudiesUITextParagraph>
    <div
      class="container_regular"
    >
      <LazyCaseStudiesUIListDots
        class="m-24_bottom"
      >
        <LazyCaseStudiesUIListDotsItem>
          Backward compatibility allows current users to download newer app versions and not lose data.
        </LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
      <LazyCaseStudiesUITextParagraph>
        Mad Devs collected all project documentation in GitLab and Atlassian Confluence to minimize the bus factor. Thus, Saglyk can use technical documents to refresh their knowledge of the product or process and explain
        to new team members how to navigate each step or challenge so that the next development team
        will not have to search for information themselves.
      </LazyCaseStudiesUITextParagraph>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case-bilim__mobile-dev {
  &-image-wrapper {
    max-width: 269px;
    max-height: 583px;
    margin: auto;
  }

  &-two-phones-image-wrapper {
    max-width: 449px;
    max-height: 402px;
    margin: auto;
  }

  & .case_lottie__desktop {
    display: block;
  }
  & .case_lottie__mobile {
    display: none;
  }

  @media screen and (max-width: 768px) {
    & .case_lottie__desktop {
      display: none;
    }
    & .case_lottie__mobile {
      display: block;
    }

    &-image-wrapper {
      max-width: 177.36px;
    }

    &-two-phones-image-wrapper {
      max-width: 355px;
    }
  }
}
</style>
