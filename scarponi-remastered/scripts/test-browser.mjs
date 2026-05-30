import { chromium } from 'playwright'

const browser = await chromium.launch({
  headless: true
})

const page = await browser.newPage()

await page.goto(
  'https://www.sofascore.com/api/v1/player/592794/statistics',
  {
    waitUntil: 'networkidle'
  }
)

const text = await page.textContent('body')

console.log(text.slice(0, 500))

await browser.close()