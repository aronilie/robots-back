/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["!src/index.ts", "!src/server/startServer.ts", "!dist"],
  modulePathIgnorePatterns: ["<rootDir>/dist"],
};
