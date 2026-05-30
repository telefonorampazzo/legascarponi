import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'

dotenv.config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const TEAM_IDS = [
  9875,  // Napoli
  8636,  // Inter
  8564,  // Milan
  9885,  // Juventus
  8686,  // Roma
  8543,  // Lazio
  8524,  // Atalanta
  9857,  // Bologna
  8600,  // Udinese
  10171, // Como

  8529,  // Cagliari
  7801,  // Cremonese
  8535,  // Fiorentina
  10233, // Genoa
  9888,  // Lecce
  10167, // Parma
  6479,  // Pisa
  7943,  // Sassuolo
  9804,  // Torino
  9876   // Verona
]

function normalize(name) {
  return String(name || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/'/g, '')
    .replace(/\*/g, '')
    .replace(/-/g, ' ')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function cleanFantasyName(name) {
  return normalize(name).replace(/\./g, '')
}

function lastWord(name) {
  const parts = normalize(name).split(' ')
  return parts[parts.length - 1]
}

function removeParticles(name) {
  return normalize(name)
    .replace(/\bde\b/g, '')
    .replace(/\bda\b/g, '')
    .replace(/\bdi\b/g, '')
    .replace(/\bvan\b/g, '')
    .replace(/\bder\b/g, '')
    .replace(/\bel\b/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

async function getFotmobPlayers(teamId) {
  try {
    const res = await fetch(
      `https://www.fotmob.com/api/data/teams?id=${teamId}`
    )

    if (!res.ok) {
      console.log(
        `ERROR TEAM ${teamId}: ${res.status}`
      )
      return []
    }

    const json = await res.json()

    const groups =
      json?.squad?.squad || []

    const players = []

    for (const group of groups) {
      const members =
        group.members || []
for (const player of members) {
  if (!player.id || !player.name)
    continue

  players.push({
    fotmob_id: player.id,
    player_name: player.name
  })
}}

return players

} catch (err) {
  console.log(
    `ERROR TEAM ${teamId}`
  )
  return []
}
}

const MANUAL_MATCHES = {
  'di gregorio': 'michele di gregorio',
  'de winter': 'koni de winter',
  'hojlund': 'rasmus h jlund',
  'ostigard': 'leo stigard',
  'delprato': 'enrico del prato',
  'iling junior': 'samuel iling junior',
  'sorensen o': 'oliver s rensen',
  'de roon': 'marten de roon',
  'el shaarawy': 'stephan el shaarawy',
  'de bruyne': 'kevin de bruyne',
  'esposito fp': 'francesco pio esposito',
  'van der brempt': 'ignace van der brempt',
  'kone m': 'ismael kone',
  'lookman': 'ademola lookman',
  'de gea': 'david de gea',
  'di lorenzo': 'giovanni di lorenzo',
  'floriani mussolini': 'romano floriani mussolini',
  'thuram k': 'khephren thuram ulien',
  'al musrati': 'moatasem al musrati',
  'ederson ds': 'ederson',
  'da cunha': 'lucas da cunha',
  'el aynaoui': 'neil el aynaoui',
  'de ketelaere': 'charles de ketelaere',
  'matic': 'nemanja matic',
  'zambo anguissa': 'frank anguissa',
  'malinovskyi': 'ruslan malinovsky',
  'vitinha o': 'vitinha'
}

function findMatch(dbPlayer, fotmobPlayers) {
  const dbName = cleanFantasyName(
    dbPlayer.player_name
  )

  const manualTarget =
    MANUAL_MATCHES[dbName]

  const dbNoParticles =
    removeParticles(dbName)

  for (const player of fotmobPlayers) {
    const fotmobName = normalize(
      player.player_name
    )
if (
  dbName === 'hojlund' ||
  dbName === 'ostigard' ||
  dbName === 'delprato' ||
  dbName === 'iling junior' ||
  dbName === 'sorensen o' ||
  dbName === 'esposito fp' ||
  dbName === 'kone m' ||
  dbName === 'lookman' ||
  dbName === 'thuram k' ||
  dbName === 'al musrati' ||
  dbName === 'ederson ds' ||
  dbName === 'matic' ||
  dbName === 'zambo anguissa' ||
  dbName === 'malinovskyi'
) {
  console.log(
    dbName,
    '->',
    fotmobName
  )
}
    if (
      manualTarget &&
      fotmobName === normalize(manualTarget)
    ) {
      return player
    }

    const fotmobNoParticles =
      removeParticles(fotmobName)

    const fotmobSurname =
      lastWord(fotmobName)

    if (fotmobName === dbName) {
      return player
    }

    if (
      fotmobNoParticles ===
      dbNoParticles
    ) {
      return player
    }

    if (fotmobSurname === dbName) {
      return player
    }

    const dbParts =
      dbName.split(' ')

    if (dbParts.length === 2) {
      const surname = dbParts[0]
      const initial =
        dbParts[1].charAt(0)

      const fotmobParts =
        fotmobName.split(' ')

      if (
        fotmobParts.length >= 2
      ) {
        const firstName =
          fotmobParts[0]

        const surnameFotmob =
          fotmobParts[
            fotmobParts.length - 1
          ]

        if (
          surnameFotmob === surname &&
          firstName.charAt(0) === initial
        ) {
          return player
        }
      }
    }
  }

  return null
}

async function main() {
  console.log(
    'LOADING FOTMOB TEAMS\n'
  )

  const allFotmobPlayers = []

  for (const teamId of TEAM_IDS) {
    const players =
      await getFotmobPlayers(
        teamId
      )

    console.log(
      `Team ${teamId}: ${players.length} players`
    )

    allFotmobPlayers.push(
      ...players
    )
  }

  const uniquePlayers = [
    ...new Map(
      allFotmobPlayers.map(
        p => [p.fotmob_id, p]
      )
    ).values()
  ]

  console.log(
    `\nTOTAL PLAYERS: ${uniquePlayers.length}\n`
  )

 const {
  data: dbPlayers,
  error
} = await supabase
  .from('players')
  .select(
    'id, player_name, fotmob_id'
  )
  .is('fotmob_id', null)

  if (error) {
    console.error(error)
    return
  }

  let updated = 0
  let noMatch = 0

  for (const dbPlayer of dbPlayers) {
    const match = findMatch(
      dbPlayer,
      uniquePlayers
    )

    if (!match) {
      console.log(
        `NO MATCH -> ${dbPlayer.player_name}`
      )

      noMatch++
      continue
    }

    const {
      error: updateError
    } = await supabase
      .from('players')
      .update({
        fotmob_id:
          match.fotmob_id
      })
      .eq('id', dbPlayer.id)

    if (updateError) {
      console.log(
        `ERROR -> ${dbPlayer.player_name}`
      )
      continue
    }

    console.log(
      `✓ ${dbPlayer.player_name} -> ${match.fotmob_id} (${match.player_name})`
    )

    updated++
  }

  console.log('\n================')
  console.log('DONE')
  console.log('================')
  console.log(
    `UPDATED: ${updated}`
  )
  console.log(
    `NO MATCH: ${noMatch}`
  )
}

main()