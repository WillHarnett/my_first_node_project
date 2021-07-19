// To uncomment below just delete the /* and */
// After you uncomment below you'll have to fix some things
module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'object-shorthand': ['error', 'never'],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
  globals: {
    EventSource: true
  },
  plugins: ['jest']
};
