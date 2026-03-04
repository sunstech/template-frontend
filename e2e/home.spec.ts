import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("should load and display heading", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("should have correct page title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Create Next App/);
  });

  test("should render Deploy Now link pointing to Vercel", async ({ page }) => {
    await page.goto("/");
    const deployLink = page.getByRole("link", { name: /Deploy Now/ });
    await expect(deployLink).toBeVisible();
    await expect(deployLink).toHaveAttribute("href", /vercel\.com/);
  });

  test("should render Documentation link pointing to Next.js docs", async ({ page }) => {
    await page.goto("/");
    const docsLink = page.getByRole("link", { name: "Documentation" });
    await expect(docsLink).toBeVisible();
    await expect(docsLink).toHaveAttribute("href", /nextjs\.org\/docs/);
  });
});
