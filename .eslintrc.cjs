module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs,jsx}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off', // every pages 'import React' off
    'react/prop-types': 'off', // type validation error off
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        addionalHooks: 'useRecoilCallback', // useRecoilCallback 훅을 사용할 때 종속성이 잘못 지정된 경우 경고를 표시하고 해결방안을 제시한다.
      },
    ],
  },
};
