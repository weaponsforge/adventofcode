import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { ignores: ['node_modules/*'] },
  {
    rules: {
      // 'no-unused-vars': 'off',
      'no-undef': 'error',
      'no-trailing-spaces': 'error',
      '@typescript-eslint/no-unused-vars': ['error'],
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'eol-last': ['error', 'always']
    }
  }
]
