module.exports = {
    env: {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    extends: [
        "standard"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": 12
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        'linebreak-style': 0,
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'comma-dangle': [2, 'never']

    }
};
