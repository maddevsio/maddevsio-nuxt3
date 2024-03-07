<script setup lang="ts">
const cardsData = [
  {
    icon: 'images/transparency/svg/arrows.svg',
    description: 'Increasing trust through customer involvement',
  },
  {
    icon: 'images/transparency/svg/comment.svg',
    description: 'Building trust with shared information',
  },
  {
    icon: 'images/transparency/svg/people.svg',
    description: 'Transparent pricing, worklogs, and communication',
  },
]

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="staying-committed">
    <div class="container staying-committed__container">
      <h3
        class="staying-committed__title"
      >
        Staying committed to our principles of transparency, we are:
      </h3>
      <div class="staying-committed__cards">
        <div
          v-for="(card, cardIdx) in cardsData"
          :key="`${card.icon}-${cardIdx}`"
          class="staying-committed__card"
        >
          <img
            loading="lazy"
            :src="$getMediaFromS3(card.icon)"
            :alt="card.description"
            width="45"
            height="45"
            class="staying-committed__card-icon"
          >
          <p
            class="staying-committed__card-description"
          >
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.staying-committed {
  padding-top: 128px;
  background: #fff;

  &__title {
    @include font('Inter', 32px, 700);
    line-height: 130%;
    color: $text-color--black-lighter;
  }

  &__cards {
    @include grid(repeat(3, 1fr), auto, 18px, 11px);
    margin-top: 48px;
  }

  &__card {
    background: $bgcolor--cultured;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 25px;
    padding: 44px 22px;

    &-icon {
      width: 45px;
      height: 45px;
      display: block;
    }

    &-description {
      @include font('Inter', 16px, 500);
      line-height: 24px;
      color: $text-color--chinese-black;
    }
  }

  @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
    padding-top: 72px;

    &__cards {
      margin-top: 32px;
    }
  }

  @media screen and (max-width: 1026px) {
    padding-top: 48px;

    .container {
      padding-inline: 77px;
    }

    &__title {
      font-size: 24px;
    }

    &__cards {
      margin-top: 25px;
    }

    &__card {
      flex-direction: column;
      align-items: flex-start;
      gap: 17px;
      padding: 23px 15.5px 18px;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      padding-inline: 56px;
    }
  }

  @media screen and (max-width: 650px) {
    &__title {
      font-size: 20px;
    }

    &__cards {
      @include grid(repeat(1, 1fr), auto, 18px, 11px);
      margin-top: 24px;
    }
  }

  @media screen and (max-width: 576px) {
    .container {
      padding-inline: 24px;
    }
  }
}
</style>
