<script setup lang="ts">
import { supportedGadgets } from '~/components/CaseStudies/Yourcast/constants/yourcastConstants'
</script>
<template>
  <section class="case-supported">
    <div class="container_regular">
      <h3 class="case_title_h2 m-24_bottom media-m-12_bottom">
        Supported gadgets
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        The platform is available on any device and remains equally friendly to both web and mobile users. Since 2016, the
        project has been continuously improving to provide more options for each category of viewers.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_full background-color-black p-100_top p-100_bottom media-p-48_top media-p-48_bottom">
      <div class="container_regular">
        <div class="case_cards-group">
          <LazyCaseStudiesUICard
            v-for="gadget in supportedGadgets"
            :key="gadget.title"
            padding="32px 32px 0"
            :class="`background-color-${gadget.color}`"
          >
            <h3 class="case_title_h4 case_card-title">
              {{ gadget.title }}
            </h3>
            <div class="case_card-img">
              <LazyCaseStudiesUIPicture
                v-if="gadget.file"
                :width="gadget.width"
                :height="gadget.height"
                :file="gadget.file"
                :alt="gadget.alt || 'Image'"
                folder="yourcast"
                extension="png"
              />
            </div>
          </LazyCaseStudiesUICard>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.case {

  &-supported {
    :deep(.case_card) {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      @media screen and (max-width: 900px) {
        padding:32px 28px 0;
      }
      @media screen and (max-width: 720px) {
        grid-column: 1 / 3;
        padding: 32px 12px 0;
      }
      .case_card-title {
        color: $text-color--white;
        margin-bottom: 30px;
      }
      .case_card-img {
        position: relative;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        flex-grow: 1;
      }
    }

    :deep(.case_card:nth-child(2)) {
      padding-left: 31px !important;
      padding-right: 0 !important;
      @media screen and (max-width: 720px) {
        padding-left: 12px !important;
      }
    }

    :deep(.case_card:nth-child(2) .case_card-img) {
      box-sizing: border-box;
      padding-left: 9px;
      width: 148%;
      left: 74%;
      @media screen and (max-width: 720px) {
        padding-bottom: 8px;
        width: 115%;
        left: 57%;
      }
    }
    :deep(.case_card:nth-child(3)) {
      grid-column: 1 / 3;
      text-align: center;
      padding: 32px 32px 0;
      @media screen and (max-width: 720px) {
        text-align: left;
        padding: 32px 0 0;
      }
    }
    :deep(.case_card:nth-child(3) .case_card-title) {
      @media screen and (max-width: 720px) {
        margin-left: 12px;
      }
    }
    :deep(.case_card:nth-child(3) .case_card-img) {
      left: unset;
      transform: none;
      max-height: 254px;
      max-width: 658px;
      margin: 0 auto;
      @media screen and (max-width: 720px) {
        max-height: 100%;
      }
    }
  }

  &_cards-group {
    @include grid(repeat(2, 1fr), auto, 25px, 25px);
  }
}

.background-color-dark-purple06 {
  background: $bgcolor--dark-purple06-opacity;
}
.background-color-dark-purple05 {
  background: $bgcolor--dark-purple05-opacity;
}
.background-color-dark-purple04 {
  background: $bgcolor--dark-purple04-opacity;
}
</style>
