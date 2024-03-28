<script setup lang="ts">
import type { PropType } from 'vue'

interface Icon {
  name: string
  width: string
  height: string
  folder: string
  type: string
}

const props = defineProps({
  headerText: {
    type: String,
    default: '',
  },

  headerTextColor: {
    type: String,
    default: '',
  },

  number: {
    type: [Number, String],
    default: 0,
  },

  numberText: {
    type: String,
    default: '0',
  },

  name: {
    type: String,
    default: '',
  },

  textBeforeNumber: {
    type: String,
    default: '',
  },

  withoutSpaceBeforeNumber: {
    type: Boolean,
  },

  withoutSpaceAfterNumber: {
    type: Boolean,
  },

  numberColor: {
    type: String,
    default: '',
  },

  icon: {
    type: Object as PropType<Icon>,
    default: () => {},
  },

  description: {
    type: String,
    default: '',
  },

  tag: {
    type: String,
    default: 'h3',
  },

  titleTag: {
    type: Boolean,
    default: true,
  },

  descriptionColor: {
    type: String,
    default: '',
  },

  section: {
    type: String,
    default: '',
  },

  index: {
    type: Number,
    default: 0,
  },

  textAfterIcon: {
    type: String,
    default: '',
  },

  withSeparator: {
    type: Boolean,
    default: false,
  },

  isRocifi: {
    type: Boolean,
    default: false,
  },
})

const colorNumber = props.numberColor ? `color: ${ props.numberColor }` : null
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div
    class="case_statistics-item"
    :class="{ 'case_statistics-item--separator': withSeparator }"
  >
    <LazyCaseStudiesUITextParagraph
      v-if="headerText"
      data-testid="card-header-text"
      class="case_statistics-item_header"
      :color="headerTextColor"
    >
      {{ headerText }}
    </LazyCaseStudiesUITextParagraph>
    <img
      v-if="icon"
      loading="lazy"
      class="case_statistics-item_icon m-21_bottom"
      :src="$getMediaFromS3(`/images/Cases/${icon.folder}/${icon.type}/${icon.name}.${icon.type}`)"
      :alt="icon.name || 'Icon'"
      :width="icon.width || '30px'"
      :height="icon.height || '30px'"
    >
    <component
      :is="titleTag ? 'h5' : 'p'"
      v-if="textAfterIcon"
      class="case_statistics-item_title"
      :style="{ 'color': numberColor }"
    >
      {{ textAfterIcon }}
    </component>
    <component
      :is="tag"
      class="case_statistics-item_number p-16_bottom"
      :class="{ 'case_statistics-item_number--rocifi': isRocifi }"
      :style="colorNumber"
    >
      <span
        :style="colorNumber"
      >{{ `${textBeforeNumber ? textBeforeNumber : ''}` + `${withoutSpaceBeforeNumber ? '' : ' '}` }}</span><!--
      --><span
      :id="`statistics-${section}-${index}`"
      :data-end-value="number"
      :data-start-value="numberText"
      :style="colorNumber"
      >{{ `${numberText}` }}</span><!--
      --><span :style="colorNumber">{{ `${withoutSpaceAfterNumber ? '' : ' '}` + `${name ? name : ''}` }}</span>
    </component>
    <LazyCaseStudiesUITextParagraph
      v-if="description"
      class="case_statistics-item_description"
      :color="descriptionColor"
    >
      {{ description }}
    </LazyCaseStudiesUITextParagraph>
  </div>
</template>
<style lang="scss" scoped>
.case {
  &_statistics-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    text-align: center;

    &--separator {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        display: block;
        width: 1px;
        height: 79px;
        background: $bgcolor--white-primary;
        opacity: 0.3;
      }

      &:first-child {
        padding-right: 30px;
      }

      &:last-child {
        padding-left: 30px;

        &::after {
          display: none;
        }
      }

      @media screen and (max-width: 821px) {
        &:first-child,
        &:last-child {
          padding: 0;
        }
      }
    }

    &_header {
      text-align: center;
      @include font($text-color--black, 16px, 400)
    }

    &_title {
      @include font('Inter', 16px, 400);
      line-height: 135%;
      text-align: center;
      letter-spacing: -0.035em;
      text-transform: uppercase;
      margin: 16px 0;
    }

    &_number {
      width: 100%;
      text-align: center;
      border-right: 1px solid $border-color--black-border-03-opacity;
      @include font($text-color--black, 40px, 600);

      &--rocifi {
        font-size: 36px;
      }
    }

    &:last-child {
      .case_statistics-item_number {
        border: none;
      }
    }

    &_description {
      margin-top: auto;
      font-size: 16px;
      line-height: 135%;
      color: $text-color--black;
    }
  }

  @media screen and (max-width: 820px) {
    &_statistics-item {
      padding: 24px 0;

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        padding-bottom: 0;
      }

      &_number {
        border: none;
      }

      position: relative;

      &:before,
      &:after {
        content: '';
        width: 79px;
        height: 1px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: $border-color--black-border-03-opacity;
      }

      &:before {
        top: 0;
      }

      &:after {
        bottom: 0;
      }

      &:first-child, &:last-child {
        &:before,
        &:after {
          content: none;
        }
      }

      &--separator {
        padding: 19px 0 3px;
        &:first-child {
          padding-bottom: 4px;
          &:after {
            content: '';
          }
        }

        &:last-child {
          padding-top: 26.5px;
        }

        &:after {
          content: '';
          bottom: 0;
          top: unset;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 1px;
          background: $bgcolor--white-primary;
        }
      }
    }
  }
}
</style>
