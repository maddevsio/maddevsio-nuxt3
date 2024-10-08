<script setup lang="ts">
import type { PropType } from 'vue'
import { checkCountForEnding } from '../../utils/addEndingForCount'
import { tagsDescriptions } from '~/components/Tags/constants/tagsConstants'

interface ContentCount {
  posts: number
  words: number
}

const props = defineProps({
  title: {
    type: String,
    default: null,
  },

  count: {
    type: Object as PropType<ContentCount>,
    default: () => ({
      posts: 0,
      words: 0,
    }),
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
const getTagDescriptionIdx = computed(() => {
  const convertTag = props.title === 'ML' ? 'Machine Learning' : props.title
  const index = tagsDescriptions.findIndex(tag => tag.title === convertTag?.trim())
  if (index === -1) { return null }
  return index
})
</script>
<template>
  <div class="container">
    <div class="current-tag">
      <div class="current-tag__info">
        <h1 class="current-tag__title">
          {{ getTagDescriptionIdx !== null ? tagsDescriptions[getTagDescriptionIdx].title : title }}
        </h1>
        <p
          v-if="getTagDescriptionIdx !== null"
          class="current-tag__description"
        >
          {{ tagsDescriptions[getTagDescriptionIdx].description }}
        </p>
        <div>
          <p
            v-if="count.posts || count.words"
            class="current-tag__posts-count"
          >
            <span>A collection of {{ checkCountForEnding('post', count.posts).toLowerCase() }}</span>
            <span v-if="count.words"> and {{ checkCountForEnding('word', count.words).toLowerCase() }}</span>
          </p>
          <div
            v-else
            class="current-tag__posts-count-skeleton"
          />
        </div>
      </div>
      <div
        v-if="getTagDescriptionIdx !== null"
        class="current-tag__lottie"
      >
        <LazySharedLottieMad
          class="case_lottie"
          height="201px"
          :lottie-link="$getMediaFromS3(`/images/custom/tags/${tagsDescriptions[getTagDescriptionIdx].title.replace(/ /g, '-').toLowerCase()}-tag.json`)"
          :autoplay="true"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.current-tag {
  padding-top: 117px;
  padding-bottom: 97px;
  color: $text-color--white-primary;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  &__info {
    width: 61%;
  }

  &__title {
    font-size: 68px;
    line-height: 130%;
    letter-spacing: -2px;
  }

  &__description {
    @include font('Inter', 22px, 400);
    line-height: 30px;
    letter-spacing: -1px;
    margin-top: 32px;
  }

  &__posts-count {
    font-size: 17px;
    line-height: 166%;
    letter-spacing: -0.035em;
    color: $text-color--grey-opacity-40-percent;

    &-skeleton {
      height: 28px;
      width: 100%;
      max-width: 343px;
      background-color: $bgcolor--silver;
      border-radius: 5px;
    }
  }

  &__posts-count, &__posts-count-skeleton {
    margin-top: 32px;
  }

  @media only screen and (max-width: 991px) {
    padding-top: 134px;
    padding-bottom: 48px;

    &__title {
      font-size: 42px;
      letter-spacing: -1px;
    }

    &__posts-count {
      font-size: 17px;
    }

    &__posts-count, &__posts-count-skeleton {
      margin-top: 12px;
    }
  }

  @media screen and (max-width: 800px) {
    flex-wrap: wrap-reverse;

    &__info {
      width: 100%;
    }

    &__lottie {
      margin-bottom: 52px;
    }
  }

  @media screen and (max-width: 580px) {
    &__lottie {
      width: 147px;
      height: 114px;
    }
  }

  @media screen and (max-width: 430px) {
    padding-top: 85px;
    padding-bottom: 72px;
  }
}
</style>
