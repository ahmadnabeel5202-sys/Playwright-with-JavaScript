// const { test } = require('@playwright/test');
// const allure = require('allure-playwright');
// const fs = require('fs');

// test.afterEach(async ({ page }, testInfo) => {
//   if (testInfo.status !== testInfo.expectedStatus) {
//     const videoPath = await page.video()?.path();

//     if (videoPath) {
//       await allure.attachment(
//         'Failure Video',
//         fs.readFileSync(videoPath), 
//         'video/webm'
//       );
//     }
//   }
// });
