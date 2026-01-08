 const {test, expect} =require ('@playwright/test');
import { loginpage } from '../Pages/Loginpage';
import { Homepage } from '../Pages/Homepage';
import { Cartpage } from '../Pages/Cartpage';
test('test', async ({page})=>{

    //log in 
const Mylogin= new loginpage(page);
await Mylogin.gotoLoginPage();

await Mylogin.login('AhmadNabeel','Webdir123R@');
await page.waitForTimeout(3000);

 //Home
 const Home =new Homepage(page);
 //await page.waitForSelector('//tbody[@id="tbodyid"]/tr/td[2]');
 await Home.addProductToCart("Nexus 6");
 await page.waitForTimeout(3000);
 await Home.gotocart();
//Cart

const cart = new Cartpage(page);
await page.waitForTimeout(1000);
const status =await cart.CheckProductInCart('Nexus 6');
await page.waitForTimeout(1000);
if (status) {
    console.log(' Product "Nexus 6" exists in cart');
} else {
    console.log('Product "Nexus 6" NOT found in cart');
}

expect(status).toBe(true);
//expect (status).toBe(true);





})