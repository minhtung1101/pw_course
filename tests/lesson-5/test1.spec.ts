import { test } from "@playwright/test";

test('bai 1', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com');

  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  await page.fill('//input[@id="username"]', 'Shu');

  await page.fill('//input[@id="email"]', 'tung@gmail.com');

  await page.check('//input[@id="male"]');

  await page.check('//input[@value="traveling"]');

  await page.click('//option[@value="science"]');

  await page.fill('//textarea[@id="bio"]', 'testtttt');

});