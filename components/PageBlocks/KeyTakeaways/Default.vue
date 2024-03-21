<script setup lang="ts">
import type { PropType } from 'vue'
import type { KeyTakeawaysDefaultProps } from '~/components/PageBlocks/KeyTakeaways/interfaces/IKeyTakeawaysDefault'
import { KeyTakeawaysDefault } from '~/components/PageBlocks/KeyTakeaways/classes/KeyTakeawaysDefault'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<KeyTakeawaysDefaultProps>,
    default: () => ({}),
  },
})

const {
  items,
  backgroundColorClass,
  textColor,
} = new KeyTakeawaysDefault(slice)
</script>

<template>
  <div
    class="key-takeaways"
    :class="backgroundColorClass"
  >
    <h3 :class="`key-takeaways__title key-takeaways__title--${textColor}`">
      Key Takeaways
    </h3>
    <ul class="key-takeaways__list">
      <li
        v-for="(item, i) in items"
        :key="`key-takeaways-item-${i}`"
        :class="`key-takeaways__item key-takeaways__item--${textColor}`"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/colorClasses/colors.scss';
.key-takeaways {
  padding: 53px 40px;
  border-radius: 5px;
  margin-top: 48px;

  &__title {
    @include font('Inter', 24px, 600);
    padding: 0;
    margin: 0 0 30px 0;
  }

  &__list {
    padding-left: 0;
  }

  &__item {
    @include font('Inter', 17px, 400);
    display: flex;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: '';
      @include checkmark-red(20px, 20px);
      margin-right: 18px;
    }
  }

  &__title, &__item {
    line-height: 130%;
    &--black {
      color: $text-color--black-oil;
    }

    &--white {
      color: $text-color--silver;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 40px;

    &__item {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 32px;

    &__title {
      font-size: 20px;
    }

    &__item {
      font-size: 14px;
      margin-bottom: 16px;
    }
  }
}
</style>
