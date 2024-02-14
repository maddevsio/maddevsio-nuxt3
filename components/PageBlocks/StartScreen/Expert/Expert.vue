<script setup lang="ts">
import type { StartScreenExpertProps } from '~/components/PageBlocks/StartScreen/interfaces/IStartScreenExpert'
import { StartScreenExpert } from '~/components/PageBlocks/StartScreen/classes/StartScreenExpert'

interface Props {
  slice: StartScreenExpertProps
}

const { slice } = defineProps<Props>()

const {
  socialNetworksList,
  description,
  btnText,
  imageAlt,
  imageUrl,
  location,
  vcardData,
} = new StartScreenExpert(slice)
</script>
<template>
  <div>
    <section
      class="expert-page-header"
    >
      <div class="container expert-page-header__container">
        <div class="expert-page-header__info">
          <LazyPageBlocksStartScreenExpertPhoto
            :image-url="imageUrl"
            :image-alt="imageAlt"
          />
          <LazyPageBlocksStartScreenExpertInfo
            :company="vcardData.company"
            :first-name="vcardData.firstName"
            :last-name="vcardData.lastName"
            :position="vcardData.position"
          />
          <LazyPageBlocksStartScreenExpertSocialNetworks
            v-if="socialNetworksList && socialNetworksList.length"
            :social-network-list="socialNetworksList"
          />
        </div>
        <LazyPageBlocksStartScreenExpertPhoto
          platform="desktop"
          :image-url="imageUrl"
          :image-alt="imageAlt"
        />
        <LazyPageBlocksStartScreenExpertContactInfo
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

    @media screen and (min-width: 475px) {
      align-items: center;
    }

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
