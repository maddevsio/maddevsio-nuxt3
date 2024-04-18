<script setup lang="ts">
const emit = defineEmits(['change-cookie'])

const acceptCookie = () => {
  saveState(true, LOCAL_STORAGE_KEYS.ACCEPT_COOKIE)
  emit('change-cookie', false)
}
</script>
<template>
  <div
    class="cookie-notice"
  >
    <div class="cookie-notice__content">
      <div class="cookie-notice__message">
        This site uses cookies to provide you with a great user experience.
        By using Mad Devs you accept our use of cookies.
        <a
          href="/gdpr"
          target="_blank"
          class="cookie-notice__message-link"
        >
          View GDPR Compliance Commitment
        </a>
      </div>
      <SharedUIButton
        class="cookie-notice__button"
        @click="acceptCookie"
      >
        ✓  I agree
      </SharedUIButton>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cookie-notice {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000000000;
  background-color: $text-color--black-oil;
  padding: 25px 20px;
  @media screen and (max-width: 400px) {
    padding: 20px;
  }
  &__content {
    max-width: 1240px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 400px) {
      align-items: flex-start;
    }
  }

  &__message {
    color: $text-color--white-primary;
    margin-right: 50px;
    &-link {
      color: $text-color--white-primary;
      text-decoration: underline;
    }
    @include font('Inter', 14px, 400);
    @media screen and (max-width: 400px) {
      margin-right: 10px;
      @include font('Inter', 12px, 400);
    }
  }

  &__button {
    flex-basis: 129px;
    flex-shrink: 0;
    padding: 7px 20px;
    @include font('Inter', 14px, 400);
    line-height: 23px;
    @media screen and (max-width: 400px) {
      flex-basis: 107px;
    }
  }
}
</style>
