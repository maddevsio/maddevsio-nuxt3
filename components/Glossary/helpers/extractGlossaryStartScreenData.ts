import type { GlossaryPage } from '~/interfaces/common/commonInterfaces'

export const extractGlossaryStartScreenData = (glossaryPageData: GlossaryPage) => {
  try {
    return {
      uid: glossaryPageData.uid,
      title: glossaryPageData?.data?.title,
      subtitle: glossaryPageData?.data?.subtitle,
      description: glossaryPageData?.data?.description,
      wordTitle: glossaryPageData?.data?.word_title,
      tagForSubtitle: glossaryPageData?.tags.filter(tag => !tag.includes('Glossary') && !tag.includes('Words'))[0] || '',
      image: glossaryPageData?.data?.image,
    }
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.log(e)
    throw new Error(e)
  }
}
