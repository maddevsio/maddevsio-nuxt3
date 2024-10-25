<h1 align="center">
  <img src="https://user-images.githubusercontent.com/35951221/129149015-58707898-d6aa-4f70-b1fb-c5d0a1591458.png" alt="Maddevs" width="320px"/>
  <br/>
  <span>Official Website Repository</span>
</h1>
<p align="center">
  Mad Devs develops enterprise-level custom software solutions & mobile apps for finance, transportation, logistics, security, edtech, cloudtech & advertising industries.
</p>

## 🌎 Table of contents

- [⚡️ Quick start](#%EF%B8%8F-quick-development-start)
- [⚙️ Project overview](#%EF%B8%8F-project-overview)
- [💼️ Environment variables](#%EF%B8%8F-environment-variables)
- [✍️ Code review](#%EF%B8%8F-code-review)
- [🚀 Deploy](#-deploy)
- [✨ Linting](#-linting)
- [🐺 Snyk](#-snyk)
- [😎 AWS S3](#-aws-s3)
- [🗄 Prismic](#-prismic)

## ⚡️ Quick development start

To start the project you need to do the following steps:

1. Install dependencies

```bash
$ npm install
```

2. Run the project in development mode

```bash
$ npm run dev
```
3. Run the project in production mode

```bash
$ npm run build
```
4. After build you need to launch the project

```bash
$ npm run start
```
5. The application is available on [localhost:3000](http://localhost:3000)
6To improve the application's performance, it is better to run it from the local domain `maddevs.devtest:3000`. From this domain forms' requests work.

For detailed explanation on how things work, checkout the [Nuxt 3 docs](https://nuxt.com/docs/getting-started/introduction).

## ⚙️ Project overview

### Technologies && tools

#### Main technologies

A list of main technologies that we use for build our application

| Technology                                                          | Version  | Description                                                                                                                                            |
|---------------------------------------------------------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| Node                                                                | 18.x     | For the correct launch of the project, use this version of the node                                                                                    |
| [Vue](https://vuejs.org/guide/introduction.html)                    | ^3.3.8   | Progressive framework for building a modern user interfaces                                                                                            |
| [Nuxt](https://nuxt.com/docs/getting-started/introduction)          | ^3.10.1  | Server-side rendering framework for VueJS                                                                                                              |
| [Axios](https://axios-http.com/docs/intro)                          | ^1.6.5   | Promise based HTTP client for the browser and node.js                                                                                                  |
| [Nitro](https://nitro.unjs.io/)                                     | ^2.9.3   | Web-framework for nodeJS                                                                                                                               |
| [Prismic](https://prismic.io/docs/nuxt-3-setup)                     | ^3.1.0   | Content-Management system                                                                                                                              |
| [slice-machine-ui](https://www.npmjs.com/package/slice-machine-ui)  | ^1.25.0  | Slice Machine transforms the way you code reusable components and lets you deliver them directly to marketers in a custom page builder using Prismic.  |
| [Lottie-web](https://www.npmjs.com/package/lottie-web)              | ^5.12.2  | The mobile library for Web animations                                                                                                                  |
| [AWS S3 SDK](https://www.npmjs.com/package/@aws-sdk/client-s3)      | ^3.511.0 | AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native.                                                                                |
| [Pinia](https://pinia.vuejs.org/)                                   | ^2.1.7   | Intuitive, type safe and flexible Store for Vue                                                                                                        |
| [mitt](https://www.npmjs.com/package/mitt)                          | ^3.0.1   | Tiny 200b functional event emitter / pubsub.                                                                                                           |
| [sendpulse-api](https://www.npmjs.com/package/sendpulse-api)        | ^1.1.6   | A simple SendPulse REST client library and example for Node.js. [API Documentation](https://sendpulse.com/api)                                         |
| [nuxt-swiper](https://www.npmjs.com/package/nuxt-swiper)            | ^1.2.2   | Swiper component for Nuxt.js                                                                                                                           |
| [vue-recaptcha](https://www.npmjs.com/package/vue-recaptcha)        | ^2.0.3   | A simple Vue.js component for easy integration with Google reCAPTCHA v2 and v3.                                                                       |

#### Additional tools

A list of additional tools that we use for make our codebase better

| Technology                                                        | Version   | Description                                                                |
|-------------------------------------------------------------------|-----------| -------------------------------------------------------------------------- |
| [ESLint](https://www.npmjs.com/package/eslint)                    | ^8.56.0   | Pluggable JavaScript linter                                                |
| [Sentry](https://docs.sentry.io/platforms/javascript/guides/vue/) | ^7.106.1  | Application monitoring and error tracking                                  |
| [Snyk](https://snyk.io/)                                          | ^1.1283.1 | Tool for find and fix security vulnerabilities                             |

#### Tools for tracking and analytics
A list of tools that we use for users' tracking and analytics

| Technology                                                        | Version   | Description                                                                |
|---------------------------------------------------------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Smartlook](https://www.smartlook.com/)               |           | Smartlook is a qualitative analytics solution for web and mobile apps      |
| [GA4](https://analytics.google.com/)                                                |           | Google Analytics 4                                                         |

### Project structure

```
.
├── README.md
├── package-lock.json
├── package.json
├── nuxt.config.ts - nuxt config
├── tsconfig.json
├── Dockerfile
├── .snyk - snyk policy file
├── .sass-lint.yml - sass-lint config
├── .gitignore
├── .eslintrc - eslint config
├── .eslintignore
├── .editorconfig
├── .dockerignore
├── utils - core utils
├── server - server code
├── assets - app media data
├── components - components, widgets, shared and etc.
├── pages - app pages
├── plugins - app plugins
├── prismicSlices - libraries of shared slices for prismic dashboard
├── public - public static app media data
├── store - Pinia
├── composables - reusable functions
├── interfaces - global shared interfaces
├── SEO - SEO data
```

## 💼️ Environment variables

A list of environment variables that needed to start the project(required)

| NAME                                  | DESCRIPTION                                                     |
|---------------------------------------|-----------------------------------------------------------------|
| NODE_SENDPULSE_API_USER_ID            | Sendpulse api user id                                           |
| NODE_SENDPULSE_API_KEY                | Sendpulse api key                                               |
| NODE_SENDPULSE__FEEDBACK_TEMPLAT      | Sendpulse feedback template id for form on rumor managment page |
| NODE_SENDPULSE_ADDRESSBOOKS_ID        | Sendpulse address book id                                       |
| NODE_EMAIL_HR                         | Email to send messages(cv) to HR department                     |
| NODE_EMAIL_CONTACT                    | Email to send messages(from leads) to DM department             |
| NODE_EMAIL_MARKETING                  | Email to send messages to Marketing department                  |
| NODE_EMAIL_CV                         | Email to send messages to CV department                         |
| NODE_PRISMIC_API                      | Prismic api key                                                 |
| NODE_ATLASSIAN_TOKEN                  | Jira auth token                                                 |
| NODE_ATLASSIAN_EMAIL                  | Jira auth email                                                 |
| NODE_ATLASSIAN_PROJECT_KEY            | Jira auth project key                                           |
| NODE_ATLASSIAN_API_URL                | Jira api url                                                    |
| NODE_NODE_ATLASSIAN_EBOOK_PROJECT_KEY | Jira Ebook key dashboard                                        |
| NODE_ATLASSIAN_SUBSCRIBERS_PROJECT_KEY | Jira Subscribers key dashboard                                  |
| NODE_SENTRY_DSN_FRONT                 | Sentry DSN for client                                           |
| NODE_SENTRY_LOADER_PATH               | Sentry loader path for script                                   |
| NODE_DOMAIN                           | Domain                                                          |
| FF_ENVIRONMENT                        | Feature flags environment                                       |
| NODE_ENV                              | Development variant                                             | |
| NODE_AWS_URL                          | AWS url                                                         |
| NODE_S3_PUBLIC_URL                    | S3 url                                                          |
| NODE_S3_SECRET_ACCESS_KEY             | S3 secret key                                                   |
| RECAPTCHA_SITE_KEY                    | ReCaptcha site key                                              |
| RECAPTCHA_SECRET_KEY                  | ReCaptcha secret key                                            |
| NODE_GA4_KEY                          | GA4 MEASUREMENT ID                                              |
| NODE_ANALYTICS_UNIVERSAL_KEY          | Universal Analytics Tracking ID                                 |
| FACEBOOK_CODE                         | Access code for FaceBook Pixel                                  |
| LINKEDIN_PIXEL_ID                     | Linkidin identificator                                          |
| NODE_SMARTLOOK_PROJECT_ID             | Smartlook project id from smartlook account                     |
| LINKEDIN_SCRIPT_TURN_ON               | For enabling/disabling linkedin pixel script                    |

## ⚠️ Required variables for building an application
<font size=3>Without these variables the application will not work correctly</font>

| NAME                                | DESCRIPTION                                         |
|-------------------------------------|-----------------------------------------------------|
| NODE_ENV                            | Development variant                                 |
| NODE_S3_PUBLIC_URL                  | AWS S3 CloudFront public API                        |
| NODE_DOMAIN                         | Domain                                              |
| NODE_EMAIL_HR                       | Email to send messages(cv) to HR department         |
| NODE_EMAIL_CV                       | Email to send messages to CV department             |
| NODE_EMAIL_CONTACT                  | Email to send messages(from leads) to DM department |
| NODE_EMAIL_MARKETING                | Email to send messages to Marketing department      |
| NODE_SENTRY_DSN_FRONT               | Sentry DSN url for send errors                      |
| FF_ENVIRONMENT                      | Feature flags environment                           |
| NODE_PRISMIC_API                    | Prismic API url                                     |
| NODE_IP_INFO_TOKEN                  | IP info API token                                   |
| RECAPTCHA_SITE_KEY                  | Google v3 recaptcha site key                        |
| NODE_ANALYTICS_UNIVERSAL_KEY        | Google Universal Analytics ID                       |
| NODE_GA4_KEY                        | Google Analytics 4 ID                               |
| FACEBOOK_CODE                       | Facebook code for analytics                         |
| NODE_SENDPULSE_ADDRESSBOOKS_ID      | Sendpulse address book ID                           |

## ✍️ Code review

We're have a special "Code Review Regulation" document that help us to review our code more better and professional.
Before start working with our team you need to read the document.

- ["Code review regulation"- english version](docs/CodeReviewRegulation_en.md)
- ["Code review regulation"- russian version](docs/CodeReviewRegulation_ru.md)

## 🚀 Deploy

### Develop
To send changes for testing it before deploy, you should merge your branch to the **develop** branch

### Staging

To send changes to the staging server, you should merge your branch to the **staging** branch

### Production

To send changes to the production server, you should merge **staging** branch into **master** branch

## ✨ Linting

We're using some tools for linting our code - ESLint, Sass-Lint

### Commands

| COMMAND                 | DESCRIPTION                      |
| ----------------------- | -------------------------------- |
| `npm run lint`          | Run all linters                  |
| `npm run lint-es`       | Run only ESLint for js/vue files |
| `npm run lint-vue-scss` | Run only vue-scss lint           |
| `npm run lint-scss`     | Run only core scss lint          |

## 🐺 Snyk

Snyk is a tool for find and fix security vulnerabilities

### Commands

| COMMAND                | DESCRIPTION       |
| ---------------------- | ----------------- |
| `npm run snyk-protect` | Run snyk checking |

## 😎 AWS S3

> [Amazon S3](https://aws.amazon.com/s3/) is used to store video files and pictures of the site.

> [Official Documentation](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

### Install aws cli

You may install awscli using `apt` or `brew`

```bash
sudo apt install awscli
```

or download zip bundle

```bash
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip" \&& unzip awscli-bundle.zip \&& sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws \&& rm -rf awscli-bundle*
```

The result should be

```bash
aws --version
aws-cli/2.3.6
```

### Setup

The current **AWS Access Key ID** and **AWS Secret Access Key** can be requested from the team.

```bash
aws configure
```

AWS will ask for the keys to specify the settings

```bash
AWS Access Key ID: Key
AWS Secret Access Key: Key
Default region name: us-west-1
Default output format: json
```

Or just export the keys, in which case the access will only be in the terminal where the export is made.

```bash
export AWS_ACCESS_KEY_ID="key"
```

```bash
export AWS_SECRET_ACCESS_KEY="key"
```

It remains to update the environment variable and run the site.

In the root of the project should be a file .env, where you insert the variable **NODE_S3_PUBLIC_URL**

This variable must contain the url, which will be used to access s3 files.

> The link through which we will get pictures and videos **https://d6xkme6dcvajw.cloudfront.net/**

### AWS S3 Commands

| COMMAND                                                                 | DESCRIPTION                                                    |
| ----------------------------------------------------------------------- | -------------------------------------------------------------- |
| `aws s3 ls s3://maddevsio/`                                             | Show available folders & files                                 |
| `aws s3 ls s3://maddevsio/ && PRE images/ && PRE videos/`               | Result                                                         |
| `aws s3 cp --acl public-read folder s3://maddevsio/folder/ --recursive` | Upload folder                                                  |
| `aws s3 --recursive mv s3://maddevsio/folder/ s3://maddevsio/folder_2/` | Rename folder                                                  |
| `aws s3 rm --recursive s3://maddevsio/folder/`                          | Remove folder                                                  |
| `aws s3 cp --acl public-read ./folder/name.jpg s3://maddevsio/folder/`  | Upload file to folder                                          |
| `aws s3 rm s3://maddevsio/folder/name.jpg`                              | Remove file                                                    |
| `aws s3 sync --acl public-read ./folder s3://maddevsio/folder/`         | Update files                                                   |
| `aws s3 sync s3://maddevsio/folder/ ./folder`                           | Downloads all content from s3 /folder to local folder ./folder |


## BEM (Block, Element, Modifier)

BEM (Block, Element, Modifier) is a component-based approach to web development.

For BEM, I advise you to use the following:

1. "block" - for naming blocks (A functionally independent page component that can be reused. In HTML, blocks are represented by the class attribute.
   Features:

The block name describes its purpose ("What is it?" — menu or button), not its state ("What does it look like?" — red or big).

Example

```javascript
<!-- Correct. The `error` block is semantically meaningful -->
<div class="error"></div>

<!-- Incorrect. It describes the appearance -->
<div class="red-text"></div>
```

The block shouldn't influence its environment, meaning you shouldn't set the external geometry (margin) or positioning for the block.
You also shouldn't use CSS tag or ID selectors when using BEM.

2. "block**element" - ** for naming elements
   A composite part of a block that can't be used separately from it.

Features:

The element name describes its purpose ("What is this?" — item, text, etc.), not its state ("What type, or what does it look like?" — red, big, etc.).

The structure of an element's full name is block-name**element-name. The element name is separated from the block name with a double underscore (**).

Example

```javascript
<!-- `search-form` block -->
<form class="search-form">
    <!-- `input` element in the `search-form` block -->
    <input class="search-form__input"/>

    <!-- `button` element in the `search-form` block -->
    <button class="search-form__button">Search</button>
</form>
```

3. "block block - modifier" - --modifier for naming modifiers, while the main class of the block/element must be
   An entity that defines the appearance, state, or behavior of a block or element.

Features:

The modifier name describes its appearance ("What size?" or "Which theme?" and so on — size_s or theme_islands), its state ("How is it different from the others?" — disabled, focused, etc.) and its behavior ("How does it behave?" or "How does it respond to the user?" — such as directions_left-top).

The modifier name is separated from the block or element name by a single underscore (\_).

Let's not use:

- "h2" or "> p" tag selectors
- minimum nesting through "/deep/"
- incorrect BEM naming conventions: "block_element" or "block_modifier"

For a detailed study of BEM, visit the website: https://en.bem.info/

## 🗄 Prismic

### Create and push slices to prismic dashboard

Slice machine dev tools are used to develop and push slices to prismic dashboard.

- [Configuration of the slice machine dev tools in the project](https://prismic.io/docs/technologies/configure-project-manually-nuxtjs)

The main folder for developing slices is located in the following path - `prismicSlices`. <br>
Slices can be divided into categories(libraries) by creating different folders for them inside the `prismicSlices` folder and adding the path to this folders to the `sm.json` config file.

To develop slices you need to install globally the [prismic-cli](https://prismic.io/docs/technologies/prismic-cli-technical-reference)

```bash
npm install -g prismic-cli
```

After installation you need login to prismic

```bash
prismic login
```

After login you need to run the slices builder dashboard: [localhost:9999](http://localhost:9999/)

```bash
npm run slicemachine

or

prismic sm --develop
```

[How to work with slice machine](https://prismic.io/docs/slice-machine)

[Learn how to use Prismic with Nuxt 3](https://prismic.io/docs/nuxt3)
