type RobotsConfig = {
  UserAgent: string
  Disallow: string[] | string
  Allow?: string
  Sitemap?: string
}

export const getRobots = (env: string): RobotsConfig => {
  if (env !== 'production') {
    return {
      UserAgent: '*',
      Disallow: '/',
    }
  }
  return {
    UserAgent: '*',
    Disallow: ['/blog/?page=*&tag=*', '/blog/?page=*', '/blog/?tag=*'],
    Allow: '/',
    Sitemap: 'https://maddevs.io/sitemapindex.xml',
  }
}
