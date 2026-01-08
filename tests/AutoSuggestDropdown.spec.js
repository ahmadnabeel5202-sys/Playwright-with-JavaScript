const {test, expect} =require ('@playwright/test');
test('Auto suggest dropdown',async({page})=>{
    await page.goto('https://www.w3schools.com/howto/howto_js_autocomplete.asp')
    await page.locator('#myInput').fill('Al');
    await page.waitForSelector('#myInputautocomplete-list div');
    const countryOptions =await page.$$('#myInputautocomplete-list div');
    for (let option  of countryOptions) {
        const value= await option.textContent()
        console.log(value);
        
    }
})