<script setup lang="ts">
import type { PropType } from 'vue'
import type { IFooterContacts } from '~/components/Widgets/Footer/interfaces/IFooterContacts'

const props = defineProps({
  contacts: {
    type: Object as PropType<IFooterContacts>,
    required: true,
    default: () => ({}),
  },
})

const config = useRuntimeConfig()
const showEmail = ref(false)
const sendEmailEvent = (_: any, email: string) => props.contacts.sendEmailEvent(email, config.public.emailContact)

onMounted(() => {
  showEmail.value = true
})
</script>
<template>
  <div
    class="footer-contacts"
  >
    <div class="footer-contacts__head-content">
      <div class="footer-contacts__contact-item">
        <p class="footer-contacts__contact-title">
          {{ contacts.emailTitle }}
        </p>
        <a
          v-if="showEmail"
          :href="`mailto:${contacts.email}`"
          class="footer-contacts__contact-link footer-contacts__contact-mail"
          @click="sendEmailEvent($event, 'email')"
        >
          {{ contacts.email }}
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer-contacts {
  margin-bottom: 32px;
  &__head-content {
    display: flex;
    flex-direction: column;
  }
  &__contact-item {
    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  &__contact-title {
    @include font('Inter', 16px, 400);
    line-height: 24px;
    letter-spacing: -0.013em;
  }

  &__contact-title,
  &__contact-link {
    color: $text-color--white-primary;
  }

  &__contact-link {
    @include font('Inter', 34px, 600);
    display: inline-block;
    margin-top: 12px;
    line-height: 100%;
    letter-spacing: -1px;
    border-bottom: 1px solid $text-color--red-opacity;
    text-decoration: none;
  }
}

@media screen and (max-width: 1320px) {
  .footer-contacts {
    &__contact-link {
      font-size: 20px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
  .footer-contacts {
    &__contact-item {
      margin-bottom: 42px;
    }
  }
}

@media screen and (max-width: 991px) {
  .footer-contacts {
    margin-bottom: 48px;
    &__head-content {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
}

@media screen and (max-width: 640px) {
  .footer-contacts {
    &__contact-item {
      margin-bottom: 33px;
    }

    &__contact-title {
      font-size: 13px;
      line-height: 22px;
    }
  }
}

@media screen and (max-width: 600px) {
  .footer-contacts {
    &__head-content {
      flex-direction: column;
    }
  }
}
</style>
