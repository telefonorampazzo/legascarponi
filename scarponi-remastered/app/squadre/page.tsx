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

  const goalDifference =
    team.goals_for - team.goals_against

  const averagePoints =
    (
      Number(team.total_points) /
      (
        team.wins +
        team.draws +
        team.losses
      )
    ).toFixed(1)

  return (
    <main className="min-h-screen bg-black text-white">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[160px]" />
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">

        {/* BACK LINK */}
        <Link
          href="/teams"
          className="text-cyan-400 hover:text-cyan-300 transition"
        >
          ← Torna alla classifica
        </Link>

        {/* HEADER */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-400 text-sm">
              ⚽ TEAM PROFILE
            </div>

            <h1 className="text-6xl md:text-7xl font-black mt-6">
              {team.name}
            </h1>

            <p className="text-zinc-500 text-xl mt-4">
              Dashboard analytics squadra
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 px-8 py-6">
            <div className="text-zinc-400 text-sm">
              Punti Classifica
            </div>

            <div className="text-cyan-400 text-6xl font-black mt-2">
              {team.points}
            </div>
          </div>

        </div>

        {/* MAIN STATS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">

          <div className="bg-zinc-950/80 backdrop-blur border border-zinc-900 rounded-3xl p-8">
            <div className="text-zinc-500">
              Fantapunti
            </div>

            <div className="text-5xl font-black mt-4">
              {team.total_points}
            </div>
          </div>

          <div className="bg-zinc-950/80 backdrop-blur border border-zinc-900 rounded-3xl p-8">
            <div className="text-zinc-500">
              Media
            </div>

            <div className="text-5xl font-black mt-4 text-cyan-400">
              {averagePoints}
            </div>
          </div>

          <div className="bg-zinc-950/80 backdrop-blur border border-zinc-900 rounded-3xl p-8">
            <div className="text-zinc-500">
              Goal Difference
            </div>

            <div className="text-5xl font-black mt-4">
              {goalDifference > 0 ? '+' : ''}
              {goalDifference}
            </div>
          </div>

          <div className="bg-zinc-950/80 backdrop-blur border border-zinc-900 rounded-3xl p-8">
            <div className="text-zinc-500">
              Match Giocati
            </div>

            <div className="text-5xl font-black mt-4">
              {
                team.wins +
                team.draws +
                team.losses
              }
            </div>
          </div>

        </div>

        {/* RECORD + GOALS */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">

          <div className="bg-zinc-950/80 backdrop-blur border border-zinc-900 rounded-3xl p-8">

            <h2 className="text-2xl font-black mb-8">
              🏆 Record
            </h2>

            <div className="space-y-4 text-lg">

              <div className="flex justify-between">
                <span className="text-zinc-400">
                  Vittorie
                </span>

                <span className="font-bold text-green-400">
                  {team.wins}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-400">
                  Pareggi
                </span>

                <span className="font-bold text-yellow-400">
                  {team.draws}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-400">
                  Sconfitte
                </span>

                <span className="font-bold text-red-400">
                  {team.losses}
                </span>
              </div>

            </div>

          </div>

          <div className="bg-zinc-950/80 backdrop-blur border border-zinc-900 rounded-3xl p-8">

            <h2 className="text-2xl font-black mb-8">
              ⚽ Performance
            </h2>

            <div className="space-y-4 text-lg">

              <div className="flex justify-between">
                <span className="text-zinc-400">
                  Gol Fatti
                </span>

                <span className="font-bold text-cyan-400">
                  {team.goals_for}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-400">
                  Gol Subiti
                </span>

                <span className="font-bold text-red-400">
                  {team.goals_against}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-400">
                  Differenza Reti
                </span>

                <span className="font-bold">
                  {goalDifference > 0 ? '+' : ''}
                  {goalDifference}
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* CHART */}
        <div className="mt-12">
          <TeamPerformanceChart data={chartData} />
        </div>

        {/* FORM */}
        <div className="mt-12">
          <TeamForm
            wins={team.wins}
            draws={team.draws}
            losses={team.losses}
          />
        </div>

      </div>
    </main>
  )
}