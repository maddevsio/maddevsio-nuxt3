<script setup lang="ts">
import type { PropType } from 'vue'
import { SimpleCardWithIcon } from '~/components/PageBlocks/SimpleCard/classes/SimpleCardWithIcon'
import type { SimpleCardWithIconProps } from '~/components/PageBlocks/SimpleCard/interfaces/ISimpleCardWithIcon'

const props = defineProps({
  slice: {
    type: Object as PropType<SimpleCardWithIconProps>,
    default: () => ({}),
  },
})
const router = useRouter()
const simpleCardWithIcon = new SimpleCardWithIcon({ ...props.slice, router })
</script>
<template>
  <section
    class="simple-card-with-icon"
    :class="[colorConverterToClass('slice-bg', simpleCardWithIcon.sliceBackgroundColor)]"
  >
    <div class="container">
      <div
        class="simple-card-with-icon__cards"
        :class="{'simple-card-with-icon__cards--static': !simpleCardWithIcon.animatedCards}"
      >
        <div
          v-for="(card, cardIdx) in simpleCardWithIcon.cards"
          :id="`${card.bigCard ? simpleCardWithIcon.setRowId(card, cardIdx) : cardIdx + 1}`"
          :key="`simple-card-with-icon-${cardIdx}`"
          class="simple-card-with-icon__card"
          :class="simpleCardWithIcon.getCardClassNames(card)"
        >
          <Component
            :is="card.link ? 'a' : 'div'"
            :href="card.link"
            class="simple-card-with-icon__card-wrapper"
            @click.prevent="simpleCardWithIcon.redirectToUrl($event,{tag: card.link ? 'a' : 'div', link: card.link})"
          >
            <img
              v-if="card.icon.url"
              loading="lazy"
              :src="card.icon.url"
              :alt="card.title"
              width="60"
              height="60"
              class="simple-card-with-icon__icon"
            >
            <Component
              :is="card.titleTag || 'h3'"
              v-if="card.title"
              class="simple-card-with-icon__card-title"
              :class="colorConverterToClass('text', card.titleColor)"
              v-html="card.title.replace(/\n/g, '<br />')"
            />
            <div
              v-if="card.description.length && card.description[0].text"
              class="simple-card-with-icon__card-description-wrapper"
              :class="simpleCardWithIcon.getCardDescriptionClassNames({
                descriptionColor: card.descriptionColor})"
              v-html="$prismic.asHTML(card.description)"
            />
            <button
              v-if="card.link"
              class="simple-card-with-icon__btn"
            >
              <span class="simple-card-with-icon__arrow" />
            </button>
          </Component>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import 'assets/styles/colorClasses/colors';
.simple-card-with-icon {
  &__cards {
    @include grid(repeat(4, 1fr), auto, 20px, 20px);
    grid-auto-flow: dense;
    box-sizing: border-box;

    * {
      box-sizing: border-box;
    }
  }

  #first-row {
    grid-row: 1/2;
  }

  #second-row {
    grid-row: 2/3;
  }

  #third-row {
    grid-row: 3/4;
  }

  &__card {
    position: relative;
    height: 318px;
    border-radius: 4px;

    &--static {
      height: 233px;

      .simple-card-with-icon__icon {
        margin-bottom: 50px;
        @media screen and (max-width: 600px) {
          margin-bottom: 0;
        }
      }

      .simple-card-with-icon__card-title {
        margin-bottom: 0;
      }

      .simple-card-with-icon__card-wrapper {
        padding: 27px 23px 33px;
        @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
          padding: 27px 20px 33px;
        }
        @media screen and (max-width: 1100px) {
          padding: 23px 23px 41px;
        }
        @media screen and (max-width: 600px) {
          padding: 17px 21px 17px 10px;
        }
      }
    }

    &--big {
      grid-column: 2 span;
    }

    &--start {
      grid-column: 1/3;
    }

    &--end {
      grid-column: 3/5;
    }

    &--4-animated-items {
      @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
        &:nth-child(2), &:nth-child(3) {
          grid-column: 2 span;
        }
      }

      @media screen and (max-width: 1100px) {
        &:nth-child(2), &:nth-child(3) {
          grid-column: auto;
        }
      }
    }

    &--animated {
      .simple-card-with-icon__card-description-wrapper {
        max-height: 0;
        opacity: 0;
        transition: 0.3s ease-in-out;
        pointer-events: none;
      }

      .simple-card-with-icon__icon {
        opacity: 1;
        transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out 0.1s, margin-bottom 0.3s ease-in-out;
      }
    }

    &-title {
      @include font('Inter', 24px, 700);
      line-height: 130%;
      transition: 0.3s ease-in-out;
      margin-bottom: 14px;

      @media screen and (max-width: 1100px) {
        font-size: 18px;
        line-height: 128%;
      }

      @media screen and (max-width: 600px) {
        font-size: 16px;
        line-height: 125%;
        flex-grow: 1;
        margin-bottom: 0;
      }
    }

    &-description-wrapper {
      @include font('Inter', 16px, 400);

      &--white {
        :deep(p),
        :deep(a) {
          color: $text-color--white-primary;
        }
      }

      &--black {
        :deep(p),
        :deep(a) {
          color: $text-color--black-pale;
        }
      }

      :deep(p),
      :deep(a) {
        line-height: 26px;
      }

      :deep(a) {
        text-decoration: underline;
      }

      @media screen and (max-width: 1350px) {
        :deep(p) {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      @media screen and (max-width: 1100px) {
        display: none;
      }
    }
  }

  &__card-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 47px 23px;
    @media screen and (max-width: 1100px) {
      padding: 23px 23px 41px;
    }
    @media screen and (max-width: 600px) {
      flex-direction: row;
      align-items: center;
      padding: 17px 21px 17px 10px;
    }
  }

  &__btn {
    position: absolute;
    right: 14px;
    bottom: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 27px;
    min-width: 27px;
    height: 27px;
    border: 1px solid $bgcolor--white;
    border-radius: 100%;
    opacity: 0.5;
    background: none;
    outline: none;
    cursor: pointer;

    @media screen and (max-width: 600px) {
      position: static;
      margin-left: 10px;
    }
  }

  &__arrow {
    @include arrow-top-right-icon($bgcolor--white);
    width: 10px;
    min-width: 10px;
    height: 10px;
    transform: rotate(45deg);
  }

  &__btn, &__arrow {
    transition: 0.1s ease-in-out;
  }

  &__icon {
    width: 60px;
    min-width: 60px;
    max-height: 60px;
    margin-bottom: 102px;

    @media screen and (max-width: 1100px) {
      width: 40px;
      min-width: 40px;
      height: 40px;
      margin-bottom: 54px;
    }

    @media screen and (max-width: 600px) {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }
}

@media screen and (min-width: 1100px) and (any-hover: hover) {
  .simple-card-with-icon {
    &__card {
      &--animated {
        &:hover {
          .simple-card-with-icon__icon {
            opacity: 0;
            max-height: 0;
            margin-bottom: 0;
          }

          .simple-card-with-icon__card-description-wrapper {
            max-height: auto;
            opacity: 1;
            pointer-events: auto;
            transition: opacity 0.1s ease-in-out;
          }

          .simple-card-with-icon__btn {
            opacity: 1;
          }
        }
      }
    }

    &__btn {
      &:hover {
        border-color: $bgcolor--yellow;
        .simple-card-with-icon__arrow {
          background-color: $bgcolor--yellow;
        }
      }
    }
  }
}

@media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
  .simple-card-with-icon {
    &__cards {
      @include grid(repeat(3, 1fr), auto, 20px, 20px);
      &--static {
        @include grid(repeat(4, 1fr), auto, 20px, 20px);
      }
    }

    &__card {
      &--start {
        grid-column: 1/3;
      }
      &--end {
        grid-column: 2/4;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .simple-card-with-icon {
    &__cards {
      @include grid(repeat(2, 1fr), auto, 20px, 20px);
    }

    #first-row, #second-row, #third-row {
      grid-row: auto;
    }

    &__card {
      height: 200px;
      grid-column: auto;
      &--big, &--start, &--end {
        grid-column: auto;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .simple-card-with-icon {
    &__cards {
      @include grid(repeat(1, 1fr), auto, 20px, 20px);
    }

    &__card {
      height: 76px;
    }
  }
}
</style>
