module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: ["eslint-config-airbnb-base", "eslint-config-prettier"],
  plugins: ["@typescript-eslint", "prettier", "import"],
  globals: {
    require: true,
    Page: true,
    wx: true,
    App: true,
    getApp: true,
    getCurrentPages: true,
    Component: true,
    getRegExp: true,
    Behavior: true,
  },
  rules: {
    "import/no-unresolved": 0,
    "import/no-named-as-default": 0,
    "import/extensions": 0,
    "import/export": 0,
    "import/no-cycle": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "import/no-dynamic-require": 0,
  },
};
