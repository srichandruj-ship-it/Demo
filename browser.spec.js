// import { dir } from "node:console";
// import { chromium } from "playwright"

// test('Launch brower'),async({})=> {
// const brower = await chromium.launch() 

// const context = await brower.newContext (recordvideo:{dir:'./Videos/.'});
// const page = await context.newPage();
// }


const { test, expect } = require('@playwright/test');

test('Find minimum product price'), async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts?rf=Price%3A100.0_15000.0_100.0%20TO%2015000.0');
}
    const prices = await page
        .locator('//div[@class="product-price"]')
        .allTextContents();

    console.log("Total products:", prices.length);

    const priceValues = prices.map(price =>
        Number(price.replace(/[₹,]/g, '').trim())
    );

    const minimumPrice = Math.min(...priceValues);

    console.log("Minimum price:", minimumPrice);

    expect(minimumPrice).toBe(199);