<script setup lang="ts">
const showEmail = ref(false)
const config = useRuntimeConfig()
const mailTo = computed(() => `mailto:${ config.public.emailCV }`)

onMounted(() => {
  showEmail.value = true
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div
    class="careers-cta-banner_container container"
  >
    <LazySharedUIBanner
      title="Can’t see your next role?"
      text="If you don’t see a suitable vacancy, but you are sure we're meant to be together, drop us a line."
      :image="$getMediaFromS3(`/images/CTABanner/ekaterina-bludova2x.webp`)"
      image-alt-text="Ekaterina Bludova"
      man-name="Ekaterina Bludova"
      man-position="Recruitment Team Leader"
    >
      <ClientOnly>
        <a
          v-if="showEmail"
          :href="mailTo"
        >
          Write Us
        </a>
      </ClientOnly>
      <ul class="careers-cta-banner__links">
        <li>
          <a
            href="https://novosibirsk.hh.ru/employer/2861993"
            target="_blank"
            rel="noopener"
          >
            Headhunter
          </a>
        </li>
        <li>
          <a
            href="https://career.habr.com/companies/maddevs/cp/vacancies/"
            target="_blank"
            rel="noopener"
          >
            Habr.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/mad-devs/"
            target="_blank"
            rel="noopener"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </LazySharedUIBanner>
  </div>
</template>
<style lang="scss" scoped>
.careers-cta-banner {
  &_container {
    padding-bottom: 100px;

    :deep(.ui-button) {
      width: 193px;
      height: 52px;
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
      letter-spacing: -0.02em;

      img {
        transform: translateY(2.5px);
      }

      @media screen and (max-width: 900px) {
        font-size: 16px;
      }
    }
  }

  &__links {
    margin-top: 24.5px;
    display: flex;

    li {
      margin-right: 11.5px;

      a {
        letter-spacing: -0.013em;
        font-size: 14px;
        line-height: 19px;
        color: $text-color--black-oil;
        text-decoration: underline;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    &_container {
      padding-bottom: 44px;
    }
  }
}

:deep(.cta-banner__info > p) {
  max-width: 440px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    max-width: 320px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
}

:deep(.cta-banner__info > a) {
  padding: 17px 31px 17px 28px;
  background-color: $bgcolor--red;
  border-radius: 4px;
  line-height: 100%;
  text-decoration: none;
  color: $text-color--white-primary;
  @include font('Inter', 18px, 400);

  &:active {
    background-color: $bgcolor--carnelian;
  }
}
</style>
