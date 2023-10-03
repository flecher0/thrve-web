module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/.yarn/"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  resolver: "jest-pnp-resolver",
};
