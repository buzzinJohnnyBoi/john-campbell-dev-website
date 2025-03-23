import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("/");
  const title = page.locator("h1");
  await expect(title).toHaveText("Hi, I'm John Campbell");
});
