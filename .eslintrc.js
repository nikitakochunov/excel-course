module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "google"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "semi": "off",
    "quotes": "off",
    "no-undef": "off",
    "linebreak-style": "off",
    "comma-dangle": "off",
    "arrow-parens": "off",
    "require-jsdoc": "off",
    "no-trailing-spaces": "off",
    "operator-linebreak": "off",
    "indent": "off",
    "max-len": "off",
    "no-prototype-builtins": "off"
  }
}
