<script setup lang="ts">
import type {
  WeCreateProjectsForWithMapProps,
} from '~/components/WeCreateProjectsFor/interfaces/IWeCreateProjectsForWithMap'
import { WeCreateProjectsForWithMap } from '~/components/WeCreateProjectsFor/classes/WeCreateProjectsForWithMap'

interface Props {
  slice: WeCreateProjectsForWithMapProps
}

const { slice } = defineProps<Props>()
const {
  background,
  industriesList,
  svgIconsSprite,
  s3MapRoute,
  getScreenType,
  getSVGSprite,
} = new WeCreateProjectsForWithMap(slice)

const { $getMediaFromS3 } = useMediaFromS3()

onMounted(() => {
  getSVGSprite()
  getScreenType()
  window.addEventListener('resize', getScreenType)
})

onUnmounted(() => {
  window.removeEventListener('resize', getScreenType)
})
</script>
<template>
  <section
    :style="{ backgroundColor: background }"
    class="create-projects-slice"
  >
    <div class="container">
      <div
        class="create-projects-slice__content"
        data-testid="create-projects-slice__content"
      >
        <h2 class="create-projects-slice__title">
          We create <br> IT projects for
        </h2>

        <div
          style="display:none"
          v-html="svgIconsSprite"
        />

        <div class="create-projects-slice__projects projects-list">
          <div
            v-for="(industryList, listIndex) in industriesList"
            :key="listIndex"
            class="projects-list__list_items"
          >
            <ul
              class="projects-list__item"
              data-testid="projects-list__item"
            >
              <li
                v-for="(industry, elementIndex) in industryList"
                :key="elementIndex"
                class="projects-list__item-industry"
              >
                <svg class="projects-list__item-industry-icon">
                  <use :xlink:href="`#${industry.iconID}`" />
                </svg>
                <span class="projects-list__item-industry-name">
                  {{ industry.text }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="create-projects-slice__separator" />
        <div
          class="create-projects-slice__image-wrapper"
        >
          <img
            loading="lazy"
            :src="$getMediaFromS3(s3MapRoute)"
            alt="Global projects in 20+ countries"
            class="create-projects-slice__image"
            width="900"
            height="406"
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.create-projects-slice {
  &__title {
    @include h2-title;
    padding-top: 40px;
    margin-bottom: 23px;
    text-align: center;
    color: $text-color--white-primary;

    br {
      display: none;
    }

    @media screen and (max-width: 1024px) {
      br {
        display: block;
      }
    }
    @media screen and (max-width: 834px) {
      padding-top: 33px;
      margin-bottom: 3px;
      br {
        display: none;
      }
    }
    @media screen and (max-width: 576px) {
      padding-top: 34px;
      margin-bottom: 1px;
      br {
        display: block;
      }
    }
  }

  br {
    display: none;
  }

  &__image {
    width: 100%;
    max-width: 900px;

    &-wrapper {
      display: flex;
      justify-content: center;
    }
  }

  &__separator {
    background: linear-gradient(90deg, $bgcolor--black 15%, $border-color--grey 50%, $bgcolor--black 85%);
    margin: 66px 0 55px;
    height: 1px;
    @media screen and (max-width: 1024px) {
      margin: 66px 0 55px;
    }

    @media screen and (max-width: 692px) {
      margin: 34px 0 40px;
    }
  }
}

.projects-list {
  max-width: 900px;
  margin: 0 auto;
  color: $text-color--white-primary;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &__list_items {
    display: inline;
    @media screen and (max-width: 692px) {
      width: 45%;
      gap: 20px;
    }
  }

  &__item {
    &-industry {
      display: flex;
    }

    &-industry-icon {
      max-width: 22px;
      max-height: 22px;
      margin-right: 10px;
      display: inline-block;
    }

    &-industry-name {
      margin-bottom: 24px;
      color: $text-color--white-primary;
      @media screen and (max-width: 1024px) {
        @include font('Inter', 16px, 400);
      }

      @media screen and (max-width: 692px) {
        @include font('Inter', 14px, 400);
        text-wrap: normal;
      }
    }
  }
}
</style>
