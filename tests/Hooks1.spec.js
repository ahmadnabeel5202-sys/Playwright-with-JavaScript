const { test, expect } = require('@playwright/test');

test('Hooks 1 -Home Page', async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
//Log in 
await page.locator("#login2").click();
await page.locator("#loginusername").fill('AhmadNabeel');
await page.locator("#loginpassword").fill('Webdir123R@')
await page.locator("button[onclick='logIn()']").click();

//Home page
 await page.waitForSelector('xpath=//div[@id="tbodyid"]//div//h4/a');

const products = await page.$$("//div[@id='tbodyid']//div//h4/a");
await expect(products).toHaveLength(9);
//log out
await page.locator("#logout2").click();
await page.waitForTimeout(4000);
});
test('Hooks 2 Add ton cart', async({page})=>{
//log in 
await page.locator("#login2").click();
await page.locator("#loginusername").fill('AhmadNabeel');
await page.locator("#loginpassword").fill('Webdir123R@')
await page.locator("button[onclick='logIn()']").click();
//Add to Cart 
await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
await page.locator("//a[normalize-space()='Add to cart']").click();

page.on('dailog', async dailog=>{
    expect(dailog.message()).toContain('Product added.')
    await dailog.accept()
})
//Log out
await page.locator("#logout2").click(); 
});



