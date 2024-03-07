<script setup lang="ts">
import { Digests } from '~/components/Digest/classes/Digests'
const {
  uid,
  date,
  swiperOptions,
} = defineProps({
  uid: {
    type: String,
    required: true,
    default: '',
  },

  date: {
    type: String,
    required: true,
    default: '',
  },

  swiperOptions: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const prismic = usePrismic()

const {
  digestsData,
  handleChangeYear,
  fetchDigests,
} = new Digests({ uid, date }, prismic)

const { pending } = await useAsyncData(() => fetchDigests({ prismic }), {
  server: false,
  lazy: true,
})

const swiper = ref<{
  isBeginning: boolean
  isEnd: boolean
  slidePrev(): void
  slideNext(): void
    } | null>(null)

const next = () => {
  if (swiper.value) {
    if (swiper.value.slideNext) {
      swiper.value.slideNext()
    }
  }
}

const prev = () => {
  if (swiper.value) {
    if (swiper.value.slidePrev) {
      swiper.value.slidePrev()
    }
  }
}

const onSwiper = (swiperInstance: any) => {
  swiper.value = swiperInstance
}

</script>

<template>
  <section class="digest-footer">
    <div class="container digest-footer__container">
      <h2 class="digest-footer__title">
        Explore our other digests
      </h2>
      <LazySharedLoadersSpinnerLoader
        v-if="pending"
        color-theme="white"
      />
      <div class="digest-footer__head">
        <LazyDigestSelect
          v-if="!pending"
          @change-year="handleChangeYear"
        />
        <SharedNavigationButtonsOutsideSwiper
          v-if="!pending"
          @click-prev="prev"
          @click-next="next"
        />

        <Swiper
          v-if="!pending"
          v-bind="swiperOptions"
          :modules="[SwiperNavigation]"
          class="digest-footer__cards"
          :auto-update="true"
          :auto-destroy="true"
          :delete-instance-on-destroy="true"
          :cleanup-styles-on-destroy="true"
          @swiper="onSwiper"
        >
          <SwiperSlide
            v-for="digest in digestsData!.digestList"
            :key="`${digest.uid}`"
          >
            <LazyDigestPostFooterCard
              :title="digest.title"
              :description="digest.subtitle"
              :image="digest.featuredImage"
              :uid="digest.uid"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.digest-footer {
  background-color: $bgcolor--cultured;
  padding: 48px 0;
  position: relative;
  min-height: 530px;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 62%;
    max-width: 1240px;
    height: 1px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: $bgcolor--grey-cases;

    @media screen and (max-width: 986px) {
      display: none;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    max-width: 816px;
    row-gap: 32px;
  }

  &__title {
    @include font('Inter', 32px, 600);
    color: $text-color--black-oil;
    letter-spacing: -0.04em;
    line-height: 130%;
    @media screen and (max-width: 1024px) {
      font-size: 26px;
      line-height: 33px;
    }
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 32px;
  }

  &__cards {
    width: 100%;
    display: flex;
    justify-content: space-between;
    column-gap: 30px;

    & .swiper-slide {
      height: initial;
    }
  }
}
</style>
