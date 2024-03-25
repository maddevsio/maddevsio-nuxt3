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
        {
          name: 'theme-color',
          content: '#111213',
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
          href: 'https://maddevs.io/sitemap_index.xml',
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

  devtools: { enabled: process.env.FF_ENVIRONMENT === 'development' },

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
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/device',
    ['nuxt-delay-hydration', {
      mode: 'mount',
      debug: process.env.NODE_ENV === 'development',
    }],
    ['nuxt-swiper', {
      styleLang: 'scss',
      modules: ['navigation', 'pagination', 'thumbs', 'autoplay'],
    }],
    ['@nuxt/image', {
      prismic: {},
      screens: {
        mobile: 600,
        tablet: 800,
        desktop: 1200,
      },
    }],
    ['nuxt-security', {
      rateLimiter: false,
      headers: {
        contentSecurityPolicy: false,
        crossOriginEmbedderPolicy: false,
        xFrameOptions: 'DENY',
        permissionsPolicy: false,
      },
      xssValidator: false,
    }],
    '@nuxtjs/sitemap',
    '@vite-pwa/nuxt',
  ],

  pwa: {
    includeAssets: ['favicon.ico', 'favicon-16x16.ico', 'favicon-32x32.ico', 'apple-touch-icon.png'],
    manifest: {
      name: 'Mad Devs',
      short_name: 'Mad Devs',
      description: 'Mad Devs: Software & Mobile App Development Company',
      theme_color: '#111213',
      lang: 'en',
      background_color: '#111213',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: null,
    },
  },

  sitemap: {
    cacheMaxAgeSeconds: 10 * 3600000,
    autoLastmod: true,
    sitemaps: {
      main: {
        sources: [
          '/api/__sitemap__/main',
        ],
      },
      blog: {
        sources: [
          '/api/__sitemap__/blog',
        ],
      },
      careers: {
        sources: [
          '/api/__sitemap__/careers',
        ],
      },
      cases: {
        sources: [
          '/api/__sitemap__/cases',
        ],
      },
      insights: {
        sources: [
          '/api/__sitemap__/insights',
        ],
      },
      services: {
        sources: [
          '/api/__sitemap__/services',
        ],
      },
      authors: {
        sources: [
          '/api/__sitemap__/authors',
        ],
      },
    },
  },

  site: {
    trailingSlash: true,
  },

  routeRules: {
    '/open-source/': { prerender: true },
    '/careers/': { prerender: true },
    '/delivery-models/': { prerender: true },
    '/delivery-models/staff-augmentation/': { prerender: true },
    '/delivery-models/dedicated-team/': { prerender: true },
    '/delivery-models/temp-to-hire/': { prerender: true },
    '/delivery-models/technical-assessment/': { prerender: true },
    '/delivery-models/team-supervision/': { prerender: true },
    '/delivery-models/transferring-projects/': { prerender: true },
    '/transparency/': { prerender: true },
    '/our-philosophy/': { prerender: true },
    '/nda/': { prerender: true },
    '/gdpr/': { prerender: true },
    '/blog/': { prerender: true },
    '/digest/': { prerender: true },
    '/privacy/': { prerender: true },
    '/case-studies/bandpay/': { prerender: true },
    '/case-studies/bilimapp/': { prerender: true },
    '/case-studies/citycam/': { prerender: true },
    '/case-studies/clutch/': { prerender: true },
    '/case-studies/godee/': { prerender: true },
    '/case-studies/guardrails/': { prerender: true },
    '/case-studies/lido/': { prerender: true },
    '/case-studies/megauni/': { prerender: true },
    '/case-studies/mobile-banking/': { prerender: true },
    '/case-studies/namba-food/': { prerender: true },
    '/case-studies/namba-taxi/': { prerender: true },
    '/case-studies/peklo/': { prerender: true },
    '/case-studies/R4TCA-web-application/': { prerender: true },
    '/case-studies/rocifi/': { prerender: true },
    '/case-studies/sir-john-monash-centre/': { prerender: true },
    '/case-studies/veeqo/': { prerender: true },
    '/case-studies/yourcast/': { prerender: true },
    '/api/leads': {
      security: {
        rateLimiter: {
          tokensPerInterval: 5,
          interval: 15 * 60 * 1000, // 15 minutes
          headers: true,
        },
      },
    },
    'api/send-email': {
      security: {
        rateLimiter: {
          tokensPerInterval: 5,
          interval: 15 * 60 * 1000,
          headers: true,
        },
      },
    },
    'api/careers': {
      security: {
        xssValidator: false,
        rateLimiter: {
          tokensPerInterval: 10,
          interval: 15 * 60 * 1000,
          headers: true,
        },
      },
    },
    'api/send-checklist': {
      security: {
        rateLimiter: {
          tokensPerInterval: 15,
          interval: 15 * 60 * 1000,
          headers: true,
        },
      },
    },
  },

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
        wght: [300, 400, 500, 600, 700, 800],
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
  devServer: {
    port: Number(process.env.PORT) || 3000,
    host: process.env.HOST || '0',
  },
})
