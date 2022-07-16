const path = require("path");
module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["**/*.{js,jsx}", "!**/node_modules/**"],
  testMatch: [
    "<rootDir>/**/__tests__/**/*.[jt]s?(x)",
    "<rootDir>/**/?(*.)+(spec|test).js?(x)",
  ],
  testEnvironment: "jsdom",
  transform: {
    "\\.jsx?$": path.resolve(__dirname, "../config/jest/babelTransformer.js"),
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      path.resolve(__dirname, "../config/jest/assetsTransformer.js"),
    "\\.(css|less)$": path.resolve(__dirname, "../config/jest/assetsTransformer.js"),
  },
};
