module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["react", "prettier"],
  ignorePatterns: ["**/node_modules/**"],
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "no-unused-vars": ["off", { vars: "local" }],
    allowImportExportEverywhere: 0,
    "no-useless-escape": "off",
    "no-empty": "off",
  },
};
