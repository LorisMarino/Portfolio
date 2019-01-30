module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "plugins": ["prettier", "react"],
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "quotes": [2, "single"],
    "react/jsx-filename-extension": 0,
    "no-unused-expressions": 0,
    "semi": [2, "never"],
    "prettier/prettier": [2, {
        "trailingComma": "es5",
        "singleQuote": true,
        "semi": false,
      }
    ],
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/anchor-is-valid": [ 0, {
      "components": [ "Link" ],
      "aspects": [ "noHref" ]
    }]
  }
}
