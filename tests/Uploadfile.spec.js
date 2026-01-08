const{test, expect}=require('@playwright/test')

test('Multiple Files', async ({page})=>{
   
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator('#filesToUpload').setInputFiles(['D:/My playwright/Automate-1/tests/UploadFiles/BugBoard-Findings.docx','D:/My playwright/Automate-1/tests/UploadFiles/ZERO-Bug_Report.xlsx']);

        await page.waitForTimeout(4000);
});

test('Hooks 1 ',async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    
} )
