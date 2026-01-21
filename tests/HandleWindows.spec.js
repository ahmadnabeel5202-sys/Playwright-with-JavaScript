const { test, expect, chromium } = require('@playwright/test');

test('Windows test-1', async()=>{

    const browser= await chromium.launch()
    const context= await browser.newContext()

    const page1=await context.newPage();
    const page2=await context.newPage();

    const allPages=context.pages()
    console.log("No of pages created:",allPages.length);
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle("OrangeHRM")
    //Page-2
   await page2.goto('https://www.orangehrm.com/', {
  waitUntil: 'domcontentloaded'
});

    await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");
    console.log(await page2.title());

})

////////code 2 ----2nd way....///////////////////////////////

test('Handle Multiple pages', async()=>{

    const browser= await chromium.launch()
    const context= await browser.newContext()

    const page1=await context.newPage();
   // const page2=await context.newPage();

    const allPages=context.pages()
    console.log("No of pages created:",allPages.length);
     
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle("OrangeHRM")
    const pagePromise=context.waitForEvent('page');
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();
    const newPage =await pagePromise;
    await expect(newPage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");
    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);

    await browser.close();



    
    //Page-2
//    await page2.goto('https://www.orangehrm.com/', {
//   waitUntil: 'domcontentloaded'
// });

    // await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");
    // console.log(await page2.title());

})