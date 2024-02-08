<script setup lang="ts">
import type { IVCard } from '~/components/StartScreen/interfaces/IStartScreenExpert'

interface Props {
  vcard: IVCard
  btnText: string
}

const { vcard } = defineProps<Props>()

const socialLinksString = ref('')
const vcardUrl = ref('')

for (const [network, url] of Object.entries(vcard.socialNetworks)) {
  if (network.toLowerCase() !== 'email') {
    const socialLink = `URL:${ url }\n`
    socialLinksString.value += socialLink
  }
}

const filename = `${ vcard.firstName }_${ vcard.lastName }.vcf`

onMounted(() => {
  const vcardData = 'BEGIN:VCARD\n' +
    'VERSION:3.0\n' +
    `REV:${ new Date().toISOString() }\n` +
    `N;CHARSET=utf-8:${ vcard.lastName };${ vcard.firstName };;;\n` +
    `FN;CHARSET=utf-8:${ vcard.firstName }${ vcard.lastName }\n` +
    `ORG;CHARSET=utf-8:${ vcard.company }\n` +
    `TITLE;CHARSET=utf-8:${ vcard.position }\n` +
    `EMAIL;INTERNET;PREF;WORK:${ vcard.email }\n` +
    `ADR;WORK;POSTAL;CHARSET=utf-8:${ vcard.location };;;;;;\n` +
    `TEL;TYPE=CELL:${ vcard.phoneNumber }\n` +
    `${ socialLinksString.value }END:VCARD`

  vcardUrl.value = `data:text/vcard;charset=utf-8,${ encodeURIComponent(vcardData) }`
})
</script>
<template>
  <div>
    <a
      :href="vcardUrl"
      :download="filename"
      class="expert-page-header__contact-info-save-btn"
    >{{ btnText ? btnText : 'save contact' }}</a>
  </div>
</template>
<style lang="scss" scoped>
.expert-page-header__contact-info-save-btn {
  @include font('Inter', 14px, 400);
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.4px;
  color: $text-color--white-primary;
  padding: 12px 0;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  background: $bgcolor--red;
  cursor: pointer;
  width: 100%;
  display: block;
  box-sizing: border-box;

  @media screen and (min-width: 1140px) {
    padding: 15px;
    font-size: 16px;
    line-height: 26px;
  }
}
</style>
