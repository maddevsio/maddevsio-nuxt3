<script setup lang="ts">
import type { PropType } from 'vue'
import {
  CustomizableAuthors,
} from '~/components/PageBlocks/Authors/classes/CustomizableAuthors'
import type { CustomizableAuthorsProps } from '~/components/PageBlocks/Authors/interface/ICustomizableAuthors'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<CustomizableAuthorsProps>,
    default: () => ({}),
  },
})

const {
  colorTheme,
  showTopDivider,
  author,
  coAuthor,
} = new CustomizableAuthors(slice)
</script>

<template>
  <section :class="`customizable-authors customizable-authors--${colorTheme}`">
    <div
      class="container"
    >
      <div
        class="customizable-authors__container"
        :class="{ 'customizable-authors__container--top-divider': showTopDivider }"
      >
        <LazySharedArticleAuthor
          v-if="author && Object.keys(author).length"
          :uid="author?.uid"
          :position="author?.position"
          :name="author?.name"
          :image="author?.image"
          :theme="colorTheme"
        />
        <LazySharedArticleAuthor
          v-if="coAuthor && Object.keys(coAuthor).length"
          :uid="coAuthor?.uid"
          :position="coAuthor?.position"
          :name="coAuthor?.name"
          :image="coAuthor?.image"
          :theme="colorTheme"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.customizable-authors {
  &--dark {
    background-color: $bgcolor--black;
  }

  &--light {
    background-color: $bgcolor--white-primary;
  }

  &__container {
    display: flex;
    gap: 32px;

    &--top-divider {
      padding-top: 20px;
      border-top: 1px solid $border-color--red;
    }

    @media screen and (max-width: 720px) {
      flex-direction: column;
      gap: 24px;
    }
  }
}
</style>
