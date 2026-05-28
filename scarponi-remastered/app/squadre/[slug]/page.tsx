import Link from 'next/link'
import Image from 'next/image'
import slugify from 'slugify'
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

  const { data: players } = await supabase
    .from('players')
    .select('*')
    .eq('fantasy_team', team.name)
    .order('role')

  /* =========================
     GROUP PLAYERS
  ========================== */

  const goalkeepers =
    players?.filter(
      (player) =>
        player.role === 'Por'
    ) ?? []

  const defenders =
    players?.filter(
      (player) =>
        ['Dc', 'Dd', 'Ds'].includes(player.role)
    ) ?? []

  const midfielders =
    players?.filter(
      (player) =>
        ['M', 'C', 'W', 'T'].includes(player.role)
    ) ?? []

  const attackers =
    players?.filter(
      (player) =>
        ['A', 'Pc'].includes(player.role)
    ) ?? []

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

    const imageSlug = slugify(
      player.player_name,
      {
        lower: true,
        strict: true,
      }
    )

    const imageUrl =
      `https://content.fantacalcio.it/web/campioncini/card/${imageSlug}.png`

    return (

      <div
        className="
          rounded-[32px]
          border border-white/10
          bg-zinc-950
          overflow-hidden
          hover:border-white/30
          transition
        "
      >

        {/* IMAGE */}
        <div
          className="
            relative
            h-[320px]
            bg-zinc-900
          "
        >

          <Image
            src={imageUrl}
            alt={player.player_name}
            fill
            className="object-cover"
            unoptimized
          />

        </div>

        {/* CONTENT */}
        <div className="p-8">

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

          <h3
            className="
              mt-6
              text-3xl
              font-black
              tracking-tight
              leading-tight
            "
          >
            {player.player_name}
          </h3>

          <div className="mt-8">

            <div className="text-zinc-500 text-sm">
              Club
            </div>

            <div className="mt-2 text-lg">
              {player.real_team}
            </div>

          </div>

        </div>

      </div>

    )
  }

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
      {[
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
      ].map((section) => (

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