<script setup lang="ts">
import { whatIsBackendCards, whatIsBackendList } from '~/components/CaseStudies/Bandpay/constants/bandpayConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case-what-is-backend m-96_bottom media-m-48_bottom what-is-backend">
    <div class="container_regular m-48_bottom">
      <h3 class="case_title_h2 m-12_bottom">
        What is in the backend?
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-12_bottom">
        To build the backend, we opted for Go, which offered the following benefits for the project:
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots class="m-24_bottom">
        <LazyCaseStudiesUIListDotsBoxCheckMark
          v-for="listItem in whatIsBackendList"
          :key="listItem"
        >
          <img
            loading="lazy"
            width="23.44"
            height="23.44"
            :src="$getMediaFromS3(`/images/Cases/bandpay/svg/check-mark.svg`)"
            :alt="listItem"
            class="list-item__box-icon"
          >
          {{ listItem }}
        </LazyCaseStudiesUIListDotsBoxCheckMark>
      </LazyCaseStudiesUIListDots>
      <div
        class="case_cards-list m-24_bottom"
      >
        <LazyCaseStudiesUICard
          v-for="card in whatIsBackendCards"
          :key="card.title"
          :class="`case_card background-color-${card.color}`"
        >
          <h4 class="case_title_h5 case_card-title">
            {{ card.title }}
          </h4>
          <LazyCaseStudiesUITextParagraph class="case_card-description">
            {{ card.description }}
          </LazyCaseStudiesUITextParagraph>
          <img
            loading="lazy"
            :width="card.iconWidth"
            :height="card.iconHeight"
            :src="$getMediaFromS3(`/images/Cases/bandpay/svg/${card.icon}.svg`)"
            :alt="card.title || 'Image'"
            class="case_card-icon"
          >
        </LazyCaseStudiesUICard>
      </div>
      <LazyCaseStudiesUITextParagraph>
        The BandPay backend interacts with various platforms and services intended for email and text messaging,
        handling marketing activities, error tracking, crash monitoring and fixing, data storage, and many other functions
        and features. The scheme below shows the environment and services involved in the BandPay backend functionality
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_full background-color-silver m-48_bottom">
      <div class="container_regular">
        <LazySharedLottieMad
          class="case_lottie"
          height="401px"
          :lottie-link="$getMediaFromS3(`/images/Cases/bandpay/lottie/what-is-backend.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div class="container_regular">
      <LazyCaseStudiesUITextParagraph>
        To enable the app to communicate with the database in an easy and effective way, we refactored the heavy
        database interface, making it more readable, convenient, and failproof.
      </LazyCaseStudiesUITextParagraph>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_cards-list {
    @include grid(repeat(1, 1fr), auto, 0, 24px);

    @media screen and (max-width: 890px) {
      grid-row-gap: 16px;
    }
  }

  &_card-title {
    margin-bottom: 5px;
    color: $text-color--white-primary;
  }

  &-what-is-backend {
    :deep(.case_card-description) {
      max-width: 373px;
      color: $text-color--grey-20-percent;
      @media screen and (max-width: 920px) {
        max-width: 100%;
      }

      @media screen and (max-width: 890px) {
        max-width: 100%;
      }
    }
  }

  &_card-icon {
    position: absolute;
    right: 17px;
    bottom: -8px;
    @media screen and (max-width: 920px) {
      right: 5px;
    }
  }

  @media screen and (max-width: 890px) {
    &_card-icon {
      display: none;
    }
  }
}

.what-is-backend {
  & .list-item_box {
    padding-left: 16.78px;
    background-color: $bgcolor--silver;
    display: flex;

    &::before {
      content: '';
      display: none;
    }

    @media screen and (max-width: 768px) {
      padding: 8px 8.5px;
    }
  }
  & .case_card {
    position: relative;
    padding-left: 50px;
    @media screen and (max-width: 920px) {
      padding: 29px 29px 139px 29px;
    }
  }
}

.list-item__box-icon {
  vertical-align: text-bottom;
  margin-right: 14.78px;
}
</style>
