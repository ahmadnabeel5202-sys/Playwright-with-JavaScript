import {test,expect} from '@playwright/test'
test('Locators',async ({page})=>{

  await    page.goto('https://www.demoblaze.com/');
  //Click on log in button -- using some property as a locator
await page.locator('id=login2').click()
//Provide username - css
// await page.locator('#loginusername').fill("Testiva")
await page.fill('#loginusername','AhmadNabeel')
//await page.type('#loginusername')
//Provide Password
await page.fill("input[id='loginpassword']",'Webdir123R@12')
//click on log in button
await page.click("//button[normalize-space()='Log in']")
// Verify Log out link presence
const logoutlink = await page.locator("//a[normalize-space()='Log out']")
await expect(logoutlink).toBeVisible();
await page.close();

})