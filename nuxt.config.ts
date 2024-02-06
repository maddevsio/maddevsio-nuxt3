import { config } from 'dotenv'
import { getRobots } from './SEO/getRobots'

config()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Mad Devs: Software & Mobile App Development Company',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'yandex-verification',
          content: '1cce4e9bf6ebcdff',
        },
        {
          name: 'facebook-domain-verification',
          content: 'gjmbb6g9th5cxl6awr0dx598t7ruz3',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'sitemap',
          type: 'application/xml',
          href: 'https://maddevs.io/sitemapindex.xml',
        },
        {
          rel: 'preconnect',
          href: 'https://www.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preconnect',
          href: 'https://www.googletagmanager.com',
        },
      ],

      script: [
        {
          src: 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver',
          defer: true,
          body: true,
        },
        process.env.FF_ENVIRONMENT === 'production'
          ? {
            type: 'text/javascript',
            body: true,
            defer: true,
            vmid: 'smartlook-script',
            innerHTML: `window.smartlook||(function(d) { var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0]; var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript'; c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c); })(document); smartlook('init', '${ process.env.NODE_SMARTLOOK_PROJECT_ID }', { region: 'eu' });`,
          }
          : '',
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${ process.env.NODE_GA4_KEY }&l=dataLayer`,
          defer: true,
          body: true,
        },
        {
          type: 'text/javascript',
          defer: true,
          body: true,
          vmid: 'gtag-script',

          innerHTML: `window.dataLayer = window.dataLayer || []; function gtag() {dataLayer.push(arguments)}; gtag('js', new Date()); gtag('config', '${ process.env.NODE_GA4_KEY }', {send_page_view: false,});`,
        },
      ].filter(Boolean),
    },
  },

  devtools: { enabled: process.env.FF_ENVIRONMENT !== 'production' },

  experimental: {
    asyncEntry: true,
  },

  modules: [
    '@nuxtjs/prismic',
    '@nuxtjs/google-fonts',
    ['@nuxtjs/robots', {
      rules: {
        ...getRobots(process.env.FF_ENVIRONMENT || 'staging'),
      },
    }],
    '@pinia/nuxt',
    '@nuxtjs/device',
    ['nuxt-delay-hydration', {
      mode: 'mount',
      debug: process.env.NODE_ENV === 'development',
    }],
    ['nuxt-swiper', {
      styleLang: 'scss',
    }],
    ['@nuxt/image', {
      prismic: {},
      screens: {
        mobile: 600,
        tablet: 800,
        desktop: 1200,
      },
    }],
  ],

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: false,
    },
    minify: true,
  },

  prismic: {
    endpoint: 'superpupertest',
    preview: false,
    toolbar: false,
  },

  googleFonts: {
    download: false,
    families: {
      'IBM+Plex+Mono': true,
      Inter: {
        wght: [300, 400, 600, 700, 800],
      },
      Poppins: {
        wght: [300, 500, 600, 700],
      },
    },
    display: 'fallback',
    preload: true,
    prefetch: true,
    preconnect: true,
  },

  css: ['~/assets/styles/index.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_vars.scss" as *;@use "~/assets/styles/_mixins.scss" as *;',
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      environment: process.env.NODE_ENV,
      s3PublicUrl: process.env.NODE_S3_PUBLIC_URL,
      domain: process.env.NODE_DOMAIN,
      reserveVacancyId: process.env.NODE_HUNTFLOW_RESERVE_VACANCY_ID,
      emailHR: process.env.NODE_EMAIL_HR,
      emailCV: process.env.NODE_EMAIL_CV,
      emailContact: process.env.NODE_EMAIL_CONTACT,
      emailMarketing: process.env.NODE_EMAIL_MARKETING,
      sentryDsnFront: process.env.NODE_SENTRY_DSN_FRONT,
      ffEnvironment: process.env.FF_ENVIRONMENT,
      prismicApi: process.env.NODE_PRISMIC_API,
      reCaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
      analyticsUniversalKey: process.env.NODE_ANALYTICS_UNIVERSAL_KEY,
      analytics4Key: process.env.NODE_GA4_KEY,
      sendPulseAddressBooksId: process.env.NODE_SENDPULSE_ADDRESSBOOKS_ID,
    },
  },

  hooks: {
    'build:manifest': manifest => {
      for (const key in manifest) {
        const file = manifest[key]
        if (file.preload && file.prefetch) {
          file.preload = false
          file.prefetch = false
        }

        if (file.assets) {
          file.assets = file.assets
            .filter(
              (asset: string) =>
                !asset.endsWith('.webp') &&
              !asset.endsWith('.jpg') &&
              !asset.endsWith('.png'),
            )
        }
      }
    },
  },
})
