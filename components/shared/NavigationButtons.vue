<script setup lang="ts">
defineProps({
  prevLabel: {
    type: String,
    default: 'Previous',
  },

  classPrefixPrev: {
    type: String,
    default: '',
  },

  classPrefixNext: {
    type: String,
    default: '',
  },
})

const swiper: {
  isBeginning: boolean
  isEnd: boolean
  slidePrev(): void
  slideNext(): void
} = useSwiper()
</script>
<template>
  <div
    class="digest-footer__navigations-buttons-wrapper"
  >
    <div class="digest-footer__navigations-buttons">
      <button
        class="ui-prev-next-buttons__button--prev digest-footer__navigations-button"
        :class="`${classPrefixPrev ? `${classPrefixPrev}-prev-next-buttons__button--prev` : ''} ${swiper.isBeginning ? 'disabled' : ''}`"
        :disabled="swiper.isBeginning"
        @click="swiper.slidePrev()"
      >
        <span class="arrow prev" />
        {{ prevLabel }}
      </button>
      <span class="digest-footer__navigations-divider" />
      <button
        class="ui-prev-next-buttons__button--next digest-footer__navigations-button"
        :class="`${classPrefixNext ? `${classPrefixNext}-prev-next-buttons__button--next` : ''} ${swiper.isEnd ? 'disabled' : ''}`"
        :disabled="swiper.isEnd"
        @click="swiper.slideNext()"
      >
        Next
        <span class="arrow next" />
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.digest-footer {
  &__navigations {

    &-buttons {
      @media screen and (max-width: 670px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &-wrapper {
        width: 27%;
        min-width: 220px;
        @media screen and (max-width: 670px) {
          width: 100%;
          order: 3;
        }
      }
    }

    &-button {
      @include font('Inter', 16px, 400);
      color: $text-color--red;
      text-decoration: none;
      display: inline-block;
      line-height: 166%;
      transition: 0.3s;
      cursor: pointer;
      background: transparent;
      border: none;

      &:not(.disabled):hover {
        color: $text-color--red;

        .arrow {
          @include arrow-icon-red;
        }
      }

      &:not(.disabled) {
        .arrow {
          @include arrow-icon-red;
        }
      }

      .arrow {
        @include arrow-icon;
        display: inline-block;
        width: 12px;
        height: 11px;
        transition: 0.3s;

        &.prev {
          margin-right: 10px;
        }

        &.next {
          margin-left: 10px;
          transform: rotate(180deg);
        }
      }

      &.disabled {
        opacity: 0.2;
        cursor: not-allowed;
        color: $text-color--grey-opacity-40-percent;
      }
    }

    &-divider {
      display: inline-block;
      height: 27px;
      width: 1px;
      background-color: $bgcolor--grey-pale;
      vertical-align: middle;
      margin: 0 16px;

      @media screen and (max-width: 670px) {
        display: none;
      }
    }
  }
}
</style>
