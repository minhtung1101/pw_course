import { test } from "@playwright/test";

test('bai 3', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com');
    await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();
    for (let i = 1; i < 10; i++) {
        await page.fill("//input[@type='text']", 'Todo ' + i);
        await page.click("//button[@id='add-task']");
    }
    
    for (let i = 1; i < 10; i++) {
        if (i % 2 === 1) {
            await page.click(`//button[@id="todo-${i}-delete"]`, { timeout: 5000 });
            await page.on('dialog', dialog =>  dialog.accept());
        }
    }
});