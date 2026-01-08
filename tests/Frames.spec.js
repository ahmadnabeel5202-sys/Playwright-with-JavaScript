const {test, expect} =require ('@playwright/test');
test('Frames test',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    //Total frames
    const allframes=await page.frames();
    console.log("Number of frames:", allframes.length);
    //Approach-1:using name or URL
    //const var=await page.frame('name');//if name is present
    //const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    //await frame1.fill('input[name="mytext1"]', 'Hello');
    //Approach 2--> Frame Locator
    const inputbox= await page.frameLocator('[src*="frame_1.html"]').locator('[name="mytext1"]')
    await inputbox.fill('Hello Nabeel QA');
    await page.waitForTimeout(9000);

})