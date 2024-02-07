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
      name: 'custom-page-two-slugs',
      path: '/:slug1/:slug2/:uid',
      // @ts-ignore
      component: () => import('~/pages/[uid].vue').then(r => r.default || r),
    },
    {
      name: 'custom-page-three-slugs',
      path: '/:slug1/:slug2/:slug3/:uid',
      // @ts-ignore
      component: () => import('~/pages/[uid].vue').then(r => r.default || r),
    },
    {
      name: 'custom-page-four-slugs',
      path: '/:slug1/:slug2/:slug3/:slug4/:uid',
      // @ts-ignore
      component: () => import('~/pages/[uid].vue').then(r => r.default || r),
    },
  ],
}
