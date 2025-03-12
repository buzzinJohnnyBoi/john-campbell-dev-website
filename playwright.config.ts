import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config({ path: ".env.test" });

export default defineConfig({
  testDir: "./tests/e2e",

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: "html",
  use: {
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  webServer: {
    command: "npm run build && npm run preview",
    port: 3000,
    env: {
      HOST_URL: "http://localhost:3000",
      EMAIL: process.env.EMAIL || "",
      EMAIL_HOST: process.env.EMAIL_HOST || "",
      EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || "",
      EMAIL_PORT: process.env.EMAIL_PORT || "",
      EMAIL_SECURE: process.env.EMAIL_SECURE === "true" ? "true" : "false",

      RECEIVING_EMAIL: process.env.RECEIVING_EMAIL || "",
    },
  },
});
