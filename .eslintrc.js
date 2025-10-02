module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  rules: { "prettier/prettier": ["warn", { endOfLine: "auto" }] },
};
