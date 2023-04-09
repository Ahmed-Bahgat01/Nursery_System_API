module.exports = {
    env: {
        // browser: true,
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'linebreak-style': ['error', 'windows'],
        semi: ['error', 'never'],
    },
}
