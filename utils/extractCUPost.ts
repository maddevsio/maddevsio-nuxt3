import type { PrismicPlugin } from '@prismicio/vue'

export const extractCUPost = (cuPost: any[], $prismic: PrismicPlugin) => {
  return cuPost.map(item => {
    if (!item.cu_post && item.cu_post.uid && item.cu_post.data.body) { return null }
    return {
      ...item,
      cu_post: {
        ...item.cu_post,
        uid: item.cu_post.uid,
        articleLink: linkResolver({ type: item.cu_post.type, uid: item.cu_post.uid }),
        title: item.cu_post.data.title[0].text,
        description: getFirstParagraph(item.cu_post.data.body, 0),
        tag: item.cu_post.tags[0],
        formattedDate: formatDate(item.cu_post.data.date),
        updatedFormattedDate: item.cu_post.data.updated_date ? formatDate(item.cu_post.data.updated_date) : '',
        readTime: calculateReadTime(item.cu_post, $prismic).readTime,
        cover: item.cu_post.data.featured_image,
        author: extractAuthorData(item.cu_post.data.post_author),
      },
    }
  })
}
