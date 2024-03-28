<script setup lang="ts">
import type { ImageField } from '@prismicio/types'

interface Props {
  gradient: string
  image: ImageField
  imageOpacity: number
  title: string
  subtitle: string
  background?: string | null
}

defineProps<Props>()

const sectionText = ref<HTMLElement | null>(null)
const { sectionTextOpacity } = useChangeTextOpacity(sectionText)
</script>
<template>
  <section
    id="transparent-header-area"
    class="start-screen-slice"
    :style="{ 'background': gradient }"
  >
    <SharedUIPictureFullScreen
      :src="image.url"
      :height="639"
      :width="1680"
      :alt="image.alt || title"
      :lazy="false"
      :style="{
        opacity: imageOpacity,
        backgroundColor: background,
      }"
      class="start-screen-slice__image"
    />
    <div class="container">
      <div
        ref="sectionText"
        :style="{ opacity: sectionTextOpacity }"
        class="start-screen-slice__content"
      >
        <h1
          class="start-screen-slice__title"
          v-html="title"
        />
        <p
          v-if="subtitle"
          data-testid="start-screen-slice__subtitle"
          class="start-screen-slice__subtitle"
          v-html="subtitle"
        />
        <slot name="button" />
      </div>
    </div>
    <slot name="modal" />
  </section>
</template>

<style scoped lang="scss">
@import "./styles/startScreenDefaultStyles";
</style>
