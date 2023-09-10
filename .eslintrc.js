/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  env: {
    es2022: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
    ],
    "@typescript-eslint/no-misused-promises": [
      2,
      { checksVoidReturn: { attributes: false } }
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  },
  ignorePatterns: [
    "**/**.cjs",
    "**/*.config.js",
    "**/*.config.cjs",
    ".next",
    "dist",
    "pnpm-lock.yaml",
    "**/db/**/*",
    "**/api/**/*",
    "**/expo-plugins/**/*",
    "**/**/*/api.tsx",
    "/.eslintrc.js",
    "/postcss.js"
  ],
  reportUnusedDisableDirectives: true,
  settings: {
    react: {
      version: "detect"
    }
  }
}

module.exports = config
