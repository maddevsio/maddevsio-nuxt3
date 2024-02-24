<script setup lang="ts">
import type { TeamCardsDefaultProps } from '~/components/PageBlocks/TeamCards/interfaces/ITeamCardsDefault'
import { TeamCardsDefault } from '~/components/PageBlocks/TeamCards/classes/TeamCardsDefault'

interface Props {
  slice: TeamCardsDefaultProps
}
const { slice } = defineProps<Props>()
const {
  cards,
  hoverCount,
  toggleImage,
  toggleImageHandler,
} = new TeamCardsDefault(slice)

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section
    id="meet-our-experts"
    class="meet-our-experts"
  >
    <div class="container">
      <div
        class="meet-our-experts__experts-list"
      >
        <div
          v-for="expert in cards"
          :key="expert.name"
          class="meet-our-experts__expert-item"
          @mouseenter="expert.isHover ? toggleImageHandler() : {}"
          @mouseleave="(expert.isHover && hoverCount >= 3) ? toggleImageHandler() : {}"
        >
          <img
            :src="expert.isHover && !toggleImage ? expert.hoverImage.url : expert.image.url"
            :alt="expert.image.alt || 'Image'"
            width="295"
            height="401"
            class="meet-our-experts__expert-item-img"
            data-testid="item-img"
          >
          <div class="meet-our-experts__expert-bottom_content">
            <div class="meet-our-experts__expert-info">
              <div class="meet-our-experts__expert-name">
                {{ expert.name }}
              </div>
              <div class="meet-our-experts__expert-position">
                {{ expert.position }}
              </div>
            </div>
          </div>
          <img
            v-if="expert.linkedin.url"
            loading="lazy"
            :src="$getMediaFromS3('images/core/socialIcons/linkedin-fullfilled.svg')"
            width="24"
            height="24"
            alt="Linkedin"
            class="meet-our-experts__expert-linkedin-link"
          >
          <a
            :href="expert.linkedin.url"
            rel="nofollow noopener"
            target="_blank"
          >
            {{ expert.name }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.meet-our-experts {
  background-color: $bgcolor--white-primary;

  &__main-title {
    @include h3-title;
    text-align: center;
    color: $text-color--black-lighter;
  }

  &__experts-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  &__expert-item {
    position: relative;
    border: 1px solid;
    flex: 0 0 calc(19.66% - 14px);
    margin: 7px;
    border-color: transparent;
    transition: all .2s ease;
    background-color: $bgcolor--cultured;
    @media screen and (max-width: 1300px) {
      flex: 0 0 calc(24.66% - 14px);
    }
    @media screen and (max-width: 1140px) {
      flex: 0 0 calc(33% - 14px);
    }
    @media screen and (max-width: 780px) {
      flex: 0 0 calc(49% - 14px);
    }

    &:hover {
      border-color: $border-color--red;

      .meet-our-experts__expert {
        &-name,
        &-position {
          color: $text-color--white;
          background: $bgcolor--red;
        }
      }
    }

    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      vertical-align: middle;
    }

    a {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: all .3s ease;
      font-size: 0;
      line-height: 0;
      color: transparent;
    }
  }

  &__expert-bottom_content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    bottom: 18px;
  }

  &__expert-info {
    margin-left: 16px;
  }

  &__expert-linkedin-link {
    width: 24px;
    height: 24px;
    display: block;
    position: absolute;
    top: 16px;
    right: 28px;
  }

  &__expert-name,
  &__expert-position {
    width: max-content;
    padding: 4px 8px;
    background-color: $bgcolor--white-darken;
    letter-spacing: -0.02em;
    transition: all .2s ease;
  }

  &__expert-name {
    @include font('Inter', 17px, 700);
  }

  &__expert-position {
    @include font('Inter', 14px, 400);
  }

  @media only screen and (max-width: 890px) {
    &__expert-name {
      font-size: 15px;
    }

    &__expert-position {
      font-size: 12px;
    }

    &__expert-info {
      margin-left: 12px;
    }
  }
  @media screen and (max-width: 780px) {
    &__expert-name {
      font-size: 13px;
    }

    &__expert-position {
      font-size: 11px;
    }
    &__expert-linkedin-link {
      top: 8px;
      right: 20px;
    }
  }

  @media screen and (max-width: 385px) {
    &__expert-name {
      font-size: 11px;
    }

    &__expert-position {
      font-size: 9px;
    }
  }

  @media screen and (max-width: 374px) {
    &__expert-name {
      font-size: 9px;
    }

    &__expert-position {
      font-size: 8px;
    }
  }
}
</style>
