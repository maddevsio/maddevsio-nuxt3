import * as prismicH from '@prismicio/helpers'
const createPreTagWithCopy = (text: string) => {
  const languageRegex = /^```(\w+)/;
  const match = text.match(languageRegex);
  const language = match ? match[1] : 'python'
  const formattedText = text.replace(/^```(\w+)\n?/, '')
  return `<div class="pre-wrapper"><pre><code class="language-${ language }">${ formattedText }</code></pre><button class="copy-code"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button></div>`
}

export const writeupHtmlSerializer = (type: string, element: any, content: any, children: any) => {
  try {
    const Element = prismicH.Element
    let text = children

    if (type === Element.preformatted) {
      text = element.text
      text = convertTagsToText(text, ['br'])
    } else {
      // @ts-ignore
      text = text.replace(/`(.*?)`/g, (_, inlineCode: string) => {
        const formattedCode = convertTagsToText(inlineCode, ['strong', 'em', 'a'])
        return `<code class="inline-code">${ formattedCode }</code>`
      })
      // @ts-ignore
      text = text.replace(/<blockquote>(.*?)<\/blockquote>/g, (_, inlineCode: string) => {
        const formattedCode = convertTagsToText(inlineCode, ['strong', 'em', 'a', 'code'])
        return `<blockquote>${ formattedCode }</blockquote>`
      })
    }

    switch (type) {
    case Element.heading1: return useCreateAnchorTag('h1', text)
    case Element.heading2: return useCreateAnchorTag('h2', text)
    case Element.heading3: return useCreateAnchorTag('h3', text)
    case Element.heading4: return useCreateAnchorTag('h4', text)
    case Element.heading5: return useCreateAnchorTag('h5', text)
    case Element.heading6: return useCreateAnchorTag('h6', text)
    case Element.paragraph: return `<p>${ text }</p>`
    case Element.preformatted: return createPreTagWithCopy(text)
    case Element.strong: return `<strong>${ text }</strong>`
    case Element.em: return `<em>${ text }</em>`
    case Element.listItem: return `<li>${ text }</li>`
    case Element.oListItem: return `<li>${ text }</li>`
    case Element.list: return `<ul>${ text }</ul>`
    case Element.oList: return `<ol>${ text }</ol>`
    case Element.image:
      // eslint-disable-next-line
        const linkUrl = element.linkTo ? prismicH.asLink(element.linkTo, linkResolver) : null
      // eslint-disable-next-line
        const linkTarget = element.linkTo && element.linkTo.target ? `target="${element.linkTo.target}" rel="noopener nofollow"` : ''
      // eslint-disable-next-line
        const wrapperClassList = [element.label || '', 'block-img']
      // eslint-disable-next-line
        const img = `<img src="${element.url}" alt="${element.alt || 'Image'}" copyright="${element.copyright || ''}">`
      return (`
            <p class="${ wrapperClassList.join(' ') }">
              ${ linkUrl ? `<a ${ linkTarget } href="${ linkUrl }">${ img }</a>` : img }
            </p>
          `)
    case Element.embed:
      return (`
            <div data-oembed="${ element.oembed.embed_url }"
              data-oembed-type="${ element.oembed.type }"
              data-oembed-provider="${ element.oembed.provider_name }"
            >
              ${ element.oembed.html }
            </div>
          `)
    case Element.hyperlink:
      /* eslint-disable */
        const url = prismicH.asLink(element.data, linkResolver)
        const targetType = setTargetForLinks(url!)
        const setRelAttributes = `rel="noopener"`
        const target = `target="${targetType}" ${targetType === '_blank' ? setRelAttributes : ''}`
        const textContent = text.replace('remove-attributes', '')
        const isOurDomain = checkAndExtractDomain(url!).ourDomain
        return `<a ${target} href="${url}" ${isOurDomain ? 'data-nuxt-link' : ''}>${textContent}</a>`
      /* eslint-enable */
    case Element.label:
      // eslint-disable-next-line
        const label = element.data.label ? ` class="${element.data.label}"` : ''
      return `<span ${ label }>${ text }</span>`
    case Element.span: return content ? content.replace(/\n/g, '<br />') : ''
    default: return null
    }
  } catch (e) {
    // eslint-disable-next-line
    console.error('Error in prismic html serializer for writeup: ', e)
  }
}
