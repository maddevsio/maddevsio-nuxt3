<script setup lang="ts">
const cardsData = [
  {
    icon: {
      path: 'images/transparency/svg/engagement.svg',
      dimensions: {
        width: 256.892,
        height: 263.292,
      },
    },
    title: 'Engagement',
    subtitle: 'Achieving mutual understanding and joint success',
    description: 'By ensuring the participation of customers and the full engagement of our specialists at all stages of interaction, we together attain specific, expected, and measurable benefits for the customer\'s business, exceeding mere task completion.',
  },
  {
    icon: {
      path: 'images/transparency/svg/accountability.svg',
      dimensions: {
        width: 231,
        height: 249.092,
      },
    },
    title: 'Accountability',
    subtitle: 'Ensuring reliability and consistency across all processes',
    description: 'Through asynchronous communication and documentation of all interactions in trackable software, we ensure clear time and resource management and immediate information access for all stakeholders.',
  },
  {
    icon: {
      path: 'images/transparency/svg/awareness.svg',
      dimensions: {
        width: 349.632,
        height: 210.387,
      },
    },
    title: 'Awareness',
    subtitle: 'Providing swift response and continuous improvement',
    description: 'Through continuous feedback analysis and ongoing process improvement, we enable timely detection and escalation of arising issues with full responsibility for tasks from start to finish.',
  },
]

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="transparency-principles">
    <div class="container transparency-principles__container">
      <LazyTransparencyUITitle
        title-tag="h2"
        with-subtitle
        max-width-title="1043px"
        max-width-subtitle="761px"
      >
        <template #title>
          Our principles
        </template>
        <template #subtitle>
          Our principles and company
          <!-- eslint-disable -->
          <NuxtLink to="/our-philosophy/">values</NuxtLink> drive our approach, ensuring open and honest interactions,
          <!-- eslint-enable -->
          effective collaboration, and a strong sense of accountability.
        </template>
      </LazyTransparencyUITitle>
      <div class="transparency-principles__cards">
        <div
          v-for="(card, cardIdx) in cardsData"
          :key="`${card.title}-${cardIdx}`"
          class="transparency-principles__card"
        >
          <div class="transparency-principles__card-content">
            <h3
              class="transparency-principles__card-title"
            >
              {{ card.title }}
            </h3>
            <p
              class="transparency-principles__card-subtitle"
            >
              {{ card.subtitle }}
            </p>
            <p
              class="transparency-principles__card-description"
            >
              {{ card.description }}
            </p>
          </div>
          <div class="transparency-principles__card-image-wrapper">
            <img
              loading="lazy"
              :src="$getMediaFromS3(card.icon.path)"
              :alt="card.title"
              :width="card.icon.dimensions.width"
              :height="card.icon.dimensions.height"
              class="transparency-principles__card-icon"
              :style="`max-width: ${card.icon.dimensions.width}px`"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.transparency-principles {
  padding-top: 128px;
  background: #fff;

  &__cards {
    margin-top: 48px;
  }

  &__card {
    background-color: $bgcolor--cultured;
    padding: 48px 55px;
    border-radius: 10px;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 73px;

    &:nth-child(2) {
      flex-direction: row-reverse;

      .transparency-principles__card-image-wrapper {
        text-align: left;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }

    &-content {
      width: 65%;
    }

    &-title,
    &-subtitle,
    &-description {
      @include font('Inter', 40px, 700);
      line-height: 100%;
      color: $text-color--chinese-black;
      letter-spacing: -1px;
    }

    &-subtitle {
      font-size: 28px;
      font-weight: 600;
      margin-top: 22px;
      line-height: 30px;
    }

    &-description {
      font-size: 22px;
      font-weight: 400;
      margin-top: 38px;
      line-height: 30px;
    }

    &-image-wrapper {
      width: 30%;
      text-align: right;
    }

    &-icon {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
    padding-top: 72px;

    &__card {
      margin-bottom: 24px;
      padding-top: 43px;

      &-subtitle {
        margin-top: 13px;
        max-width: 400px;
      }

      &-description {
        margin-top: 8px;
      }

      &:first-child {
        .transparency-principles__card-icon {
          max-width: 240.892px !important;
          height: 246.894px;
        }

        .transparency-principles__card-subtitle {
          max-width: 435px;
        }
      }

      &:nth-child(2) {
        gap: 52px;

        .transparency-principles__card-content {
          width: 73%;
        }

        .transparency-principles__card-image-wrapper {
          padding-left: 33px;
        }

        .transparency-principles__card-icon {
          max-width: 187px !important;
          height: 201.646px;
        }

        .transparency-principles__card-subtitle {
          max-width: 500px;
        }
      }

      &:last-child {
        .transparency-principles__card-icon {
          max-width: 301.819px !important;
          height: 181.617px;
        }
      }
    }
  }

  @media screen and (max-width: 1026px) {
    padding-top: 48px;

    .container {
      padding-inline: 77px;
    }

    &__card {
      padding: 19px 18px 32px;

      &-title {
        font-size: 24px;
        line-height: 130%;
      }

      &-subtitle {
        font-size: 16px;
        margin-top: 5px;
        line-height: 130%;
      }

      &-description {
        font-size: 14px;
        margin-top: 5px;
        line-height: 130%;
      }

      &:first-child {
        .transparency-principles__card-icon {
          max-width: 189.353px !important;
          height: 120px;
        }
      }

      &:nth-child(2) {
        gap: 135px;
        padding-top: 24px;

        .transparency-principles__card-icon {
          max-width: 145px !important;
          height: 120px;
        }

        .transparency-principles__card-image-wrapper {
          padding-left: 0;
        }
      }

      &:last-child {
        .transparency-principles__card-icon {
          max-width: 223.82px !important;
          height: 120px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      padding-inline: 56px;
    }

    &__cards {
      margin-top: 32px;
    }

    &__card {
      padding-top: 17px;
    }
  }

  @media screen and (max-width: 576px) {
    .container {
      padding-inline: 24px;
    }

    &__card {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 5px;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      &:nth-child(2) {
        gap: 5px;
        flex-direction: column-reverse;

        .transparency-principles__card-content {
          width: 100%;
        }
      }

      &-content {
        width: 100%;
      }

      &-image-wrapper {
        text-align: left;
      }

      &:first-child {
        .transparency-principles__card-icon {
          max-width: 116.779px !important;
          height: 100px;
        }
      }

      &:nth-child(2) {
        .transparency-principles__card-icon {
          max-width: 92.737px !important;
          height: 100px;
        }
      }

      &:last-child {
        .transparency-principles__card-icon {
          max-width: 144px !important;
          height: 88.005px;
        }
      }
    }
  }
}
</style>
