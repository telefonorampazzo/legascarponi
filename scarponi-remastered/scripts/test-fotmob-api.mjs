import { chromium } from 'playwright'

console.log('START')

const browser = await chromium.launch({
  headless: true,
})

console.log('BROWSER OK')

const page = await browser.newPage()

console.log('PAGE OK')

console.log('GOTO...')

await page.goto(
  'https://www.fotmob.com/players/577912',
  {
    waitUntil: 'domcontentloaded',
    timeout: 120000,
  }
)

console.log('PAGE LOADED')

const html = await page.content()

const playerMatches = [
  ...html.matchAll(
    /"playerName":"([^"]+)".*?"playerId":(\d+)/g
  )
]

console.log(
  playerMatches.slice(0, 20)
)