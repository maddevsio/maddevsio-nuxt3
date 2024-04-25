<script setup lang="ts">
const modalContactMeRef = ref<{ show(): void }>()
const isShowModal = ref(false)

const show = async () => {
  isShowModal.value = true
  await delay(200)
  if (!modalContactMeRef.value?.show) { return }
  modalContactMeRef.value?.show()
}

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="cta-banner_container container">
    <LazySharedUIBanner
      title="Build your product <br /> with Mad Devs"
      text="Together we build solutions that bring digital innovation."
      :image="$getMediaFromS3(`/images/CTABanner/Anatoliy.png`)"
      image-alt-text="Tony"
      man-name="Tony Fedorenko"
      man-position="Head of Delivery"
    >
      <LazySharedUIButton @click="show">
        Estimate your project
      </LazySharedUIButton>
    </LazySharedUIBanner>
    <ClientOnly>
      <Teleport to="body">
        <NuxtLazyHydrate :on-interaction="isShowModal">
          <LazyWidgetsModalContactMe
            v-if="isShowModal"
            ref="modalContactMeRef"
            :location="'\'Estimate your project\' button, delivery models page'"
            form-uid="delivery-models-banner"
          />
        </NuxtLazyHydrate>
      </Teleport>
    </ClientOnly>
  </div>
</template>
<style lang="scss" scoped>
.cta-banner_container {
  padding-bottom: 119px;
  @media screen and (max-width: 768px) {
    padding-bottom: 44px;
  }

  :deep(.cta-banner) {
    @media screen and (max-width: 992px) {
      min-height: 425px;
    }

    .cta-banner__image {
      @media screen and (max-width: 960px) {
        right: 40px;
      }
      @media screen and (max-width: 860px) {
        right: -55px;
      }
      @media screen and (max-width: 768px) {
        right: 0;
        margin-top: 20px;
        margin-right: -40px;
      }
    }
  }

  :deep(.ui-button) {
    width: 233px;
    height: 52px;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: -0.02em;
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
  }

}
</style>
