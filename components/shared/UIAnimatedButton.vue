<template>
  <Component
    :is="isTag"
    :class="[{
               'ui-button--disabled': disabled,
               'ui-button--full-width': fullWidth,
               'ui-button--small': small,
             },
             `animation--${animationType}`,
    ]"
    :disabled="disabled"
    :href="linkTo"
    class="ui-button"
    @click="handleClick"
  >
    <span v-if="loading">Waiting...</span>
    <slot
      v-else
    />
  </Component>
</template>

<script>

// import WaveAnimation from '~/directives/WaveAnimation'

export default {
  name: 'UIButton',
  // directives: {
  //   WaveAnimation,
  // },

  props: {
    loading: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    isLink: {
      type: Boolean,
      default: false,
    },

    to: {
      type: String,
      default: '/',
    },

    fullWidth: {
      type: Boolean,
      default: false,
    },

    small: {
      type: Boolean,
      default: false,
    },

    colorType: {
      type: String,
      default: 'transparent',
    },

    animationType: {
      type: String,
      default: 'blink',
    },
  },

  computed: {
    isTag() {
      if (this.isLink) return 'a'
      return 'button'
    },

    linkTo() {
      if (this.isLink) return this.to
      return null
    },
  },

  methods: {
    handleClick() {
      if (!this.disabled) this.$emit('click-emit')
    },
  },
}
</script>

<style lang="scss" scoped>
.animation {
  &--blink {
    position: relative;
    padding: 15px 62px;
    overflow: hidden;
    animation: bg-change-out 800ms forwards;

    &:hover {
      animation: bg-change 300ms forwards;
    }

    &:hover::before {
      animation: blink 800ms;
      animation-delay: 400ms;
    }

    &::before {
      content: '';
      width: 120px;
      height: 100%;
      left: -120px;
      position: absolute;
      background: linear-gradient(90deg, transparent 0%, #fff 50%, transparent 100%) no-repeat 0;
      z-index: 9;
      opacity: 0.3;
    }

    @keyframes blink {
      0% {
        left: -120px;
      }
      100% {
        left: 130%;
      }
    }
  }
}

.ui-button {
  @include font('Inter', 16px, 600);
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 0 2px $border-color--white;
  background-color: transparent;
  border-radius: 4px;
  color: $text-color--white;
  letter-spacing: -0.02em;
  line-height: 24px;
  transition: 0.4s;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: $bgcolor--red;
    box-shadow: inset 0 0 0 2px $bgcolor--red;
  }
  &:not(.ui-button--disabled) {
    &:hover {
      background-color: $bgcolor--red;
      color: $text-color--white;
    }

    &:active {
      background-color: $button-active--red;
      box-shadow: inset 0 0 0 2px $button-active-border--red;
    }
  }

  &--small {
    @include font('Inter', 14px, 600);
    padding: 7.5px 32.5px;
    line-height: 21px;
    @media screen and (max-width: 690px) {
      font-size: 14px;
      line-height: 21px;
      padding: 4px 12px;
    }

    @media screen and (max-width: 490px) {
      font-size: 12px;
      line-height: 18px;
      padding: 6px 14.39px;
    }
  }

  &--full-width {
    display: flex;
    width: 100%;
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    user-select: none;
  }

  &--transparent-bgc {
    background-color: transparent;
    color: $text-color--red;
  }

  &_submit-button-footer {
    @include font('Inter', 16px, 400);
    width: 100%;
    height: 54px;
    line-height: 27px;
    letter-spacing: -0.1px;
    font-weight: 400;
  }

  @media only screen and (max-width: 360px) {
    font-size: 14px;
  }
}
.button-text{
  z-index: 10;
}
</style>
