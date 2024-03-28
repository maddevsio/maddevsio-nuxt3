<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  id: {
    type: String,
    default: '',
  },

  textColor: {
    type: String,
    default: '',
  },

  title: {
    type: String,
    default: '',
  },

  descriptions: {
    type: Array,
    default: () => [],
  },

  solutionList: {
    type: Array,
    default: () => [],
  },

  image: {
    type: Object as PropType<{ name: string; width: number; height: number }>,
    default: () => ({}),
  },

  marginTopOnIconWrapper: {
    type: Number,
    default: 0,
  },

  backgroundColor: {
    type: String,
    default: '',
  },
})

const cssVars = computed(() => ({
  '--background': `${ props.backgroundColor }`,
}))

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div
    :class="`challenge-solutions__card`"
    :style="cssVars"
  >
    <div
      class="challenge-solutions__card-text-content"
    >
      <Component
        :is="id.startsWith('challenge') ? 'h4' : 'h5'"
        :class="`challenge-solutions__card-title case_title_h5 m-12_bottom text-color-${textColor}`"
      >
        {{ title }}
      </Component>
      <template
        v-if="descriptions.length"
      >
        <LazyCaseStudiesUITextParagraph
          v-for="(description, descriptionIndex) in descriptions"
          :key="descriptionIndex"
          :class="`text-color-${textColor} m-24_bottom challenge-solutions__card-paragraph`"
        >
          {{ description }}
        </LazyCaseStudiesUITextParagraph>
      </template>
      <LazyCaseStudiesUIListDots
        v-else
      >
        <LazyCaseStudiesUIListDotsItem
          v-for="(solution, solutionIndex) in solutionList"
          :key="solutionIndex"
          class="challenge-solutions__solution"
        >
          {{ solution }}
        </LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
    </div>
    <div
      v-if="image.name"
      class="challenge-solutions__card-icon-wrapper"
      :style="{ 'margin-top': `${marginTopOnIconWrapper}px` }"
    >
      <img
        loading="lazy"
        :src="$getMediaFromS3(`images/Cases/rocifi/svg/${image.name}.svg`)"
        :width="image.width"
        :height="image.height"
        :alt="image.name"
        class="challenge-solutions__card-icon"
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.challenge-solutions {
  &__card {
    width: 50%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    background: var(--background);

    &-text-content {
      padding: 30px 30px 0;
      flex-grow: 1;
    }

    &-title {
      text-transform: uppercase;
    }

    &-paragraph {
      &:last-child {
        margin-bottom: 0;
      }
    }

    &-icon {
      width: 100%;
      height: auto;
      display: block;
    }

    @media screen and (max-width: 884px) {
      &-text-content {
        padding-bottom: 20px;
      }
    }

    @media screen and (max-width: 798px) {
      width: 100%;
      padding: 20px 20px 0;

      &-title {
        font-size: 18px;
        line-height: 135%;
      }

      &-text-content {
        padding: 0;
        flex-grow: 1;
      }

      &-icon-wrapper {
        margin-top: 10px !important;
      }

      &:last-child {
        .challenge-solutions__card-text-content {
          padding-bottom: 20px;
        }
      }
    }

    :deep(.list-item_dot) {
      margin-bottom: 0;
      color: $text-color--white-primary;

      &::before {
        left: 9px;
      }
    }
  }
}
</style>
