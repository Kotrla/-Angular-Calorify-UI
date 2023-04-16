module.exports = {
  "root": true,
  "ignorePatterns": [
    "projects/**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "parserOptions": {
        "project": [
          "tsconfig.json"
        ],
        "tsconfigRootDir": __dirname,
        "createDefaultProgram": true
      },
      "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
      ],
      "rules": {
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ],
        "max-len": ["error", { "code": 140, "comments": 160, "ignoreRegExpLiterals": true }],
        "indent": ["error", 4],
        "no-console": "off",
        "import/order": "off",
        "consistent-return": "off",
        "object-curly-newline": "off",
        "object-curly-spacing": "off",
        "object-property-newline": "off",
        "import/prefer-default-export": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/default-param-last": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/object-curly-spacing": ["error", "always", { "objectsInObjects": true }]
      }
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        "plugin:@angular-eslint/template/recommended"
      ],
      "rules": {}
    }
  ]
}
