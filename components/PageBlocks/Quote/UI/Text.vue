<script setup lang="ts">
interface Props {
  author: string
}
defineProps<Props>()
</script>
<template>
  <div class="case_quote-wrap">
    <img
      loading="lazy"
      src="@/assets/img/Studies/svg/qmark.svg"
      width="50"
      height="50"
      alt="blockquote"
      class="case_mark"
    >
    <blockquote class="case_blockquote">
      <slot />
    </blockquote>
    <p
      v-if="author"
      class="case_quote-author m-8_top"
    >
      {{ author }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
.case {
  &_quote-wrap {
    display: flex;
    flex-direction: column;
    position: relative;
    padding-left: 62px;
  }

  &_blockquote {
    margin: 0;
    @include default-text($text-color--black-oil, 30px, 166%, -0.02em, normal);
  }

  &_quote-author {
    @include italic-text($text-color--grey-opacity-40-percent, 16px, 166%, -0.035em);
  }

  &_mark {
    width: 50px;
    height: 50px;
    position: absolute;
    top: -5px;
    left: 0;
    display: block;
  }

  @media screen and (max-width: 768px) {
    &_quote-wrap {
      padding-left: 37px;
    }

    &_blockquote {
      @include default-text($text-color--black-oil, 24px, 150%, -0.02em, normal);
    }

    &_quote-author {
      @include italic-text($text-color--grey-opacity-40-percent, 13px, 166%, -0.02em);
    }

    &_mark {
      width: 32px;
      height: 33px;
    }
  }
}
</style>
