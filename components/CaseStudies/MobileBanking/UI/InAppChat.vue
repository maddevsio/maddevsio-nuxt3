<script setup lang="ts">
import { inAppChatData } from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'
</script>
<template>
  <div class="in-app-chat m-96_bottom media-m-48_bottom">
    <LazyCaseStudiesMobileBankingUIChallengeSection
      v-bind="inAppChatData"
      :main-title-tag="'h3'"
    />
    <div class="in-app-chat__image-wrapper background-color-silver">
      <div class="container_regular in-app-chat__container">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="846"
          :height="672"
          folder="mobile-banking"
          file="in-app-chat"
          extension="png"
          alt="InApp Chat"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.in-app-chat {
  &__image-wrapper {
    padding: 100px 0;
  }

  &__container {
    max-width: 846px;
  }

  @media screen and (max-width: 768px) {
    &__image-wrapper {
      padding: 48px 0;
    }
  }
}
</style>
