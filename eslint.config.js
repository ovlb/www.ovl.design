import eslint from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

export default [
  {
    ignores: ['node_modules/', 'dist/', '.cache/'],
  },
  eslint.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },
]
