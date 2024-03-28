<script setup lang="ts">
import { digestComponents } from '~/components/Digest/Slices/index'

defineProps({
  slices: {
    type: Array,
    default: () => [],
  },
})
</script>
<template>
  <div class="digest-components">
    <LazySliceZone
      :components="digestComponents"
      :slices="slices"
    />
  </div>
</template>

<style lang="scss" scoped>
  :deep(h1) {
    @include title($text-color--black-oil, 38px, -0.04em);
    display: none; // h1 tag should not be used
  }

  :deep(h2) {
    @include title($text-color--black-oil, 32px, -0.04em);
  }

  :deep(h3) {
    @include title($text-color--black-oil, 26px, -0.04em);
  }

  :deep(h4) {
    @include title($text-color--black-oil, 21px, -0.04em);
  }

  :deep(h5) {
    @include title($text-color--black-oil, 17px, -0.04em);
  }

  :deep(h6) {
    @include title($text-color--black-oil, 14px, -0.04em);
  }

  :deep(a) {
    text-decoration: underline;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
  }

  :deep(img) {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  :deep(.anchor_title) {
    position: relative;

    .anchor_copy-link {
      button {
        display: none;
        position: absolute;
        left: -36px;
        top: 50%;
        transform: translateY(-50%);
        padding: 12px;
        cursor: pointer;
        border: 0;
        background-color: transparent;

        img {
          width: 16px;
          height: 16px;
          user-select: none;
          pointer-events: none;
        }
      }

      &-tooltip {
        display: none;
        position: absolute;
        left: -102px;
        top: 50%;
        transform: translateY(-50%);
        background-color: $bgcolor--silver;
        padding: 4px 8px;
        box-sizing: border-box;
        border-radius: 4px;
        border: 0;
        line-height: 18px;
        color: $text-color--black-oil;
        transition: all 0.1s ease;
        @include font('Inter', 12px, 400);
      }

      &:hover {
        .anchor_copy-link-tooltip {
          display: block;
        }
      }
    }

    &:hover {
      .anchor_copy-link button {
        @media screen and (min-width: 768px) {
          display: block;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    :deep(h2) {
      font-size: 26px;
      line-height: 33px;
    }

    :deep(h5){
      font-size: 20px;
      line-height: 27px;
    }

    :deep(p) {
      font-size: 16px;
      line-height: 24px;
    }
  }
</style>
