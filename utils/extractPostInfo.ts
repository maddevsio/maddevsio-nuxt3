import type { PrismicPlugin } from '@prismicio/vue'

export const extractPostInfo = (posts: any, $prismic: PrismicPlugin) => {
  return posts.map((postItem: any) => {
    if (!postItem && !postItem.data && !postItem.data.uid) { return null }
    return {
      ...postItem,
      uid: postItem.uid,
      articleLink: linkResolver({ type: postItem.type, uid: postItem.uid }),
      title: postItem.data.title[0].text,
      description: getFirstParagraph(postItem.data.body, 0),
      tag: postItem.tags[0],
      formattedDate: formatDate(postItem.data.date),
      readTime: calculateReadTime(postItem, $prismic).readTime,
      cover: postItem.data.featured_image,
      author: extractAuthorData(postItem.data.post_author),
    }
  }).filter(Boolean)
}
