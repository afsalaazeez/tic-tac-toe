
  module.exports = {
    testEnvironment: "jsdom",
    testRegex: "(/__tests__/.*|(\.|/)(test|spec))\.(jsx?|tsx?)$",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    transform: {
      "^.+\.(jsx?|tsx?)$": "babel-jest",
    },
    moduleNameMapper: {
      "\.(scss|css)$": "identity-obj-proxy",
      "\.(jpg|jpeg|png|gif|svg)$": "identity-obj-proxy",
       "^components/(.*)$": "<rootDir>/src/components/$1",
"^helpers/(.*)$": "<rootDir>/src/helpers/$1",
    },
    transformIgnorePatterns: ["/node_modules/"],
    collectCoverage: true,
    coverageReporters: ["clover", "json", "lcov", "text","json-summary"],
    coverageDirectory: '<rootDir>/__tests__/coverage',
    reporters: [ "default",
    [
      "<rootDir>/node_modules/jest-html-reporter",
      {
        pageTitle: "Test Report",
        outputPath: "__tests__/Report/index.html",
      },
    ],
    [
      "@tsdoc-test-reporter/jest",
      {
        outputFileType: "json",
        outputFileName: "reports/tsdoc-report",
      },
    ],
    ]
  };
  