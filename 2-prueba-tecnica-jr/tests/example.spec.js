// @ts-check
import { test, expect } from '@playwright/test'
import { CAT_IMG_URL } from '../src/logic/endpoints.js'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const button = await page.getByRole('button')
  const text = await page.getByRole('heading')
  const image = await page.getByRole('img')

  const textONE = await text.textContent()
  const imageONE = await image.getAttribute('src')

  console.log({ textONE, imageONE })
  await expect(textONE?.length).toBeGreaterThan(0)
  await expect(imageONE?.startsWith(CAT_IMG_URL)).toBeTruthy()

  await button.click()

  const textTWO = await text.textContent()
  const imageTWO = await image.getAttribute('src')

  console.log({ textTWO, imageTWO })
  await expect(textTWO?.length).toBeGreaterThan(0)
  await expect(imageTWO?.startsWith(CAT_IMG_URL)).toBeTruthy()
});

