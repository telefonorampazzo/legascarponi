import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'

dotenv.config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

async function sync() {
  const { data: players, error } = await supabase
    .from('players')
    .select('id, player_name, sofascore_id')
    .not('sofascore_id', 'is', null)

  if (error) {
    console.error(error)
    return
  }

  console.log(`Players found: ${players.length}`)

  for (const player of players) {
    try {
      console.log(
        `Syncing ${player.player_name} (${player.sofascore_id})`
      )

      const res = await fetch(
        `https://www.sofascore.com/api/v1/player/${player.sofascore_id}/statistics`,
        {
          headers: {
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
            accept: 'application/json',
            referer: `https://www.sofascore.com/`
          }
        }
      )

      if (!res.ok) {
        console.log(
          `Skipped ${player.player_name}: ${res.status}`
        )
        continue
      }

      const seasons = await res.json()

      if (!Array.isArray(seasons) || seasons.length === 0) {
        continue
      }

      const serieA = seasons.find(
        s =>
          s.uniqueTournament?.name === 'Serie A'
      )

      if (!serieA) {
        continue
      }

      const stats = serieA.statistics

      await supabase
        .from('player_stats')
        .upsert({
          player_id: player.id,
          appearances:
            stats.appearances ?? 0,
          goals:
            stats.goals ?? 0,
          assists:
            stats.assists ?? 0,
          yellow_cards:
            stats.yellowCards ?? 0,
          red_cards:
            stats.redCards ?? 0,
          xg:
            stats.expectedGoals ?? 0,
          xa:
            stats.expectedAssists ?? 0,
          rating:
            stats.rating ?? 0,
          updated_at:
            new Date().toISOString()
        })

      console.log(
        `✓ ${player.player_name}`
      )
    } catch (err) {
      console.log(
        `✗ ${player.player_name}`
      )
    }
  }

  console.log('DONE')
}

sync()