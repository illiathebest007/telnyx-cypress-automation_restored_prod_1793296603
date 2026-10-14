import js from '@eslint/js';
import pluginCypress from 'eslint-plugin-cypress';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  { ignores: ['node_modules/', 'cypress/screenshots/', 'cypress/videos/', 'cypress/downloads/'] },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['cypress/**/*.ts'],
    extends: [pluginCypress.configs.recommended],
    rules: {
      'cypress/no-force': 'error',
      'cypress/no-unnecessary-waiting': 'error',
    },
  },
  prettier,
);
