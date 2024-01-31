<script setup lang="ts">
import { CustomersBlack } from '~/components/Customers/classes/CustomersBlack'

const { client } = usePrismic()
const customersBlackInstance = new CustomersBlack()

await customersBlackInstance.getCustomersLogo(client)

const { customerLogos } = customersBlackInstance
</script>
<template>
  <div class="customers-black">
    <div class="container customers-black__cards">
      <div
        v-for="(logo, logoIdx) in customerLogos"
        :key="`customer-logo-${logoIdx}`"
        class="customers-black__card"
      >
        <img
          v-if="logo.gallery_image && logo.gallery_image.url"
          loading="lazy"
          :src="logo.gallery_image.url.replace('compress,', '')"
          :alt="logo.gallery_image.alt || 'Logo'"
          width="160"
          height="70"
          class="customers-black__logo"
        >
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.customers-black {
  background: $bgcolor--black;

  &__cards {
    @include grid(repeat(6, 1fr), auto, 20px, 20px);

    @media screen and (max-width: 940px) {
      @include grid(repeat(4, 1fr), auto, 20px, 20px);
    }

    @media screen and (max-width: 550px) {
      @include grid(repeat(3, 1fr), auto, 20px, 20px);
    }

    * {
      box-sizing: border-box;
    }
  }

  &__card {
    padding: 20px 15px;
    background: $bgcolor--black-pale;
    border-radius: 9px;
  }

  &__logo {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
}
</style>
