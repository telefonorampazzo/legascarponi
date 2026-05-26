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

  if (!team) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-8 py-16">

        <Link
          href="/teams"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Torna alla classifica
        </Link>

        <h1 className="text-6xl font-black mt-8 mb-4">
          {team.name}
        </h1>

        <p className="text-zinc-500 text-xl mb-12">
          Scheda ufficiale squadra
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6">
            <div className="text-zinc-500">
              Punti Classifica
            </div>

            <div className="text-cyan-400 text-6xl font-black mt-2">
              {team.points}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6">
            <div className="text-zinc-500">
              Fantapunti Totali
            </div>

            <div className="text-5xl font-black mt-2">
              {team.total_points}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6">
            <div className="text-zinc-500 mb-4">
              Record
            </div>

            <div className="space-y-2 text-lg">
              <div>✅ Vittorie: {team.wins}</div>
              <div>➖ Pareggi: {team.draws}</div>
              <div>❌ Sconfitte: {team.losses}</div>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6">
            <div className="text-zinc-500 mb-4">
              Gol
            </div>

            <div className="space-y-2 text-lg">
              <div>⚽ Fatti: {team.goals_for}</div>
              <div>🥅 Subiti: {team.goals_against}</div>
              <div>
                📊 Differenza:{' '}
                {team.goals_for - team.goals_against}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}