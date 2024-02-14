<script setup lang="ts">
import type { EmbedBlogProps } from '~/components/PageBlocks/Embed/interfaces/IEmbedBlog'
import { EmbedBlog } from '~/components/PageBlocks/Embed/classes/EmbedBlog'

interface Props {
  slice: EmbedBlogProps
}

const { slice } = defineProps<Props>()
const {
  item,
  isTag,
  setEmbedWithVideo,
  setRawEmbed,
  onResize,
  embedFieldData,
  embedImage,
} = new EmbedBlog(slice)

if (item) {
  const {
    embed: {
      html: rawHtml,
      type: embedType,
    },
  } = item

  if (rawHtml) {
    setRawEmbed()
  }

  if (embedType === 'video') {
    setEmbedWithVideo()
  }
}

onMounted(() => {
  if (item) {
    onResize()
    window.addEventListener('resize', onResize)
  }
})

onUnmounted(() => {
  if (item) {
    window.removeEventListener('resize', onResize)
  }
})
</script>
<template>
  <Component
    :is="isTag.is"
    v-if="item"
    v-bind="isTag"
    class="embed"
  >
    <PrismicEmbed
      :field="embedFieldData"
      :class="`embed__${item.embed.type}-content`"
    />
    <template v-if="item.embed.type === 'link'">
      <div class="embed__image-wrapper">
        <img
          loading="lazy"
          :src="embedImage.url"
          :width="embedImage.width"
          :height="embedImage.height"
          alt="Image."
          class="embed__image"
          data-testid="embed__image"
        >
      </div>
    </template>
  </Component>
</template>
<style lang="scss" scoped>
.embed {
  :deep(iframe) {
    display: block;
    max-width: 100%;
  }

  &__link,
  &__video {
    padding: 25px 0;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid $border-color--silver;
    text-decoration: none;
    @media screen and (max-width: 1024px) {
      flex-wrap: wrap;
    }

    &-content {
      width: 100%;
      padding: 24px 0 24px 24px;
      @media screen and (max-width: 1024px) {
        order: 2;
        width: 100%;
        padding-right: 24px;
      }
    }
  }

  :deep(.embed__title),
  :deep(.embed__description) {
    letter-spacing: -0.02em;
    line-height: 129%;
  }

  :deep(.embed__title),
  :deep(.embed__custom-title) {
    @include font('Inter', 21px, 700);
    line-height: 27px;
    color: $text-color--black-oil;
    margin: 0 0 6px 0;
  }

  :deep(.embed__custom-title) {
    @include font('Inter', 25px, 700);
    line-height: 30px;

    @media screen and (max-width: 576px) {
      font-size: 21px;
      line-height: 27px;
    }
  }

  :deep(.embed__description),
  :deep(.embed__custom-description) {
    @include font('Inter', 13px, 400);
    color: $text-color--grey-pale;
    margin: 0;
  }

  :deep(.embed__custom-description) {
    @include font('Inter', 15px, 400);

    @media screen and (max-width: 576px) {
      font-size: 13px;
    }
  }

  .embed__image {
    display: block;
    width: 200px;
    min-width: 200px;
    height: auto;
    object-fit: cover;
    @media screen and (max-width: 1024px) {
      width: 100%;
      min-width: auto;
    }

    &-wrapper {
      width: 33%;
      display: flex;
      align-items: center;
      padding: 24px;
      @media screen and (max-width: 1024px) {
        order: 1;
        width: 100%;
      }
    }
  }

  .embed__title,
  .embed__description {
    letter-spacing: -0.02em;
    line-height: 129%;
  }

  .embed__title,
  .embed__custom-title {
    @include font('Inter', 21px, 700);
    line-height: 27px;
    color: $text-color--black-oil;
    margin: 0 0 6px 0;
  }

  .embed__custom-title {
    @include font('Inter', 25px, 700);
    line-height: 30px;

    @media screen and (max-width: 576px) {
      font-size: 21px;
      line-height: 27px;
    }
  }

  .embed__description,
  .embed__custom-description {
    @include font('Inter', 13px, 400);
    color: $text-color--grey-pale;
    margin: 0;
  }

  .embed__custom-description {
    @include font('Inter', 15px, 400);

    @media screen and (max-width: 576px) {
      font-size: 13px;
    }
  }

  .embed__image {
    display: block;
    width: 200px;
    min-width: 200px;
    height: auto;
    object-fit: cover;
    @media screen and (max-width: 1024px) {
      width: 100%;
      min-width: auto;
    }

    &-wrapper {
      width: 33%;
      display: flex;
      align-items: center;
      padding: 24px;
      @media screen and (max-width: 1024px) {
        order: 1;
        width: 100%;
      }
    }
  }
}
</style>
