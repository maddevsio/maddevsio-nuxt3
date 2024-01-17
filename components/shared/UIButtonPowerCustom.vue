<template>
  <div>
    <button
      v-if="!isLink"
      class="button-power-custom"
      :class="classNames"
      :style="cssVars"
      @click="clickHandler"
    >
      {{ label }}
      <span
        v-if="showArrow"
        class="button-power-custom__arrow"
      />
    </button>
    <NuxtLink
      v-if="isLink && !isExternalLink"
      :to="linkToPage"
      class="button-power-custom"
      :class="classNames"
      :style="cssVars"
    >
      {{ label }}
      <span
        v-if="showArrow"
        class="button-power-custom__arrow"
      />
    </NuxtLink>
    <a
      v-if="isLink && isExternalLink"
      :href="linkToPage"
      class="button-power-custom"
      :class="classNames"
      :style="cssVars"
      target="_blank"
      rel="noopener"
    >
      {{ label }}
      <span
        v-if="showArrow"
        class="button-power-custom__arrow"
      />
    </a>
  </div>
</template>
<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'UIButtonPowerCustom',

  props: {
    label: {
      type: String,
      default: 'Pass on the text',
    },

    showArrow: {
      type: Boolean,
      default: true,
    },

    hoverBackgroundColor: {
      type: String,
      default: '#FFFFFF',
    },

    labelColor: {
      type: String,
      default: '',
    },

    hoverLabelColor: {
      type: String,
      default: '',
    },

    borderColor: {
      type: String,
      default: '#A0A0A1',
    },

    isOutlined: {
      type: Boolean,
      default: true,
    },

    backgroundColor: {
      type: String,
      default: '',
    },

    clickHandler: {
      type: Function,
      default: () => {},
    },

    isLink: {
      type: Boolean,
      default: false,
    },

    isExternalLink: {
      type: Boolean,
      default: false,
    },

    linkToPage: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const classNames = computed(() => [
      props.isOutlined ? 'button-power-custom--outlined' : 'button-power-custom--not-outlined',
    ])

    const cssVars = computed(() => ({
      '--backgroundColor': props.backgroundColor ? props.backgroundColor : 'transparent',
      '--hoverBackgroundColor': props.hoverBackgroundColor,
      '--borderColor': props.borderColor,
      '--labelColor': props.labelColor,
      '--hoverLabelColor': props.hoverLabelColor,
    }))

    return {
      classNames,
      cssVars,
    }
  },
})
</script>
<style scoped lang="scss">
.button-power-custom {
  @include font('Inter', 14px, 400);
  line-height: 150%;
  letter-spacing: -0.4px;
  color: var(--labelColor);
  cursor: pointer;
  padding: 12px 10px;
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  width: 100%;
  border-radius: 5px;
  background: var(--backgroundColor);
  border: none;
  box-sizing: border-box;

  &--outlined {
    background: transparent;
    border: 1px solid var(--borderColor);
  }

  &__arrow {
    @include arrow-top-right-icon(var(--labelColor));
    width: 9px;
    height: 9px;
    transition: 0.3s ease-in-out;

    @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
      @supports not (translate: 0) { /* Проверка на версию Safari */
        margin-left: 10px;
      }
    }
  }

  &:hover {
    color: var(--hoverLabelColor);
    background: var(--hoverBackgroundColor);
    border-color: var(--hoverBackgroundColor);

    .button-power-custom__arrow {
      @include arrow-top-right-icon(var(--hoverLabelColor));
    }
  }

  @media screen and (max-width: 650px) {
    padding: 11px 10px;
  }
}
</style>
