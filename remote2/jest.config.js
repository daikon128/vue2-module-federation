module.exports = {
  testPathIgnorePatterns: ["<rootDir>/cypress/"],
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: ["node_modules/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/js/$1"
  },
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ]
}