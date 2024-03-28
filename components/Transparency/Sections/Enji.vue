<script setup lang="ts">
type ListItem = string | { text?: string; url?: string }

interface Column {
  title: string
  backgroundColor: string
  list: ListItem[]
}

const columnsData: Column[] = [
  {
    title: 'To empower observability',
    backgroundColor: '#CBF3FF',
    list: [
      'Increase team observability through asynchronous daily check-ins and automated bot notifications.',
      'Spotlight software development metrics to elevate project performance.',
      'Analyze feature delivery speed and cost for strategic optimization.',
    ],
  },
  {
    title: 'To help with performance and growth',
    backgroundColor: '#DAD9FF',
    list: [
      'Extracts and evaluates data from diverse work sources.',
      'Predicts burnout risks with AI-fueled strategies for resource optimization.',
      {
        text: 'View details',
        url: 'https://enji.ai/',
      },
    ],
  },
]

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="enji">
    <div class="container enji__container">
      <div class="enji__header">
        <h2
          class="enji__header-title"
        >
          Embracing transparency with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="69"
            viewBox="0 0 72 69"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M67.0918 33.3015L68.3886 1.38155C68.4005 1.0902 68.1281 0.872041 67.8496 0.961034C61.1327 3.10723 49.5258 8.9008 44.5354 17.6592C43.6009 20.0006 42.7977 22.8908 42.1413 26.9033C41.7778 26.2317 40.2083 20.9433 41.3095 18.6215C38.2514 18.4152 35.5471 18.344 33.6471 18.3206L33.7109 6.43734C33.7124 6.1482 33.434 5.94112 33.16 6.03595C26.6685 8.2827 14.7568 14.7055 13.2635 23.8218C5.25424 28.9596 -0.626579 37.1846 0.0535057 46.3012C0.0535065 59.7897 14.7753 67.8479 25.8323 67.9767L25.8592 67.9783C35.2811 68.5371 59.8738 69.9958 71.7759 48.4844C69.9453 49.1435 68.7758 48.4844 68.7758 48.4844C68.7758 48.4844 70.7587 44.8625 70.7587 41.3944C69.3096 42.0762 67.8211 42.5217 66.3328 42.8228C66.9557 39.9631 67.062 37.117 67.0918 33.3015ZM10.4527 34.0195C8.9736 34.0195 7.68836 35.0502 7.41694 36.4998C6.47087 41.5525 6.15985 45.8672 7.25768 50.0484C7.58713 51.3031 8.77601 52.0997 10.077 52.0997H10.6891C12.6496 52.0997 14.1136 50.3256 13.8512 48.3886C13.3366 44.5894 13.3315 41.534 13.8461 37.7375C14.1089 35.7981 12.6445 34.0195 10.6815 34.0195H10.4527ZM26.4426 36.4998C26.714 35.0502 27.9992 34.0195 29.4783 34.0195H29.7071C31.6701 34.0195 33.1346 35.7981 32.8717 37.7375C32.3572 41.534 32.3622 44.5894 32.8769 48.3886C33.1393 50.3256 31.6753 52.0997 29.7148 52.0997H29.1026C27.8016 52.0997 26.6128 51.3031 26.2833 50.0484C25.1855 45.8672 25.4965 41.5525 26.4426 36.4998Z"
              fill="black"
            />
          </svg>
          Enji.Ai
        </h2>
        <p
          class="enji__header-description"
        >
          As a remote-first company, we prioritize open communication and transparency within our team.
          Our project management tool Enji.ai was born from these very values.
        </p>
      </div>
      <div class="enji__columns">
        <div
          v-for="(col, colIdx) in columnsData"
          :key="`${col.title}-${colIdx}`"
          class="enji__column"
        >
          <h3
            class="enji__column-title"
          >
            {{ col.title }}
          </h3>
          <ul class="enji__column-list">
            <li
              v-for="(item, itemIdx) in col.list"
              :key="`${item}--${itemIdx}`"
              class="enji__column-list-item"
              :class="{ 'enji__column-list-item--with-link': item.url }"
              :style="`background-color: ${col.backgroundColor}`"
            >
              {{ item.url ? '' : item }}
              <a
                v-if="item.url"
                :href="item.url"
                target="_blank"
                rel="noopener"
                class="enji__column-list-item-link"
              >
                {{ item.text }}
                <span class="enji__column-list-item-link-arrow" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img
        loading="lazy"
        :src="$getMediaFromS3('images/transparency/webp/enji-dashboard.webp')"
        alt="Enji Screenshot"
        width="1044"
        height="1342"
        class="enji__screenshot"
      >
    </div>
  </section>
</template>
<style scoped lang="scss">
.enji {
  background: linear-gradient(180deg, rgba(245, 244, 255, 0.00) 0.52%, #F5F4FF 50.83%, rgba(245, 244, 255, 0.00) 100%), $bgcolor--white-primary;
  padding-top: 128px;

  &__container {
    position: relative;
  }

  &__header {
    display: flex;
    gap: 92px;

    &-title {
      @include font('Inter', 64px, 900);
      line-height: 123%;
      letter-spacing: -0.64px;
      color: #000;
      max-width: 540px;

      @include old-safari-support {
        margin-right: 92px;

        @media screen and (max-width: 1140px) {
          margin-right: 35px;
        }

        @media screen and (max-width: 760px) {
          margin-right: 0;
          margin-bottom: 16px;
        }
      }
    }

    &-description {
      @include font('Inter', 21.6px, 400);
      line-height: 125.5%;
      letter-spacing: -0.648px;
      color: $text-color--chinese-black;
      opacity: 0.8;
      max-width: 496px;
      margin-top: 10px;
    }
  }

  &__columns {
    @include grid(repeat(2, 1fr), auto, 22px, 11px);
    margin-top: 56px;

    * {
      box-sizing: border-box;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;

    &-title {
      @include font('Inter', 28.8px, 900);
      line-height: 130%;
      color: $text-color--black-lighter;
      max-width: 393px;
    }

    &:first-child {
      .enji__column-title {
        margin-bottom: 40px;
      }
    }

    &-list {
      display: flex;
      flex-direction: column;
      gap: 19px;
      height: 100%;
      margin-top: 37px;
    }

    &-list-item {
      border-radius: 4.5px;
      @include font('Inter', 21.6px, 400);
      line-height: 160%;
      padding: 19.4px 22.6px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @include old-safari-support {
        margin-bottom: 19px;

        @media screen and (max-width: 1140px) {
          margin-bottom: 16px;
        }
      }

      &--with-link {
        height: 100%;
        background-color: transparent !important;
        padding: 0;
      }

      &-link {
        @include font('Inter', 21.6px, 400);
        line-height: 160%;
        color: $text-color--grey-opacity-40-percent;
        border-radius: 4.5px;
        border: 1px solid $border-color--grey-opacity-40-percent;
        padding: 7px 40.6px 7px 30.6px;
        display: inline-flex;
        align-items: center;
        gap: 22px;
        margin-top: auto;
        background: transparent;
        transition: 0.3s ease-in-out;

        &-arrow {
          @include arrow-top-right-icon($bgcolor--grey-opacity-40-percent);
          width: 13px;
          height: 13px;
          transition: 0.3s ease-in-out;

          @include old-safari-support {
            margin-left: 22px;
          }
        }

        &:hover {
          background: $bgcolor--venetian-red;
          color: $text-color--white-primary;
          border-color: #F5F7F9;

          .enji__column-list-item-link-arrow {
            background-color: #F5F7F9;
          }
        }
      }
    }
  }

  &__screenshot {
    position: absolute;
    right: -873px;
    top: -193px;
    width: 100%;
    max-width: 1150px;
    height: auto;
    display: block;
  }

  @include laptop-media-query {
    padding-top: 200px;

    &__container {
      max-width: 974px;
      margin: 0;
    }

    &__columns {
      margin-top: 106px;
      column-gap: 15px;
    }

    &__column {
      &-list {
        max-width: 397px;
        margin-top: 26px;

        &-item {
          padding-bottom: 34px;
          font-size: 18px;
          padding-left: 16px;

          &--with-link {
            padding: 0;
          }
        }
      }
    }

    &__header {
      gap: 15px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      &-title {
        font-size: 54px;
        max-width: 390px;

        svg {
          width: 61px;
          height: 57.187px;
        }
      }

      &-description {
        max-width: 444px;
      }
    }

    &__screenshot {
      right: -912px;
      top: -400px;
    }
  }

  @media screen and (max-width: 1140px) {
    padding-top: 82px;

    &__header {
      &-title {
        font-size: 32px;
        letter-spacing: -0.32px;
        line-height: 116%;

        svg {
          width: 50px;
          height: 41.187px;
        }
      }

      &-description {
        font-size: 16px;
        letter-spacing: -0.48px;
        margin-top: 0;
        max-width: 292px;
      }
    }

    &__columns {
      margin-top: 52px;
    }

    &__column {
      &-title {
        font-size: 24px;
      }

      &:first-child {
        .enji__column-title {
          margin-bottom: 0;
          max-width: 307px;
        }
      }

      &-list {
        gap: 16px;

        &-item {
          padding-bottom: 22px;

          &--with-link {
            padding: 0;
          }

          &-link {
            font-size: 16px;
            padding: 7px 25.6px 7px 27.6px;
          }
        }
      }
    }

    &__screenshot {
      display: none;
      visibility: hidden;
    }
  }

  @media screen and (max-width: 1026px) {
    .container {
      padding-inline: 77px;
    }

    &__header {
      &-title {
        max-width: 280px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      padding-inline: 56px;
      max-width: 620px;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 760px) {
    padding-top: 48px;
    background: linear-gradient(180deg, #FFF 0%, #EDEAFF 30.97%, #F7F6FF 81.82%, #FFF 100%), $bgcolor--white-primary;

    &__header {
      display: flex;
      flex-direction: column;
      gap: 16px;

      &-title {
        max-width: 280px;
      }

      &-description {
        max-width: 100%;
      }
    }

    &__columns {
      @include grid(repeat(1, 1fr), auto, 22px, 45px);
      margin-top: 16px;
    }

    &__column {
      &-title {
        font-size: 22px;
        max-width: 275px;
      }

      &:first-child {
        .enji__column-title {
          margin-bottom: 0;
          max-width: 275px;
        }
      }

      &-list {
        max-width: 100%;
        margin-top: 12px;

        &-item {
          font-size: 14px;

          &-link {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-top: 10px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    .container {
      padding-inline: 24px;
    }
  }
}
</style>
