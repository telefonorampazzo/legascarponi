import TeamPerformanceChart from '@/components/TeamPerformanceChart'
import TeamForm from '@/components/TeamForm'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default async function TeamPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { data: team } = await supabase
    .from('teams')
    .select('*')
    .eq('slug', slug)
    .single()

  const { data: history } = await supabase
    .from('standings_history')
    .select('*')
    .eq('team_slug', slug)
    .order('created_at', { ascending: true })

  if (!team) {
    notFound()
  }

  const chartData =
    history?.map((item) => ({
      date: new Date(item.created_at)
        .toLocaleDateString('it-IT', {
          day: '2-digit',
          month: '2-digit',
        }),

      points: item.points,
    })) ?? []

  const matchesPlayed =
    team.wins +
    team.draws +
    team.losses

  const goalDifference =
    team.goals_for - team.goals_against

  const averagePoints =
    (
      Number(team.total_points) /
      matchesPlayed
    ).toFixed(1)

  /* =========================
     PREDICTION ENGINE
  ========================== */

  const powerScore = Math.round(
    team.points * 1.5 +
    goalDifference * 2 +
    team.wins * 3 +
    Number(averagePoints)
  )

  let powerLabel = 'WEAK'
  let powerColor = 'text-red-400'
  let powerGlow =
    'border-red-500/30 bg-red-500/10'

  if (powerScore >= 90) {
    powerLabel = 'ELITE'
    powerColor = 'text-cyan-400'
    powerGlow =
      'border-cyan-500/30 bg-cyan-500/10'
  }

  else if (powerScore >= 75) {
    powerLabel = 'STRONG'
    powerColor = 'text-green-400'
    powerGlow =
      'border-green-500/30 bg-green-500/10'
  }

  else if (powerScore >= 60) {
    powerLabel = 'MID'
    powerColor = 'text-yellow-400'
    powerGlow =
      'border-yellow-500/30 bg-yellow-500/10'
  }

  const titleChance = Math.min(
    95,
    Math.round((powerScore / 100) * 100)
  )

  const momentum =
    team.wins >= 15
      ? '🔥 HOT'
      : team.wins >= 10
      ? '⚡ IN FORM'
      : '🥶 COLD'

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">

        <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[160px]" />

      </div>

      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* BACK */}
        <Link
          href="/teams"
          className="text-cyan-400 hover:text-cyan-300 transition"
        >
          ← Torna alla classifica
        </Link>

        {/* HERO */}
        <section className="mt-10 flex flex-col xl:flex-row xl:items-end xl:justify-between gap-10">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-400 text-sm">
              ⚽ TEAM ANALYTICS PROFILE
            </div>

            <h1 className="text-7xl md:text-8xl font-black mt-8 leading-none">
              {team.name}
            </h1>

            <p className="text-zinc-500 text-xl mt-6 max-w-2xl">
              Dashboard analytics premium con prediction engine,
              momentum tracking e performance intelligence.
            </p>

          </div>

          {/* POWER SCORE */}
          <div
            className={`
              rounded-[40px] border p-10
              backdrop-blur-xl
              shadow-[0_0_60px_rgba(0,212,255,.12)]
              ${powerGlow}
            `}
          >

            <div className="text-zinc-400 text-sm">
              Prediction Engine
            </div>

            <h2 className="text-4xl font-black mt-4">
              ⚡ POWER SCORE
            </h2>

            <div className={`mt-8 ${powerColor}`}>

              <div className="text-8xl font-black leading-none">
                {powerScore}
              </div>

              <div className="text-2xl font-bold mt-4">
                {powerLabel}
              </div>

            </div>

          </div>

        </section>

        {/* AI INSIGHTS */}
        <section className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950/80 backdrop-blur p-8">

            <div className="text-zinc-500">
              🏆 Title Chance
            </div>

            <div className="text-6xl font-black mt-6">
              {titleChance}%
            </div>

          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950/80 backdrop-blur p-8">

            <div className="text-zinc-500">
              📈 Momentum
            </div>

            <div className="text-5xl font-black mt-6">
              {momentum}
            </div>

          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950/80 backdrop-blur p-8">

            <div className="text-zinc-500">
              🎯 Win Rate
            </div>

            <div className="text-6xl font-black mt-6">
              {Math.round(
                (team.wins / matchesPlayed) * 100
              )}%
            </div>

          </div>

        </section>

        {/* MAIN STATS */}
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950/80 backdrop-blur p-8 hover:border-cyan-500/40 transition">

            <div className="text-zinc-500">
              Fantapunti
            </div>

            <div className="text-5xl font-black mt-6">
              {team.total_points}
            </div>

          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950/80 backdrop-blur p-8 hover:border-cyan-500/40 transition">

            <div className="text-zinc-500">
              Media Match
            </div>

            <div className="text-5xl font-black mt-6 text-cyan-400">
              {averagePoints}
            </div>

          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950/80 backdrop-blur p-8 hover:border-cyan-500/40 transition">

            <div className="text-zinc-500">
              Goal Difference
            </div>

            <div className="text-5xl font-black mt-6">
              {goalDifference > 0 ? '+' : ''}
              {goalDifference}
            </div>

          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950/80 backdrop-blur p-8 hover:border-cyan-500/40 transition">

            <div className="text-zinc-500">
              Match Played
            </div>

            <div className="text-5xl font-black mt-6">
              {matchesPlayed}
            </div>

          </div>

        </section>

        {/* RECORD + PERFORMANCE */}
        <section className="grid xl:grid-cols-2 gap-6 mt-6">

          <div className="rounded-[32px] border border-zinc-900 bg-zinc-950/80 backdrop-blur p-8">

            <h2 className="text-3xl font-black mb-10">
              🏆 Match Record
            </h2>

            <div className="space-y-5">

              <div className="flex items-center justify-between">
                <span className="text-zinc-400">
                  Vittorie
                </span>

                <span className="font-black text-2xl text-green-400">
                  {team.wins}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-400">
                  Pareggi
                </span>

                <span className="font-black text-2xl text-yellow-400">
                  {team.draws}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-400">
                  Sconfitte
                </span>

                <span className="font-black text-2xl text-red-400">
                  {team.losses}
                </span>
              </div>

            </div>

          </div>

          <div className="rounded-[32px] border border-zinc-900 bg-zinc-950/80 backdrop-blur p-8">

            <h2 className="text-3xl font-black mb-10">
              ⚽ Team Performance
            </h2>

            <div className="space-y-5">

              <div className="flex items-center justify-between">
                <span className="text-zinc-400">
                  Gol Fatti
                </span>

                <span className="font-black text-2xl text-cyan-400">
                  {team.goals_for}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-400">
                  Gol Subiti
                </span>

                <span className="font-black text-2xl text-red-400">
                  {team.goals_against}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-400">
                  Goal Difference
                </span>

                <span className="font-black text-2xl">
                  {goalDifference > 0 ? '+' : ''}
                  {goalDifference}
                </span>
              </div>

            </div>

          </div>

        </section>

        {/* CHART */}
        <section className="mt-12">
          <TeamPerformanceChart data={chartData} />
        </section>

        {/* FORM */}
        <section className="mt-12">
          <TeamForm
            wins={team.wins}
            draws={team.draws}
            losses={team.losses}
          />
        </section>

      </div>
    </main>
  )
}