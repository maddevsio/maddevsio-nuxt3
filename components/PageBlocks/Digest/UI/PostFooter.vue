<script setup lang="ts">
const props = defineProps({
  articleRate: {
    type: [String, Number],
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
    <ClientOnly>
      <BlogUIPostMetaInfoRating
        :article-rate="articleRate"
      />
    </ClientOnly>
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
