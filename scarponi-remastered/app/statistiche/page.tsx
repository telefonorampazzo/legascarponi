import { supabase } from '@/lib/supabase'

export default async function StatistichePage() {
  const { data: teams } = await supabase
    .from('teams')
    .select('*')

  if (!teams) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        Errore caricamento statistiche
      </main>
    )
  }

  const bestAttack = [...teams].sort(
    (a, b) => b.goals_for - a.goals_for
  )[0]

  const bestDefense = [...teams].sort(
    (a, b) => a.goals_against - b.goals_against
  )[0]

  const mostPoints = [...teams].sort(
    (a, b) => b.total_points - a.total_points
  )[0]

  const worstDefense = [...teams].sort(
    (a, b) => b.goals_against - a.goals_against
  )[0]

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <h1 className="text-6xl font-black mb-12">
          📊 Statistiche Lega
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-8">
            <div className="text-zinc-500 mb-2">
              Miglior Attacco
            </div>

            <h2 className="text-3xl font-bold">
              {bestAttack.name}
            </h2>

            <div className="text-cyan-400 text-5xl font-black mt-4">
              {bestAttack.goals_for}
            </div>

            <div className="text-zinc-500 mt-2">
              gol segnati
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-8">
            <div className="text-zinc-500 mb-2">
              Miglior Difesa
            </div>

            <h2 className="text-3xl font-bold">
              {bestDefense.name}
            </h2>

            <div className="text-cyan-400 text-5xl font-black mt-4">
              {bestDefense.goals_against}
            </div>

            <div className="text-zinc-500 mt-2">
              gol subiti
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-8">
            <div className="text-zinc-500 mb-2">
              Più Fantapunti
            </div>

            <h2 className="text-3xl font-bold">
              {mostPoints.name}
            </h2>

            <div className="text-cyan-400 text-5xl font-black mt-4">
              {mostPoints.total_points}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-8">
            <div className="text-zinc-500 mb-2">
              Peggior Difesa
            </div>

            <h2 className="text-3xl font-bold">
              {worstDefense.name}
            </h2>

            <div className="text-red-500 text-5xl font-black mt-4">
              {worstDefense.goals_against}
            </div>

            <div className="text-zinc-500 mt-2">
              gol subiti
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}