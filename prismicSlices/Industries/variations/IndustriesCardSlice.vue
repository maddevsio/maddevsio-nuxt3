<script setup lang="ts">
import { useRouter } from 'vue-router'
import { IndustriesCard } from '~/componentClasses/Industries/IndustriesCard'

const props = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
const router = useRouter()
const industriesInstance = new IndustriesCard({
  items: props.slice.items,
  primary: props.slice.primary,
})

const { industries, colorThemeClassNames, colorTheme } = industriesInstance
const goToPage = (url: string) => industriesInstance.goToPage(url, router)
</script>
<template>
  <section
    :class="`industries-card-slice ${colorThemeClassNames.sliceClassNames}`"
  >
    <div class="container industries-card-slice__cards">
      <component
        :is="industry.linkToIndustryPage ? 'a' : 'div'"
        v-for="(industry, industryIdx) in industries"
        :key="`industry-${industryIdx}`"
        :href="industry.linkToIndustryPage && industry.linkToIndustryPage"
        :class="`industries-card-slice__card ${colorThemeClassNames.cardClassNames}`"
        @click.prevent="goToPage(industry.linkToIndustryPage)"
      >
        <img
          v-if="industry.icon && industry.icon.url"
          loading="lazy"
          :src="industry.icon.url"
          :width="industry.icon.dimensions.width"
          :height="industry.icon.dimensions.height"
          :alt="industry.icon.alt || 'Icon'"
          class="industries-card-slice__icon"
        >
        <p
          v-if="industry.name"
          :class="`industries-card-slice__name ${colorThemeClassNames.textClassNames}`"
          v-html="industry.name.replace(/\n/g, '<br />')"
        />
        <span
          v-if="industry.linkToIndustryPage"
          :class="`industries-card-slice__arrow industries-card-slice__arrow--${colorTheme}`"
        />
      </component>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '@/assets/styles/colorClasses/colors.scss';

.industries-card-slice {
  &__cards {
    @include grid(repeat(3, 1fr), auto, 20px, 20px);

    * {
      box-sizing: border-box;
    }

    @media screen and (max-width: 1026px) {
      @include grid(repeat(2, 1fr), auto, 20px, 20px);
    }

    @media screen and (max-width: 768px) {
      @include grid(repeat(2, 1fr), auto, 15px, 15px);
    }
  }

  &__card {
    min-height: 180px;
    padding: 20px 30px 20px;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    border-radius: 9px;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;
    will-change: opacity;
    position: relative;

    @media (hover: hover) {
      &:hover {
        opacity: 1;

        .industries-card-slice__name {
          transform: translateY(-10px);
        }

        .industries-card-slice__icon {
          filter: grayscale(0);
        }
      }
    }

    @media (hover: none) {
      opacity: 1;

      .industries-card-slice__name {
        transform: translateY(0px);
      }

      .industries-card-slice__icon {
        filter: grayscale(0);
      }
    }

    @media screen and (max-width: 550px) {
      padding: 15px;
      min-height: 130px;
      row-gap: 20px;
    }
  }

  &__icon {
    width: 40px;
    height: 40px;
    display: block;
    filter: grayscale(100);
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 550px) {
      width: 24px;
      height: 24px;
    }
  }

  &__name {
    @include font('Inter', 24px, 600);
    line-height: 130%;
    transform: translateY(0px);
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 1024px) {
      font-size: 20px;
    }

    @media screen and (max-width: 550px) {
      font-size: 14px;
    }
  }

  &__arrow {
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 12px;
    height: 14px;

    &--black {
      @include arrow-top-right-icon($bgcolor--white-primary);
    }

    &--white {
      @include arrow-top-right-icon($bgcolor--black-pale);
    }

    @media screen and (max-width: 550px) {
      width: 9px;
      height: 10px;
    }
  }
}
</style>
