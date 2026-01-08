const {test, expect} =require ('@playwright/test');
const { TIMEOUT } = require('dns');
test.skip('Alert with ok',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dailog=>{
     expect(dailog.type()).toContain('alert');
     expect(dailog.message()).toContain('I am an alert box!')
     await dailog.accept();
    });

   await page.getByText('Simple Alert').click();
   await page.waitForTimeout(6000);
});

//Test 2 ....> confirmation dailog with  with ok and cancel
test.skip('confirmation dailog with  with ok and cancel',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Dailog Window Handler 
    page.on('dialog',async dailog=>{
     expect(dailog.type()).toContain('confirm');//Checking the tyoew of Alert 
     expect(dailog.message()).toContain('Press a button')//Checking the message dispalyed 
    await dailog.accept();//Close by using Ok button 
    //  await dailog.dismiss();//Close by using cancel button
    });

   await page.click("//button[@id='confirmBtn']");
   await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
   await page.waitForTimeout(8000);
});
//Test-3//Prompt Dailog with Input box
test('Prompt Dailog with Input box',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Dailog Window Handler 
    page.on('dialog',async dailog=>{
     expect(dailog.type()).toContain('prompt');//Checking the type of Alert 
     expect(dailog.message()).toContain('Please enter your name:')//Checking the message dispalyed 
     expect(dailog.defaultValue()).toContain('Harry Potter');
     await dailog.accept('Master');//Close by passing some value

    //  await dailog.dismiss();//Close by using cancel button
    });

   await page.click("//button[@id='promptBtn']");
   await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Master! How are you today?');
   await page.waitForTimeout(8000);
});