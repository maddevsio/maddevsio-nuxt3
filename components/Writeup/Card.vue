<script setup lang="ts">
import type { ImageField } from '@prismicio/types'

interface Props {
  index: number
  title: string
  date: string
  uid: string
  author: {
    name: string
    position: string
    image: ImageField
    uid: string
  }
  tags: string[]
  currentPage: number,
}
const {
  index,
  title,
  date,
  uid,
  author,
  tags,
  currentPage,
} = withDefaults(defineProps<Props>(), {
  index: 0,
  title: '',
  date: '',
  uid: '',
  tags: () => [],
  currentPage: 1,
})
const { activeTag } = storeToRefs(useDynamicTagCloudStore())
const route = useRoute()

const tagName = computed(() => {
  if (tags.length > 1 && (activeTag.value.writeUps === 'Writeup' || activeTag.value.writeUps === '')) { return tags[0] }
  if (tags.length > 1 && activeTag.value.writeUps !== 'Writeup') { return tags.find(tag => tag.replace('Software Development ', 'Software Development') === activeTag.value.writeUps) }
  if (tags.length > 1) { return tags.find(tag => tag.replace('Software Development ', 'Software Development')) }
  return tags[0]
})

const showLabel = computed(() => index === 0 &&
  currentPage === 1 &&
  (activeTag.value.writeUps === 'Writeup' || activeTag.value.writeUps === '') &&
  !route.path.includes('authors'))

</script>
<template>
  <div
    class="writeup-list__item"
    :class="{'writeup-list__item--new': showLabel}"
  >
    <div
      v-if="showLabel"
      class="writeup-list__item-label"
    >
      new
      <span class="writeup-list__item-label-icon" />
    </div>
    <div class="writeup-list__item-info">
      <NuxtLink
        class="writeup-list__item-info-top"
        :to="`/blog/authors/${author.uid}/`"
        no-prefetch
      >
        <NuxtImg
          v-if="author.image && author.image.url"
          provider="prismic"
          loading="lazy"
          :src="author.image.url"
          :alt="author.name"
          class="writeup-list__info-img"
          width="30"
          height="30"
        />
        <p class="writeup-list__info-author-name">
          {{ author.name }}
        </p>
        <p class="writeup-list__info-author-position">
          {{ author.position }}
        </p>
      </NuxtLink>
      <div class="writeup-list__item-info-bottom">
        <p class="writeup-list__info-date">
          {{ date }}
        </p>
        <div
          v-if="tagName"
          class="writeup-list__info-tag"
        >
          {{ tagName }}
        </div>
      </div>
    </div>
    <NuxtLink
      class="writeup-list__title-wrapper"
      :to="`/writeups/${uid}/`"
      no-prefetch
    >
      <h3 class="writeup-list__item-title">
        {{ title }}
      </h3>
    </NuxtLink>
    <div class="writeup-list__item-arrow" />
  </div>
</template>
<style lang="scss" scoped>
.writeup-list {
  * {
    box-sizing: border-box;
  }

  &__item {
    position: relative;
    display: flex;
    align-items: stretch;
    min-height: 117px;
    border-radius: 10px;
    margin-bottom: 10px;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    gap: 25px;
    overflow: hidden;

    &:last-child {
      margin-bottom: 0;
    }

    &--black {
      background-color: $bgcolor--black-pale;
      color: $text-color--grey-opacity-40-percent;

      .writeup-list__title-wrapper {
        &::before {
          background-color: #fff;
          opacity: 0.4;
        }
      }

      .writeup-list__item-title {
        color: $text-color--white;
      }

      .writeup-list__item-info-top, .writeup-list__info-date {
        color: $text-color--grey-opacity-40-percent;
      }

      .writeup-list__info-tag {
        color: $text-color--silver;
        background-color: $bgcolor--grey-hover;
      }

      .writeup-list__item-arrow {
        border-color: $border-color--grey-selected;

        &::before {
          border-top-color: $border-color--grey-selected;
          border-left-color: $border-color--grey-selected;
        }
      }
    }

    &--white {
      background-color: $bgcolor--white;
      color: $text-color--quote-box;

      .writeup-list__item-info-top {
        color: $text-color--quote-box;
      }

      .writeup-list__title-wrapper {
        &::before {
          background-color: $bgcolor--grey-opacity-40-percent;
        }
      }

      .writeup-list__item-title {
        color: $text-color--black-lighter;
      }

      .writeup-list__info-date {
        color: $text-color--grey-pale;
      }

      .writeup-list__info-tag {
        color: $text-color--white-primary;
        background-color: $bgcolor--grey-opacity-40-percent;
      }

      .writeup-list__item-arrow {
        border-color: $border-color--grey-selected;

        &::before {
          border-top-color: $border-color--grey-selected;
          border-left-color: $border-color--grey-selected;
        }
      }
    }

    &--new {
      border: 1px solid $border-color--red;

      .writeup-list__title-wrapper, .writeup-list__item-info {
        padding-top: 32px;
      }
    }

    &-label {
      @include font('Inter', 12px, 500);
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      padding: 4px 5px 5px 10px;
      border-bottom-right-radius: 3px;
      line-height: 1;
      background-color: $bgcolor--venetian-red;
      color: $text-color--white-primary;

      &-icon {
        @include fire-icon-white(11px, 13px);
        margin-left: 3px;
      }
    }

    &-info {
      width: 30%;
      padding: 23px 0 23px 23px;

      &-top {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 8px;
      }

      &-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        @media not all and (min-resolution: .001dpcm) { /* Проверка на Safari */
          @supports not (translate: 0) { /* Проверка на версию Safari */
            @media screen and (max-width: 1180px) {
              margin-bottom: 16px;
            }
          }
        }
      }

      @media not all and (min-resolution: .001dpcm) { /* Проверка на Safari */
        @supports not (translate: 0) { /* Проверка на версию Safari */
          margin-right: 25px;
          @media screen and (max-width: 1180px) {
            margin: 0;
          }
        }
      }
    }

    &-title {
      @include font('Inter', 16px, 500);
      line-height: 160%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 48px;

      @media not all and (min-resolution: .001dpcm) { /* Проверка на Safari */
        @supports not (translate: 0) { /* Проверка на версию Safari */
          margin: 0 48px 0 25px;

          @media screen and (max-width: 1180px) {
            margin: 20px 40px 0 0;
          }

          @media screen and (max-width: 640px) {
            margin: 16px 40px 0 0;
          }
        }
      }
    }

    &-arrow {
      @include arrow-in-circle(30px, 8px, $border-color--grey-selected);
      position: absolute;
      top: 50%;
      right: 23px;
      transform: translateY(-50%);
      margin-left: auto;
      transition: 0.3s ease-in-out;

      &::before {
        transition: 0.3s ease-in-out;
      }
    }

    @media screen and (min-width: 1024px) {
      &--black:hover {
        background-color: $bgcolor--grey-hover;
        color: $text-color--white;

        .writeup-list__item-arrow {
          border-color: #fff;

          &::before {
            border-top-color: #fff;
            border-left-color: #fff;
          }
        }

        .writeup-list__info-tag {
          background-color: $bgcolor--grey-selected;
        }
      }

      &--white:hover {
        background-color: $bgcolor--grey-light;
      }
    }
  }

  &__info {
    &-img {
      min-width: 30px;
      max-width: 100%;
      height: 30px;
      object-fit: cover;
      border-radius: 50%;
    }

    &-author-name {
      @include font('Inter', 14px, 600)
    }

    &-author-position, &-date, &-tag {
      @include font('Inter', 14px, 400)
    }

    &-author-name, &-author-position {
      color: inherit;
      line-height: 91%;

      @media not all and (min-resolution: .001dpcm) { /* Проверка на Safari */
        @supports not (translate: 0) { /* Проверка на версию Safari */
          margin-left: 12px;
          @media screen and (max-width: 388px) {
            margin: 10px 0 0 0;
          }
        }
      }
    }

    &-date {
      line-height: 121%;
      @media not all and (min-resolution: .001dpcm) { /* Проверка на Safari */
        @supports not (translate: 0) { /* Проверка на версию Safari */
          @media screen and (max-width: 388px) {
            margin-bottom: 10px;
          }
        }
      }
    }

    &-tag {
      min-width: 180px;
      text-align: center;
      padding: 8px 16px;
      border-radius: 2px;
      transition: 0.3s ease-in-out;
    }
  }

  &__title-wrapper {
    display: flex;
    align-items: center;
    width: 72%;
    gap: 25px;
    padding: 23px 23px 23px 0;

    @media not all and (min-resolution: .001dpcm) { /* Проверка на Safari */
      @supports not (translate: 0) { /* Проверка на версию Safari */
        @media screen and (max-width: 1180px) {
          margin: 0;
        }
      }
    }

    &::before {
      content: '';
      width: 1px;
      min-width: 1px;
      min-height: 100%;
    }
  }
}

@media screen and (max-width: 1350px) {
  .writeup-list {
    &__item {
      &-info {
        width: 35%;
      }
    }

    &__title-wrapper {
      width: 63%;
      padding-right: 32px;
    }
  }
}

@media screen and (max-width: 1180px) {
  .writeup-list {
    &__item, &__title-wrapper {
      flex-direction: column;
    }

    &__item {
      gap: 16px;

      &-arrow {
        top: auto;
        transform: translateY(0);
        bottom: 22px;
        right: 22px;
      }

      &-info {
        padding: 22px 22px 0 22px;

        &-bottom {
          align-items: flex-end;
        }
      }

      &--new {
        .writeup-list__title-wrapper {
          padding-top: 0;
        }
      }
    }

    &__title-wrapper {
      align-items: flex-start;
      gap: 20px;
      padding: 0 22px 22px 22px;

      &::before {
        width: 100%;
        min-height: 1px;
      }
    }

    &__title-wrapper, &__item-info {
      width: 100%;
    }
  }
}

@media screen and (max-width: 640px) {
  .writeup-list {
    &__title-wrapper {
      width: 100%;
      gap: 16px;

      &::before {
        width: 100%;
        min-height: 1px;
      }
    }

    &__item {
      &--new {
        .writeup-list__item-info {
          padding-top: 40px;
        }
      }

      &-title {
        -webkit-line-clamp: 3;
        margin-bottom: 40px;
        margin-right: 35px;

      }

      &-arrow {
        bottom: 22px;
        right: 22px;
      }
    }

    &__info {
      &-tag {
        min-width: 175px;
      }
    }
  }
}

@media screen and (max-width: 390px) {
  .writeup-list {
    &__item {
      min-height: 323px;
    }

    &__item-info {
      &-top, &-bottom {
        align-items: flex-start;
        flex-direction: column;
      }

      &-top {
        margin-bottom: 20px;
        gap: 10px;
      }
    }
  }
}

@media screen and (max-width: 374px) {
  .writeup-list {
    &__info-tag {
      font-size: 12px;
    }
  }
}
</style>
