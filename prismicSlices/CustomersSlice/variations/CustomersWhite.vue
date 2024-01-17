<script setup lang="ts">
import { CustomersWhite } from '~/componentClasses/Customers/CustomersWhite'

const { client } = usePrismic()
const customersWhiteInstance = new CustomersWhite()

useFetch(async () => {
  await customersWhiteInstance.getCustomersLogo(client)
})

const { customerLogos } = customersWhiteInstance
</script>
<template>
  <div class="customer-logo-slice">
    <div class="container">
      <div
        data-testid="customer-logo-slice-container"
        class="customer-logo-slice_list"
      >
        <div
          v-for="(customer, i) of customerLogos"
          :key="`customer-logo-slice-${i}`"
          class="customer-logo-slice_logo"
          data-testid="customer-logo-slice-item"
        >
          <img
            loading="lazy"
            :src="customer.gallery_image.url"
            :alt="customer.gallery_image.alt || 'Image'"
            width="143"
            height="64"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.customer-logo-slice {
  background: $bgcolor--white-primary;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &_list {
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 1024px) {
      gap: 14px;
    }
  }

  &_logo {
    width: 16%;
    max-width: 190px;
    min-height: 111px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px 8px;
    box-sizing: border-box;

    img {
      width: 143px;
      height: 64px;
      display: block;
    }

    @media only screen and (max-width: 1160px) {
      width: 19%;
    }

    @media only screen and (max-width: 1024px) {
      width: 15%;
      min-height: 81px;

      img {
        width: 75px;
        height: 33px;
      }
    }

    @media only screen and (max-width: 834px) {
      width: 18%;
    }

    @media only screen and (max-width: 640px) {
      width: 22.99%;
    }

    @media only screen and (max-width: 520px) {
      width: 29%;
    }

    @media only screen and (max-width: 360px) {
      width: 45%;
    }
  }

  &_link {
    display: block;
    width: 100%;
    margin-top: 50px;

    :deep(.ui-button) {
      padding: 25px;
      line-height: 20px;

      &:hover {
        background-color: lighten($bgcolor--red, 10%) !important;
      }
    }

    @media screen and (max-width: 1024px) {
      margin-top: 32px;
      :deep(.ui-button) {
        padding: 14px 25px;
      }
    }
  }
}
</style>
