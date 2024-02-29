/// <reference types="vitest" />

import { defineConfig } from "vitest/config";

const CI = process.env.CI;

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    minThreads: CI ? 1 : 2,
    maxThreads: CI ? 1 : 4,
    setupFiles: "src/setupTests.ts",
    coverage: {
      reporter: ["lcov"],
    },
    server: {
      deps: {
        inline: ["@tesseract/armui"],
      },
    },
  },
});
