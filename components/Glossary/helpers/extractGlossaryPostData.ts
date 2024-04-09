import type {
  GlossaryPage,
  TransformedGlossaryPost,
} from '~/interfaces/common/commonInterfaces'
import { transformGlossaryTags } from '~/components/Glossary/helpers/transformGlossaryTags'

export const extractGlossaryPostData = (glossaryPostData: GlossaryPage): TransformedGlossaryPost => {
  try {
    return {
      uid: glossaryPostData?.uid,
      wordTitle: glossaryPostData?.data.word_title,
      wordPageTitle: glossaryPostData?.data.word_page_title,
      wordPageDescription: glossaryPostData?.data.word_page_description,
      slices: glossaryPostData?.data?.body.filter(slice => slice.slice_type !== 'table_of_contents'),
      tableOfContents: glossaryPostData.data.body.find(slice => slice.slice_type === 'table_of_contents')!,
      createdDate: formatDate(glossaryPostData?.data?.created_date),
      updatedDate: glossaryPostData?.data?.updated_date ? formatDate(glossaryPostData?.data?.updated_date, true, true) : '',
      author: glossaryPostData?.data?.author,
      coAuthor: glossaryPostData?.data?.co_author,
      tags: transformGlossaryTags(glossaryPostData?.tags),
    }
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.log(e)
    throw new Error(e)
  }
}
