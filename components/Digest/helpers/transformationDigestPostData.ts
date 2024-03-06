import { DigestPostHeader } from '~/components/Digest/classes/Post/DigestPostHeader'
import { DigestPostContent } from '~/components/Digest/classes/Post/DigestPostContent'
import { DigestPostFooter } from '~/components/Digest/classes/Post/DigestPostFooter'

export const transformationDigestPostData = (digest: any) => {
  if (!Object.keys(digest).length) { return {} }
  try {
    return {
      digestPostHeader: new DigestPostHeader({
        uid: digest.uid,
        title: digest.title,
        subtitle: digest.subtitle,
        featuredImage: digest.featuredImage,
        digestsList: digest.digestsList,
      }),
      digestPostContent: new DigestPostContent({
        slices: digest.slices,
        tableOfContents: digest.tableOfContents,
        metaTitle: digest.metaTitle,
        openGraphUrl: digest.openGraphUrl,
      }),
      digestPostFooter: new DigestPostFooter({
        uid: digest.uid,
        date: digest.date,
      }),
    }
  } catch (e) {
    console.log(e) // eslint-disable-line
  }
}
