<script setup lang="ts">
import { HeaderContacts } from '~/components/Widgets/Header/classes/HeaderContacts'

const headerContacts = new HeaderContacts()
const config = useRuntimeConfig()
const mailLink = config.public.emailContact
const sendEmailEvent = () => headerContacts.sendEmailEvent(mailLink)
</script>
<template>
  <div class="header-mobile-contacts">
    <div class="header-mobile-contacts__email-wrapper">
      <p
        class="header-mobile-contacts__email-label"
      >
        Text us:
      </p>
      <a
        :href="`mailto:${mailLink}`"
        class="header-mobile-contacts__email-link"
        @click="sendEmailEvent()"
      >
        {{ mailLink }}
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header-mobile-contacts {
  &__email-wrapper {
    margin-bottom: 33px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__email-label {
    @include font('Inter', 16px, 400);
    display: flex;
    align-items: center;
    margin-bottom: 11px;
    letter-spacing: -0.02em;
    img {
      display: block;
      margin-right: 8px;
    }
  }
  &__email-link {
    @include font('Poppins', 28px, 600);
    letter-spacing: -1px;
    display: inline-block;
    text-decoration: none;
    color: $text-color--white;
    border-bottom: 1px solid $text-color--red-opacity;
  }

  &__messengers {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-gap: 6px 60px;
    margin-top: 50px;
    margin-left: -7px;
  }

  &__messenger {
    color: $text-color--grey-img-description;
    &-link {
      display: flex;
      align-items: center;
      img {
        display: block;
        margin-right: 2px;
      }
    }
    &-name {
      @include font('Inter', 16px, 400);
      line-height: 24px;
      letter-spacing: -0.02em;
      color: $text-color--grey-img-description;
    }
  }
}
</style>
