
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
    coverageDirectory: '<rootDir>/__tests__/coverage',
    reporters: ["default","./node_modules/jest-html-reporter", {
      "pageTitle": "Test Report",
      "outputPath: : "__tests__/Report/index.html"
    }]
  };
  