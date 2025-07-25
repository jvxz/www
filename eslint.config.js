import antfu from '@antfu/eslint-config'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(antfu({
  formatters: true,
  plugins: {
    'better-tailwindcss': eslintPluginBetterTailwindcss,
  },
  rules: {
    ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
    'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
    'perfectionist/sort-objects': 'warn',
    'vue/max-attributes-per-line': ['warn', {
      multiline: {
        max: 1,
      },
      singleline: {
        max: 2,
      },
    }],
    'vue/sort-keys': 'warn',
  },
  settings: {
    'better-tailwindcss': {
      entryPoint: './app/assets/css/globals.css',
    },
  },
  typescript: true,
  vue: true,
}))
