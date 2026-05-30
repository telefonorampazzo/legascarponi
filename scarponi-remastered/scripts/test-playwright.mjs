import { chromium } from 'playwright'

console.log('START')

const browser = await chromium.launch({
  headless: true,
})

const page = await browser.newPage()

const response = await page.goto(
  'https://www.sofascore.com/it/football/player/alex-meret/592794',
  {
    waitUntil: 'domcontentloaded',
    timeout: 120000,
  }
)

console.log('STATUS:', response?.status())

console.log('TITLE:', await page.title())

const html = await page.content()

console.log('HTML LENGTH:', html.length)

console.log(
  'FIRST 500 CHARS:\n',
  html.slice(0, 500)
)

await browser.close()

console.log('END')