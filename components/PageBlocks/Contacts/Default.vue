<script setup lang="ts">
import type { PropType } from 'vue'
import type { ContactsProps } from '~/components/PageBlocks/Contacts/interfaces/IContacts'
import { ContactsDefault } from '~/components/PageBlocks/Contacts/classes/ContactsDefault'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<ContactsProps>,
    default: () => ({}),
  },
})
const { contacts, contactsClassFor3Items, sendEvent } = new ContactsDefault(slice)
</script>

<template>
  <div class="contacts-slice">
    <div class="contacts-slice__container container">
      <div
        class="contacts-slice__fields"
        :class="contactsClassFor3Items"
      >
        <LazyPageBlocksContactsUIField
          v-for="item in contacts"
          :key="item.content"
          v-bind="item"
          @click-contact="sendEvent"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts-slice {
  &__fields {
    display: flex;
    flex-wrap: wrap;
    gap: 34px;
    border-bottom: 1px solid $text-color--red-opacity;
    padding-bottom: 45px;

    &--3-items {
      .contacts-slice-field:first-child {
        flex: 1 1 100%;
      }
    }
  }

  @media screen and (max-width: 1160px) {
    &__fields {
      padding-bottom: 37px;
    }

    &__value {
      font-size: 28px;
      line-height: 128%;
    }
  }

  @media screen and (max-width: 500px) {
    &__fields {
      padding-bottom: 48px;
    }
  }
}
</style>
