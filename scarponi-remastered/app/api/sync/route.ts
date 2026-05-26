import { NextResponse } from 'next/server'
import axios from 'axios'
import * as cheerio from 'cheerio'
import { createClient } from '@supabase/supabase-js'

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export async function GET() {
  try {
    const { data: html } = await axios.get(
      'https://leghe.fantacalcio.it/lega-scarponi-remastered?id=3054',
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        },
      }
    )

    const $ = cheerio.load(html)

    const teams: any[] = []

    $('tr.ranking-row').each((_, row) => {
      const name = $(row)
        .find('td[data-key="teamName"] a')
        .text()
        .trim()

      teams.push({
        name,
        slug: slugify(name),

        points: Number(
          $(row)
            .find('td[data-key="rank-pt"]')
            .text()
            .trim()
        ),

        wins: Number(
          $(row)
            .find('td[data-key="rank-v"]')
            .text()
            .trim()
        ),

        draws: Number(
          $(row)
            .find('td[data-key="rank-n"]')
            .text()
            .trim()
        ),

        losses: Number(
          $(row)
            .find('td[data-key="rank-p"]')
            .text()
            .trim()
        ),

        goals_for: Number(
          $(row)
            .find('td[data-key="rank-gf"]')
            .text()
            .trim()
        ),

        goals_against: Number(
          $(row)
            .find('td[data-key="rank-gs"]')
            .text()
            .trim()
        ),

        total_points: Number(
          $(row)
            .find('td[data-key="rank-fp"]')
            .text()
            .replace(',', '.')
            .trim()
        ),
      })
    })

 const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

console.log(JSON.stringify(teams, null, 2))

for (const team of teams) {
  const result = await supabase
    .from('teams')
    .update({
      points: team.points,
      wins: team.wins,
      draws: team.draws,
      losses: team.losses,
      goals_for: team.goals_for,
      goals_against: team.goals_against,
      total_points: team.total_points,
    })
    .eq('slug', team.slug)
    .select()

  console.log(
    'UPDATE:',
    team.slug,
    JSON.stringify(result, null, 2)
  )
}

return NextResponse.json({
  success: true,
  updated: teams.length,
})
} catch (error) {
  return NextResponse.json({
    success: false,
    error:
      error instanceof Error
        ? error.message
        : 'Unknown error',
  })
}
}