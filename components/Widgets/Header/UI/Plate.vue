<script setup lang="ts">
import type { PropType } from 'vue'
import type { HeaderPlateData } from '~/components/Widgets/Header/interfaces/IHeaderPlate'
import { HeaderPlate } from '~/components/Widgets/Header/classes/HeaderPlate'

const props = defineProps({
  headerPlateData: {
    type: Array as PropType<HeaderPlateData[]>,
    default: () => [],
  },
})

const router = useRouter()
const route = useRoute()

const {
  headerPlateContent,
  isSeen,
  clickPlate,
  filterHeaderPlateData,
} = new HeaderPlate(route, router, props.headerPlateData)

filterHeaderPlateData(route.path)

watch(() => route.path, (value: string) => {
  filterHeaderPlateData(value)
})
</script>

<template>
  <div
    v-if="headerPlateContent && !isSeen"
    class="header-plate"
    :class="colorConverterToClass('bg', headerPlateContent.backgroundColor ? headerPlateContent.backgroundColor : 'purple')"
  >
    <div class="header-plate__container container">
      <p
        v-if="headerPlateContent.text"
        class="header-plate__title"
      >
        {{ headerPlateContent.text }}
      </p>
      <SharedUIAnimatedButton
        v-if="headerPlateContent.buttonLink"
        :to="headerPlateContent.buttonLink"
        :small="true"
        :is-link="true"
        class="header-plate__btn"
        @click-emit="clickPlate(headerPlateContent.buttonLink)"
      >
        <span class="button-text">
          {{ headerPlateContent.buttonText }}
        </span>
      </SharedUIAnimatedButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/colorClasses/colors.scss';

.header-plate {
  position: relative;

  &__container {
    padding: 5px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 32px;
  }

  &__title {
    @include font('Poppins', 16px, 500);
    line-height: 26px;
    color: $text-color--white-primary;
  }

  :deep(.ui-button) {
    min-width: 100px;
  }

  @media screen and (max-width: 768px) {
    &__container {
      column-gap: 24px;
    }

    &__title {
      width: 49%;
    }
  }

  @media screen and (max-width: 490px) {
    &__container {
      justify-content: flex-start;
    }

    &__title {
      font-size: 12px;
      line-height: 18px;
    }
  }

  @media screen and (max-width: 375px) {
    &__container {
      column-gap: 10px;
    }

    &__title {
      width: 51%;
    }

    :deep(.ui-button) {
      margin-right: 15px;
    }
  }
}
</style>
