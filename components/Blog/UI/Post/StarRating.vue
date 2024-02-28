<script setup lang="ts">
import axios from 'axios'

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },

  pageId: {
    type: String,
    default: null,
  },
})

const route = useRoute()
const emit = defineEmits(['rated'])
const { $getMediaFromS3 } = useMediaFromS3()

const maxStars = ref(5)
const stars = ref(0)
const rated = ref(false)
const haveRating = ref(false)

const rate = (star: number | string) => {
  if (
    typeof star === 'number' &&
    star <= maxStars.value &&
    star >= 0
  ) {
    stars.value = star
    rated.value = true
    setRating(star)
    emit('rated')
  }
}

const getRating = async () => {
  try {
    const { data } = await axios.get(`/api/rating/?pageId=${ props.pageId }`)
    stars.value = Math.round(data)
    haveRating.value = true
  } catch (e) {
    stars.value = 0
  }
}

const setRating = async (star: number) => {
  const payload = {
    userId: JSON.parse(localStorage.getItem('GA_USER_ID') || ''),
    pageSlug: `https://maddevs.io${ route.path }`,
    pageId: props.pageId,
    pageName: document.title,
    isActive: false,
    rating: star,
  }
  try {
    await axios.post('/api/rating', payload)
  } catch (e) {
    // eslint-disable-next-line
    console.log(e)
  }
}

onMounted(async () => {
  await getRating()
})
</script>
<template>
  <div
    class="star-rating"
    :class="{ 'star-rating--is-mobile': isMobile }"
  >
    <p
      v-if="!rated"
      class="star-rating__title"
    >
      Rate this article:
    </p>
    <ul
      v-if="!rated"
      class="star-rating__list"
    >
      <li
        v-for="star in maxStars"
        :key="star"
        class="star-rating__list-item"
        :class="{ 'star-rating__list-item--active': star <= stars }"
      >
        <button
          type="button"
          class="star-rating__button"
          :disabled="rated"
          @click="rate(star)"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="star-rating__icon"
              d="M13.9098 4.20288C14.0748 3.77714 14.6772 3.77714 14.8422 4.20288L17.0397 9.87273C17.1106 10.0558 17.2821 10.1804 17.4781 10.1913L23.5495 10.5291C24.0054 10.5545 24.1916 11.1274 23.8377 11.4159L19.1244 15.2579C18.9722 15.382 18.9067 15.5836 18.9569 15.7733L20.5117 21.652C20.6285 22.0934 20.1411 22.4475 19.7574 22.2001L14.6469 18.9047C14.482 18.7983 14.27 18.7983 14.105 18.9047L8.99454 22.2001C8.6108 22.4475 8.12345 22.0934 8.2402 21.652L9.79504 15.7733C9.84523 15.5836 9.77973 15.382 9.62758 15.2579L4.9143 11.4159C4.56038 11.1274 4.74653 10.5545 5.20243 10.5291L11.2738 10.1913C11.4698 10.1804 11.6413 10.0558 11.7123 9.87273L13.9098 4.20288Z"
              fill="#A0A0A1"
            />
          </svg>
        </button>
      </li>
    </ul>
    <span
      v-if="!haveRating && !rated"
      class="star-rating__no-rating"
    >
      This article has no ratings yet. Rate it now!
    </span>
    <Transition name="fade">
      <div
        v-if="rated"
        class="star-rating__success-message"
      >
        <img
          :src="$getMediaFromS3('images/Blog/svg/success-star-rated.svg')"
          alt="Success icon"
          width="26"
          height="17"
          class="star-rating__success-message-icon"
        >
        <p class="star-rating__success-message-text">
          Thank you!
        </p>
      </div>
    </Transition>
  </div>
</template>
<style lang="scss" scoped>
.star-rating {
  max-width: 186px;

  * {
    color: $text-color--black-oil;
  }

  &__title {
    @include font('Inter', 14px, 700);
    line-height: 19px;
    margin-bottom: 10px;
  }

  &__list {
    display: flex;
    align-items: center;
    list-style: none;
    padding-left: 0 !important;

    &:hover {
      .star-rating__list-item {
        .star-rating__icon {
          fill: $bgcolor--red;
        }
      }
    }

    &-item {
      cursor: pointer;
      margin-bottom: 8px !important;

      &--active {
        .star-rating__icon {
          fill: $bgcolor--red;
        }
      }

      &:hover {
        &~.star-rating__list-item {
          .star-rating__icon {
            fill: $text-color--grey-opacity-40-percent;
          }
        }
      }

      &:nth-child(odd) {
        padding: 0 5px;
      }

      &:nth-child(even) {
        padding: 0 5px;
      }

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }

  &__icon {
    transition: 0.3s;
  }

  &__button {
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  &__success-message {
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 10px;
    width: 186px;

    &-icon {
      width: 26px;
      height: 17px;
      display: block;
    }

    &-text {
      @include font('Inter', 14px, 700);
      line-height: 19px;
    }
  }

  &__no-rating {
    @include font('Inter', 12px, 600);
    line-height: 19px;
    color: $text-color--grey-opacity-40-percent;
    margin-top: 13px;
  }

  @media screen and (max-width: 1185px) {
    max-width: 250px;

    &__list { // reset deep styles in slices/index.vue
      list-style: none !important;
      padding-left: 0 !important;

      &-item {
        margin-bottom: 0 !important;
      }
    }

    &__title {
      margin: 0 0 11px !important;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active was before 2.1.8 version */ {
  transform: translateY(-100px) translateX(5%) scale(0.9);
  opacity: 0;
}
</style>
