import js from '@eslint/js';
import nxPlugin from '@nx/eslint-plugin';
import typescriptEslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    js.configs.recommended,
    ...typescriptEslint.configs.recommended,
    eslintConfigPrettier,
    ...nxPlugin.configs['flat/base'],
    ...nxPlugin.configs['flat/typescript'],
    ...nxPlugin.configs['flat/javascript'],
    {
        ignores: ['**/dist', '**/node_modules', '**/coverage', '**/.next', '**/tmp'],
    },
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        rules: {
            '@nx/enforce-module-boundaries': [
                'error',
                {
                    enforceBuildableLibDependency: true,
                    allow: [],
                    depConstraints: [
                        {
                            sourceTag: '*',
                            onlyDependOnLibsWithTags: ['*'],
                        },
                    ],
                },
            ],
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },
];
