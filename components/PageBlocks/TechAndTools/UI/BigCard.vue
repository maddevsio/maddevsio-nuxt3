<script setup lang="ts">
import type { ImageField } from '@prismicio/types'
import type { TechAndToolsBigCard } from '~/components/PageBlocks/TechAndTools/interfaces/ITechAndToolsCards'

interface Props {
  icon: ImageField
  title: string
  description: string
  splittedDescription: string[]
  classNames: TechAndToolsBigCard['classNames']
}

defineProps<Props>()
</script>
<template>
  <div
    :class="[classNames.mainSection]"
    class="technologies__big-card"
    data-testid="tech-big-card"
  >
    <div
      :class="[classNames.iconWrapper]"
      class="technologies__big-card-icon-wrapper"
    >
      <img
        v-if="icon && icon.url"
        loading="lazy"
        :alt="icon.alt || 'Icon'"
        :src="icon.url && icon.url"
        class="technologies__big-card-icon"
        height="45"
        width="45"
      >
    </div>
    <div
      :class="[classNames.cardInfo]"
      class="technologies__big-card-info"
    >
      <h3
        class="technologies__big-card-title"
        :class="[classNames.titleColor]"
      >
        {{ title }}
      </h3>
      <div v-if="splittedDescription.length">
        <p
          v-for="(text, descIdx) in splittedDescription"
          :key="`tools-card-description-${descIdx}`"
          class="technologies__big-card-description"
          :class="[classNames.descriptionColor]"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.technologies__big-card {
  padding: 32px;
  box-sizing: border-box;
  border-radius: 4px;

  &--black {
    background: $bgcolor--black-pale;
  }

  &--white {
    background: $bgcolor--silver;
  }

  &-info {
    flex-grow: 1;

    &--post {
      overflow: hidden;
    }
  }

  &-title {
    @include font('Inter', 28px, 700);
    line-height: 32px;
    letter-spacing: -1px;
    margin-bottom: 10px;
    margin-top: 0;

    &--white {
      color: $text-color--black-lighter;
    }

    &--black {
      color: $text-color--white-primary;
    }
  }

  &-description {
    @include font('Inter', 16px, 400);
    line-height: 24px;
    letter-spacing: -0.4px;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }

    &--white {
      color: $text-color--black-lighter;
    }

    &--black {
      color: $text-color--silver;
    }
  }

  &--two-big-cards {
    display: flex;
    justify-content: center;
    gap: 24px;
    padding: 32px;

    .technologies__big-card-icon-wrapper {
      align-self: flex-start;
      margin-bottom: 0;

      &--without-border {
        padding: 0;
      }

      &--post {
        width: 100%;
        max-width: 45px;
        align-self: center;
        padding: 26px;
        margin-bottom: 0;

        @media screen and (max-width: 604px) {
          max-width: 30px;
        }
      }
    }

    &-post {
      max-width: 330px;
      flex-direction: column;
      text-align: center;
      padding: 15px;
      gap: 15px;

      @media screen and (max-width: 1024px) {
        max-width: unset;
      }
    }
  }

  &--one-big-cards {
    grid-column: 1 / 6;
    grid-row: 1 / 3;
    display: flex;
    justify-content: center;
    gap: 24px;
    padding: 32px;

    &-post {
      grid-column: 1 / 8;
      flex-direction: column;
      text-align: center;
      padding: 15px;
      gap: 15px;

      @media screen and (max-width: 1170px) {
        flex: 1 1 100%;
      }
    }

    .technologies__big-card-icon-wrapper {
      align-self: flex-start;
      margin-bottom: 0;

      &--without-border {
        padding: 0;
      }

      &--post {
        width: 100%;
        max-width: 45px;
        align-self: center;
        padding: 26px;
        margin-bottom: 0;

        @media screen and (max-width: 604px) {
          max-width: 30px;
        }
      }
    }

    @media screen and (max-width: 1073px) {
      flex: 1 1 100%;
    }
  }

  &-icon {
    width: 45px;
    height: 45px;

    &-wrapper {
      display: inline-block;
      padding: 26px;
      border: 1px solid #36383A;
      border-radius: 9px;
      margin-bottom: 20px;
      &--without-border {
        border: none;
        padding: 26px 0;
      }
    }

    @media screen and (max-width: 604px) {
      width: 30px;
      height: 30px;
      &-wrapper {
        align-self: flex-start;
        padding: 15px;
        &--without-border {
          padding: 15px 0;
        }
      }
    }
  }

  @media screen and (max-width: 830px) {
    &--three-big-cards {
      display: flex;
      justify-content: center;
      gap: 24px;
      padding: 20px;
    }
  }

  @media screen and (max-width: 604px) {
    display: flex;
    justify-content: center;
    gap: 24px;
    padding: 20px;

    &-title {
      font-size: 21px;
      line-height: 24px;
    }

    &-description {
      font-size: 16px;
    }
  }
}
</style>
