export default {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },

  extends: ['@jsxiaosi/eslint-config-react', 'plugin:prettier/recommended'],
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
  ignorePatterns: [
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
};