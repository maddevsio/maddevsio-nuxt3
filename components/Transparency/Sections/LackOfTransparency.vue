<script setup lang="ts">
const list = [
  'Inefficient, unsuccessful project implementation plan. As a result, project delays.',
  'Challenges related to security concerns, lack of visibility and control over processes, and inadequate protection of confidential information.',
  'Loss of control over the performer\'s work and inability to track team rotation.',
  'If the client communicates only with the PM, not the whole team, then communication cannot be transparent.',
  'Failure to account for hidden costs, as many outsourcing companies work on a fixed-price basis, immediately determines the budget and duration of the project.',
]

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="lack-of-transparency">
    <div class="container lack-of-transparency__container">
      <img
        loading="lazy"
        :src="$getMediaFromS3('images/transparency/webp/transparency-spiral.webp')"
        width="930"
        height="930"
        alt="Lack of Transparency Spiral Image"
        class="lack-of-transparency__spiral"
      >
      <div class="lack-of-transparency__content">
        <h2
          class="lack-of-transparency__title"
        >
          Lack of transparency hinders business success
        </h2>
        <p
          class="lack-of-transparency__subtitle"
        >
          We put together a list of common problems frequently encountered in tech companies that
          require immediate attention and resolution:
        </p>
        <ul class="lack-of-transparency__list">
          <li
            v-for="(item, idx) in list"
            :key="`${item}-${idx}`"
            class="lack-of-transparency__list-item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.lack-of-transparency {
  padding: 162px 0;
  background: #fff;

  &__container {
    position: relative;
  }

  &__spiral {
    position: absolute;
    top: -270px;
    right: -490px;
    width: 1100px;
    height: auto;
    display: block;
  }

  &__content {
    max-width: 833px;
  }

  &__title {
    @include font('Inter', 54px, 700);
    line-height: 125%;
    color: $text-color--black-lighter;
    margin-bottom: 17px;
    max-width: 770px;
  }

  &__subtitle {
    @include font('Inter', 22px, 400);
    line-height: 30px;
    letter-spacing: -1px;
    color: $text-color--black-oil;
    margin-bottom: 48px;
  }

  &__list {
    padding: 0;
    margin: 0;
    max-width: 765px;

    &-item {
      display: flex;
      gap: 29px;
      @include font('Inter', 22px, 400);
      line-height: 30px;
      letter-spacing: -1px;
      margin-bottom: 30px;

      &:last-child {
        margin-bottom: 0;
      }

      &::before {
        content: '';
        background-color: $text-color--red;
        width: 15px;
        min-width: 15px;
        height: 15px;
        display: block;
        margin-top: 7px;

        @include old-safari-support {
          margin-right: 29px;

          @media screen and (max-width: 1026px) {
            margin-right: 24px;
          }

          @media screen and (max-width: 576px) {
            margin-right: 14px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1440px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
    padding-top: 110px;
    padding-bottom: 146px;

    &__spiral {
      right: -460px;
    }

    &__title {
      font-size: 48px;
      max-width: 680px;
    }

    &__subtitle {
      margin-bottom: 48px;
      max-width: 644px;
    }

    &__list {
      max-width: 690px;

      &-item {
        &:nth-child(1) {
          max-width: 650px;
        }

        &:nth-child(2),
        &:nth-child(3) {
          max-width: 630px;
        }
      }
    }
  }

  @media screen and (max-width: 1270px) {
    &__spiral {
      top: -90px;
      right: -320px;
      width: 860px;
    }
  }

  @media screen and (max-width: 1180px) {
    margin-bottom: 0;
    padding-bottom: 48px;

    &__spiral {
      top: 50px;
      right: -340px;
      width: 700px;
    }
  }

  @media screen and (max-width: 1026px) {
    padding-top: 0;

    .container {
      padding-inline: 77px;
    }

    &__spiral {
      top: 25px;
      right: -165px;
      width: 550px;
    }

    &__title {
      font-size: 30px;
      max-width: 410px;
    }

    &__subtitle {
      font-size: 18px;
      line-height: 30px;
      margin-bottom: 32px;
      max-width: 520px;
    }

    &__list {
      padding: 0;
      margin: 0;
      max-width: 480px;

      &-item {
        font-size: 16px;
        line-height: 150%;
        gap: 24px;
        margin-bottom: 15px;

        &:nth-child(2),
        &:nth-child(4),
        &:nth-child(5) {
          max-width: 470px;
        }

        &:nth-child(3) {
          max-width: 450px;
        }

        &:last-child {
          margin-bottom: 0;
        }

        &::before {
          width: 10px;
          height: 10px;
          min-width: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    &__spiral {
      top: 95px;
      right: -200px;
      width: 450px;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      padding-inline: 56px;
    }

    &__list-item {
      line-height: 150%;
    }
  }

  @media screen and (max-width: 760px) {
    &__spiral {
      display: none;
      visibility: hidden;
    }
  }

  @media screen and (max-width: 576px) {
    .container {
      padding-inline: 24px;
    }

    &__list-item {
      gap: 14px;
    }
  }

  @media screen and (max-width: 480px) {
    padding-top: 0;
  }
}
</style>
