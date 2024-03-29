<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/client'

interface IIndustriesCardDescriptionItem {
  icon: ImageField
  description: string
  linkToIndustryPage: string
  cardBackgroundColor: string
  cardTextColor: string
}

interface IndustriesCardDescriptionProps {
  items: IIndustriesCardDescriptionItem[]
  primary: {
    colorTheme: string
  }
}

const { slice } = defineProps({
  slice: {
    type: Object as PropType<IndustriesCardDescriptionProps>,
    default: () => ({}),
  },
})

const router = useRouter()

const cards = slice.items.map(card => ({
  ...card,
  cardBackgroundColor: colorConverterToClass('bg', slice.primary?.colorTheme || 'white'),
  cardTextColor: colorConverterToClass('text', slice.primary?.colorTheme === 'white' ? 'black' : 'white'),
}))
const colorTheme = slice.primary.colorTheme || 'white'
const sliceBackground = colorConverterToClass('slice-bg', slice.primary.colorTheme || 'white')

const goToPage = async (url: string) => {
  if (!url) { return }
  await router.push(url)
}

</script>
<template>
  <div
    :class="`industries-card-description ${sliceBackground}`"
  >
    <div class="container industries-card-description__cards">
      <PageBlocksIndustriesUICardDescriptionItem
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
<style scoped lang="scss">
@import 'assets/styles/colorClasses/colors';

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
