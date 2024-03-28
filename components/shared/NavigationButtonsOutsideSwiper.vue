<script setup lang="ts">
defineProps({
  isEnd: {
    type: Boolean,
    required: true,
    default: false,
  },

  isBeginning: {
    type: Boolean,
    required: true,
    default: false,
  },

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
const emit = defineEmits(['clickNext', 'clickPrev'])
const clickPrev = () => emit('clickPrev')
const clickNext = () => emit('clickNext')
</script>

<template>
  <div
    class="digest-footer__navigations-buttons-wrapper"
  >
    <div class="digest-footer__navigations-buttons">
      <button
        class="digest-footer__navigations-button"
        :class="`${classPrefixPrev ? `${classPrefixPrev}-prev-next-buttons__button--prev` : ''} ${isBeginning ? 'disabled' : ''}`"
        :disabled="isBeginning"
        @click="clickPrev"
      >
        <span class="arrow prev" />
        {{ prevLabel }}
      </button>
      <span class="digest-footer__navigations-button digest-footer__navigations-divider" />
      <button
        class="digest-footer__navigations-button"
        :class="`${classPrefixNext ? `${classPrefixNext}-prev-next-buttons__button--next` : ''} ${isEnd ? 'disabled' : ''}`"
        :disabled="isEnd"
        @click="clickNext"
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
