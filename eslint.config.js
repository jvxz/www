import antfu from '@antfu/eslint-config'
// @ts-ignore
import nextPlugin from '@next/eslint-plugin-next'
import tailwindPlugin from 'eslint-plugin-readable-tailwind'

export default antfu({
  react: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
    overrides: {
      'ts/no-floating-promises': 'error',
      'ts/consistent-type-imports': 'error',
      'react/no-leaked-conditional-rendering': 'error',
    },
  },
  plugins: {
    next: nextPlugin,
    tailwind: tailwindPlugin,
  },
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/.next/**',
  ],

  rules: {
    'style/jsx-quotes': ['error', 'prefer-double'],
    'react/no-duplicate-jsx-props': 'error',
    'style/jsx-closing-bracket-location': [1, 'line-aligned'],
    'style/jsx-closing-tag-location': [1, 'line-aligned'],
    'style/jsx-one-expression-per-line': ['error', {
      allow: 'non-jsx',
    }],
    'react/prefer-shorthand-boolean': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-implicit-key': 'error',
    'react/no-useless-fragment': 'error',
    'react-dom/no-unknown-property': 'error',
    'react-hooks-extra/no-unnecessary-use-callback': 'error',
    'react-hooks-extra/no-unnecessary-use-memo': 'error',
    'react-refresh/only-export-components': 'off',
    'style/jsx-max-props-per-line': ['error', {
      maximum: 1,
      when: 'always',
    }],

    'next/no-html-link-for-pages': 'error',
    'next/no-img-element': 'error',
    'next/no-unwanted-polyfillio': 'error',

    'tailwind/no-duplicate-classes': 'error',
    'tailwind/sort-classes': 'error',
    'tailwind/no-unnecessary-whitespace': 'error',
    'style/quotes': ['error', 'single'],
    'antfu/if-newline': 'off',
    'node/prefer-global/process': 'off',
    'perfectionist/sort-imports': 'error',
    'style/multiline-ternary': ['error', 'always-multiline'],
    'style/padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: 'var',
      next: 'return',
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
    'style/indent': ['error', 2],
    'style/no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
    }],
    'style/space-in-parens': ['error', 'never'],
    'style/function-paren-newline': ['error', 'multiline'],
    'arrow-body-style': ['warn', 'as-needed', {
      requireReturnForObjectLiteral: true,
    }],
    'object-shorthand': ['warn', 'always'],
    'ts/strict-boolean-expressions': 'off',
    'unicorn/throw-new-error': 'off',
  },

})
