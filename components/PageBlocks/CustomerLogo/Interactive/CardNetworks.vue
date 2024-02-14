<script setup lang="ts">
import type { ICustomerLogoInteractiveNetworks } from '~/components/PageBlocks/CustomerLogo/interfaces/ICustomerLogoInteractive'

interface Props {
  socialNetworksInstance: ICustomerLogoInteractiveNetworks
}
const { socialNetworksInstance } = defineProps<Props>()

const {
  setClassNames,
  colorTheme,
  socialNetworks,
} = socialNetworksInstance
</script>
<template>
  <div class="customer-logo-card-networks">
    <p
      class="customer-logo-card-networks__title"
      :class="`customer-logo-card-networks__title--${colorTheme}`"
    >
      view project
    </p>
    <ul
      class="customer-logo-card-networks__list"
    >
      <li
        v-for="(network, networkIndex) in socialNetworks"
        :key="networkIndex"
        class="customer-logo-card-networks__network"
      >
        <a
          v-if="network.url"
          :href="network.url"
          target="_blank"
          :class="setClassNames(network)"
        >
          link to network
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.customer-logo-card-networks {
  display: flex;
  column-gap: 12px;
  align-items: center;
  min-height: 44px;

  &__title {
    @include font('Inter', 9px, 400);
    line-height: 150%;
    letter-spacing: 2.6px;
    text-transform: uppercase;
    color: $text-color--grey-opacity-40-percent;

    &--white {
      color: $text-color--chinese-black;
    }
  }

  &__list {
    display: flex;
    column-gap: 15px;
  }

  &__network-link {
    font-size: 0;
    width: 26px;
    height: 26px;
    display: block;
    transition: 0.2s ease;

    &--facebook {
      @include social-network-facebook-customizable(#36383A);
    }

    &--linkedin {
      @include social-network-linkedin-customizable(#36383A);
    }

    &--twitter {
      @include social-network-twitter-customizable(#36383A);
    }

    &--external-link {
      @include external-website-icon(#36383A);
    }

    &--facebook-white,
    &--linkedin-white,
    &--twitter-white,
    &--external-link-white {
      background-color: #A0A0A1;
    }

    &:hover {
      background-color: #A0A0A1;
    }

    &--white {
      &:hover {
        background-color: #36383A;
      }
    }
  }

  @media screen and (max-width: 490px) {
    &__title {
      font-size: 7px;
      line-height: 150%;
      letter-spacing: 0.6px;
    }

    &__list {
      column-gap: 9px;
    }

    &__network-link {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
