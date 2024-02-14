<script setup lang="ts">
import type { CertificatesProps } from '~/components/PageBlocks/Certificates/interfaces/ICertificates'
import { Certificates } from '~/components/PageBlocks/Certificates/classes/Certificates'

interface Props {
  slice: CertificatesProps
}

const { slice } = defineProps<Props>()
const {
  title,
  titleTag,
  certificates,
  backgroundColorClass,
  titleClasses,
} = new Certificates(slice)

const { isMobile } = useCheckMobile(600)
</script>
<template>
  <div
    class="certificates-slice"
    :class="backgroundColorClass"
  >
    <div class="container certificates-slice__container">
      <div
        v-if="!isMobile"
        class="certificates-slice__content certificates-slice__content--desktop"
      >
        <LazyPageBlocksCertificatesUITitle
          v-if="title"
          :title="title"
          :title-tag="titleTag"
          :class="titleClasses"
          class="certificates-slice__title"
        />
        <LazyPageBlocksCertificatesUIDesktop
          v-for="(item, i) in certificates"
          :key="`certificate-${i}}`"
          :certificate="item"
          class="certificates-slice__item certificates-item"
        />
      </div>
      <div
        v-if="isMobile"
        class="certificates-slice__content certificates-slice__content--mobile"
      >
        <LazyPageBlocksCertificatesUITitle
          v-if="title"
          :title="title"
          :title-tag="titleTag"
          :class="titleClasses"
          class="certificates-slice__title"
        />
        <LazyPageBlocksCertificatesUIMobile
          v-for="(item, i) in certificates"
          :key="`certificate-${i}}`"
          :certificate="item"
          class="certificates-slice__item certificates-item"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import 'assets/styles/colorClasses/colors';

.certificates-slice {
  &__conatiner {
    * {
      box-sizing: border-box;
    }
  }

  &__content {
    display: flex;
    flex-wrap: wrap;

    &--desktop {
      gap: 48px 80px;
    }

    &--mobile {
      display: none;
    }

    @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
      @supports not (translate: 0) { /* Проверка на версию Safari */
        margin: 0 -40px;

        @media screen and (max-width: 1350px) {
          margin: 0 -32px;
        }

        @media screen and (max-width: 992px) {
          margin-left: 0;
          margin-right: 0;
        }
      }
    }
  }

  &__title {
    @include font('Inter', 60px, 700);
    line-height: 125%;
    flex: 1 1 45%;
    &--full-width {
      flex: 1 1 100%;
    }

    @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
      @supports not (translate: 0) { /* Проверка на версию Safari */
        margin: 0 40px 48px;

        @media screen and (max-width: 1280px) {
          margin: 0 32px 32px;
        }

        @media screen and (max-width: 992px) {
          margin-right: 0;
          margin-left: 0;
        }
      }
    }
  }

  &__item {
    display: flex;
    align-items: center;
    flex: 1 1 45%;
    min-width: 475px;

    @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
      @supports not (translate: 0) { /* Проверка на версию Safari */
        margin: 0 40px 48px;
        flex: 1 1 calc(50% - 80px);
        &:last-child {
          margin-bottom: 0;
        }

        @media screen and (max-width: 1350px) {
          margin: 0 32px 48px;
          flex: 1 1 calc(50% - 64px);
        }

        @media screen and (max-width: 992px) {
          margin-left: 0;
          margin-right: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 1350px) {
  .certificates-slice {
    &__content {
      &--desktop {
        gap: 32px 65px;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .certificates-slice {
    &__content {
      &--desktop {
        gap: 0;
      }
    }

    &__title {
      margin-bottom: 32px;
    }

    &__item {
      margin-bottom: 48px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .certificates-slice {
    &__title {
      font-size: 31px;
    }
  }
}

@media screen and (max-width: 600px) {
  .certificates-slice {
    &__content {
      &--mobile {
        display: flex;
      }

      &--desktop {
        display: none;
      }
    }

    &__item {
      flex-direction: column;
      align-items: flex-start;
      min-width: 100%
    }
  }
}
</style>
