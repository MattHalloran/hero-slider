module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "standard",
    "standard-react"
  ],
  "env": {
    "es6": true
  },
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    // don't force es6 functions to include space before paren
    "space-before-function-paren": 0,

    // allow specifying true explicitly for boolean props
    "react/jsx-boolean-value": 0
  }
};