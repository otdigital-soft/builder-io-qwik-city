module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // Use this approach for our recommended rules configuration
    'plugin:@builder.io/mitosis/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', '@builder.io/mitosis'],
  rules: {
    // Use this to configure rules individually
    '@builder.io/mitosis/css-no-vars': 'error',
  },
};
