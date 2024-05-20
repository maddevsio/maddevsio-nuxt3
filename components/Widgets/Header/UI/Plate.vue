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
  closePlate,
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
    :class="colorConverterToClass('bg', headerPlateContent.backgroundColor)"
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
    <button
      class="header-plate__close"
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

  &__close {
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
  }

  @media screen and (max-width: 768px) {
    &__container {
      column-gap: 24px;
    }

    &__title {
      width: 49%;
    }

    &__close {
      width: 30px;
      height: 30px;
      right: 0;
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
