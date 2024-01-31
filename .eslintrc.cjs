module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    '@nuxt/eslint-config',
  ],
  rules: {
// Disables eslint throwing an error on script setup vue files
    'import/first': 'off',
    'semi': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'template-curly-spacing': ["error", "always"],
    'indent': ['error', 2],
    'space-before-function-paren': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': ['error', 'as-needed'],
    'no-tabs': 'off',
    'vue/no-v-text-v-html-on-component': 'off'
  },
};
