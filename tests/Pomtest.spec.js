const { test, expect } = require('@playwright/test');
import { loginpage } from '../Pages/Loginpage';
import { Homepage } from '../Pages/Homepage';
import { Cartpage } from '../Pages/Cartpage';
import { credentials } from '../Utils/credentials.js';

test('Add product to cart and verify', async ({ page }) => {
    
    // Login
    const Mylogin = new loginpage(page);
    await Mylogin.gotoLoginPage();
    await Mylogin.login(credentials.validUser.username, credentials.validUser.password);
    
    // Wait for navigation to complete after login
    await page.waitForLoadState('domcontentloaded');
    // OR wait for a specific element that appears after login
    // await page.waitForSelector('selector-that-appears-after-login');
    
    // Home
    const Home = new Homepage(page);
    await Home.addProductToCart("Nexus 6");
    
    // Wait for product to be added (wait for success message or dialog)
    await page.waitForLoadState('domcontentloaded');
    
    await Home.gotocart();
    
    // Wait for cart page to load
    await page.waitForLoadState('domcontentloaded');
    
    // Cart
    const cart = new Cartpage(page);
    
    // Wait for cart items to appear before checking
    await page.waitForSelector('//tbody[@id="tbodyid"]/tr', { 
        state: 'visible',
        timeout: 10000 
    });
    
    const status = await cart.CheckProductInCart('Nexus 6');
    
    // Assertion with better error message
    expect(status, 'Product "Nexus 6" should be in cart').toBe(true);
    
    if (status) {
        console.log('✅ Product "Nexus 6" exists in cart');
    } else {
        console.log('❌ Product "Nexus 6" NOT found in cart');
    }
});