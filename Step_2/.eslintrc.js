// To uncomment below just delete the /* and */
// After you uncomment below you'll have to fix some things
// If you mouseover where there are red lines, you should get an option to quick fix all 
// that should cleanup this file for you
module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'object-shorthand': ['error', 'never'],
    'no-underscore-dangle': ['error', { allow: ['_id'] }]
  },
  globals: {
    EventSource: true
  }
};
