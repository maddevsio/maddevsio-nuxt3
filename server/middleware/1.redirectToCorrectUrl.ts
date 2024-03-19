import axios from 'axios'
import { MAD_MARKETING_BACKEND_API } from '~/server/config/envs'
import { authConfig } from '~/server/config'

export default defineEventHandler(async event => {
  if (!event.path.startsWith('/api')) {
    const url = getRequestURL(event)
    if (url.hostname === 'blog.maddevs.io') {
      if (url.pathname.startsWith('/vacancy/')) { await sendRedirect(event, 'https://maddevs.io/careers/#open-positions', 301) }
      if (url.pathname.startsWith('/mad-devs-termsfeed-privacy-policy.pdf')) { await sendRedirect(event, 'https://maddevs.io/privacy/', 301) }
      try {
        const { data } = await axios.get(`${ MAD_MARKETING_BACKEND_API }redirect?from_url=${ url.pathname }`, authConfig)
        // eslint-disable-next-line
        console.log(`Redirect from backend\nTrying to redirect from ${data.to_url}`)
        await sendRedirect(event, data.to_url, data.status_code)
      } catch {
        if (url.pathname.startsWith('/blog/')) { await sendRedirect(event, `https://maddevs.io${ url.pathname }`, 301) }
        await sendRedirect(event, 'https://maddevs.io/blog/', 301)
      }
    } else if (url.hostname === 'heimdall.maddevs.io') {
      await sendRedirect(event, 'https://maddevs.io/', 301)
    } else if (url.pathname.startsWith('/success-and-faq/')) {
      await sendRedirect(event, 'https://maddevs.io/', 301)
    } else {
      try {
        const { data } = await axios.get(`${ MAD_MARKETING_BACKEND_API }redirect?from_url=${ url.pathname }`, authConfig)
        // eslint-disable-next-line
        console.log(`Redirect from backend\nTrying to redirect from ${data.to_url}`)
        await sendRedirect(event, data.to_url, data.status_code)
      } catch {}
    }
  }
})
