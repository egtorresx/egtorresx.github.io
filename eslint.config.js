import js from "@eslint/js";
import ts from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs["flat/recommended"],
  prettier,
  ...svelte.configs["flat/prettier"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
  {
    // CommonJS config files use require() — allow it
    files: ["**/*.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      // Legacy $: reactive patterns are valid Svelte 4/5 syntax
      "svelte/no-immutable-reactive-statements": "off",
      "svelte/infinite-reactive-loop": "off",
      // External href links don't need resolve()
      "svelte/no-navigation-without-resolve": "off",
    },
  },
  {
    ignores: ["build/", ".svelte-kit/", "dist/"],
  },
];
