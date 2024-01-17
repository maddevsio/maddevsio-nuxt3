<template>
  <div
    :class="`industries-card-description ${sliceBackground}`"
  >
    <div class="container industries-card-description__cards">
      <IndustriesCardDescriptionItem
        v-for="(card, idx) in cards"
        :key="`industries-card-description--${idx}`"
        :icon="card.icon"
        :description="card.description"
        :card-background-color="card.cardBackgroundColor"
        :color-theme="colorTheme"
        :card-text-color="card.cardTextColor"
        :link-to-industry-page="card.linkToIndustryPage"
        :go-to-page="goToPage"
      />
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, useRouter } from '@nuxtjs/composition-api'
import { useColorConverterToClass } from '@/services/prismic/utils/useColorConverterToClass'

export default defineComponent({
  name: 'IndustriesCardDescription',
  components: {
    IndustriesCardDescriptionItem: () => import('@/components/serviceComponents/industries/components/IndustriesCardDescriptionItem.vue'),
  },

  props: {
    slice: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },

  setup({ slice }) {
    const cards = computed(() => slice.items.map(card => ({
      ...card,
      cardBackgroundColor: useColorConverterToClass('bg', slice.primary?.colorTheme || 'white'),
      cardTextColor: useColorConverterToClass('text', slice.primary?.colorTheme === 'white' ? 'black' : 'white'),
    })))
    const router = useRouter()
    const goToPage = url => {
      if (!url) return
      router.push(url)
    }

    return {
      colorTheme: slice.primary.colorTheme || 'white',
      sliceBackground: useColorConverterToClass('slice-bg', slice.primary.colorTheme || 'white'),
      cards,
      goToPage,
    }
  },
})
</script>
<style scoped lang="scss">
@import '@/assets/styles/colorClasses/colors.scss';

.industries-card-description {
  &__cards {
    @include grid(repeat(3, 1fr), auto, 20px, 20px);

    * {
      box-sizing: border-box;
    }

    @media screen and (max-width: 1026px) {
      @include grid(repeat(2, 1fr), auto, 20px, 20px);
    }

    @media screen and (max-width: 768px) {
      @include grid(repeat(1, 1fr), auto, 10px, 10px);
    }
  }
}
</style>
