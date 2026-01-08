const { test, expect } = require('@playwright/test');
let page;
test.beforeEach(async({browser})=>{
    page= await browser.newPage();
    await page.goto('https://www.demoblaze.com/index.html');
    //await page.goto('https://www.demoblaze.com/index.html', { waitUntil: 'load' });
//Log in 
await page.locator("#login2").click();
await page.locator("#loginusername").fill('AhmadNabeel');
await page.locator("#loginpassword").fill('Webdir123R@');
await page.locator("button[onclick='logIn()']").click();



});
test.afterEach(async()=>{
    await page.locator("#logout2").click(); 

})
test('Home Page', async({page})=>{
   await page.goto('https://www.demoblaze.com/index.html');

//Home page
 await page.waitForSelector('xpath=//div[@id="tbodyid"]//div//h4/a');

const products = await page.$$("//div[@id='tbodyid']//div//h4/a");
await expect(products).toHaveLength(9);
//log out


});
test(' Add to cart', async({page})=>{
//log in 
await page.goto('https://www.demoblaze.com/index.html');
//Add to Cart 
await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
await page.locator("//a[normalize-space()='Add to cart']").click();
await page.waitForTimeout(2000);

page.once('dialog', async dialog=>{
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
    await page.waitForTimeout(2000);
})

//Log out

});
