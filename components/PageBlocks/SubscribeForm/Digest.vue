<script setup lang="ts">
import type { PropType } from 'vue'
import type { SubscribeFormDigestProps } from '~/components/PageBlocks/SubscribeForm/interfaces/ISubscribeFormDigest'
import { SubscribeFormDigest } from '~/components/PageBlocks/SubscribeForm/classes/SubscribeFormDigest'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<SubscribeFormDigestProps>,
    default: () => ({}),
  },
})

const {
  backgroundColor,
  textColor,
  title,
  subtitle,
  sliceVariation,
} = new SubscribeFormDigest(slice)
</script>

<template>
  <div :class="`subscribe-form-digest subscribe-form-digest--${backgroundColor}`">
    <div class="subscribe-form-digest__content">
      <h4 :class="`subscribe-form-digest__title subscribe-form-digest__title--${textColor}`">
        {{ title }}
      </h4>
      <p :class="`subscribe-form-digest__subtitle subscribe-form-digest__subtitle--${textColor}`">
        {{ subtitle }}
      </p>
      <LazyWidgetsFormSubscribe
        :color-theme="backgroundColor"
        :slice-variation="sliceVariation"
        :line-break-for-success="true"
        form-uid="digest-form"
        form-location="Slice"
      />
    </div>
    <LazyPageBlocksSubscribeFormUIDigestImage />
  </div>
</template>

<style lang="scss" scoped>
.subscribe-form-digest {
  display: flex;
  align-items: center;
  column-gap: 36px;
  padding: 24px 27px;

  &--white {
    background-color: $bgcolor--cultured;
  }

  &--black {
    background-color: $bgcolor--black;
  }

  @media screen and (max-width: 585px) {
    padding: 40px 24px;
    column-gap: 0;
  }

  &__content {
    width: 65%;

    @media screen and (max-width: 585px) {
      width: 100%;
    }
  }

  &__title, &__subtitle {
    &--black {
      color: $text-color--chinese-black;
    }

    &--white {
      color: $text-color--white-primary;
    }
  }

  &__title {
    @include font('Inter', 24px, 700);
    line-height: 130%;
    margin-bottom: 12px;
  }

  &__subtitle {
    @include font('Inter', 16px, 400);
    line-height: 26px;
    margin-bottom: 16px;

    @media screen and (max-width: 585px) {
      font-size: 14px;
      line-height: 21px;
    }
  }
}
</style>
