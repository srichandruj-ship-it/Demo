import { test } from '@playwright/test';

test('Amazon test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  await page
    .getByRole('searchbox', { name: 'Search Amazon.in' })
    .fill('iphone 17');

  const firstSuggestion = page
    .locator('//div[@class="left-pane-results-container"]//div[@id]')
    .first();

  await firstSuggestion.click();

  await page.waitForTimeout(2000);

  const iphone17With46Rating = page.locator(
    '//div[@data-cy="reviews-block"]//span[normalize-space()="4.6"]/ancestor::div[@role="listitem"][1][.//div[@data-cy="title-recipe"][contains(., "iPhone 17")]]'
  );

  const totalProducts = await iphone17With46Rating.count();

  const productNames = await page
    .locator(
      '//div[@data-cy="title-recipe"]//h2[contains(@aria-label, "iPhone 17")]'
    )
    .allTextContents();

  console.log('iPhone 17 products with 4.6 rating:', totalProducts);

});