<script setup lang="ts">
import { techStackBandpay } from '~/components/CaseStudies/Bandpay/constants/bandpayConstants'
</script>
<template>
  <section class="container_regular">
    <h3 class="case_title_h2 m-24_bottom media-m-12_bottom">
      Technology stack
    </h3>
    <LazyCaseStudiesUIListTechnologies class="m-96_bottom media-m-48_bottom">
      <LazyCaseStudiesUIListTechnologiesItem
        v-for="technology in techStackBandpay"
        :key="technology.name"
        class="case_tech-list-item"
        v-bind="technology"
      />
    </LazyCaseStudiesUIListTechnologies>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_tech-list-item {
    :deep(p) {
      font-size: 12px;
    }

    :deep(.stripe) {
      width: 52px;
    }

    :deep(.retrofit) {
      width: 55px;
      height: 55px;
      margin-top: -10px;
      margin-bottom: 0;
    }

    :deep(.moya) {
      width: 62px;
      margin-top: -3px;
      margin-bottom: 8px;
    }

    @media screen and (max-width: 768px) {
      :deep(p) {
        font-size: 8px;
      }
      :deep(.stripe) {
        width: 30px;
      }

      :deep(.retrofit) {
        width: 33px;
        height: 33px;
        margin-top: -5px;
        margin-bottom: 0;
      }

      :deep(.moya) {
        width: 30px;
        margin-top: 0;
        margin-bottom: 8px;
      }
    }
  }
}
</style>
