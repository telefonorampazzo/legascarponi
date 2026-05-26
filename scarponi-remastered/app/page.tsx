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

  const bestAttack = [...ranking].sort(
    (a, b) => (b.goals_for ?? 0) - (a.goals_for ?? 0)
  )[0]

  const bestDefense = [...ranking].sort(
    (a, b) => (a.goals_against ?? 0) - (b.goals_against ?? 0)
  )[0]

  const mostPoints = [...ranking].sort(
    (a, b) => (b.total_points ?? 0) - (a.total_points ?? 0)
  )[0]

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[160px]" />
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 pt-32 pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-400 text-sm">
          ⚽ LEGA SCARPONI REMASTERED
        </div>

        <h1 className="mt-8 text-7xl md:text-9xl font-black leading-none tracking-tight">
          LEGA
          <br />
          SCARPONI
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-zinc-400">
          Dashboard premium della lega.
          Classifica live, statistiche avanzate e schede squadra
          aggiornate automaticamente da Fantacalcio.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap">
          <Link
            href="/teams"
            className="rounded-2xl bg-white text-black px-8 py-4 font-bold hover:scale-105 transition"
          >
            Classifica
          </Link>

          <Link
            href="/squadre"
            className="rounded-2xl border border-zinc-800 px-8 py-4 font-bold hover:border-cyan-500 transition"
          >
            Squadre
          </Link>

          <Link
            href="/statistiche"
            className="rounded-2xl border border-zinc-800 px-8 py-4 font-bold hover:border-cyan-500 transition"
          >
            Statistiche
          </Link>
        </div>
      </section>

      {/* PODIO */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <h2 className="text-4xl font-black mb-10">
          🏆 Podio della Lega
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {second && (
            <Link
              href={`/squadre/${second.slug}`}
              className="rounded-3xl border border-zinc-800 bg-zinc-950/80 backdrop-blur p-8 hover:scale-[1.02] transition"
            >
              <div className="text-5xl">🥈</div>

              <h3 className="mt-6 text-3xl font-bold">
                {second.name}
              </h3>

              <div className="mt-6 text-5xl font-black text-cyan-400">
                {second.points}
              </div>

              <div className="text-zinc-500 mt-2">
                punti
              </div>
            </Link>
          )}

          {first && (
            <Link
              href={`/squadre/${first.slug}`}
              className="rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-cyan-500/10 to-zinc-950 p-10 scale-105 shadow-[0_0_60px_rgba(0,212,255,.15)] hover:scale-[1.07] transition"
            >
              <div className="text-6xl">🥇</div>

              <h3 className="mt-6 text-4xl font-black">
                {first.name}
              </h3>

              <div className="mt-6 text-7xl font-black text-cyan-400">
                {first.points}
              </div>

              <div className="text-zinc-400 mt-2">
                Capolista
              </div>
            </Link>
          )}

          {third && (
            <Link
              href={`/squadre/${third.slug}`}
              className="rounded-3xl border border-zinc-800 bg-zinc-950/80 backdrop-blur p-8 hover:scale-[1.02] transition"
            >
              <div className="text-5xl">🥉</div>

              <h3 className="mt-6 text-3xl font-bold">
                {third.name}
              </h3>

              <div className="mt-6 text-5xl font-black text-cyan-400">
                {third.points}
              </div>

              <div className="text-zinc-500 mt-2">
                punti
              </div>
            </Link>
          )}

        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="rounded-3xl bg-zinc-950 border border-zinc-900 p-8">
            <div className="text-zinc-500">
              Miglior Attacco
            </div>

            <div className="mt-4 text-2xl font-bold">
              {bestAttack?.name}
            </div>

            <div className="mt-6 text-5xl font-black text-cyan-400">
              {bestAttack?.goals_for}
            </div>
          </div>

          <div className="rounded-3xl bg-zinc-950 border border-zinc-900 p-8">
            <div className="text-zinc-500">
              Miglior Difesa
            </div>

            <div className="mt-4 text-2xl font-bold">
              {bestDefense?.name}
            </div>

            <div className="mt-6 text-5xl font-black text-cyan-400">
              {bestDefense?.goals_against}
            </div>
          </div>

          <div className="rounded-3xl bg-zinc-950 border border-zinc-900 p-8">
            <div className="text-zinc-500">
              Fantapunti Leader
            </div>

            <div className="mt-4 text-2xl font-bold">
              {mostPoints?.name}
            </div>

            <div className="mt-6 text-5xl font-black text-cyan-400">
              {mostPoints?.total_points}
            </div>
          </div>

          <div className="rounded-3xl bg-zinc-950 border border-zinc-900 p-8">
            <div className="text-zinc-500">
              Squadre
            </div>

            <div className="mt-6 text-5xl font-black text-cyan-400">
              {ranking.length}
            </div>
          </div>

        </div>
      </section>

      {/* CLASSIFICA */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-black">
            Classifica Live
          </h2>

          <Link
            href="/teams"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Vedi completa →
          </Link>
        </div>

        <div className="grid gap-4">

          {ranking.map((team, index) => (
            <Link
              key={team.id}
              href={`/squadre/${team.slug}`}
              className="rounded-2xl border border-zinc-900 bg-zinc-950 hover:border-cyan-500 transition p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <div className="text-zinc-500 text-2xl w-10">
                  #{index + 1}
                </div>

                <div>
                  <div className="font-bold text-2xl">
                    {team.name}
                  </div>

                  <div className="text-zinc-500 text-sm">
                    {team.wins}V · {team.draws}N · {team.losses}P
                  </div>
                </div>
              </div>

              <div className="text-cyan-400 text-4xl font-black">
                {team.points}
              </div>
            </Link>
          ))}

        </div>
      </section>

    </main>
  )
}