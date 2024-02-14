<script setup lang="ts">
import type { ICustomerLogoInteractiveCard } from '~/components/PageBlocks/CustomerLogo/interfaces/ICustomerLogoInteractive'

interface Props {
  customerBigCardInstance: ICustomerLogoInteractiveCard
}

const { customerBigCardInstance } = defineProps<Props>()
const {
  setClassnames,
  setChildClassnames,
  setLineClamp,
} = customerBigCardInstance
</script>
<template>
  <Transition
    name="fade-big-card"
    mode="out-in"
  >
    <div
      :key="customerBigCardInstance.title"
      class="customer-logo-card-big"
      :class="setClassnames()"
    >
      <div class="customer-logo-card-big__image-wrapper">
        <NuxtImg
          v-if="customerBigCardInstance.logo.url"
          provider="prismic"
          loading="lazy"
          :src="customerBigCardInstance.logo.url"
          :alt="customerBigCardInstance.title || 'Logo icon'"
          width="90"
          height="90"
          class="customer-logo-card-big__image"
          :class="setChildClassnames('image')"
        />
      </div>
      <div class="customer-logo-card-big__content">
        <h3
          class="customer-logo-card-big__title"
          :class="setChildClassnames('title')"
        >
          {{ customerBigCardInstance.title }}
        </h3>
        <p
          class="customer-logo-card-big__description"
          :class="[{
                     'customer-logo-card-big__description--only-desc': !customerBigCardInstance.linkToCaseStudy
                       && !customerBigCardInstance.socialNetworksInstance.socialNetworks.length
                   },
                   setChildClassnames('description'),
          ]"
          :style="setLineClamp()"
        >
          {{ customerBigCardInstance.description }}
        </p>
        <LazySharedUILinkToPage
          v-if="customerBigCardInstance.linkToCaseStudy"
          :link-to-page="customerBigCardInstance.linkToCaseStudy"
          :color="customerBigCardInstance.colorTheme === 'black' ? 'white' : 'black'"
          class="customer-logo-card-big__btn"
        >
          <span class="customer-logo-card-big__link">Explore</span>
        </LazySharedUILinkToPage>
        <LazyPageBlocksCustomerLogoInteractiveCardNetworks
          v-if="customerBigCardInstance.socialNetworksInstance.socialNetworks.length
            && !customerBigCardInstance.linkToCaseStudy"
          :social-networks-instance="customerBigCardInstance.socialNetworksInstance"
        />
      </div>
    </div>
  </Transition>
</template>
<style lang="scss" scoped>
.customer-logo-card-big {
  background: #1D1D1F;
  border-radius: 4px;
  padding: 32px;
  display: flex;
  gap: 24px;
  opacity: 1;
  box-sizing: border-box;

  &--white {
    background: $bgcolor--silver;
  }

  * {
    box-sizing: border-box;
  }

  &__image {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;

    &--white {
      border-color: #E2E2E2;
    }

    &-wrapper {
      max-width: 120px;
      min-width: 120px;
      max-height: 120px;
      width: 25%;
      padding: 14px;
      border: 1px solid #36383A;
      border-radius: 9px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &__content {
    width: 75%;
    display: flex;
    flex-direction: column;
  }

  &__title,
  &__description {
    @include font('Inter', 32px, 700);
    line-height: 120%;
    color: $text-color--white-primary;
    margin-bottom: 12px;
  }

  &__title--white,
  &__description--white {
    color: $text-color--chinese-black;
  }

  &__description {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 24px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    transition: 1s ease;

    &--only-desc {
      margin-bottom: 0;
      flex-grow: 0;
    }
  }

  &__btn {
    padding: 8px 0 !important;
  }

  @media screen and (max-width: 1160px) {
    &__content {
      width: 100%;
    }
  }

  @media screen and (max-width: 620px) {
    padding: 20px;

    &__title {
      font-size: 25px;
      line-height: 130%;
    }

    &__description {
      font-size: 14px;
      line-height: 150%;
      letter-spacing: -0.4px;
      margin-bottom: 10px;
      -webkit-line-clamp: 14 !important;
    }

    &__image {
      &-wrapper {
        width: 70px;
        height: 70px;
        min-width: 70px;
        min-height: 70px;
      }
    }

    &__btn {
      padding: 5px 0 !important;
    }
  }
}

.fade-big-card-enter-active,
.fade-big-card-leave-active {
  transition: 0.6s ease;
  overflow: hidden;
}

.fade-big-card-enter,
.fade-big-card-leave-to {
  opacity: 0;
}

.fade-big-card-leave,
.fade-big-card-enter-to {
  opacity: 1;
}
</style>
