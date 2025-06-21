module.exports = {
  env: {
    node: true,       // allows Node.js globals
    jest: true,       // allows Jest globals in your tests
    es2021: true      // enables ES12 syntax (including `const`)
  },
  parserOptions: {
    ecmaVersion: 12,  // ECMAScript version: 2021
    sourceType: 'module'
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-unused-vars': 'error',
    'no-console':    'warn'
  }
};
