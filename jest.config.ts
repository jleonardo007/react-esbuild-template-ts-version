import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/jest-setup.ts"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/file-mock.ts",
    "\\.(css|less)$": "<rootDir>/src/__mocks__/style-mock.ts",
  },
};

export default config;
