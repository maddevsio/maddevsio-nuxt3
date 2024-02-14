<script setup lang="ts">
interface Props {
  position: string
  company: string
  firstName: string
  lastName: string
}

defineProps<Props>()
</script>
<template>
  <div class="expert-page-header__info-content">
    <h1 class="expert-page-header__info-name">
      {{ firstName }}
      <br>
      {{ lastName }}
    </h1>
    <p class="expert-page-header__info-position">
      {{ `${position}${company ? `, ${company}` : ''}` }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
.expert-page-header {
  &__info {
    &-content {
      flex: 1 1;
    }
    &-name {
      @include font('Inter', 20px, 700);
      line-height: 130%;
      color: $text-color--white-primary;
      margin-bottom: 6px;

      @media screen and (min-width: 1140px) {
        font-size: 32px;
        line-height: 120%;
      }
    }

    &-position {
      @include font('Inter', 14px, 400);
      line-height: 150%;
      letter-spacing: -0.4px;
      color: $text-color--grey-20-percent;
    }

    @media screen and (min-width: 1140px) {
      &-name {
        margin-bottom: 18px;
      }

      &-content {
        flex: initial;
      }

      &-position {
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
}
</style>
