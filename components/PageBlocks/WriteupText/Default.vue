<script setup lang="ts">
import type { PropType } from 'vue'
import type { WriteupTextDefaultProps } from '~/components/PageBlocks/WriteupText/interfaces/IWriteupTextDefault'
import { WriteupTextDefault } from '~/components/PageBlocks/WriteupText/classes/WriteupTextDefault'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<WriteupTextDefaultProps>,
    default: () => ({}),
  },
})

const { content, showBorderBottom, addEventListeners, removeEventListeners } = new WriteupTextDefault(slice)

onMounted(() => {
  addEventListeners()
})

onUnmounted(() => {
  removeEventListeners()
})
</script>

<template>
  <section class="writeup-text">
    <div
      class="container"
    >
      <PrismicRichText
        :field="content"
        class="writeup-text__content"
        :html-serializer="writeupHtmlSerializer"
      />
      <hr
        v-if="showBorderBottom"
        class="writeup-text__divider"
      >
    </div>
  </section>
</template>

<style scoped lang="scss">
.writeup-text{
  color: $text-color--white-primary;

  &__divider {
    margin: 24px 0 16px;
    padding: 0;
    height: 1px;
    width: 100%;
    border: none;
    background-color: $bgcolor--quote-box;
  }

    :deep(pre[class*=language-]) {
      background: transparent !important;
    }

    :deep(h1) {
      @include font('Inter', 48px, 700);
      line-height: 62.4px;
      letter-spacing: -2px;
      margin-bottom: 32px;

      @media screen and (max-width: 1026px) {
        font-size: 36px;
        line-height: 130%;
      }

      @media screen and (max-width: 768px) {
        font-size: 32px;
      }
    }

    :deep(h2) {
      @include font('Inter', 32px, 700);
      line-height: 41.6px;
      margin: 48px 0 24px;

      @media screen and (max-width: 1026px) {
        margin-top: 32px;
        font-size: 24px;
        line-height: 130%;
      }
    }

    :deep(h3) {
      @include font('Inter', 21px, 700);
      line-height: 130%;

      @media screen and (max-width: 1026px) {
        font-size: 16px;
      }
    }

    :deep(h4) {
      @include font('Inter', 16px, 700);
    }

    :deep(h5) {
      @include font('Inter', 14px, 700);
    }

    :deep(h3, h4, h5, h6) {
      margin-top: 32px;
      margin-bottom: 16px;
    }

    :deep(p) {
      @include font('Inter', 17px, 400);
      line-height: 28.22px;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }

      @media screen and (max-width: 1026px) {
        font-size: 14px;
        line-height: 166%;
      }
    }

    :deep(a) {
      @include font('Inter', 17px, 400);
      line-height: 18.2px;
      letter-spacing: -0.1px;
      color: #79a6e5;
      text-decoration: none;
    }

    :deep(.pre-wrapper) {
      position: relative;
      padding-right: 30px;
      background-color: #161b22;

      .copy-code {
        position: absolute;
        top: 7px;
        right: 5px;
        background-color: transparent;
        border-radius: 3px;
        transition: 0.2s ease-in-out;
        border: none;
        cursor: pointer;
        padding: 5px;

        svg {
          width: 13px;
          height: 13px;
          path {
            fill: #7b8490;
          }
        }

        &:hover {
          background-color: #252931;
        }
      }

      .copied-text {
        position: absolute;
        top: 7px;
        right: 4px;
        background-color: #252931;
        font-size: 12px;
        padding: 7px 5px;
        border-radius: 3px;
      }
    }

    :deep(pre) {
      padding: 16px;
      color: rgb(230, 237, 243);
      border-radius: 5px;
      overflow-x: auto;
      tab-size: 2;

      code {
        background-color: transparent;
        color: inherit;
        border-radius: 0;
        padding: 0;
        font-size: 13px;
        font-family: "IBM Plex Mono", monospace;
      }
    }

    :deep(code) {
      background-color: rgba(110, 118, 129, 0.4);
      color: rgb(230, 237, 243);
      border-radius: 6px;
      padding: 3px 6px;
      font-size: 85%;
    }

    :deep(details) {
      margin-bottom: 16px;

      summary {
        @include font('Inter', 14px, 700);
        line-height: 130%;
        cursor: pointer;
      }
    }

    :deep(ul, ol) {
      padding-left: 40px;
      margin-bottom: 16px;

      li {
        margin-top: 8px;
        font-size: 14px;
        line-height: 26px;

        &:first-child {
          margin-top: 0;
        }
      }

      @media screen and (max-width: 690px) {
        padding: 18px;
      }
    }

    :deep(ul) {
      list-style: disc;
    }

    :deep(blockquote) {
      border-left: 4px solid rgb(48, 54, 61);
      padding-left: 16px;
      margin: 0;
      color: rgb(125, 133, 144);
      font-size: 17px;
    }

    :deep(img) {
      display: block;
      width: 100%;
      height: auto;
    }
}
</style>
