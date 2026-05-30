import Link from 'next/link'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import TeamPerformanceChart from '@/components/TeamPerformanceChart'

export default async function TeamPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  /* =========================
     TEAM
  ========================== */

  const { data: team } = await supabase
    .from('teams')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!team) {
    notFound()
  }

  /* =========================
     HISTORY
  ========================== */

  const { data: history } = await supabase
    .from('standings_history')
    .select('*')
    .eq('team_slug', slug)
    .order('created_at', {
      ascending: true,
    })

  /* =========================
     PLAYERS
  ========================== */

  const { data: allPlayers } = await supabase
  .from('players')
  .select(`
    *,
    player_stats (
      appearances,
      goals,
      assists,
      rating,
      minutes_played,
      yellow_cards,
      red_cards
    )
  `)

  /* =========================
     TEAM PLAYERS
  ========================== */

const players =
  allPlayers
    ?.filter((player) => {

      const fantasyTeam =
        player.fantasy_team
          ?.toLowerCase()
          ?.trim()

      const currentTeam =
        team.name
          ?.toLowerCase()
          ?.trim()

      return fantasyTeam === currentTeam

    })
    ?.sort((a, b) => b.cost - a.cost) ?? []

  /* =========================
     ROLE SYSTEM
  ========================== */

  const DEFENDER_ROLES = [
    'dd',
    'dc',
    'ds',
    'e',
    'b',
  ]

  const MIDFIELDER_ROLES = [
    'm',
    'c',
    'w',
    't',
  ]

  const ATTACKER_ROLES = [
    'a',
    'pc',
  ]

  const getRoles = (
    playerRole: string
  ) => {

    return playerRole
      ?.toLowerCase()
      ?.split(';')
      ?.map((r: string) => r.trim()) || []

  }

  /* =========================
     PORTIERI
  ========================== */

  const goalkeepers =
    players.filter((player) => {

      const roles =
        getRoles(player.role)

      return roles.includes('por')

    })

  /* =========================
     DIFENSORI
  ========================== */

  const defenders =
    players.filter((player) => {

      const roles =
        getRoles(player.role)

      return roles.some((role: string) =>
        DEFENDER_ROLES.includes(role)
      )

    })

  /* =========================
     CENTROCAMPISTI
  ========================== */

  const midfielders =
    players.filter((player) => {

      const roles =
        getRoles(player.role)

      const isDefender =
        roles.some((role: string) =>
          DEFENDER_ROLES.includes(role)
        )

      if (isDefender) return false

      return roles.some((role: string) =>
        MIDFIELDER_ROLES.includes(role)
      )

    })

  /* =========================
     ATTACCANTI
  ========================== */

  const attackers =
    players.filter((player) => {

      const roles =
        getRoles(player.role)

      const isDefender =
        roles.some((role: string) =>
          DEFENDER_ROLES.includes(role)
        )

      const isMidfielder =
        roles.some((role: string) =>
          MIDFIELDER_ROLES.includes(role)
        )

      if (isDefender) return false
      if (isMidfielder) return false

      return roles.some((role: string) =>
        ATTACKER_ROLES.includes(role)
      )

    })

  /* =========================
     CALCULATIONS
  ========================== */

  const matchesPlayed =
    team.wins +
    team.draws +
    team.losses

  const goalDifference =
    team.goals_for -
    team.goals_against

  const averagePoints =
    matchesPlayed > 0
      ? (
          Number(team.total_points) /
          matchesPlayed
        ).toFixed(1)
      : '0'

  const winRate =
    matchesPlayed > 0
      ? Math.round(
          (team.wins / matchesPlayed) * 100
        )
      : 0

  /* =========================
     CHART
  ========================== */

  const chartData =
    history?.map((item) => ({
      date: new Date(item.created_at)
        .toLocaleDateString('it-IT', {
          day: '2-digit',
          month: '2-digit',
        }),

      points: item.points,
    })) ?? []

  /* =========================
     PLAYER CARD
  ========================== */

  const PlayerCard = ({
  player,
}: {
  player: any
}) => {

  const stats = Array.isArray(player.player_stats)
    ? player.player_stats[0]
    : player.player_stats

  return (


      <div
        className="
          rounded-[32px]
          border border-white/10
          bg-zinc-950
          p-8
          hover:border-white/30
          transition
        "
      >

        {/* TOP */}
        <div
          className="
            flex items-center
            justify-between
          "
        >

          <div
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-zinc-500
            "
          >
            {player.role}
          </div>

          <div
            className="
              text-sm
              font-semibold
              text-zinc-400
            "
          >
            {player.cost} cr
          </div>

        </div>

        {/* NAME */}
        <Link
          href={`/giocatori/${player.id}`}
          className="
            mt-8
            block
            text-3xl
            font-black
            tracking-tight
            leading-tight
            hover:text-white
hover:underline
cursor-pointer
            transition
          "
        >
          {player.player_name}
        </Link>

        {/* TEAM */}
        <div className="mt-8">

          <div className="text-zinc-500 text-sm">
            Club
          </div>

          <div className="mt-2 text-lg">
            {player.real_team}
          </div>

        </div>

        {/* STATS */}
        <div className="mt-10 grid grid-cols-3 gap-4">

          <div>

            <div className="text-zinc-500 text-xs uppercase">
              Pres
            </div>

            <div className="mt-2 text-2xl font-black">
              {stats?.appearances || 0}
            </div>

          </div>

          <div>

            <div className="text-zinc-500 text-xs uppercase">
              Gol
            </div>

            <div className="mt-2 text-2xl font-black">
              {stats?.goals || 0}
            </div>

          </div>

          <div>

            <div className="text-zinc-500 text-xs uppercase">
              Assist
            </div>

            <div className="mt-2 text-2xl font-black">
              {stats?.assists || 0}
            </div>

          </div>

        </div>

        {/* FM */}
        <div
          className="
            mt-10
            pt-6
            border-t border-white/10
            flex items-center justify-between
          "
        >

          <div>

            <div className="text-zinc-500 text-xs uppercase">
  Rating
</div>

<div className="mt-2 text-3xl font-black">
  {stats?.rating ?? '-'}
</div>

          </div>

          <div
            className="
              h-14 w-14
              rounded-full
              border border-white/10
              flex items-center justify-center
              text-sm font-bold
              bg-white text-black
            "
          >
            {player.role}
          </div>

        </div>

      </div>

    )

  }

  /* =========================
     ROLE SECTIONS
  ========================== */

  const sections = [
    {
      title: 'PORTIERI.',
      subtitle: 'Goalkeepers',
      players: goalkeepers,
    },
    {
      title: 'DIFENSORI.',
      subtitle: 'Defenders',
      players: defenders,
    },
    {
      title: 'CENTROCAMPISTI.',
      subtitle: 'Midfielders',
      players: midfielders,
    },
    {
      title: 'ATTACCANTI.',
      subtitle: 'Attackers',
      players: attackers,
    },
  ]

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">

        <div className="absolute inset-0 bg-zinc-950" />

        <div
          className="
            absolute inset-0
            opacity-[0.04]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:120px_120px]
          "
        />

        <div
          className="
            absolute top-0 left-1/2
            -translate-x-1/2
            h-[700px] w-[700px]
            rounded-full
            bg-white/5
            blur-[180px]
          "
        />

        <div
          className="
            relative z-10
            max-w-7xl mx-auto
            px-8
            pb-24
            w-full
          "
        >

          <Link
            href="/squadre"
            className="
              inline-flex
              items-center
              text-zinc-400
              hover:text-white
              transition
              mb-12
            "
          >
            ← Torna alle Squadre
          </Link>

          <div className="max-w-5xl">

            <div
              className="
                text-sm uppercase
                tracking-[0.4em]
                text-zinc-500
              "
            >
              Team Profile
            </div>

            <h1
              className="
                mt-8
                text-7xl md:text-[10rem]
                font-black
                tracking-tight
                leading-[0.9]
              "
            >
              {team.name}.
            </h1>

            <div
              className="
                mt-12
                flex flex-wrap
                gap-4
              "
            >

              <div
                className="
                  rounded-full
                  bg-white
                  text-black
                  px-6 py-3
                  font-semibold
                "
              >
                {team.points} Punti
              </div>

              <div
                className="
                  rounded-full
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  px-6 py-3
                  font-semibold
                "
              >
                {winRate}% Win Rate
              </div>

              <div
                className="
                  rounded-full
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  px-6 py-3
                  font-semibold
                "
              >
                {matchesPlayed} Match
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="grid xl:grid-cols-4 gap-8">

            <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

              <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Fantapunti
              </div>

              <div className="mt-8 text-6xl font-black tracking-tight">
                {team.total_points}
              </div>

            </div>

            <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

              <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Media Match
              </div>

              <div className="mt-8 text-6xl font-black tracking-tight">
                {averagePoints}
              </div>

            </div>

            <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

              <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Goal Difference
              </div>

              <div className="mt-8 text-6xl font-black tracking-tight">
                {goalDifference > 0 ? '+' : ''}
                {goalDifference}
              </div>

            </div>

            <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

              <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Win Rate
              </div>

              <div className="mt-8 text-6xl font-black tracking-tight">
                {winRate}%
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CHART */}
      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

            <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Performance Trend
            </div>

            <h2
              className="
                mt-6
                text-5xl md:text-7xl
                font-black
                tracking-tight
                leading-none
              "
            >
              PERFORMANCE
              <br />
              HISTORY.
            </h2>

            <div className="mt-20">
              <TeamPerformanceChart data={chartData} />
            </div>

          </div>

        </div>

      </section>

      {/* ROLE SECTIONS */}
      {sections.map((section) => (

        <section
          key={section.title}
          className="border-t border-white/10"
        >

          <div className="max-w-7xl mx-auto px-8 py-24">

            <div
              className="
                text-sm uppercase
                tracking-[0.4em]
                text-zinc-500
              "
            >
              {section.subtitle}
            </div>

            <h2
              className="
                mt-6
                text-5xl md:text-7xl
                font-black
                tracking-tight
              "
            >
              {section.title}
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">

              {section.players.map((player) => (

                <PlayerCard
                  key={player.id}
                  player={player}
                />

              ))}

            </div>

          </div>

        </section>

      ))}

    </main>
  )
}