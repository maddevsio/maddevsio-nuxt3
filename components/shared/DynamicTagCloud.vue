<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/client'

const props = defineProps({
  tags: {
    type: Array as PropType<{ name: string, icon: ImageField }[]>,
    default: () => [],
  },
  colorTheme: {
    type: String,
    default: 'black',
  },
})

const emit = defineEmits(['changed', 'changeTagFromQueryParams'])
const activeTag = ref(props.tags[0].name)
const route = useRoute()
const { updateActiveTag } = useDynamicTagCloudStore()

const findTag = (emitName: 'changed' | 'changeTagFromQueryParams') => {
  const tag = props.tags.find(tagItem => tagItem.name.toLowerCase() === activeTag.value.toLowerCase())
  if (tag) {
    emit(emitName, tag.name)
  }
}

const handleChangeTag = () => {
  findTag('changed')
}

const changeTagFromQueryParams = () => {
  findTag('changeTagFromQueryParams')
}

if ('tag' in route.query) {
  activeTag.value = route.query.tag as string
  changeTagFromQueryParams()
}

onUnmounted(() => {
  updateActiveTag('', 'all')
})
</script>
<template>
  <div :class="`tag-cloud tag-cloud--${colorTheme}`">
    <ul class="tag-cloud__list">
      <li
        v-for="tag in tags"
        :key="tag.name"
        class="tag-cloud__item"
      >
        <input
          :id="tag.name"
          v-model="activeTag"
          :value="tag.name"
          type="radio"
          name="Tag"
          @change="handleChangeTag"
        >
        <label
          :for="tag.name"
          class="tag-cloud__item-label"
        >
          <img
            v-if="tag.icon && tag.icon.url"
            :src="tag.icon.url"
            width="16"
            height="16"
            :alt="tag"
            loading="lazy"
            class="tag-cloud__item-icon"
          >
          {{ tag.name }}
        </label>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.tag-cloud {
  * {
    box-sizing: border-box;
  }

  margin-top: 48px;

  &--black {
    .tag-cloud__item-label {
      color: $text-color--grey-pale;
      background-color: $bgcolor--white-primary;
      border: 1px solid $border-color--white;
    }
  }

  &--white {
    .tag-cloud__item-label {
      color: $text-color--quote-box;
      background-color: $bgcolor--silver;
      border: 1px solid $border-color--grey-20-percent;
    }
  }

  &__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 14px;
  }

  &__item {
    @media not all and (min-resolution: .001dpcm) { /* Проверка на Safari */
      @supports not (translate: 0) { /* Проверка на версию Safari */
        margin: 0 14px 14px 0;

        @media screen and (max-width: 600px) {
          margin: 0 10px 10px 0;
        }
      }
    }

    &-label {
      @include font('Inter', 14px, 400);
      position: relative;
      box-shadow: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 26px;
      height: 42px;
      color: $text-color--grey-pale;
      background-color: $bgcolor--white-primary;
      border: 1px solid $border-color--white;
      line-height: 108%;
      border-radius: 41px;
      overflow: hidden;
      cursor: pointer;
    }

    &-icon {
      display: block;
      width: 16px;
      height: 16px;
      margin-right: 6px;
      filter: grayscale(1);
      opacity: 0.7;
    }

    input[type='radio'] {
      display: none;
    }

    input[type='radio']:checked + .tag-cloud__item-label {
      font-weight: 500;
      border-color: $border-color--red;
      color: $text-color--red;

      .tag-cloud__item-icon {
        filter: grayscale(0);
        opacity: 1;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .tag-cloud {
    &__item {
      &-label {
        font-size: 12px;
        padding: 8px 20px;
        height: 30px;
        line-height: 109%;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .tag-cloud {
    margin-top: 32px;
    gap: 10px;
  }
}
</style>
