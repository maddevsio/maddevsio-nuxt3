import { PostHeader } from '~/components/Blog/classes/Post/PostHeader'
import { PostContent } from '~/components/Blog/classes/Post/PostContent'
import { PostServiceContent } from '~/components/Blog/classes/Post/PostServiceContent'
import { PostContentLocker } from '~/components/Blog/classes/Post/PostContentLocker'

export const transformationPostData = (post: any) => {
  if (!Object.keys(post).length) { return {} }
  try {
    return {
      postHeader: new PostHeader({
        uid: post.uid,
        type: post.type,
        title: post.title,
        subtitle: post.subtitle,
        featuredImage: post.featuredImage,
        date: post.date,
        readTime: post.readTime,
        updatedDate: post.updatedDate,
        postAuthor: post.postAuthor,
        postCoAuthor: post.postCoAuthor,
        tags: post.tags,
        clusterData: post.clusterData,
        servicePost: post.withForm,
      }),
      postContent: new PostContent({
        slices: post.slices,
        type: post.type,
        metaTitle: post.metaTitle,
        openGraphUrl: post.openGraphUrl,
        tableOfContents: post.tableOfContents,
        postAuthor: post.postAuthor,
        postCoAuthor: post.postCoAuthor,
        recommendedPosts: post.recommendedPosts,
        exploreChapters: post.clusterData && post.clusterData.items,
      }),
      postServiceContent: new PostServiceContent({
        slices: post.slices,
        type: post.type,
        metaTitle: post.metaTitle,
        openGraphUrl: post.openGraphUrl,
        tableOfContents: post.tableOfContents,
        postAuthor: post.postAuthor,
        postCoAuthor: post.postCoAuthor,
        recommendedPosts: post.recommendedPosts,
        servicePost: post.withForm,
        postForm: post.postForm,
      }),
      contentLocker: new PostContentLocker(),
    }
  } catch (e) {
    console.log(e) // eslint-disable-line
  }
}
