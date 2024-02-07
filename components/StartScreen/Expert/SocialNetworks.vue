<script setup lang="ts">
import type { AuthorSocialNetwork } from '~/interfaces/common/commonInterfaces'

interface Props {
  socialNetworkList: AuthorSocialNetwork[]
}

defineProps<Props>()

const { $getMediaFromS3 } = useMediaFromS3()
const showEmail = ref(false)
const timerId = ref(null)
const setShowEmail = () => {
  showEmail.value = true
}

onMounted(() => {
  timerId.value = setTimeout(setShowEmail, 100)
})

onUnmounted(() => {
  clearTimeout(timerId.value)
})
</script>
<template>
  <div
    v-if="socialNetworkList.length"
    class="expert-page-header__info-socials"
  >
    <ul class="expert-page-header__info-socials-list">
      <li
        v-for="(network, networkIndex) in socialNetworkList"
        :key="`${network.network}-${networkIndex}`"
        class="expert-page-header__info-socials-list-item"
      >
        <a
          :href="`${network.network === 'Email' && showEmail ? 'mailto:' : ''}${network.link.url.replace('mailto:', '')}`"
          target="_blank"
          rel="noopener"
          class="expert-page-header__info-socials-link"
        >
          <img
            :src="$getMediaFromS3(`images/ExpertPages/svg/startScreen/${network.network.toLowerCase()}.svg`)"
            :alt="network.network || 'icon'"
            width="50"
            height="50"
            class="expert-page-header__info-socials-icon"
          >
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.expert-page-header {
  &__info {
    &-socials {
      flex: 1 1 auto;
      width: 100%;

      &-list {
        display: flex;
        align-items: center;
        column-gap: 15px;
        margin-left: -5px;

        &-item {
          max-width: 50px;
          width: 20%;
        }
      }

      &-link {
        display: block;
        width: 100%;
        font-size: 0;
      }

      &-icon {
        width: 50px;
        height: 50px;
        display: block;
      }
    }

    @media screen and (min-width: 475px) {
      &-socials {

        &-list {
          column-gap: 24px;
        }
      }
    }

    @media screen and (min-width: 1140px) {
      &-socials {
        flex: initial;

        &-list {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
