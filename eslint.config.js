// eslint.config.js
import babelParser from '@babel/eslint-parser';
import { defineConfig } from 'eslint/config';

export default defineConfig([{
    files: ['**/*.js'],
    languageOptions: {
        parser: babelParser, // ✅ This is a module, not a function
    },
}, ]);