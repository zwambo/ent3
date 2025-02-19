/* eslint-env node */
module.exports = {
    "root": true,
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "solid"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:solid/recommended"
    ],
    "rules": {
      "no-unused-vars": "warn",
      "no-console": "warn",
    }
}