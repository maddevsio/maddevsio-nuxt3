<script setup lang="ts">
import { clickHeaderCta } from '~/analytics/events'
import { smartlookClickHeaderCta } from '~/analytics/smartlookEvents'

const router = useRouter()
const route = useRoute()
const cookiePlate = useCookie(`seenArticlePlate_${ route.path }`)
const { headerPlateData } = storeToRefs(useHeaderPlateStore())

const showArticlePlate = ref(false)

const location = 'Header plate'
const staticPages = [
  '/our-philosophy/',
  '/gdpr/',
  '/nda/',
  '/open-source/',
  '/privacy/',
  '/digest/',
  '/transparency/',
  '/careers/',
]

const closePlate = () => {
  showArticlePlate.value = false
  ManageCookie.setCookie({
    name: `seenArticlePlate_${ route.path }`,
    value: route.path,
    expires: 14,
  })
}

watch(headerPlateData, newVal => {
  showArticlePlate.value = !!newVal
}, { immediate: true })

watch(() => route.path, newRoute => {
  if (staticPages.includes(newRoute) || newRoute.includes('/delivery-models/')) {
    showArticlePlate.value = false
  }
  if (cookiePlate.value || !headerPlateData.value) {
    showArticlePlate.value = false
  }
}, { immediate: true })

const clickArticle = (path: string) => {
  router.push(path)
  clickHeaderCta.send(location)
  smartlookClickHeaderCta.send({ location })
}
</script>
<template>
  <div v-if="showArticlePlate && !cookiePlate">
    <div
      v-if="headerPlateData"
      class="header__article-banner"
      :class="colorConverterToClass('bg', headerPlateData.backgroundColor)"
    >
      <div class="header__container container header__article-banner--inner">
        <p
          v-if="headerPlateData.text"
          class="header__article-banner-title"
        >
          {{ headerPlateData.text }}
        </p>
        <LazySharedUIAnimatedButton
          v-if="headerPlateData.btnLink"
          :to="headerPlateData.btnLink"
          :small="true"
          :is-link="true"
          class="header__article-banner-btn"
          @click.prevent="clickArticle(headerPlateData.btnLink)"
        >
          <span class="button-text">
            {{ headerPlateData.btnText }}
          </span>
        </LazySharedUIAnimatedButton>
      </div>
      <button
        class="header__article-banner-close"
        @click="closePlate"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.575158 0.574913C0.77042 0.379651 1.087 0.379651 1.28226 0.574913L5.92869 5.22134L10.5751 0.574913C10.7704 0.379651 11.087 0.379651 11.2822 0.574913C11.4775 0.770176 11.4775 1.08676 11.2822 1.28202L6.6358 5.92845L11.2822 10.5749C11.4775 10.7701 11.4775 11.0867 11.2822 11.282C11.087 11.4772 10.7704 11.4772 10.5751 11.282L5.92869 6.63555L1.28226 11.282C1.087 11.4772 0.77042 11.4772 0.575158 11.282C0.379895 11.0867 0.379895 10.7701 0.575158 10.5749L5.22158 5.92845L0.575158 1.28202C0.379895 1.08676 0.379895 0.770176 0.575158 0.574913Z"
            fill="#ffffff"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  @import '@/assets/styles/colorClasses/colors.scss';

  &__article-banner {
    position: relative;
    &--inner {
      padding: 5px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 32px;

      @media screen and (max-width: 690px) {
        column-gap: 24px;
      }

      @media screen and (max-width: 450px) {
        justify-content: flex-start;
      }

      @media screen and (max-width: 360px) {
        column-gap: 10px;
      }
    }

    &-title {
      @include font('Poppins', 16px, 500);
      line-height: 26px;
      color: $text-color--white-primary;

      @media screen and (max-width: 690px) {
        width: 49%;
      }

      @media screen and (max-width: 490px) {
        font-size: 12px;
        line-height: 18px;
      }

      @media screen and (max-width: 363px) {
        width: 51%;
      }
    }

    :deep(.ui-button) {
      min-width: 100px;
      @media screen and (max-width: 360px) {
        margin-right: 15px;
      }
    }

    &-close {
      position: absolute;
      top: 50%;
      right: 20px;
      background: transparent;
      @include font('Inter', 14px, 600);
      line-height: 21px;
      color: $text-color--grey-20-percent;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      box-sizing: border-box;
      border: none;
      cursor: pointer;
      transform: translateY(-50%);

      @media screen and (max-width: 490px) {
        right: 10px;
      }

      @media screen and (max-width: 360px) {
        right: 0;
      }
    }
  }
}
</style>
