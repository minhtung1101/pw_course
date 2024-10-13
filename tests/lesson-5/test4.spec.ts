import { test } from "@playwright/test";

let personal_note = [
    {
        title: 'Nâng cấp máy gia tốc hạt mạnh nhất thế giới',
        content: 'Máy gia tốc hạt phục vụ 10.000 nhà khoa học trên thế giới tìm hiểu cách vũ trụ hình thành, đang được nâng cấp để tăng độ sáng.'
    }, {
        title: 'Máy bay vũ trụ tối mật của Mỹ thử nghiệm phanh khí động',
        content: 'Máy bay vũ trụ X-37B của Lực lượng Không gian Mỹ thử nghiệm phanh khí động và sẽ thực hiện một loạt thao tác chưa từng có nhằm thay đổi quỹ đạo'
    }, {
        title: 'Lý do chỉ vài ngôi nhà trụ vững sau bão có sức gió 225 km/h',
        content: 'Bão Helena và Milton tràn qua với sức gió lên tới 225 km/h san phẳng nhiều dãy nhà, chỉ trừ một số còn nguyên vẹn do không có khe hở để tạo áp suất.'
    }
]
test('bai 4', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com');
    await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();
    for (const element of personal_note) {
        await page.fill("//input[@id='note-title']", element.title);
        await page.fill("//textarea[@id='note-content']", element.content);
        await page.click("//button[@id='add-note']");
    }

    // Search 
    await page.fill("//input[@id='search']", personal_note[0].title);



});