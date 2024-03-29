<script setup lang="ts">
import type { Author, AuthorSocialNetwork } from '~/interfaces/common/commonInterfaces'

interface Props {
  slice: {
    primary: {
      author: Author
      description: string
      btnText: string
    }
  }
}

const { slice } = defineProps<Props>()

const authorData = slice.primary.author.data
const description = slice.primary.description
const btnText = slice.primary.btnText || 'save contact'
const imageUrl = authorData.image.header.url!
const imageAlt = authorData.image.header.alt! || `${ authorData.firstName } ${ authorData.lastName }`
const location = authorData?.location || ''

const socialNetworksObj = ref<{[key: string]: string}>({})
const socialNetworksList = ref<AuthorSocialNetwork[]>([])

const vcardData = reactive({
  firstName: authorData.firstName || '',
  lastName: authorData.lastName || '',
  phoneNumber: authorData.phoneNumber || '',
  position: authorData.position || '',
  company: authorData.company || '',
  email: authorData.email || '',
  location: authorData.location || '',
  socialNetworks: socialNetworksObj.value,
})

const generateSocialNetworks = () => {
  if (authorData.social_networks && Array.isArray(authorData.social_networks)) {
    authorData.social_networks.forEach(item => {
      if (item.network && item.link && item.link.url) {
        socialNetworksObj.value[item.network] = item.link.url
        socialNetworksList.value.push(item)
      }
    })
  }
}

generateSocialNetworks()
</script>
<template>
  <div>
    <section
      class="expert-page-header"
    >
      <div class="container expert-page-header__container">
        <div class="expert-page-header__info">
          <PageBlocksStartScreenExpertPhoto
            :image-url="imageUrl"
            :image-alt="imageAlt"
          />
          <PageBlocksStartScreenExpertInfo
            :company="vcardData.company"
            :first-name="vcardData.firstName"
            :last-name="vcardData.lastName"
            :position="vcardData.position"
          />
          <PageBlocksStartScreenExpertSocialNetworks
            v-if="socialNetworksList && socialNetworksList.length"
            :social-network-list="socialNetworksList"
          />
        </div>
        <PageBlocksStartScreenExpertPhoto
          platform="desktop"
          :image-url="imageUrl"
          :image-alt="imageAlt"
        />
        <PageBlocksStartScreenExpertContactInfo
          :vcard="vcardData"
          :description="description"
          :btn-text="btnText"
          :location="location"
        />
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
.expert-page-header {
  padding-top: 107px;
  padding-bottom: 72px;

  @media screen and (min-width: 769px) {
    padding-top: 135px;
  }

  @media screen and (min-width: 845px) {
    &__container {
      display: flex;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 1140px) {
    &__container {
      align-items: center;
    }
  }

  &__info {
    display: flex;
    flex-wrap: wrap;
    gap: 18.5px 25.5px;
    margin-bottom: 22px;
    align-items: center;

    @media screen and (min-width: 845px) {
      width: 75%;
    }

    @media screen and (min-width: 1140px) {
      width: 28%;
      margin-bottom: 0;
      row-gap: 24px;
    }
  }
}
</style>
