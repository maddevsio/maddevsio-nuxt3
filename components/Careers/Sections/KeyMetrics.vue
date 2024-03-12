<script setup lang="ts">
import { keyMetrics } from '~/components/Careers/constants/careersConstants'
</script>
<template>
  <div class="key-metrics_container container">
    <h2
      class="key-metrics_title"
    >
      Mad Devs’ key metrics
    </h2>
    <div
      class="key-metrics_grid"
    >
      <LazyCareersUIMetricCard
        v-for="(metric, i) of keyMetrics"
        v-bind="metric"
        :key="`metric_${i}`"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.key-metrics {
  &_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 151px;
    padding-top: 75px;
  }

  &_grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 37px;

    :deep(.metrica-card) {
      background-color: $bgcolor--black-pale;
      padding: 22px 47px 30px;

      .metrica-card_title,
      .metrica-card_description {
        color: $text-color--grey-20-percent;
      }
    }

    @media screen and (max-width: 630px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 370px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &_title {
    @include font('Inter', 60px, 900);
    letter-spacing: -2.6px;
    line-height: 67px;
    color: $text-color--white;

    @media screen and (max-width: 1340px) {
      width: 100%;
      text-align: left;
    }
  }

  @media screen and (max-width: 1340px) {
    &_container {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 1024px) {
    &_container {
      margin-bottom: 65px;
    }

    &_grid {
      grid-gap: 10px;

      :deep(.metrica-card) {
        padding: 16px;
      }
    }

    &_title {
      margin-bottom: 21px;
      font-size: 40px;
      line-height: 50px;
      letter-spacing: -0.04em;
    }
  }

  @media screen and (max-width: 768px) {
    &_grid {
      margin-top: 21px;
    }

    &_title {
      font-size: 34px;
      line-height: 40px;
      letter-spacing: -0.04em;
    }
  }
}
</style>
