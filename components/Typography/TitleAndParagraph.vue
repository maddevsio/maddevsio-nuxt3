<script setup lang="ts">
import type { TitleAndParagraphProps } from '~/components/Typography/interfaces/ITitleAndParagraph'
import { TitleAndParagraph } from '~/components/Typography/classes/TitleAndParagraph'

interface Props {
  slice: TitleAndParagraphProps
}
const { slice } = defineProps<Props>()
const {
  title,
  description,
  position,
  maxWidth,
} = new TitleAndParagraph(slice)
</script>
<template>
  <div class="content">
    <section class="container">
      <div :style="{ 'max-width': maxWidth, margin: '0 auto' }">
        <PrismicRichText
          :field="title"
          class="content__title"
          :class="[`content__title--${position}`]"
          :html-serializer="prismicHtmlSerializer"
        />
        <PrismicRichText
          class="content__description"
          :field="description"
          :html-serializer="prismicHtmlSerializer"
        />
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
.content {
  width: 100%;
  background: $bgcolor--white-primary;
  margin: -1px auto 0;

  &__title {
    &--left {
      text-align: left;
    }

    &--center {
      text-align: center;
    }

    &--right {
      text-align: right;
    }
  }
}

:deep(h1),
:deep(h2),
:deep(h3),
:deep(h4),
:deep(h5),
:deep(h6) {
  padding-top: 48px;
  padding-bottom: 12px;
}

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

:deep(hr) {
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-top: 1px solid $border-color--grey-20-percent;
  margin: 48px 0;
}

:deep(strong) {
  font-weight: 700;
}

:deep(ul),
:deep(ol) {
  padding: 16px 0 16px 18px;
  margin: 0;
}

:deep(ul) {
  list-style: disc;
}

:deep(ol) {
  list-style: decimal;
}

:deep(p),
:deep(li) {
  font-size: 17px;
  line-height: 28px;
  letter-spacing: -0.02em;
}

:deep(li) {
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
}

:deep(pre) {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  font-weight: 400;
  padding: 20px;
  overflow: auto;
  background: $bgcolor--grey-light;
  border-radius: 2px;
  line-height: 24px;
}

@media only screen and (max-width: 1024px) {
  :deep(h2) {
    font-size: 26px;
    line-height: 33px;
  }

  :deep(h5) {
    font-size: 20px;
    line-height: 27px;
  }

  :deep(p) {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
