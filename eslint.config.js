import js from '@eslint/js';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import tsparser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
    // Base JavaScript configuration
    js.configs.recommended,

    // Global configuration for JS/TS files
    {
        files: ['**/*.{js,ts}'],
        languageOptions: {
            parser: tsparser,
            globals: {
                document: 'readonly',
                window: 'readonly',
                console: 'readonly',
                navigator: 'readonly',
                crypto: 'readonly',
                atob: 'readonly',
                btoa: 'readonly',
                CryptoKey: 'readonly',
                TextEncoder: 'readonly',
                TextDecoder: 'readonly',
                BufferSource: 'readonly',
            },
        },
        rules: {
            // CLAUDE.md preferences
            'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
            'indent': ['error', 4, { 'SwitchCase': 1 }],

            // General code quality
            'semi': ['error', 'always'],
            'comma-dangle': ['error', 'always-multiline'],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            'no-trailing-spaces': 'error',
            'eol-last': 'error',
            'prefer-const': 'error',
            'no-var': 'error',
        },
    },

    // Svelte files configuration
    {
        files: ['**/*.svelte'],
        languageOptions: {
            parser: svelteParser,
            parserOptions: {
                parser: tsparser,
                extraFileExtensions: ['.svelte'],
            },
            globals: {
                document: 'readonly',
                window: 'readonly',
                console: 'readonly',
                navigator: 'readonly',
                crypto: 'readonly',
                atob: 'readonly',
                btoa: 'readonly',
                CryptoKey: 'readonly',
                TextEncoder: 'readonly',
                TextDecoder: 'readonly',
                URL: 'readonly',
                setTimeout: 'readonly',
                BufferSource: 'readonly',
                SubmitEvent: 'readonly',
            },
        },
        plugins: {
            svelte: sveltePlugin,
        },
        rules: {
            // CLAUDE.md preferences for Svelte
            'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
            'indent': 'off', // Let svelte/indent handle this

            // Svelte-specific indentation (4 spaces from CLAUDE.md)
            'svelte/indent': ['error', {
                'indent': 4,
                'ignoredNodes': [],
                'switchCase': 1,
            }],

            // General code quality
            'semi': ['error', 'always'],
            'comma-dangle': ['error', 'always-multiline'],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            'no-trailing-spaces': 'error',
            'eol-last': 'error',
            'prefer-const': 'off', // Svelte 5 runes use let for props
            'no-var': 'error',
        },
    },

    // Global ignores
    {
        ignores: [
            'build/',
            '.svelte-kit/',
            'node_modules/',
            'dist/',
            '*.min.js',
        ],
    },
];
