// @ts-ignore
import type { PrismicPluginHelpers } from '@prismicio/vue/dist/types'
import type { BlogPost } from '~/interfaces/common/commonInterfaces'

interface Reducer {
  text: string[]
  images: number
}

export function stripTags(string: string) {
  const pattern = '<\\w+(\\s+("[^"]*"|\\\'[^\\\']*\'|[^>])+)?>|<\\/\\w+>'
  const reg = new RegExp(pattern, 'gi')
  return string.replace(reg, ' ')
}

function stripWhitespace(string: string) {
  return string.replace(/^\s+/, '').replace(/\s+$/, '')
}

function getWordsCount(string: string) {
  const pattern = '\\w+'
  const reg = new RegExp(pattern, 'g')
  return (string.match(reg) || []).length
}

export const calculateReadTime = (post: BlogPost, $prismic: PrismicPluginHelpers) => {
  if (!Object.keys(post).length && !post?.data?.body) { return { readTime: '' } }
  let readTime = ''
  let imagesReadTime = 0
  let wordsCount = 0
  const wordsPerMin = 265
  const readContent = post.data!.body!.reduce((acc: Reducer, item) => {
    if (item.slice_type === 'text' || item.slice_type === 'quote') {
      // @ts-ignore
      const onlyText = $prismic.asText(item.primary.text || item.primary.quote)
      if (onlyText) {
        acc.text.push(onlyText)
      }
    }

    if (item.slice_type === 'embed' && item.items.length && item.items[0]!.embed!.type === 'link') {
      const getTextFromEmbed = stripTags(item.items[0].embed!.html!)
      acc.text.push(getTextFromEmbed)
      if (item.items[0].embed!.thumbnail_url) { acc.images += 1 }
    }

    if (item.slice_type === 'image_with_caption' || item.slice_type === 'image_with_attributes') {
      acc.images += 1
    }

    if (item.slice_type === 'table_slice') {
      let tableHtml = ''
      let tableText = ''
      item.primary!.tableRich!.forEach(tableItem => {
        if (tableItem.type === 'image') {
          acc.images += 1
        } else {
          if ('text' in tableItem) {
            tableHtml += tableItem.text
          }
          tableText = stripTags(tableHtml.replace(/(<style[\w\W]+style>)/, ''))
        }
      })
      acc.text.push(stripWhitespace(tableText))
    }

    if (item.slice_type === 'tech_and_tools_new_slice') {
      acc.images += 1
      item.items.forEach(itemTech => {
        if (itemTech.title) { acc.text.push(itemTech.title) }
        if (itemTech.description) { acc.text.push(itemTech.description) }
      })
    }

    if (item.slice_type === 'ordered_list') {
      item.items.forEach(listItem => {
        // @ts-ignore
        acc.text.push($prismic.asText(listItem.list_item!.text))
      })
    }
    return acc
  }, { text: [], images: 0 })

  readContent.images += post.data!.featured_image.url ? 1 : 0
  // @ts-ignore
  readContent.text.push($prismic.asText(post.data!.title))

  if (readContent.images > 10) {
    imagesReadTime = ((10 / 2) * (12 + 3)) + (readContent.images - 10) * 3 // n/2(a+b) + 3 sec/image
  } else {
    imagesReadTime = (readContent.images / 2) * (2 * 12 + (1 - readContent.images)) // n/2[2a+(n-1)d]
  }

  imagesReadTime /= 60
  wordsCount = getWordsCount(readContent.text.join(' '))
  readTime = `${ Math.ceil(wordsCount / wordsPerMin + imagesReadTime) } min read`

  return {
    readTime,
  }
}
