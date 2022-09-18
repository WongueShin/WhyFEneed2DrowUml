module.exports = {
  roots: ['<rootDir>/test'],
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage",
  testPathIgnorePatterns: [
    "/node_modules"
  ],
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      linens: 100,
      statements: 100,
    }
  }
};
