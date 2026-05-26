import { NextResponse } from 'next/server'
import axios from 'axios'
import * as cheerio from 'cheerio'

export async function GET() {
  const { data: html } = await axios.get(
    'https://leghe.fantacalcio.it/lega-scarponi-remastered?id=3054',
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    }
  )

  const $ = cheerio.load(html)

  const teams: any[] = []

  $('tr.ranking-row').each((_, row) => {
    const team = {
      name: $(row)
        .find('td[data-key="teamName"] a')
        .text()
        .trim(),

      games: $(row)
        .find('td[data-key="rank-g"]')
        .text()
        .trim(),

      wins: $(row)
        .find('td[data-key="rank-v"]')
        .text()
        .trim(),

      draws: $(row)
        .find('td[data-key="rank-n"]')
        .text()
        .trim(),

      losses: $(row)
        .find('td[data-key="rank-p"]')
        .text()
        .trim(),

      goalsFor: $(row)
        .find('td[data-key="rank-gf"]')
        .text()
        .trim(),

      goalsAgainst: $(row)
        .find('td[data-key="rank-gs"]')
        .text()
        .trim(),

      goalDiff: $(row)
        .find('td[data-key="rank-dr"]')
        .text()
        .trim(),

      points: $(row)
        .find('td[data-key="rank-pt"]')
        .text()
        .trim(),

      totalPoints: $(row)
        .find('td[data-key="rank-fp"]')
        .text()
        .trim(),
    }

    teams.push(team)
  })

  return NextResponse.json({
    count: teams.length,
    teams,
  })
}