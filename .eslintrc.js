const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'writable',
        module: 'writable',
        require: 'readonly',
        global: 'readonly'
      }
    },
    rules: {
      // Error prevention
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'no-undef': 'error',
      'no-redeclare': 'error',
      'no-unreachable': 'error',
      
      // Code quality
      'prefer-const': 'warn',
      'no-var': 'warn',
      'eqeqeq': ['warn', 'always'],
      'curly': ['warn', 'multi-line'],
      
      // Style (minimal - let Prettier handle most formatting)
      'indent': ['error', 4],
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
      'semi': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      
      // Allow console for examples
      'no-console': 'off'
    }
  },
  {
    ignores: [
      'node_modules/',
      'coverage/',
      'dist/',
      '.vscode/',
      '.git/'
    ]
  }
];