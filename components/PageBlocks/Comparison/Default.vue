<script setup lang="ts">
import type { PropType } from 'vue'
import type { ComparisonDefaultProps } from '~/components/PageBlocks/Comparison/inrefaces/IComparisonDefault'
import { ComparisonDefault } from '~/components/PageBlocks/Comparison/classes/ComparisonDefault'
import { useLightbox } from '~/composables/useLightbox'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<ComparisonDefaultProps>,
    default: () => ({}),
  },
})
const { colorTheme, columnNumber, cards } = new ComparisonDefault(slice)

const cssVars = computed(() => ({
  '--column-number': columnNumber,
}))

useLightbox('#lightbox-gallery', {
  initialZoomLevel: 'fit',
  secondaryZoomLevel: 1.5,
  maxZoomLevel: 1,
})
</script>

<template>
  <div class="comparison-default" :style="{...cssVars}">
    <div class="comparison-default__container container">
      <div id="lightbox-gallery" class="comparison-default__cards">
        <div v-for="card in cards" :key="$prismic.asText(card.content)" class="comparison-default__card">
          <a
            v-if="card.image && card.image.url"
            :data-pswp-width="card.image.dimensions.width"
            :data-pswp-height="card.image.dimensions.height"
            target="_blank"
            rel="noreferrer"
            :href="card.image.url"
          >
            <img
              v-if="card.image && card.image.url"
              :src="card.image.url"
              :alt="card.image.alt || 'Image'"
              class="comparison-default__card-img"
              :width="400"
              :height="225"
            >
          </a>
          <PrismicRichText :field="card.content" :html-serializer="writeupHtmlSerializer" class="comparison-default__card-content" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comparison-default {

  &__card {
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__card-img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-bottom: 25px;
  }

  &__card-content {
    color: $text-color--white-primary;

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

    :deep(h3),
    :deep(h4),
    :deep(h5),
    :deep(h6) {
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

    :deep(ul),
    :deep(ol) {
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
  }

  @media screen and (min-width: 1280px) {
    &__cards {
      display: grid;
      grid-template-columns: repeat(var(--column-number), 1fr);
      grid-gap: 35px;
      margin-right: -35px;
    }

    &__card {
      padding-right: 35px;
      border-right: 1px solid $bgcolor--quote-box;
      margin-bottom: 0;

      &:last-child {
        border: none;
      }
    }
  }
}
</style>
