<script setup lang="ts">
import { achievementsList } from '~/components/CaseStudies/Megauni/constants/megauniConstants'
</script>
<template>
  <section class="case_megauni__achievements m-96_bottom media-m-48_bottom">
    <div
      class="container_regular"
    >
      <h2
        class="case_title_h2 m-12_bottom"
      >
        Achievements
      </h2>
      <LazyCaseStudiesUITextParagraph class="m-12_bottom">
        With MegaUni, Mad Devs built a customized platform for Vietnamese students’ needs,
        allowing them to study online without leaving home.  As a result of this collaboration:
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots
        class="m-12_bottom"
      >
        <LazyCaseStudiesUIListDotsItem
          v-for="(item, i) in achievementsList"
          :key="`${item}-${i}`"
        >
          {{ item }}
        </LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
      <LazyCaseStudiesUITextParagraph>
        Although Open edX does not provide the basic setup for e-commerce payments, our team has discovered advanced
        settings for payment integrations. Currently, the widespread
        <a
          href="https://pay.vnpay.vn/"
          class="case_megauni__achievements-link"
          target="_blank"
          rel="noopener"
        >
          VNPay payment system
        </a>
        is integrated into the
        platform and supports payments by cards from local Vietnamese banks, international cards, and VNPay electronic wallets.
      </LazyCaseStudiesUITextParagraph>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case_megauni__achievements {
  & .case_list {
    padding-left: 10px;
  }

  & .list-item_dot {
    margin-bottom: 0;
    padding-right: 20px;
  }

  &-link {
    font-weight: 600;
    color: $text-color--black-oil;
    text-decoration: underline;
  }
}
</style>
