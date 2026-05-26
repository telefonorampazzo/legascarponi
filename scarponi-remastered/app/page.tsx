import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default async function HomePage() {
  const { data: teams } = await supabase
    .from('teams')
    .select('*')
    .order('points', { ascending: false })

  const ranking = teams ?? []

  const first = ranking[0]
  const second = ranking[1]
  const third = ranking[2]

  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-7xl mx-auto px-8 py-20">
        <h1 className="text-7xl font-black">
          LEGA SCARPONI
        </h1>

        <p className="text-zinc-400 text-xl mt-4">
          Dashboard ufficiale della Lega Scarponi Remastered
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-16">
        <h2 className="text-5xl font-black mb-10">
          🏆 Podio
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {second && (
            <Link
              href={`/squadre/${second.slug}`}
              className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800"
            >
              <div className="text-5xl">🥈</div>
              <h3 className="text-3xl font-bold mt-4">
                {second.name}
              </h3>
              <div className="text-cyan-400 text-5xl font-black mt-4">
                {second.points}
              </div>
            </Link>
          )}

          {first && (
            <Link
              href={`/squadre/${first.slug}`}
              className="bg-yellow-500/10 border border-yellow-500 rounded-3xl p-10"
            >
              <div className="text-6xl">🥇</div>

              <h3 className="text-4xl font-black mt-4">
                {first.name}
              </h3>

              <div className="text-yellow-400 text-6xl font-black mt-4">
                {first.points}
              </div>
            </Link>
          )}

          {third && (
            <Link
              href={`/squadre/${third.slug}`}
              className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800"
            >
              <div className="text-5xl">🥉</div>

              <h3 className="text-3xl font-bold mt-4">
                {third.name}
              </h3>

              <div className="text-cyan-400 text-5xl font-black mt-4">
                {third.points}
              </div>
            </Link>
          )}

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-20">
        <h2 className="text-4xl font-bold mb-8">
          Classifica Completa
        </h2>

        <div className="grid gap-4">
          {ranking.map((team, index) => (
            <Link
              key={team.id}
              href={`/squadre/${team.slug}`}
              className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 flex justify-between hover:border-cyan-500 transition"
            >
              <div>
                #{index + 1} · {team.name}
              </div>

              <div className="font-black text-cyan-400">
                {team.points}
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  )
}