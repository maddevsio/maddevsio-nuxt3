export const getPrevRoutePath = () => document.head.querySelector('meta[property="og:url"]')?.getAttribute('content')?.replace(/^https?:\/\/[^/]+/, '')
