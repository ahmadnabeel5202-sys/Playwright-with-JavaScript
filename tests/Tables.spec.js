const { test, expect } = require("@playwright/test");
test("Tables Handling", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = await page.locator("#productTable");
  //Total number of rows
  const columns = await table.locator("thead tr th");
  console.log("Number of columns;", await columns.count());
  const rows = await table.locator("tbody tr");
  const count = await rows.count();
const expectedRows = [
  "1Smartphone$10.99",
  "2Laptop$19.99",
  "3Tablet$5.99",
  "4Smartwatch$7.99",
  "5WirelessEarbuds$8.99",
];

for (let i = 0; i < count; i++) {
  const actual = await rows.nth(i).innerText();
  const Normalactual=await actual.replace(/\s+/g, '').trim();
  expect(Normalactual).toContain(expectedRows[i]);    // assertion

  console.log(`Row ${i + 1} is correct ✔`);
}

  //Validating the data in table

  //Just to get All ROWS Data
  //const count = await rows.count();
  //for (let i = 0; i < count; i++) {
  //console.log(await rows.nth(i).textContent());}
  //await page.waitForTimeout(8000);
  // console.log('Number of rows:',await rows.count());

  //Select checkbox for the product 4
  //const matchedrow=await rows.filter({
  //  has:page.locator('td'),
  //hasText:'Smartwatch'
});

//await matchedrow.locator('input[type="checkbox"]').check();

// await page.waitForTimeout(8000);
