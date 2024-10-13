import { test } from "@playwright/test";

test('bai 2', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com');

    await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
    await page.click("//div[text()='Product 1']/following-sibling::button");
    await page.click("//div[text()='Product 1']/following-sibling::button");
    await page.click("//div[text()='Product 2']/following-sibling::button");
    await page.click("//div[text()='Product 2']/following-sibling::button");
    await page.click("//div[text()='Product 2']/following-sibling::button");
    await page.click("//div[text()='Product 3']/following-sibling::button");

});