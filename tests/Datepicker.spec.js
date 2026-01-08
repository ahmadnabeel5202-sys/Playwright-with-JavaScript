const {test, expect} =require ('@playwright/test');
test('Date Picker', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.fill('#datepicker','03/152025')
    //await page.waitForTimeout(4000);

    //Date picker
const year= "2026";
const month ="March"
const date = "20"

await page.click('#datepicker') // it will open the  Calender 
while (true) {

    const currentyear=await page.locator('.ui-datepicker-year').textContent()
    const currentmonth=await page.locator('.ui-datepicker-month').textContent()
    if(currentyear==year && currentmonth==month)
    {
       break;
    }
    else await page.locator(':text("Next")').click();
}

// gpt fix not used yet -await page.locator(`//table[@class='ui-datepicker-calendar']//a[text()='${date}']`).click();
const dates= await page.$$(".ui-datepicker-calendar td");
for (const dt of dates)
    {
        if (await dt.textContent()==date)
        {
           await dt.click();
           break;
        }
    
}
await page.waitForTimeout(5000);

});