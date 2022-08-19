module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'react/jsx-filename-extension': [1, {
      extensions: [
        '.ts',
        '.tsx',
      ],
    }],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'import/extensions': [2, 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'react/function-component-definition': [2, {
      namedComponents: [
        'arrow-function',
        'function-declaration',
        'function-expression',
      ],
      unnamedComponents: [
        'arrow-function',
        'function-expression',
      ],
    }],
  },
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-typescript'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
