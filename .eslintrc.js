module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  parserOptions: { ecmaVersion: 8, sourceType: 'module' },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'next',
        'next/core-web-vitals',
      ],
      rules: {
        // Disable return-type warnings and other noisy rules
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
};
