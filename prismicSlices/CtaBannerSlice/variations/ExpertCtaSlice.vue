<template>
  <div
    class="expert-cta-slice"
  >
    <div class="expert-cta-slice__container container">
      <div class="expert-cta-slice__wrapper">
        <div
          class="expert-cta-slice__experts"
          :class="{'expert-cta-slice__experts--two': experts.length === 2}"
        >
          <NuxtLink
            v-for="(expert, expertIdx) in experts"
            :key="`expert-cta-slice${expertIdx}`"
            :to="expert.btnLinkUrl"
            class="expert-cta-slice__expert"
          >
            <img
              loading="lazy"
              :src="expert.image && expert.image.url.replace('compress,', '')"
              :alt="expert.image && expert.image.alt || expert.name || 'Image'"
              width="544"
              height="502"
              class="expert-cta-slice__img"
            >
            <div class="expert-cta-slice__labels">
              <h3 class="expert-cta-slice__expert-name">
                {{ expert.name }}
              </h3>
              <p class="expert-cta-slice__expert-position">
                {{ expert.position }}
              </p>
              <div
                v-if="expert.btnText"
                class="expert-cta-slice__btn"
              >
                <span>{{ expert.btnText }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExpertCtaSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  setup(props) {
    return {
      experts: props.slice.items || [],
    }
  },
})
</script>

<style lang="scss">
  .expert-cta-slice {
    background-color: $bgcolor--white-primary;
    &__wrapper {
        background-color: $bgcolor--white;
        * {
          box-sizing: border-box;
        }
      @media(max-width: 1024px) {
        padding-top: 10px;
      }
      @media(max-width: 550px) {
        padding-top: 20px;
      }
    }

    &__experts {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 36px;
      &--two {
        justify-content: space-around;
        @media screen and (max-width: 1024px) {
          justify-content: center;
        }
      }
      @media screen and (max-width: 1024px) {
        padding-top: 0;
      }
    }

    &__expert {
      position: relative;
      max-width: 544px;
      width: 100%;
      @media screen and (max-width: 1024px) {
        &:nth-child(2) {
          display: none;
        }
      }
    }

    &__labels {
      position: absolute;
      bottom: 88px;
      left: 60px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: max-content;
      @media screen and (max-width: 1024px) {
        bottom: 20px;
      }
      @media screen and (max-width: 550px) {
        left: 10px;
        bottom: 17px;
      }
    }

    &__btn {
      width: 100%;
      max-height: 0;
      background-color: $bgcolor--venetian-red;
      color: $text-color--white-primary;
      transition: max-height 0.4s ease-in-out;
      overflow: hidden;
      span {
        display: block;
        padding: 6px 5px;
        opacity: 0;
        transition: 0.4s ease-in-out;
      }
      @media screen and (max-width: 1024px) {
        max-height: 52px;
        span {
          opacity: 1;
        }
      }

      @media screen and (max-width: 550px) {
        span {
          padding: 3px 4px;
        }
      }
    }

    &__expert-name, &__expert-position {
      background-color: $bgcolor--white-primary;
      color: $text-color--chinese-black;
    }

    &__expert-name {
      @include font('Inter', 20px, 700);
      line-height: 90%;
      min-width: 175px;
      @media screen and (max-width: 1024px)  {
        min-width: 132px;
      }
    }

    &__expert-position {
      min-width: 200px;
    }

    &__expert-position, &__btn {
      @include font('Inter', 18px, 400);
      line-height: 100%;
    }

    &__expert-position, &__expert-name, &__btn {
      @media screen and (max-width: 1024px)  {
        font-size: 16px;
        line-height: 113%;
      }

      @media screen and (max-width: 550px)  {
        font-size: 14px;
        line-height: 115%;
      }
    }

    &__expert-name, &__expert-position {
      padding: 7px 15px 7px 5px;
      @media screen and (max-width: 992px)  {
        padding: 3px 10px 3px 3px;
      }
      @media screen and (max-width: 550px)  {
        padding: 2px 10px 2px 4px;
      }
    }

    &__img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: contain;
      @media screen and (max-width: 1024px) {
        max-height: 442px;
      }
    }
  }

@media screen and (min-width: 1024px) and (any-hover: hover) {
    .expert-cta-slice {
      &__wrapper {
        &:hover {
          .expert-cta-slice__btn {
            max-height: 52px;
            span {
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>
