<script setup lang="ts">
import type { PropType } from 'vue'
import type {
  WorkPrinciplesWithFormDefaultProps,
} from '~/components/PageBlocks/WorkPrinciplesWithForm/interfaces/IWorkPrinciplesWithFormDefault'
import {
  WorkPrinciplesWithFormDefault,
} from '~/components/PageBlocks/WorkPrinciplesWithForm/classes/WorkPrinciplesWithFormDefault'

const props = defineProps({
  slice: {
    type: Object as PropType<WorkPrinciplesWithFormDefaultProps>,
    default: () => ({}),
  },
})

const {
  listTitle,
  listItems,
  formTitle,
  formButtonText,
  backgroundColorClass,
} = new WorkPrinciplesWithFormDefault(props.slice)
const { headerHeight } = storeToRefs(useHeaderStore())
</script>

<template>
  <div
    :class="`work-principles-with-form ${backgroundColorClass}`"
  >
    <div class="work-principles-with-form__container container">
      <div class="work-principles-with-form__list">
        <h2
          v-if="listTitle"
          class="work-principles-with-form__title"
          v-html="listTitle"
        />
        <LazyPageBlocksWorkPrinciplesWithFormUIListItem
          v-for="(item, i) in listItems"
          :key="`work-principle-item-${i}`"
          :icon="item.icon"
          :description="item.description"
        />
      </div>
      <LazyWidgetsFormContactUsFooter
        form-uid="contact-form"
        form-location="Contact Us"
        class="work-principles-with-form__form"
        :form-title="formTitle"
        :form-button-text="formButtonText"
        :style="`scroll-margin-top: ${headerHeight}px`"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work-principles-with-form {
  &--black {
    background-color: $bgcolor--black;
    color: $text-color--white-primary;
  }

  &--white {
    background-color: $bgcolor--white-primary;
    color: $text-color--black-pale;
  }

  &__container {
    * {
      box-sizing: border-box;
    }
    @include grid(auto 449px, auto, 118px, 0);
    align-items: flex-start;
  }

  &__title {
    @include font('Inter', 60px, 700);
    line-height: 125%;
    margin-bottom: 75px;
    color: inherit;
  }

  @media screen and (max-width: 1500px) {
    &__container {
      grid-column-gap: 68px;
    }

    &__title {
      font-size: 54px;
      margin-bottom: 56px;
    }
  }

  @media screen and (max-width: 1260px) {
    &__container {
      grid-column-gap: 50px;
    }

    &__title {
      font-size: 45px;
      margin-bottom: 35px;
    }
  }

  @media screen and (max-width: 1150px) {
    &__container {
      grid-template-columns: 1fr;
      grid-gap: 48px 0;
    }
  }

  @media screen and (max-width: 650px) {
    &__title {
      font-size: 31px;
    }
  }
}
</style>
