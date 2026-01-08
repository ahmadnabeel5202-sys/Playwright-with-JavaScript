const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test('File should be downloaded successfully', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  const downloadDir = path.join(__dirname, '..', 'downloads');
  if (!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir, { recursive: true });

  // Count BEFORE download
  const filesBefore = fs.readdirSync(downloadDir).length;

  // Wait for download BEFORE clicking
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('a[href$=".txt"]').first().click()
  ]);

  // Save the file
  const fileName = download.suggestedFilename();
  const filePath = path.join(downloadDir, fileName);
  await download.saveAs(filePath);

  // Count AFTER download
  const filesAfter = fs.readdirSync(downloadDir).length;

  // ✅ Validate file exists and count increased
  expect(filesAfter).toBe(filesBefore + 1);
  expect(fs.existsSync(filePath)).toBe(true);

  console.log('Downloaded file:', fileName, '✅ exists in folder');
  console.log('Files before:', filesBefore, 'Files after:', filesAfter);
});


