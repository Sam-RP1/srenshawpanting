module.exports = {
    env: {
        node: true,
        browser: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        babelOptions: {
            configFile: './.babelrc',
        },
    },
    plugins: ['react', '@typescript-eslint'],
    settings: {
        react: {
            version: 'latest',
        },
    },
    rules: {
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: true,
                types: {
                    '{}': false,
                },
            },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    overrides: [
        {
            files: ['**/*.spec.js', '**/*.spec.tsx'],
            env: {
                jest: true,
            },
        },
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': ['error'],
            },
        },
    ],
};
