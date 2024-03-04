<script setup lang="ts">
defineProps({
  theme: {
    type: String,
    default: 'black',
  },

  activeElement: {
    type: Number,
    default: 0,
  },

  arrayCards: {
    type: Array,
    default: () => [],
  },

  isMobile: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['prevClick', 'nextClick'])

const prevClick = () => {
  emit('prevClick')
}

const nextClick = () => {
  emit('nextClick')
}
</script>
<template>
  <div
    :class="`ui-prev-next-buttons ui-prev-next-buttons--${theme}-theme`"
  >
    <div class="container ui-prev-next-buttons__wrapper">
      <button
        class="ui-prev-next-buttons__button ui-prev-next-buttons__button--prev"
        :disabled="activeElement === 0"
        @click="prevClick"
      >
        <svg
          width="40"
          height="11"
          viewBox="0 0 40 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.76136 11L6.63636 10.125L3.03409 6.53409H40V5.28409H3.03409L6.63636 1.68182L5.76136 0.818182L0.670452 5.90909L5.76136 11Z"
            fill="#CFCFD0"
          />
        </svg>
        Prev
      </button>
      <hr class="ui-prev-next-buttons__divider">
      <button
        class="ui-prev-next-buttons__button ui-prev-next-buttons__button--next"
        :disabled="arrayCards.length - 1 === activeElement || (!isMobile && arrayCards.length - 2 === activeElement)"
        @click="nextClick"
      >
        Next
        <svg
          width="40"
          height="11"
          viewBox="0 0 40 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.2386 11L33.3636 10.125L36.9659 6.53409H0V5.28409H36.9659L33.3636 1.68182L34.2386 0.818182L39.3295 5.90909L34.2386 11Z"
            fill="#CFCFD0"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ui-prev-next-buttons {
  margin-top: 92px;

  @media screen and (max-width: 639px) {
    margin-top: 0;
  }

  &--black-theme {
    background-color: $bgcolor--black;

    * {
      color: $text-color--grey-20-percent;
    }
  }

  &__wrapper {
    display: flex;
    place-content: center;
    gap: 26px;
  }

  &__button {
    @include font('Inter', 16px, 400);
    line-height: 27px;
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    color: $text-color--red;
    display: flex;
    gap: 5px;
    align-items: center;
    transition: 0.5s;

    svg {
      path {
        fill: $text-color--red;
        transition: 0.5s;
      }
    }

    &:disabled {
      cursor: not-allowed;
      color: $text-color--grey-20-percent;

      svg {
        path {
          fill: $text-color--grey-20-percent;
        }
      }
    }
  }

  &__divider {
    background-color: $text-color--grey-20-percent;
    width: 1px;
    border: none;
    margin: 0;
  }
}
</style>
