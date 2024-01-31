<script setup lang="ts">
import type { PropType } from 'vue'
import type {
  IServiceWithLottieMobile,
} from '~/components/ServiceWithLottie/interfaces/IServiceWithLottieMobile'

defineProps({
  mobileInstance: {
    type: Object as PropType<IServiceWithLottieMobile>,
    required: true,
    default: () => ({}),
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="container service-slice-mobile">
    <div
      v-for="(accordion, accordionIdx) in mobileInstance.dataForCreateAccordion"
      :key="`${accordion.buttonIcon}-${accordionIdx}`"
      class="service-slice-mobile__item"
      :class="{ 'service-slice-mobile__item--active': mobileInstance.activeAccordion.value === accordion.buttonLabel }"
    >
      <button
        class="service-slice-mobile__item-button"
        @click="mobileInstance.changeActiveAccordion({
          $event,
          buttonLabel: accordion.buttonLabel
        })"
      >
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/custom/about/${accordion.buttonIcon}`)"
          :alt="accordion.buttonLabel || 'Button group icon'"
          width="18"
          height="18"
          class="service-slice-mobile__button-icon"
        >
        {{ accordion.buttonLabel }}
      </button>
      <div
        v-show="mobileInstance.activeAccordion.value === accordion.buttonLabel"
        class="service-slice-mobile__content"
      >
        <div
          class="service-slice-mobile__content-lottie"
        >
          <SharedLottieMad
            class="case_lottie"
            height="182px"
            :lottie-link="$getMediaFromS3(`/images/custom/about/${accordion.lottieLink}.json`)"
            :autoplay="true"
          />
        </div>
        <ol
          class="service-slice-mobile__content-list"
        >
          <li
            v-for="(link, linkIdx) in accordion.links"
            :key="`link-${linkIdx}`"
            class="service-slice-mobile__content-list-item"
          >
            <NuxtLink
              v-if="link.haveLink"
              :to="link.url"
              class="service-slice-mobile__content-list-item-link"
            >
              {{ link.label }}
            </NuxtLink>
            <span
              v-else
              class="service-slice-mobile__content-list-item-link service-slice-mobile__content-list-item-link--not-link"
            >
              {{ link.label }}
            </span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.service-slice-mobile {
  display: none;
  visibility: hidden;
  flex-direction: column;
  row-gap: 24px;

  @media screen and (max-width: 875px) {
    display: flex;
    visibility: visible;
  }

  &__item {
    background: $bgcolor--black-pale;
    opacity: 0.4;
    border-radius: 9px;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    will-change: opacity;

    &--active {
      opacity: 1;
    }

    @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
      @supports not (translate: 0) { /* Проверка на версию Safari */
        margin-bottom: 24px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  &__item-button {
    @include font('Inter', 18px, 600);
    line-height: 130%;
    color: $text-color--white-primary;
    padding: 24px 5px 24px 24px;
    background: transparent;
    display: flex;
    align-items: center;
    column-gap: 11px;
    width: 100%;
    border: none;
    cursor: pointer;

    @media screen and (max-width: 550px) {
      font-size: 16px;
    }
  }

  &__button-icon {
    @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
      @supports not (translate: 0) { /* Проверка на версию Safari */
        margin-right: 11px;
        display: block;
      }
    }
  }

  &__content {
    display: flex;
    align-items: center;
    column-gap: 69px;
    padding: 4px 24px 24px;

    &-lottie {
      max-width: 175px;

      @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
        @supports not (translate: 0) { /* Проверка на версию Safari */
          @media screen and (max-width: 550px) {
            margin-bottom: 25px;
          }
        }
      }
    }

    &-list {
      display: flex;
      flex-direction: column;
      row-gap: 24px;
      margin: 0;
      padding: 0;

      &-item {
        color: $text-color--grey-opacity-40-percent;

        @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
          @supports not (translate: 0) { /* Проверка на версию Safari */
            margin-bottom: 24px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }

        &-link {
          @include font('Inter', 16px, 400);
          line-height: 130%;
          color: $text-color--grey-opacity-40-percent;
          border-bottom: 1px solid #47484A;

          &--not-link {
            border: none;
          }
        }
      }
    }

    @media screen and (max-width: 550px) {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 25px;

      &-lottie {
        align-self: center;
        max-width: 279px;
      }

      &-list {
        padding-left: 20px;
      }
    }
  }
}
</style>
