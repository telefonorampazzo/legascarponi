import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default async function HomePage() {
  const { data: teams } = await supabase
    .from('teams')
    .select('*')
    .order('points', { ascending: false })

  const top5 = teams?.slice(0, 5) ?? []

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-400 text-sm">
            ⚽ Fantacalcio
          </div>

          <h1 className="text-6xl md:text-8xl font-black mt-8">
            LEGA
            <br />
            SCARPONI
          </h1>

          <p className="text-zinc-400 text-xl mt-6 max-w-2xl">
            Dashboard ufficiale della Lega Scarponi Remastered.
            Classifica live, statistiche, squadre e regolamento.
          </p>

          <div className="flex gap-4 mt-10">
            <Link
              href="/teams"
              className="bg-cyan-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-cyan-400 transition"
            >
              Classifica
            </Link>

            <Link
              href="/regolamento"
              className="border border-zinc-800 px-6 py-3 rounded-xl hover:border-zinc-600 transition"
            >
              Regolamento
            </Link>
          </div>
        </div>
      </section>

      {/* CLASSIFICA */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold">
            🏆 Top 5 Classifica
          </h2>

          <Link
            href="/teams"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Vedi completa →
          </Link>
        </div>

        <div className="grid gap-4">
          {top5.map((team, index) => (
            <div
              key={team.id}
              className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <div className="text-zinc-500 text-xl w-10">
                  #{index + 1}
                </div>

                <div>
                  <Link
                    href={`/squadre/${team.slug}`}
                    className="font-bold text-2xl hover:text-cyan-400 transition"
                  >
                    {team.name}
                  </Link>
                </div>
              </div>

              <div className="text-cyan-400 text-3xl font-black">
                {team.points}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <h2 className="text-4xl font-bold mb-8">
          Esplora la Lega
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/teams"
            className="border border-zinc-900 bg-zinc-950 rounded-2xl p-6 hover:border-cyan-500 transition"
          >
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="font-bold text-xl">Classifica</h3>
            <p className="text-zinc-500 mt-2">
              Posizioni aggiornate della lega
            </p>
          </Link>

          <Link
            href="/squadre"
            className="border border-zinc-900 bg-zinc-950 rounded-2xl p-6 hover:border-cyan-500 transition"
          >
            <div className="text-3xl mb-4">👥</div>
            <h3 className="font-bold text-xl">Squadre</h3>
            <p className="text-zinc-500 mt-2">
              Rose e statistiche complete
            </p>
          </Link>

          <Link
            href="/statistiche"
            className="border border-zinc-900 bg-zinc-950 rounded-2xl p-6 hover:border-cyan-500 transition"
          >
            <div className="text-3xl mb-4">📈</div>
            <h3 className="font-bold text-xl">Statistiche</h3>
            <p className="text-zinc-500 mt-2">
              Analisi e record storici
            </p>
          </Link>

          <Link
            href="/regolamento"
            className="border border-zinc-900 bg-zinc-950 rounded-2xl p-6 hover:border-cyan-500 transition"
          >
            <div className="text-3xl mb-4">📜</div>
            <h3 className="font-bold text-xl">Regolamento</h3>
            <p className="text-zinc-500 mt-2">
              Regole ufficiali della lega
            </p>
          </Link>
        </div>
      </section>
    </main>
  )
}