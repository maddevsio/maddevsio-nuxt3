<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/client'

const props = defineProps({
  image: {
    type: Object as PropType<ImageField>,
    default: () => ({}),
  },

  title: {
    type: [Array, String],
    default: () => [],
  },

  description: {
    type: [Array, String],
    default: () => [],
  },

  tag: {
    type: String,
    default: '',
  },

  url: {
    type: String,
    default: '',
  },

  imageBackgroundColor: {
    type: String,
    default: 'yellow',
  },
})

const imageWrapperBackgroundColor = computed(() => colorConverterToClass('bg', props.imageBackgroundColor))
</script>
<template>
  <NuxtLink
    :to="url"
    class="checklist__card"
  >
    <div
      v-if="image.url"
      :class="`checklist__card-image-wrapper ${imageWrapperBackgroundColor}`"
    >
      <NuxtImg
        v-if="image.url"
        loading="lazy"
        :src="clearImageParamsFromPrismic(image.url)"
        :alt="image.alt || title || ''"
        width="584"
        height="284"
        class="checklist__card-image"
      />
    </div>
    <div
      class="checklist__card-content"
    >
      <h3
        v-if="title"
        class="checklist__card-title"
      >
        {{ title }}
      </h3>
      <p
        v-if="description"
        class="checklist__card-description"
      >
        {{ description }}
      </p>
      <div class="checklist__card-footer">
        <span
          class="checklist__card-tag"
        >
          {{ tag }}
        </span>
        <div
          class="checklist__card-link-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <g clip-path="url(#clip0_87_1095)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.0576 15.1137C27.0576 22.0596 21.4315 27.6904 14.4914 27.6904C7.5513 27.6904 1.92524 22.0596 1.92524 15.1137C1.92524 8.16781 7.5513 2.53704 14.4914 2.53704C21.4315 2.53704 27.0576 8.16781 27.0576 15.1137ZM28.0572 15.1137C28.0572 22.6122 21.9836 28.6908 14.4914 28.6908C6.99925 28.6908 0.925659 22.6122 0.925659 15.1137C0.925659 7.6153 6.99925 1.53662 14.4914 1.53662C21.9836 1.53662 28.0572 7.6153 28.0572 15.1137ZM13.1468 8.33422C12.9546 8.13591 12.6382 8.13106 12.4401 8.32339C12.2419 8.51572 12.2371 8.8324 12.4292 9.03071L18.0462 14.8272L12.2545 20.4489C12.0564 20.6412 12.0515 20.9579 12.2437 21.1562C12.4359 21.3545 12.7523 21.3594 12.9504 21.167L19.1009 15.1971C19.299 15.0048 19.3039 14.6881 19.1117 14.4898L13.1468 8.33422Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_87_1095">
                <rect
                  width="30"
                  height="30"
                  fill="white"
                  transform="matrix(1 0 0.000837121 1 0.336853 0.266174)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<style scoped lang="scss">
@import '@/assets/styles/colorClasses/colors.scss';

.checklist {
  &__card {
    display: flex;
    flex-direction: column;
    background: $bgcolor--black-pale;
    transition: 0.3s ease-in-out;
    border-radius: 10px;
    overflow: hidden;
    padding-bottom: 49.63px;

    &-image-wrapper {
      max-height: 283.451px;
      position: relative;
      overflow: hidden;
    }

    &-image {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    &-content {
      padding: 37.36px 44.5px 0;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    &-footer {
      margin-top: 38.37px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-title {
      @include font('Inter', 32px, 700);
      line-height: 150%;
      letter-spacing: -1px;
      color: $text-color--white-primary;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-grow: 1;
    }

    &-description {
      @include font('Inter', 20px, 400);
      line-height: 150%;
      letter-spacing: -1px;
      color: $text-color--white;
      margin-top: 16px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &-tag {
      background: $bgcolor--grey-hover;
      border-radius: 50px;
      padding: 3px 23px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      @include font('Inter', 10px, 400);
      line-height: 180%;
      letter-spacing: 0.2px;
      color: $text-color--grey-opacity-20-percent;
      transition: 0.3s ease-in-out;
    }

    &-link-btn {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    &:hover {
      background: $bgcolor--grey-hover;

      .checklist__card-tag {
        background: $bgcolor--grey-selected;
        color: $text-color--cultured;
      }
    }

    @media screen and (max-width: 1440px) {
      &-content {
        padding: 37px 25px 0;
      }
    }

    @media screen and (max-width: 1026px) {
      padding-bottom: 22px;
      border-radius: 5.655px;

      &-content {
        padding: 21px 10px 0 14px;
      }

      &-title {
        font-size: 16px;
        letter-spacing: -0.565px;
      }

      &-description {
        margin-top: 15px;
        -webkit-line-clamp: 2;
        font-size: 14px;
        line-height: 130%;
        letter-spacing: -0.565px;
      }

      &-footer {
        margin-top: 36px;
      }

      &-image-wrapper {
        max-height: 160.278px;
      }

      &-tag {
        font-size: 12px;
        letter-spacing: 0.24px;
        padding-inline: 10px;
      }

      &-link-btn {
        width: 24px;
        height: 24px;

        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}
</style>
