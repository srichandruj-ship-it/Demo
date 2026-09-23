import { test } from '@playwright/test'; 
test('Find minimum price and its brand', async ({ page }) => { 
await page.goto('https://www.myntra.com/boy-tshirts'); 
//Function to find product name by price 
async function getProductBrandByPrice(price) { 
 
const products = page.locator('//li[@class="product-base"]');
const count = await products.count(); 
for (let i = 0; i < count; i++) { 
const product = products.nth(i); 
const priceText = await product .locator('.product-discountedPrice') .textContent(); 
if (priceText) { 
const productPrice = Number( priceText.replace(/[^0-9]/g, ''));

if (productPrice === price) {

const productName = await product.locator('.product-product').textContent();

return productName;
}
}
}
 return 'Product not found';   
}
// Get all discounted prices
const allPrice = page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]');

const priceList = await allPrice.allTextContents();

// Convert prices into numbers
    
const prices = priceList.map(priceText =>Number(priceText.replace(/[^0-9]/g, '')));

// Find minimum price
const minPrice = Math.min(...prices);

console.log('Minimum Price:', minPrice);


// Find product name for minimum price
const productName = await getProductBrandByPrice(minPrice);

console.log('Product Name:', productName);

});