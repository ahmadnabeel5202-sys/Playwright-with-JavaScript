const {test, expect} =require ('@playwright/test');

test("Handle dropdowns", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("#country").selectOption({label:'India'});//Label for visile text 

    // Assertions
    // Check number of options in the dropdown
   const options  = await page.locator('#Country option')
   await expect (options).toHaveCount(10);

    await page.waitForTimeout(5000);
}
)
