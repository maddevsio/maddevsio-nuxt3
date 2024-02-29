<script setup lang="ts">
import type { PropType } from 'vue'
import type { PostAuthorOldProps } from '~/components/PageBlocks/Authors/interface/IPostAuthorOld'
import { PostAuthorOld } from '~/components/PageBlocks/Authors/classes/PostAuthorOld'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<PostAuthorOldProps>,
    default: () => ({}),
  },
})

const injectedPostAuthor = inject('postAuthor')
const injectedPostCoAuthor = inject('postCoAuthor')
const injectedOpenGraphUrl = inject('openGraphUrl') as string
const injectedMetaTitle = inject('metaTitle') as string

const {
  openGraphUrl,
  metaTitle,
  author,
  contributors,
  coAuthor,
  getAuthorData,
} = new PostAuthorOld(slice, {
  author: injectedPostAuthor,
  coAuthor: injectedPostCoAuthor,
  openGraphUrl: injectedOpenGraphUrl,
  metaTitle: injectedMetaTitle,
})

const coAuthorData = ref()

const authorData = getAuthorData(author!, 'author')
if (coAuthor) {
  coAuthorData.value = getAuthorData(coAuthor, 'coAuthor')
}

const { isMobile } = useCheckMobile(1185)
</script>
<template>
  <div>
    <LazySharedArticleMobileSocialSectionForPost
      v-if="isMobile"
      :open-graph-url="openGraphUrl"
      :meta-title="metaTitle"
    />
    <div
      v-if="author && author.uid"
      :class="[contributors.length? 'author-slice author-slice--with-contributor' : 'author-slice']"
    >
      <div class="author-slice__info">
        <LazySharedArticleAuthorInArticle
          :author="author"
          :author-image="authorData.authorImage"
          :author-link="authorData.authorLink"
          :author-social-networks="authorData.authorSocialNetworks"
        />
        <LazySharedArticleAuthorInArticle
          v-if="coAuthor && coAuthor.uid && !contributors.length"
          :is-co-author="true"
          :author="coAuthor"
          :author-image="coAuthorData?.coAuthorImage"
          :author-link="coAuthorData?.coAuthorLink"
          :author-social-networks="coAuthorData.coAuthorSocialNetworks"
        />
      </div>
      <LazySharedArticleContributors
        v-if="contributors.length"
        :contributors="contributors"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.author-slice {
  padding-top: 20px;
  margin: 70px 0;
  border-top: 1px solid $border-color--red;
  @media only screen and (max-width: 1024px) {
    margin: 49px 0;
    flex-direction: column;
  }

  &--with-contributor {
    display: flex;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    @media only screen and (max-width: 1024px) {
      flex-direction: column;
      align-items: start;
    }
  }

  @media screen and (max-width: 1185px) {
    margin-top: 24px;
  }
}
</style>
