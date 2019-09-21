module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "quotes": ["error", "double"],
        "func-names": ["error", "never"],
        "no-confusing-arrow": ["error", {"allowParens": true}],
        "camelcase": ["error", {"allow": [".*"]}],
        "no-restricted-globals": 0,
        "comma-dangle": 0
    }
};