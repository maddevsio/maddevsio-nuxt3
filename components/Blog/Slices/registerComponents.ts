// @ts-nocheck
export const blogComponents = {
  PageBlocksTextText: hydrateWhenVisible(() => import('../../PageBlocks/Text/Text.vue')),
  PageBlocksImageCaptonBlog: hydrateWhenVisible(() => import('../../PageBlocks/Image/CaptonBlog.vue')),
  PageBlocksTableBlog: hydrateWhenVisible(() => import('../../PageBlocks/Table/Blog.vue')),
  PageBlocksOrderedListDefault: hydrateWhenVisible(() => import('../../PageBlocks/OrderedList/Default.vue')),
  PageBlocksEmbedBlog: hydrateWhenVisible(() => import('../../PageBlocks/Embed/Blog.vue')),
  PageBlocksAuthorsPost: hydrateWhenVisible(() => import('../../PageBlocks/Authors/Post.vue')),
  PageBlocksDividerBlog: hydrateWhenVisible(() => import('../../PageBlocks/Divider/Blog.vue')),
  PageBlocksAccordionForPost: hydrateWhenVisible(() => import('../../PageBlocks/Accordion/ForPost.vue')),
  PageBlocksQuoteBlog: hydrateWhenVisible(() => import('../../PageBlocks/Quote/Blog.vue')),
  PageBlocksAuthorsPostOld: hydrateWhenVisible(() => import('../../PageBlocks/Authors/PostOld.vue')),
  PageBlocksGithubGistDefault: hydrateWhenVisible(() => import('../../PageBlocks/GithubGist/Default.vue')),
  PageBlocksImageWithAttributes: hydrateWhenVisible(() => import('../../PageBlocks/Image/WithAttributes.vue')),
  PageBlocksCodeBlock: hydrateWhenVisible(() => import('../../PageBlocks/CodeBlock/CodeBlock.vue')),
  prismicSlicesTechAndToolsNewSlice: hydrateWhenVisible(() => import('../../../prismicSlices/TechAndToolsNewSlice/index.vue')),
  prismicSlicesSubscribeFormSlice: hydrateWhenVisible(() => import('../../../prismicSlices/SubscribeFormSlice/index.vue')),
  prismicSlicesSpacerSlice: hydrateWhenVisible(() => import('../../../prismicSlices/SpacerSlice/index.vue')),
}
