<script setup lang="ts">
interface Props {
  email: string
  linkedinLink: string
}
defineProps<Props>()
const showEmail = ref(false)
const { $getMediaFromS3 } = useMediaFromS3()

onMounted(() => {
  showEmail.value = true
})
</script>
<template>
  <ul
    v-if="linkedinLink || email"
    class="author-social-list"
  >
    <li
      v-if="email"
      class="author-social-list__item"
    >
      <a
        v-if="showEmail"
        :href="`mailto:${email}`"
        class="author-social-list__link"
        title="When you click, your email client will open or right-click and copy the email address"
      >
        <img
          loading="lazy"
          :src="$getMediaFromS3('/images/Blog/svg/email-icon.svg')"
          alt="Author email"
          width="20"
          height="20"
          class="author-social-list__link-icon"
        >
      </a>
    </li>
    <li
      v-if="linkedinLink"
      class="author-social-list__item"
    >
      <a
        :href="linkedinLink"
        target="_blank"
        rel="noopener"
        class="author-social-list__link"
      >
        <img
          loading="lazy"
          :src="$getMediaFromS3('/images/Blog/svg/linkedin-icon.svg')"
          alt="Author linkedin"
          width="20"
          height="20"
          class="author-social-list__link-icon"
        >
      </a>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.author-social-list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  column-gap: 8px;

  &__item {
    margin: 0;
  }

  &__link-icon {
    width: 20px;
    height: 20px;
    display: block;
    object-fit: cover;
    transition: 0.2s;

    &:hover {
      transform: scale(1.15);
    }

    @media screen and (max-width: 525px) {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
