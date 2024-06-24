<script setup lang="ts">
import type { PropType } from 'vue'

interface Tag {
  name: string

  icon(iconName: string): string

  tags: string[]
}

defineProps({
  tags: {
    type: Array as PropType<Tag[]>,
    required: true,
  },

  countPosts: {
    type: [Number, String],
    required: true,
  },

  postsLoaded: {
    type: Boolean,
    default: false,
  },
})

const route = useRoute()
const { $getMediaFromS3 } = useMediaFromS3()
const emit = defineEmits(['changed', 'changeTagFromQueryParams'])

const activeTag = ref('All Articles')

const findTag = (emitName: 'changed' | 'changeTagFromQueryParams') => {
  emit(emitName, activeTag.value)
}

const handleChangeTag = () => {
  findTag('changed')
}

const changeTagFromQueryParams = () => {
  findTag('changeTagFromQueryParams')
}

if (route.query.tag) {
  activeTag.value = route.query.tag as string
  changeTagFromQueryParams()
}

watch(() => route.query, query => {
  if (!query.tag) {
    activeTag.value = 'All Articles'
    return
  }
  activeTag.value = query.tag as string
  changeTagFromQueryParams()
})
</script>
<template>
  <ul class="tag-cloud-list">
    <li class="tag-cloud-list__item">
      <slot />
    </li>
    <li
      v-for="(tag, i) in tags"
      :key="`${tag.name}-${i}`"
      class="tag-cloud-list__item"
    >
      <input
        :id="tag.name"
        v-model="activeTag"
        :value="tag.name"
        type="radio"
        name="Tag"
        data-testid="test-post-input"
        @change="handleChangeTag"
      >
      <label
        :for="tag.name"
        :class="`tag-cloud-list__item-label tag-cloud-list__item-label--${tag.name.split(' ').join('-').toLowerCase()}`"
      >
        <img
          v-if="tag.icon(tag.name)"
          :src="$getMediaFromS3(`images/Blog/svg/${tag.icon(tag.name)}.svg`)"
          width="15"
          height="19"
          :alt="tag.name"
          loading="lazy"
          class="tag-cloud-list__item-icon"
        >
        {{ tag.name }}
        <span class="tag-cloud-list__item-post-count">{{ activeTag === tag.name ? countPosts : '' }}</span>
      </label>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.tag-cloud-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;

  @media screen and (max-width: 1334px) {
    gap: 9px;
  }

  @media screen and (max-width: 1280px) {
    gap: 6px;
  }

  &__item {
    transition: 1s;

    &-label {
      @include font('Inter', 12px, 400);
      cursor: pointer;
      box-shadow: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 13px;
      color: $text-color--black;
      background-color: $bgcolor--silver;
      border: 1px solid $border-color--grey-20-percent;
      line-height: 18px;
      border-radius: 20px;
      transition: 0.3s;
      position: relative;
      overflow: hidden;

      &--blockchain {
        border-color: $text-color--green-light;
      }

      &--fintech {
        border-color: $text-color--purple;
      }

      &--cost-optimization {
        border-color: $text-color--blue;
      }
    }

    &-icon {
      width: 15px;
      height: 19px;
      display: block;
      margin-right: 5px;
    }

    &-post-count {
      @include font('Inter', 8px, 600);
      line-height: 18px;
      position: relative;
      color: $text-color--red;
      top: -5px;
      right: -20px;
      display: block;
      margin: 0;
      opacity: 0;
      transition: 0.3s;
    }

    input[type='radio'] {
      display: none;
    }

    input[type='radio']:checked + .tag-cloud-list__item-label {
      padding-right: 0;
      border-color: $border-color--red;
      color: $text-color--red;

      &--blockchain {
        color: $text-color--green-light;
        border-color: $text-color--green-light;

        span {
          color: $text-color--green-light;
        }
      }

      &--fintech {
        color: $text-color--purple;
        border-color: $text-color--purple;

        span {
          color: $text-color--purple;
        }
      }

      &--cost-optimization {
        color: $text-color--blue;
        border-color: $text-color--blue;

        span {
          color: $text-color--blue;
        }
      }

      span {
        margin: 0 16px 0 4.5px;
        opacity: 1;
        right: 0;
      }
    }
  }

  @media screen and (max-width: 991px) {
    margin-bottom: 48px;
  }

  @media screen and (max-width: 450px) {
    gap: 12px;
  }
}
</style>
