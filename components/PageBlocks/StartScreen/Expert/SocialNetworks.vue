<script setup lang="ts">
import type { AuthorSocialNetwork } from '~/interfaces/common/commonInterfaces'

interface Props {
  socialNetworkList: AuthorSocialNetwork[]
}

defineProps<Props>()

const { $getMediaFromS3 } = useMediaFromS3()
const showEmail = ref(false)
const shareIconLabel = ref<HTMLSpanElement[] | null>(null)
const timerId = ref<ReturnType<typeof setTimeout> | null>(null)
const setShowEmail = () => {
  showEmail.value = true
}

const copyEmail = (email: string) => {
  copyToClipboard(email)
  if (shareIconLabel.value) {
    shareIconLabel.value[0].innerText = 'Email copied'
    const timerID = setTimeout(() => {
      if (shareIconLabel.value && shareIconLabel.value[0]) {
        shareIconLabel.value[0].innerText = 'Copy email'
      }
      clearTimeout(timerID)
    }, 3000)
  }
}

onMounted(() => {
  timerId.value = setTimeout(setShowEmail, 100)
})

onUnmounted(() => {
  clearTimeout(timerId.value!)
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
        <button
          v-if="network.network === 'Email'"
          class="expert-page-header__info-socials-link"
          @click="() => copyEmail(network.link.url.replace('mailto:', ''))"
        >
          <img
            :src="$getMediaFromS3(`images/ExpertPages/svg/startScreen/${network.network.toLowerCase()}.svg`)"
            :alt="network.network || 'icon'"
            width="50"
            height="50"
            class="expert-page-header__info-socials-icon"
          >
          <span
            ref="shareIconLabel"
            class="expert-page-header__info-socials-link-label"
          >
            Copy email
          </span>
        </button>
        <a
          v-if="network.network !== 'Email'"
          :href="`${network.link.url.replace('mailto:', '')}`"
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
        background: none;
        border: none;
        cursor: pointer;
        position: relative;
        padding: 0;

        &-label {
          @include font('Inter', 12px, 400);
          line-height: 150%;
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          max-width: 81px;
          height: 28px;
          padding: 0 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: $bgcolor--cultured;
          border-radius: 3px;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s;
        }

        &:hover {
          & .expert-page-header__info-socials-link-label {
            opacity: 1;
            visibility: visible;
          }
        }
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
