import { config } from 'dotenv'
import { getRobots } from './SEO/getRobots'
import { getPrismicRoutes } from './SEO/getDynamicRoutes'

config()
const addGtag = (GA4Key: string | undefined) => `document.addEventListener('readystatechange', () => {if(document.readyState === 'complete'){setTimeout(()=>{const googleTagManager = document.createElement('script');googleTagManager.src = 'https://www.googletagmanager.com/gtag/js?id=${ GA4Key }';googleTagManager.defer = true;document.body.appendChild(googleTagManager);googleTagManager.onload = () => {window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments);};gtag('consent', 'default', {'ad_storage': 'granted','ad_user_data': 'granted','ad_personalization': 'granted','analytics_storage': 'granted'});gtag('js', new Date());gtag('config', '${ GA4Key }');};}, 3500)}})`
const addSentry = () => 'document.addEventListener("readystatechange", () => {if(document.readyState === "complete"){setTimeout(()=>{const sentryScript = document.createElement("script");sentryScript.src = "https://js.sentry-cdn.com/d7de3ef1024e4c2aa21b2157f362b6fe.min.js";sentryScript.defer = true;sentryScript.crossorigin="anonymous";document.body.appendChild(sentryScript);}, 500)}})'

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
            innerHTML: `document.addEventListener('readystatechange', () => {if(document.readyState === 'complete'){window.smartlook||(function(d) { var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0]; var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript'; c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c); })(document); smartlook('init', '${ process.env.NODE_SMARTLOOK_PROJECT_ID }', { region: 'eu' });}})`,
          }
          : '',
        {
          type: 'text/javascript',
          defer: true,
          body: true,
          innerHTML: addGtag(process.env.NODE_GA4_KEY),
        },
        process.env.FF_ENVIRONMENT === 'production' && process.env.LINKEDIN_SCRIPT_TURN_ON === 'on'
          ? {
            type: 'text/javascript',
            defer: true,
            body: true,
            vmid: 'ln-script',
            innerHTML: '_linkedin_partner_id = "2547234";window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];window._linkedin_data_partner_ids.push(_linkedin_partner_id);',
          }
          : '',
        process.env.FF_ENVIRONMENT === 'production' && process.env.LINKEDIN_SCRIPT_TURN_ON === 'on'
          ? {
            type: 'text/javascript',
            defer: true,
            body: true,
            vmid: 'ln-script-2',
            innerHTML: '(function(l) {if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s = document.getElementsByTagName("script")[0];var b = document.createElement("script");b.type = "text/javascript";b.async = true;b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b, s);})(window.lintrk);',
          }
          : '',
        {
          type: 'text/javascript',
          defer: true,
          body: true,
          innerHTML: `
            window.sentryOnLoad = function () {
              Sentry.init({
                  enabled: ${ process.env.FF_ENVIRONMENT === 'production' } ,
                  environment: "${ process.env.FF_ENVIRONMENT }",
                  tracesSampleRate: 0.02,
                  ignoreErrors: [
                    'ResizeObserver loop limit exceeded', // https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded#comment86691361_49384120
                    'ResizeObserver loop completezd with undelivered notifications.', // ^
                    'Non-Error promise rejection captured', // https://forum.sentry.io/t/unhandledrejection-non-error-promise-rejection-captured-with-value/14062/14
                    'Non-Error exception captured', // ^
                    // Prismic
                    'Failed to init Prismic API, preventing app fatal error.',
                    'TypeError: Network request failed.',
                    'ChunkLoadError: Loading chunk',
                    // Facebook borked
                    'fb_xd_fragment',
                    // [Safari] Error playing video with muted
                    'AbortError: The operation was aborted.',
                    // [Safari] Error PiP when scrolling page
                    'The request is not triggered by a user activation.',
                    // Video error
                    'AbortError: The play() request was interrupted by a call to pause().',
                    'undefined is not an object (evaluating \\'r["@context"].toLowerCase\\')',
                  ],
                  denyUrls: [
                    // Prismic
                    /SuperPuperTest\\.cdn\\.prismic\\.io/i,
                    // Facebook flakiness
                    /graph\\.facebook\\.com/i,
                    // Facebook blocked
                    /connect\\.facebook\\.net\\/en_US\\/all\\.js/i,
                    // Google Tag Manager
                    /(https?:\\/\\/www\\.googletagmanager\\.com)/i,
                    // Google flakiness
                    /\\/(gtm|ga|analytics)\\.js/i,
                    /(https?:\\/\\/www\\.google-analytics\\.com)/,
                    // Chrome extensions
                    /extensions\\//i,
                    /^chrome:\\/\\//i,
                    // Firefox extensions
                    /^resource:\\/\\//i,
                    // Other plugins
                    /webappstoolbarba\\.texthelp\\.com\\//i,
                    /metrics\\.itunes\\.apple\\.com\\.edgesuite\\.net\\//i,
                  ],
              });
            };
          `,
        },
        {
          type: 'text/javascript',
          defer: true,
          body: true,
          innerHTML: addSentry(),
        },
      ].filter(Boolean),
    },
  },

  devtools: { enabled: process.env.FF_ENVIRONMENT === 'development' },

  experimental: {
    asyncEntry: true,
    renderJsonPayloads: false,
    payloadExtraction: false,
    emitRouteChunkError: 'manual',
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
      mode: 'manual',
      replayClick: true,
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
    'nuxt-lazy-hydrate',
    ['nuxt-jsonld', { disableOptionsAPI: true }],
  ],

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
      /* Commented for some time to hide all authors from sitemap, don't uncomment */
      // authors: {
      //   sources: [
      //     '/api/__sitemap__/authors',
      //   ],
      // },
    },
  },

  site: {
    trailingSlash: true,
  },

  routeRules: {
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
    sourceMap: false,
    preset: 'digital-ocean',
  },

  prismic: {
    endpoint: 'superpupertest',
    toolbar: process.env.FF_ENVIRONMENT !== 'production',
    preview: process.env.FF_ENVIRONMENT !== 'production' ? '/preview' : false,
    clientConfig: {
      routes: [
        {
          type: 'custom_page',
          uid: 'main-page',
          path: '/',
        },
        {
          type: 'custom_page',
          path: '/:uid/',
        },
        {
          type: 'blog_home',
          path: '/blog/',
        },
        {
          type: 'post',
          path: '/blog/:uid/',
        },
        {
          type: 'customer_university',
          path: '/customer-university/:uid/',
        },
        {
          type: 'author',
          path: '/blog/authors/:uid/',
        },
        {
          type: 'checklists',
          uid: 'checklists',
          path: '/checklists/',
        },
        {
          type: 'checklists',
          path: '/checklists/:uid/',
        },
        {
          type: 'writeup',
          uid: 'writeups',
          path: '/writeups/',
        },
        {
          type: 'writeup',
          path: '/writeups/:uid/',
        },
        {
          type: 'glossary',
          uid: 'glossary',
          path: '/glossary/',
        },
        {
          type: 'glossary',
          path: '/glossary/:uid/',
        },
        {
          type: 'vacancy',
          path: '/careers/:uid/',
        },
        {
          type: 'expert',
          path: '/team/:uid/',
        },
        {
          type: 'digest',
          path: '/digest/:uid/',
        },
        {
          type: 'case-studies',
          uid: 'case-studies',
          path: '/case-studies/',
        },
        {
          type: 'case-studies',
          path: '/case-studies/:uid/',
        },
      ],
    },
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
    build: {
      modulePreload: false,
      sourcemap: false,
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
      linkedinScriptTurnOn: process.env.LINKEDIN_SCRIPT_TURN_ON,
    },
  },

  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (process.env.FF_ENVIRONMENT !== 'development') {
        // fetch the routes from our function above
        const slugs = await getPrismicRoutes()
        const correctSlugs = slugs.map((item: any) => item.startsWith('//') ? item.slice(1) : item)
        // add the routes to the nitro config
        if (nitroConfig && nitroConfig.prerender && nitroConfig.prerender.routes) {
          nitroConfig.prerender.routes.push(...correctSlugs)
        }
      }
    },
    'build:manifest': manifest => {
      for (const key in manifest) {
        const file = manifest[key]
        file.dynamicImports = []
        file.css = []
        if (file.preload && file.prefetch) {
          file.preload = false
          file.prefetch = false
        }
        if (file.assets) {
          file.assets = file.assets.filter(
            assetName => !/.+\.(gif|jpe?g|png|svg)$/.test(assetName),
          )
        }
      }
    },
  },
  devServer: {
    port: Number(process.env.PORT) || 3000,
    host: process.env.HOST || '0',
  },
  sourcemap: false,
})
