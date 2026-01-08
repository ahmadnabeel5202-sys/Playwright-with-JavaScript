const {test, expect} =require ('@playwright/test');
//slow test

test('Test1 -slow',async({page})=>{

    test.setTimeout(2000)
    test.slow();
    await page.goto('https://www.demoblaze.com/')
    console.log('this is test-1 slow ');
})

// test('Test-2 -slow',async({page})=>{
//     test.setTimeout(5000)
//     await page.goto('https://www.demoblaze.com/')
//     console.log('this is test-2 slow ');
// })
test('Test -3',async({page})=>{

    test.setTimeout(2000)
    // test.slow();
    await page.goto('https://www.demoblaze.co')
    console.log('this is test-1 slow ');
})
