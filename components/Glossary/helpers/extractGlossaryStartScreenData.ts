import type { GlossaryPost } from '~/interfaces/common/commonInterfaces'

export const extractGlossaryStartScreenData = (glossaryPostData: GlossaryPost) => {
  try {
    return {
      uid: glossaryPostData.uid,
      title: glossaryPostData?.data?.title,
      subtitle: glossaryPostData?.data?.subtitle,
      description: glossaryPostData?.data?.description,
      wordTitle: glossaryPostData?.data?.word_title,
      tagForSubtitle: glossaryPostData?.tags.filter(tag => !tag.includes('Glossary') && !tag.includes('Words'))[0] || '',
      image: glossaryPostData?.data?.image,
    }
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.log(e)
    throw new Error(e)
  }
}
