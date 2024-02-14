module.exports = {
  testEnvironment: "jsdom",
  testRegex: "(/__tests__/.*|(.|/)(test|spec)).(jsx?|tsx?)$",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+.(jsx?|tsx?)$": "babel-jest",
  },
  moduleNameMapper: {
    ".(scss|css)$": "identity-obj-proxy",
    ".(jpg|jpeg|png|gif|svg)$": "identity-obj-proxy",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^helpers/(.*)$": "<rootDir>/src/helpers/$1",
  },
  transformIgnorePatterns: ["/node_modules/"],
};
