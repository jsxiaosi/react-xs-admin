import reactConfig from '@jsxiaosi/eslint-config-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  ...reactConfig,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          usePrettierrc: true,
        },
      ],

      // 禁止使用未知的dom属性
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
    },
    ignores: [
      '.vscode/',
      '.idea/',
      '.husky/',
      '*.html',
      '*.md',
      '*.woff',
      '*.ttf',
      '*.sh',
      'bin/',
      'dist/',
      'docs/',
      'public/',
      'discard/',
      'Dockerfile',
      'node_modules/',
    ],
  },
];
