<script setup lang="ts">
import type { PropType } from 'vue'
import type { Slice } from '@prismicio/types'
import { Certificates } from '~/components/Awards/classes/Certificates'

const props = defineProps({
  slice: {
    type: Object as PropType<Slice>,
    default: () => ({}),
  },
})
const certificates = new Certificates(props.slice)
</script>
<template>
  <section
    ref="sectionRef"
    class="certificates-slice"
    :style="{ backgroundColor: certificates.sliceBackground }"
  >
    <div
      class="certificates-slice__container container"
      data-testid="certificates-container-test"
    >
      <div class="certificates-slice__cards">
        <component
          :is="certificate.link.url ? 'a' : 'div'"
          v-for="(certificate, idx) in certificates.certificates"
          :key="`${certificate.image && certificate.image.url}${idx}`"
          class="certificate-card"
          :class="{ 'certificate-card--black': certificates.background === 'black' }"
          :href="certificate.link.url && certificate.link.url"
          data-testid="certificate-card-test"
        >
          <img
            loading="lazy"
            :src="certificate.image && certificate.image.url"
            :alt="certificate.image && certificate.image.alt || 'Image'"
            :width="certificate.image && certificate.image.dimensions && certificate.image.dimensions.width"
            :height="certificate.image && certificate.image.dimensions && certificate.image.dimensions.height"
            class="certificate-card__image"
          >
        </component>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.certificates-slice {
  &__cards {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
    max-width: 856px;
    margin: 0 auto;

    @media screen and (max-width: 1000px) {
      max-width: 100%;
    }

    @media screen and (max-width: 566px) {
      gap: 12px;
    }
  }
}

.certificate-card {
  box-sizing: border-box;
  padding: 25px 48px;
  background-color: $bgcolor--white;
  border-radius: 5px;

  &--black {
    background-color: $bgcolor--black-pale;
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 100px;
    max-height: 100px;
  }

  @media screen and (max-width: 1000px) {
    padding: 15px 34px;

    &__image {
      max-width: 90px;
      max-height: 90px;
    }
  }

  @media screen and (max-width: 566px) {
    padding: 10px 36px;
    width: 156px;
    height: 102px;

    &__image {
      max-width: 82px;
      max-height: 82px;
    }
  }
}
</style>
