import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: _routes => [
    {
      name: 'main-page',
      path: '/',
      // @ts-ignore
      component: () => import('~/pages/index.vue').then(r => r.default || r),
    },
    {
      name: 'custom-page-zero-slug',
      path: '/:uid',
      // @ts-ignore
      component: () => import('~/pages/[uid].vue').then(r => r.default || r),
    },
    {
      name: 'custom-page-one-slug',
      path: '/:slug1/:uid',
      // @ts-ignore
      component: () => import('~/pages/[uid].vue').then(r => r.default || r),
    },
    {
      name: 'blog-main',
      path: '/blog',
      // @ts-ignore
      component: () => import('~/pages/blog/index.vue').then(r => r.default || r),
    },
  ],
}
