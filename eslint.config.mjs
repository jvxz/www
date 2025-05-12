import antfu from '@antfu/eslint-config'
import rtw from 'eslint-plugin-readable-tailwind'

export default antfu({
  react: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },

  typescript: {
    parserOptions: {
      project: './tsconfig.json',
    },
    overrides: {
      'ts/no-floating-promises': 'error',
      'ts/consistent-type-imports': 'error',
      'ts/no-unnecessary-condition': 'warn',
    },
  },

  plugins: {
    'readable-tailwind': rtw,
  },

  ignores: [
    '**/node_modules/**',
    '**/dist/**',
  ],

  rules: {
    ...rtw.configs.warning.rules,
    'readable-tailwind/multiline': 'off',

    'antfu/if-newline': 'off',
    'arrow-body-style': ['warn', 'as-needed', {
      requireReturnForObjectLiteral: true,
    }],
    'node/prefer-global/process': 'off',
    'object-shorthand': ['warn', 'always'],
    'perfectionist/sort-imports': 'error',
    'style/function-paren-newline': ['error', 'multiline'],
    'style/indent': ['error', 2],
    'style/multiline-ternary': ['error', 'always-multiline'],
    'style/no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
    }],
    'style/object-curly-newline': ['error', {
      ObjectExpression: 'always',
      ObjectPattern: {
        multiline: true,
      },
      ImportDeclaration: 'never',
      ExportDeclaration: {
        multiline: true,
        minProperties: 3,
      },
    }],
    'style/padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: 'var',
      next: 'return',
    }],
    'style/quotes': ['error', 'single'],
    'style/space-in-parens': ['error', 'never'],
    'ts/strict-boolean-expressions': 'off',
    'unicorn/throw-new-error': 'off',
  },
})
