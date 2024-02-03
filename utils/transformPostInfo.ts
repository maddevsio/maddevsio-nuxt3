import type { PrismicPlugin } from '@prismicio/vue'

export const transformPostInfo = (posts: any, $prismic: PrismicPlugin) => {
  return posts.map((postItem: any) => ({
    ...postItem,
    uid: postItem.data.uid,
    articleLink: linkResolver({ type: postItem.data.type, uid: postItem.data.uid }),
    title: postItem.data!.data.title[0].text,
    description: getFirstParagraph(postItem.data.data.body, 0),
    tag: postItem.data!.tags[0],
    formattedDate: formatDate(postItem.data!.data.date),
    readTime: calculateReadTime(postItem.data, $prismic).readTime,
    cover: postItem.data.data.featured_image,
    author: extractAuthorData(postItem.data.data.post_author),
  }))
}
