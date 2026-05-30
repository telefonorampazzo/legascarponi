import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'

dotenv.config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

function extractStat(stats, title) {
  const stat = stats.find(
    s =>
      s.title?.toLowerCase().trim() ===
      title.toLowerCase().trim()
  )

  if (!stat) return 0

  if (typeof stat.value === 'number') {
    return stat.value
  }

  const num = Number(stat.value)

  return Number.isNaN(num) ? 0 : num
}

async function sync() {
  const { data: players, error } = await supabase
    .from('players')
    .select('id, player_name, fotmob_id')
    .not('fotmob_id', 'is', null)

  if (error) {
    console.error(error)
    return
  }

  console.log(`Players found: ${players.length}`)

  for (const player of players) {
    try {
      console.log(
        `Syncing ${player.player_name} (${player.fotmob_id})`
      )

      const res = await fetch(
        `https://www.fotmob.com/players/${player.fotmob_id}`
      )

      if (!res.ok) {
        console.log(
          `Skipped ${player.player_name}: ${res.status}`
        )
        continue
      }

      const html = await res.text()

      const match = html.match(
        /"mainLeague":({.*?"trophies":)/s
      )

      if (!match) {
        console.log(
          `No stats found for ${player.player_name}`
        )
        continue
      }

      const jsonText = match[1].replace(
        /,"trophies":$/,
        ''
      )

      const mainLeague = JSON.parse(jsonText)

      const stats = mainLeague.stats || []

      const rating = extractStat(
        stats,
        'Rating'
      )

      const appearances = extractStat(
        stats,
        'Matches'
      )

      const minutesPlayed = extractStat(
        stats,
        'Minutes played'
      )

      const goals = extractStat(
        stats,
        'Goals'
      )

      const assists = extractStat(
        stats,
        'Assists'
      )

      const yellowCards = extractStat(
        stats,
        'Yellow cards'
      )

      const redCards = extractStat(
        stats,
        'Red cards'
      )

      const cleanSheets = extractStat(
        stats,
        'Clean sheets'
      )

      const goalsConceded = extractStat(
        stats,
        'Goals conceded'
      )

      await supabase
        .from('player_stats')
        .upsert({
          player_id: player.id,

          appearances,
          minutes_played: minutesPlayed,

          goals,
          assists,

          rating,

          yellow_cards: yellowCards,
          red_cards: redCards,

          clean_sheets: cleanSheets,
          goals_conceded: goalsConceded,

          fotmob_stats: stats,

          updated_at:
            new Date().toISOString()
        })

      console.log(
        `✓ ${player.player_name}`
      )
    } catch (err) {
      console.error(
        `✗ ${player.player_name}`,
        err.message
      )
    }
  }

  console.log('DONE')
}

sync()