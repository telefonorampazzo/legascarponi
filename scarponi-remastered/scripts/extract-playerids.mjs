import { chromium } from 'playwright'

const browser = await chromium.launch({
  headless: true,
})

const page = await browser.newPage()

page.on('response', async (response) => {
  const url = response.url()

  if (
    url.includes('/api/') ||
    url.includes('squad') ||
    url.includes('team') ||
    url.includes('player')
  ) {
    console.log(response.status(), url)
  }
})

await page.goto(
  'https://www.fotmob.com/teams/9875/overview/napoli',
  {
    waitUntil: 'networkidle',
    timeout: 120000,
  }
)

await page.waitForTimeout(10000)

await browser.close()