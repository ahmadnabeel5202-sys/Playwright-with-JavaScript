const {test, expect} =require ('@playwright/test');
test ('AssertionsTest',async ({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')
    //To have URL 
    expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    //tobe Enabled cxheck
    const searchStoreBox= await page.locator('#small-searchterms')
   await expect(searchStoreBox).toBeEnabled()
   //To be checked 
   const malebox= await page.locator("#gender-male");
   await malebox.click()
   await expect(malebox).toBeChecked()//checked=pass
   const NewsBox = await page.locator('.form-check-input')
   await expect(NewsBox).toBeChecked()
   //To have Attribute
   const RegButton= await page.locator('#register-button')
   await expect(RegButton).toHaveAttribute('type', 'submit');

   // .toHaveValue..... input has that value 
   const Firstname= await page.locator('#FirstName');
   await Firstname.fill('Nabeel');
   const Lastname = await page.locator('#LastName')
   await Lastname.fill('Ahmad');
   const emailInput= await page.locator('#Email');
   await emailInput.fill('test@demo.com');
   await expect(emailInput).toHaveValue('test@demo.com')
   const Pass = await page.locator('#Password')
   await Pass.fill('Test@123');
   const Confirmpass= await page.locator('#ConfirmPassword');
   await Confirmpass.fill('Test@123');
   await RegButton.click(); 
   



})