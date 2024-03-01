<script setup lang="ts">
import type { ImageField } from '@prismicio/types'
import type { TechAndToolsLittleCard } from '~/components/PageBlocks/TechAndTools/interfaces/ITechAndToolsCards'

interface Props {
  icon: ImageField
  title?: string
  className: TechAndToolsLittleCard['className']
}

const { title } = defineProps<Props>()
const maxLettersLength = 9
const scaleTextIfLarge = computed(() => {
  if (title && title.length >= maxLettersLength && !title.includes(' ')) { return { fontSize: '11px', width: '100%' } }
  return null
})
</script>
<template>
  <div
    class="technologies__little-card"
    :class="[className.wrapper]"
    data-testid="tech-little-card"
  >
    <img
      v-if="icon && icon.url"
      loading="lazy"
      :src="icon.url && icon.url"
      :alt="icon.alt || 'Icon'"
      width="45"
      height="45"
      class="technologies__little-card-icon"
    >
    <h3
      v-if="title"
      class="technologies__little-card-title"
      :class="[className.title]"
      :style="scaleTextIfLarge"
    >
      {{ title }}
    </h3>
  </div>
</template>
<style lang="scss" scoped>
.technologies__little-card {
  flex: 1 1 8%;
  box-sizing: border-box;
  padding: 30px;
  border-radius: 9px;
  transition: 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &--black {
    background: $bgcolor--black-pale;
  }

  &--white {
    background: $bgcolor--silver;
  }

  &-icon {
    width: 100%;
    height: auto;
    min-width: 30px;
    max-width: 45px;
    transition: 0.2s ease-in-out;
    opacity: 1;
  }

  &-title {
    top: 50%;
    transform: translateY(-50%);
    width: 70%;
    text-align: center;
    position: absolute;
    @include font('Inter', 13px, 400);
    line-height: 120%;
    opacity: 0;
    transition: 0.2s ease-in-out;
    margin-top: 0;

    &--black {
      color: $text-color--white-primary;
    }

    &--white {
      color: $text-color--black-lighter;
    }
  }

  @media screen and (min-width: 700px) {
    &:hover {
      background: transparent;
      box-shadow: 0 0 1px 1px #36383A;
    }

    &:hover .technologies__little-card-icon {
      opacity: 0;
    }

    &:hover .technologies__little-card-title {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1214px) {
    min-width: 106px;
  }

  @media screen and (max-width: 400px) {
    padding: 10px;
    width: 50px;
    height: 50px;
    min-width: auto;
    &-icon {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
