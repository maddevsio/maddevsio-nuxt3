<script setup lang="ts">
import type { PropType } from 'vue'
import { Industries } from '~/components/Industries/classes/Industries'
import type { IIndustriesItem } from '~/components/Industries/interfaces/IIndustries'

const props = defineProps({
  slice: {
    type: Object as PropType<{ items: IIndustriesItem[] }>,
    required: true,
  },
})

const industriesInstance = new Industries(props.slice)
const { cards } = industriesInstance
</script>
<template>
  <section class="industries__section">
    <div class="container">
      <ul class="industries__list">
        <li
          v-for="(industry, index) in cards"
          :key="index"
          class="industries__list-item"
        >
          <img
            v-if="industry.image.url"
            loading="lazy"
            :alt="industry.image.alt"
            :src="industry.image.url"
            class="industries__list-item-icon"
            height="46"
            width="36"
          >
          <span class="industries__list-item-label">
            {{ industry.name }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped lang="scss">
.industries {
  &__section {
    background: $bgcolor--white-primary;
  }

  &__list {
    @include grid(repeat(2, 1fr), repeat(3, auto), 40px, 5px);
  }

  &__list-item {
    display: flex;
    gap: 5px;
    align-items: center;

    &:nth-child(n+5) {
      align-items: flex-start;
    }
  }

  &__list-item-icon {
    width: 24.22px;
    height: 30.68px;
  }

  &__list-item-label {
    @include font('Inter', 14px, 400);
    line-height: 24px;
    letter-spacing: -0.4px;
    color: $text-color--chinese-black;
  }

  @media screen and (min-width: 470px) {
    &__list-item {
      &:nth-child(n+5) {
        align-items: center;
      }
    }
  }

  @media screen and (min-width: 705px) {
    &__list {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 880px) {
    &__list-item-icon {
      width: 36px;
      height: 46px;
    }

    &__list-item-label {
      font-size: 20px;
      font-weight: 500;
      line-height: 18px;
    }
  }

  @media screen and (min-width: 1060px) {
    &__list {
      column-gap: 140px;
      justify-content: space-between;
      padding-left: 50px;
    }
  }
}
</style>
