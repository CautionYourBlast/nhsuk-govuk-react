module.exports = {
  "presets": ["@babel/preset-react", "@babel/preset-typescript"],
  "plugins": [
      ["@babel/plugin-syntax-jsx"],
    [
      "search-and-replace",
      {
        "rules": [
          {
            "search": /nhsuk/,
            "replace": "govuk"
          }
        ]
      }
    ]
  ],
  ignore: ['**/__mocks__', '**/__tests__', 'src/setupTests.ts', 'components/**/*.test.*']
}