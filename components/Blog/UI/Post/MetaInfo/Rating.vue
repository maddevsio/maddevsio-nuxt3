<script setup lang="ts">
defineProps({
  articleRate: {
    type: [String, Number],
    default: '',
  },
})
</script>
<template>
  <div class="post-meta-info__rating">
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="post-meta-info__rating-icon"
    >
      <path
        d="M9.90986 1.20288C10.0749 0.777136 10.6773 0.777136 10.8423 1.20288L13.0398 6.87273C13.1107 7.05577 13.2822 7.18036 13.4782 7.19126L19.5496 7.52913C20.0055 7.5545 20.1917 8.12742 19.8377 8.41591L15.1245 12.2579C14.9723 12.382 14.9068 12.5836 14.957 12.7733L16.5118 18.652C16.6286 19.0934 16.1412 19.4475 15.7575 19.2001L10.647 15.9047C10.4821 15.7983 10.2701 15.7983 10.1051 15.9047L4.99464 19.2001C4.6109 19.4475 4.12355 19.0934 4.2403 18.652L5.79513 12.7733C5.84533 12.5836 5.77983 12.382 5.62767 12.2579L0.91439 8.41591C0.560473 8.12742 0.746625 7.5545 1.20252 7.52913L7.27393 7.19126C7.46993 7.18036 7.64142 7.05577 7.71236 6.87273L9.90986 1.20288Z"
        :fill="articleRate ? '#EC1C24' : '#a0a0a1'"
      />
    </svg>
    <p class="post-meta-info__rating-description">
      <span class="post-meta-info__rating-description-number">{{ articleRate }}</span> article rate
    </p>
  </div>
</template>
<style lang="scss" scoped>
.post-meta-info__rating {
  display: flex;
  align-items: center;
  gap: 5.62px;

  &-description {
    @include font('Inter', 12px, 400);
    line-height: 150%;
    color: $text-color--quote-box;

    &-number {
      color: $text-color--grey-pale;
    }
  }

  @media screen and (max-width: 580px) {
    &-description {
      font-size: 10px;
    }

    &-icon {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
