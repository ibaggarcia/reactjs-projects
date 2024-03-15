// @ts-check
import { test, expect } from '@playwright/test'

const URL_ROUTE = 'http://localhost:5173/'
const GIPHY_URL = 'https://media'

test('the page shows a fact and a gif', async ({ page }) => {
  await page.goto(URL_ROUTE);

  const text = await page.getByRole('heading')
  const gif = await page.getByRole('img')

  const textContent = await text.textContent()
  const gifSrc = await gif.getAttribute('src')

  console.log({ textContent, gifSrc })
  // Expect a title "to contain" a substring.
  await expect(textContent?.split(' ').length).toBeGreaterThan(3)
  await expect(gifSrc?.startsWith(GIPHY_URL)).toBeTruthy()
});
