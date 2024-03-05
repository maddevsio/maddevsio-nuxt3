<script setup lang="ts">
defineProps({
  articleRate: {
    type: String,
    required: true,
    default: '',
  },

  date: {
    type: String,
    required: true,
    default: '',
  },

  updatedDate: {
    type: String,
    required: true,
    default: '',
  },

  readTime: {
    type: String,
    required: true,
    default: '',
  },

})
</script>

<template>
  <div class="digest-post-card-footer">
    <div class="digest-post-card-footer__rating">
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="digest-post-card-footer__rating-star"
      >
        <path
          d="M9.90986 1.20288C10.0749 0.777136 10.6773 0.777136 10.8423 1.20288L13.0398 6.87273C13.1107 7.05577 13.2822 7.18036 13.4782 7.19126L19.5496 7.52913C20.0055 7.5545 20.1917 8.12742 19.8377 8.41591L15.1245 12.2579C14.9723 12.382 14.9068 12.5836 14.957 12.7733L16.5118 18.652C16.6286 19.0934 16.1412 19.4475 15.7575 19.2001L10.647 15.9047C10.4821 15.7983 10.2701 15.7983 10.1051 15.9047L4.99464 19.2001C4.6109 19.4475 4.12355 19.0934 4.2403 18.652L5.79513 12.7733C5.84533 12.5836 5.77983 12.382 5.62767 12.2579L0.91439 8.41591C0.560473 8.12742 0.746625 7.5545 1.20252 7.52913L7.27393 7.19126C7.46993 7.18036 7.64142 7.05577 7.71236 6.87273L9.90986 1.20288Z"
          :fill="Number(articleRate) ? '#EC1C24' : '#a0a0a1'"
        />
      </svg>
      <p class="digest-post-card-footer__rating-description">
        <span class="digest-post-card-footer__rating-description-label">{{ articleRate }}</span> article rate
      </p>
    </div>
    <ul class="digest-post-card-footer__dates-list">
      <li
        v-if="date"
        class="digest-post-card-footer__dates-item"
      >
        <span class="digest-post-card-footer__dates-item-label">Created:</span> {{ date }}
      </li>
      <li
        v-if="updatedDate"
        class="digest-post-card-footer__dates-item"
      >
        <span class="digest-post-card-footer__dates-item-label">Updated:</span> {{ updatedDate }}
      </li>
      <li
        class="digest-post-card-footer__dates-item"
      >
        {{ readTime }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.digest-post-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__rating {
    display: flex;
    align-items: center;
    gap: 5.62px;

    &-description {
      @include font('Inter', 12px, 400);
      line-height: 150%;
      color: $text-color--grey-opacity-40-percent;
      margin: 0;

      &-label {
        color: $text-color--quote-box;
      }
    }
  }

  &__dates {
    &-list {
      display: flex;
      gap: 12px;
      align-items: center;
      padding-left: 0;
    }

    &-item {
      @include font('Inter', 12px, 400);
      line-height: 150%;
      color: $text-color--quote-box;
      display: flex;
      align-items: center;
      margin: 0;

      &-label {
        color: $text-color--grey-opacity-40-percent;
        margin-right: 5px;
      }

      &::after {
        content: '';
        display: block;
        width: 1px;
        height: 18px;
        margin-left: 12px;
        background-color: $bgcolor--quote-box;
      }

      &:last-child {
        &::after {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 580px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 8px;

    &__rating {
      &-description {
        font-size: 10px;
      }

      &-star {
        width: 18px;
        height: 18px;
      }
    }

    &__dates {
      &-list {
        gap: 6px;
      }

      &-item {
        font-size: 10px;

        &::after {
          margin-left: 6px;
        }
      }
    }
  }
}
</style>
