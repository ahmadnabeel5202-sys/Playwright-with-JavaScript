const {test,expect} = require ('@playwright/test');
const { TIMEOUT } = require('dns');
test('Locatemultiple',async ({page})=>{
  await page.goto('https://www.demoblaze.com/')  
  /* const links = await page.$$('a')
  for (const link of links) {

    const linktext = await link.textContent();
    console.log(linktext);
  } */
 //page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
 await page.waitForSelector('xpath=//div[@id="tbodyid"]//div//h4/a');

const products = await page.$$("//div[@id='tbodyid']//div//h4/a")
for (const product of products)
 {

const productName = await product.textContent({ timeout: 5000 });
console.log(productName); 

    
}
})