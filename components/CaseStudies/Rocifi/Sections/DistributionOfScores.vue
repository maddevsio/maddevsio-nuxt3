<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case_rocifi__distribution m-96_bottom media-m-48_bottom">
    <div class="container_regular">
      <LazySharedLottieMad
        class="case_lottie case_rocifi__distribution-lottie-desktop m-48_bottom"
        height="863.05px"
        :lottie-link="$getMediaFromS3(`/images/Cases/rocifi/lottie/distribution.json`)"
        :autoplay="true"
      />
      <LazySharedLottieMad
        class="case_lottie case_rocifi__distribution-lottie-mobile m-48_bottom"
        height="577.38px"
        :lottie-link="$getMediaFromS3(`/images/Cases/rocifi/lottie/distribution-mobile.json`)"
        :autoplay="true"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case_rocifi {
  &__distribution {
    padding: 20px 0 10px;
    background: linear-gradient(112.32deg, #0B0C17 1.47%, #141130 27.56%, #2C146A 52.85%, #21124F 104.77%);

    &-lottie-desktop {
      display: block;
    }

    &-lottie-mobile {
      display: none;
    }

    @media screen and (max-width: 430px) {
      padding: 0;
      &-lottie-desktop {
        display: none;
      }

      &-lottie-mobile {
        display: block;
        height: 577px;
      }
    }
  }
}
</style>
