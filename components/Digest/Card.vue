<script setup lang="ts">
defineProps({
  uid: {
    type: String,
    required: true,
    default: '',
  },

  subtitle: {
    type: String,
    required: true,
    default: '',
  },

  orderNumber: {
    type: String,
    required: true,
    default: '',
  },

  date: {
    type: String,
    required: true,
    default: '',
  },
})
</script>

<template>
  <NuxtLink
    :to="`/digest/${uid}/`"
    class="digest-main-page-content__card"
  >
    <div class="digest-main-page-content__release-info">
      <div class="digest-main-page-content__release-wrapper">
        <p class="digest-main-page-content__number">
          {{ orderNumber }}
        </p>
        <p class="digest-main-page-content__month">
          {{ date }}
        </p>
      </div>
    </div>
    <div class="digest-main-page-content__digest-info">
      <h3
        class="digest-main-page-content__digest-name"
      >
        {{ subtitle }}
      </h3>
      <span class="digest-main-page-content__arrow" />
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.digest-main-page-content {
  &__card {
    display: flex;
    min-height: 94px;
    border: 1px solid $border-color--grey-20-percent;
    border-radius: 10px;
    margin-bottom: 10px;
    overflow: hidden;

    &:last-child {
      margin-bottom: 0;
    }

    * {
      box-sizing: border-box;
    }

    &:hover {
      .digest-main-page-content__digest-info {
        background-color: $bgcolor--white;
      }

      .digest-main-page-content__arrow {
        border-color: $border-color--black;
        &::before {
          border-top-color: $border-color--black;
          border-left-color: $border-color--black;
        }
      }
    }
  }

  &__release-info {
    width: 15%;
    min-width: 184px;
    background: conic-gradient(from 180deg at 50% 50%, #4425FF -91.67deg, #1455FB 9deg, #AC6DFD 140.61deg, #4425FF 268.33deg, #1455FB 369deg);
  }

  &__release-wrapper {
    padding: 12px 36px;
  }

  &__number {
    @include font('Inter', 55px, 900);
    margin-bottom: 12px;
  }

  &__month {
    @include font('Inter', 12px, 600);
    text-transform: uppercase;
  }

  &__number, &__month {
    color: $text-color--white-primary;
    line-height: 94%;
  }

  &__digest-info {
    display: flex;
    align-items: center;
    width: 85%;
    padding: 24px 40px 24px 32px;
  }

  &__digest-name {
    @include font('Inter', 16px, 500);
    line-height: 160%;
    color: $text-color--black-pale;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 32px;
  }

  &__arrow {
    @include arrow-in-circle(20px, 6px, $border-color--grey-selected);
    border-color: $border-color--grey-selected;
    margin-left: auto;
  }

  &__digest-info, &__arrow, &__arrow::before {
    transition: .3s ease;
  }

  @media screen and (max-width: 1280px) {
    &__digest-info {
      padding: 20px 40px 20px 30px;
    }
  }

  @media screen and (max-width: 768px) {
    &__digest-name {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 640px) {
    &__card, &__digest-info {
      flex-direction: column;
    }

    &__digest-info {
      width: 100%;
      padding: 10px 20px;
    }

    &__release-info {
      width: 100%;
      min-width: 100%;
    }

    &__release-wrapper {
      display: flex;
      align-items: center;
      padding: 21px 24px;
    }

    &__number {
      min-width: 63px;
      margin-bottom: 0;
    }

    &__number, &__month {
      font-size: 20px;
    }

    &__digest-name {
      margin-right: 0;
    }

    &__arrow {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 360px) {
    &__release-wrapper {
      flex-direction: column;
      align-items: flex-start;
    }

    &__number {
      margin-bottom: 10px;
    }
  }
}
</style>
