<script setup lang="ts">
import { emailClickEvent } from '~/analytics/events'

const config = useRuntimeConfig()
const { $getMediaFromS3 } = useMediaFromS3()
const showEmail = ref(false)
const mailCV = config.public.emailCV

const sendEmailClickEvent = () => {
  if (mailCV !== 'team@maddevs.io') { return }
  emailClickEvent.send()
}

onMounted(() => {
  showEmail.value = true
})
</script>
<template>
  <div class="hr-contact">
    <div class="hr-contact__image">
      <img
        loading="lazy"
        :src="$getMediaFromS3(`/images/Careers/jpg/EkaterinaHr.jpg`)"
        alt="Ekaterina"
        width="101"
        height="101"
      >
    </div>
    <div class="hr-contact__info">
      <p class="hr-contact__title">
        Hi, I'm Ekaterina.
      </p>
      <p class="hr-contact__description">
        Applying for jobs should be easy. I am here to simplify the hiring process and set you up for success.
        Feel free to send me a message via e-mail
        <ClientOnly>
          <a
            v-if="showEmail"
            :href="`mailto:${mailCV}`"
            @click="sendEmailClickEvent"
          >
            <img
              loading="lazy"
              :src="$getMediaFromS3('images/core/common/gmail.svg')"
              width="20"
              height="17"
              alt="Gmail"
            >
            <span>{{ mailCV }}</span>
          </a>
        </ClientOnly>.
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hr-contact {
  display: flex;
  color: $text-color--black-oil;
  &__image {
    margin-right: 20px;
    width: 101px;
    min-width: 101px;
    height: 101px;
    border-radius: 20px;
    background-color: $bgcolor--silver;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      object-fit: cover;
    }
  }
  &__title {
    @include font('Poppins', 33px, 600);
    line-height: 43px;
    letter-spacing: -0.04em;
  }
  &__description {
    margin-top: 10px;
    font-size: 17px;
    line-height: 27px;
    letter-spacing: -0.013em;
    a {
      display: inline-flex;
      align-items: center;
      color: $text-color--blue;
      text-decoration: none;
      letter-spacing: normal;
      line-height: normal;

      img {
        margin-right: 5px;
        transform: translateY(1px);
      }
    }
  }

  @media screen and (max-width: 576px) {
    &__image {
      width: 68px;
      min-width: 68px;
      height: 68px;
    }
    &__title {
      font-size: 23px;
      line-height: 30px;
    }
  }
}
</style>
