<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case-prototype">
    <div class="container_full background-color-black">
      <div class="container_regular">
        <h2 class="case_title_h2 case_subtitle p-48_top m-12_bottom">
          Building a prototype
        </h2>
        <LazyCaseStudiesUITextParagraph class="m-32_bottom media-m-48_bottom case_section-paragraph">
          Prototyping the camera device was a matter of finding the most advanced solutions that the modern hardware
          industry has to offer. We went through a long trial and error process, constantly updating our plans and
          trying out yet better alternatives in each iteration. The early test prototypes were engineered using a
          module-based system:
        </LazyCaseStudiesUITextParagraph>
        <div
          class="m-48_bottom"
        >
          <LazySharedLottieMad
            id="prototype"
            class="case_lottie"
            height="395px"
            :lottie-link="$getMediaFromS3(`/images/Cases/clutch/lottie/prototype-citycam.json`)"
            :autoplay="true"
          />
        </div>
        <LazyCaseStudiesUITextParagraph class="p-96_bottom media-p-48_bottom case_section-paragraph-grey">
          Low efficiency of power supply was a major challenge that we needed to focus on and overcome. The device’s
          initial version featured double conversion of energy where linear regulators first converted energy from power
          banks (+5 V) to make it fit for charging the Li+ accumulator (3.7 V–4.2 V), and then energy went back up to 5
          V to power the periphery of the device. Conversion was carried out by a pulsed DC/DC converter with a large
          output ripple value, so the operation of the controller and the periphery of the device was unstable.
        </LazyCaseStudiesUITextParagraph>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_lottie {
    max-width: 813px;
  }

  &-prototype {
    :deep(.case_section-paragraph.case_paragraph) {
      text-align: center;
      color: $text-color--white;
    }
    :deep(.case_section-paragraph-grey.case_paragraph) {
      text-align: center;
      color: $text-color--grey-opacity-40-percent;
    }
  }

  &_subtitle {
    text-align: center;
    color: $text-color--white;
    &-grey {
      text-align: center;
      color: $text-color--grey-opacity-40-percent;
    }
  }
}
</style>
