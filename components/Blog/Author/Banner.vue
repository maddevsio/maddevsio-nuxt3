<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/client'

interface ContentCount {
  posts: number
  writeups: number
  words: number
}

interface ContentMapperTypes {
  one: string,
  plural: string,
}

interface ContentMapper {
  post: ContentMapperTypes
  writeup: ContentMapperTypes
  word: ContentMapperTypes
  [key: string]: ContentMapperTypes
}

defineProps({
  authorName: {
    type: String,
    default: '',
  },
  authorImage: {
    type: Object as PropType<ImageField>,
    default: () => ({}),
  },
  authorPosition: {
    type: String,
    default: '',
  },
  authorDescription: {
    type: String,
    default: '',
  },
  contentCount: {
    type: Object as PropType<ContentCount>,
    default: () => ({}),
  },
})

const createLabelText = (type: string, count: number) => {
  const map: ContentMapper = {
    post: {
      one: 'Post',
      plural: 'Posts',
    },

    writeup: {
      one: 'Write-up',
      plural: 'Write-ups',
    },

    word: {
      one: 'Word',
      plural: 'Words',
    },
  }

  if (count === 1) { return `${ count } ${ map[type].one }` }
  return `${ count } ${ map[type].plural }`
}
</script>
<template>
  <div class="container">
    <div class="current-author">
      <div class="current-author__data">
        <div class="current-author__image">
          <img
            :src="authorImage.url"
            :alt="authorImage.alt || 'Image'"
            width="165"
            height="165"
          >
        </div>
        <div class="current-author__info">
          <h1 class="current-author__name">
            {{ authorName }}
          </h1>
          <p class="current-author__position">
            {{ authorPosition }}
          </p>
        </div>
        <div
          v-if="Object.keys(contentCount).length"
          class="current-author__labels"
        >
          <p
            v-if="contentCount.posts"
            class="current-author__count"
          >
            {{ createLabelText('post', contentCount.posts) }}
          </p>
          <p
            v-if="contentCount.writeups"
            class="current-author__count"
          >
            {{ createLabelText('writeup', contentCount.writeups) }}
          </p>
        </div>
        <div
          v-else
          class="current-author__label-skeletons"
        >
          <LazySharedSkeletonsTag
            v-for="i in 2"
            :key="`author-label-skeleton-${i}`"
            color-theme="white"
          />
        </div>
      </div>
      <p
        v-if="authorDescription"
        class="current-author__description"
      >
        {{ authorDescription }}
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.current-author {
  @include grid(repeat(2, 1fr), auto, 66px, 0);
  align-items: flex-start;
  padding: 96px 0;
  color: $text-color--white-primary;

  &__data {
    @include grid(166px auto, auto, 34px, 0);
  }

  &__info {
    grid-row: 1/2;
    grid-column: 2/3;
  }

  &__image {
    grid-row: 1/3;
    grid-column: 1/2;

    img {
      display: block;
      width: 165px;
      min-width: 165px;
      height: 165px;
      border-radius: 20px;
      object-fit: cover;
    }
  }

  &__description {
    @include font('Inter', 24px, 400);
    line-height: 166%;
    letter-spacing: -0.035em;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: $text-color--grey-20-percent;
  }

  &__name {
    font-size: 42px;
    line-height: 109%;
    letter-spacing: -1.3px;
    margin-bottom: 15px;
  }

  &__position {
    font-size: 26px;
    line-height: 130%;
    letter-spacing: -1px;
    color: $text-color--grey-pale;
  }

  &__labels, &__label-skeletons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 15px -10px 0;
  }

  &__label-skeletons {
    :deep(.skeleton-tag) {
      margin: 10px 10px 0;
    }
  }

  &__count {
    @include font('Inter', 16px, 400);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 118px;
    background: $bgcolor--silver;
    border-radius: 2px;
    letter-spacing: -0.4px;
    line-height: 150%;
    color: $text-color--black;
    text-transform: uppercase;
    padding: 5px 10px;
    margin: 10px 10px 0;
    box-sizing: border-box;
  }

  @media screen and (max-width: 1280px) {
    &__count {
      font-size: 14px;
      line-height: 171%;
    }
  }

  @media screen and (max-width: 1260px) {
    @include grid(repeat(1, 1fr), auto, 0, 34px);
  }

  @media screen and (max-width: 800px) {
    padding: 72px 0;
    &__description {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 650px) {
    grid-row-gap: 20px;
    padding: 55px 0;

    &__data {
      @include grid(110px auto, auto, 20px, 0);
    }

    &__image {
      img {
        width: 110px;
        min-width: 110px;
        height: 110px;
        border-radius: 10px;
      }
    }

    &__name {
      font-size: 21px;
      line-height: 114%;
      margin-bottom: 12px;
    }

    &__position {
      font-size: 14px;
      line-height: 128%;
      letter-spacing: -0.4px;
    }

    &__description {
      font-size: 16px;
    }

    &__labels, &__label-skeletons {
      margin: 5px -3px 0;
    }

    &__label-skeletons {
      :deep(.skeleton-tag) {
        margin: 10px 3px 0;
      }
    }

    &__count {
      font-size: 10px;
      line-height: 1;
      min-width: 85px;
      margin: 10px 3px 0;
    }
  }
}
</style>
