module.exports = {
    extends: ['eslint:recommended'],
    env: {
        node: true,
        es2022: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'script',
    },
    rules: {
    // Error prevention
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'no-undef': 'error',
        'no-redeclare': 'error',
        'no-unreachable': 'error',

        // Code quality
        'prefer-const': 'warn',
        'no-var': 'warn',
        eqeqeq: ['warn', 'always'],
        curly: ['warn', 'multi-line'],

        // Style (minimal - let Prettier handle most formatting)
        indent: ['error', 4],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        semi: ['error', 'always'],
        'no-trailing-spaces': 'error',
        'eol-last': 'error',

        // Allow console for examples
        'no-console': 'off',
    },
    ignorePatterns: ['node_modules/', 'coverage/', 'dist/', '.vscode/', '.git/', '251113/'],
};
