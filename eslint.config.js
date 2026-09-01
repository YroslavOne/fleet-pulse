import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import tseslint from "typescript-eslint"

export default tseslint.config(
    {
        ignores: ["dist"],
    },

    {
        files: ["**/*.{ts,tsx}"],

        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],

        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },

        plugins: {
            "simple-import-sort": simpleImportSort,
        },

        rules: {
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
        },
    },

    {
        files: [
            "src/shared/ui/**/*.tsx",
            "src/routes/**/*.tsx",
        ],
        rules: {
            "react-refresh/only-export-components": "off",
        },
    },
)