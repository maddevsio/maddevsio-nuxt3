<script setup lang="ts">
import type { PropType } from 'vue'
import { CustomersCard } from '~/components/Customers/classes/CustomersCard'
import type { CustomersCardProps } from '~/components/Customers/interfaces/ICustomersCard'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<CustomersCardProps>,
    default: () => ({}),
  },
})
const customersCard = new CustomersCard(slice)
const {
  backgroundColor,
  cards,
  replacePhotoUrl,
} = customersCard
</script>

<template>
  <section
    class="customers-card-slice"
    :class="colorConverterToClass('slice-bg', backgroundColor)"
  >
    <div class="container customers-card-slice__cards">
      <div
        v-for="(card, cardIdx) in cards"
        :key="`customers-testimonial-${cardIdx}`"
        class="customers-card-slice__card"
        :class="colorConverterToClass('bg', backgroundColor)"
      >
        <img
          v-if="card.caseLogo && card.caseLogo.url"
          loading="lazy"
          :src="card.caseLogo.url"
          :alt="card.caseLogo.alt || 'Case Logo'"
          :width="card.caseLogo.dimensions.width || 170"
          :height="card.caseLogo.dimensions.height || 60"
          class="customers-card-slice__logo"
        >
        <div
          v-if="card.description"
          class="customers-card-slice__text-content"
        >
          <p
            v-if="card.description"
            class="customers-card-slice__description"
            :class="colorConverterToClass('text', backgroundColor === 'black' ? 'white' : 'black')"
          >
            "{{ card.description }}"
          </p>
        </div>
        <div class="customers-card-slice__footer">
          <div class="customers-card-slice__author">
            <img
              v-if="card.authorPhoto && card.authorPhoto.url"
              loading="lazy"
              :src="replacePhotoUrl(card.authorPhoto.url)"
              :alt="card.authorPhoto.alt || 'Case Logo'"
              :width="card.authorPhoto.dimensions.width || 50"
              :height="card.authorPhoto.dimensions.height || 50"
              class="customers-card-slice__author-photo"
            >
            <div class="customers-card-slice__author-info">
              <p
                v-if="card.authorName"
                class="customers-card-slice__author-name"
                :class="colorConverterToClass('text', backgroundColor === 'black' ? 'white' : 'black')"
              >
                {{ card.authorName }}
              </p>
              <p
                v-if="card.authorCompany"
                class="customers-card-slice__author-company"
                :class="colorConverterToClass('text', backgroundColor === 'black' ? 'white' : 'black')"
              >
                {{ card.authorCompany }}
              </p>
            </div>
          </div>
          <div class="customers-card-slice__link">
            <SharedUIButtonPowerCustom
              v-if="card.linkToCaseStudy"
              label="Case Studies"
              have-border
              is-outlined
              hover-background-color="#fff"
              border-color="#A0A0A1"
              :label-color="backgroundColor === 'black' ? '#A0A0A1' : '#111111'"
              show-arrow
              hover-label-color="#111111"
              is-link
              :link-to-page="card.linkToCaseStudy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '@/assets/styles/colorClasses/colors.scss';
.customers-card-slice {

  &__cards {
    @include grid(repeat(2, 1fr), auto, 20px, 20px);

    @media screen and (max-width: 630px) {
      @include grid(repeat(1, 1fr), auto, 20px, 20px);
    }

    * {
      box-sizing: border-box;
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    border-radius: 9px;
    padding: 43px 48px;

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      padding: 38px 42px;
    }

    @media screen and (max-width: 1140px) {
      row-gap: 24px;
      padding: 24px 20px;
    }

    @media screen and (max-width: 768px) {
      row-gap: 22px;
    }
  }

  &__logo {
    display: block;

    @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
      @supports not (translate: 0) { /* Проверка на версию Safari */
        margin-bottom: 32px;

        @media screen and (max-width: 1140px) {
          margin-bottom: 24px;
        }
      }
    }

    @media screen and (max-width: 1140px) {
      width: 73px;
      height: auto;
    }
  }

  &__text-content {
    flex-grow: 1;

    @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
      @supports not (translate: 0) { /* Проверка на версию Safari */
        margin-bottom: 32px;

        @media screen and (max-width: 1140px) {
          margin-bottom: 24px;
        }
      }
    }
  }

  &__description {
    @include font('Inter', 24px, 400);
    line-height: 130%;

    @media screen and (max-width: 1140px) {
      font-size: 18px;
    }

    @media screen and (max-width: 630px) {
      font-size: 14px;
      line-height: 150%;
      letter-spacing: -0.4px;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1140px) {
      flex-direction: column;
      row-gap: 24px;
    }

    @media screen and (max-width: 768px) {
      row-gap: 26px;
    }

    @media screen and (max-width: 630px) {
      align-items: flex-start;
    }
  }

  &__author {
    display: flex;
    align-items: center;
    column-gap: 11px;

    @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
      @supports not (translate: 0) { /* Проверка на версию Safari */
        margin-bottom: 32px;

        @media screen and (max-width: 1140px) {
          margin-bottom: 24px;
        }
      }
    }

    &-info {
      @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
        @supports not (translate: 0) { /* Проверка на версию Safari */
          margin-left: 11px;

          @media screen and (max-width: 630px) {
            margin-left: 5px;
          }
        }
      }
    }

    &-name,
    &-company {
      @include font('Inter', 16px, 600);
    }

    &-name {
      line-height: 24px;
      opacity: 0.8;

      @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
        @supports not (translate: 0) { /* Проверка на версию Safari */
          @media screen and (max-width: 630px) {
            margin-bottom: 6px;
          }
        }
      }
    }

    &-company {
      line-height: 26px;
      font-weight: 400;
      opacity: 0.6;
    }

    &-photo {
      display: block;
    }

    @media screen and (max-width: 1140px) {
      &-name,
      &-company {
        font-size: 14px;
      }

      &-name {
        line-height: 21px;
      }

      &-company {
        line-height: 23px;
      }

      &-photo {
        width: 36px;
        height: 36px;
      }
    }

    @media screen and (max-width: 630px) {
      column-gap: 5px;

      &-info {
        display: flex;
        flex-direction: column;
        row-gap: 6px;
      }

      &-name,
      &-company {
        font-size: 12px;
        line-height: 11px;
      }

      &-photo {
        width: 32px;
        height: 32px;
      }

    }
  }

  &__link {
    width: 31%;
    min-width: 140px;

    @media screen and (max-width: 1140px) {
      width: 100%;
    }
  }
}
</style>
