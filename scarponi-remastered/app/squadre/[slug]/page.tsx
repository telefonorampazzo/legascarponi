import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'

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
      <div className="max-w-6xl mx-auto px-8 py-16">

        <Link
          href="/teams"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Torna alla classifica
        </Link>

        <div className="mt-8">
          <div className="text-cyan-400 uppercase tracking-widest text-sm">
            Squadra
          </div>

          <h1 className="text-6xl font-black mt-3">
            {team.name}
          </h1>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6">
            <div className="text-zinc-500">
              Punti
            </div>

            <div className="text-5xl font-black text-cyan-400 mt-3">
              {team.points}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6">
            <div className="text-zinc-500">
              Vittorie
            </div>

            <div className="text-5xl font-black">
              {team.wins ?? 0}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6">
            <div className="text-zinc-500">
              Pareggi
            </div>

            <div className="text-5xl font-black">
              {team.draws ?? 0}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6">
            <div className="text-zinc-500">
              Sconfitte
            </div>

            <div className="text-5xl font-black">
              {team.losses ?? 0}
            </div>
          </div>

        </div>

        <div className="mt-12 bg-zinc-950 border border-zinc-900 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            Informazioni Squadra
          </h2>

          <p className="text-zinc-400">
            Pagina dedicata a {team.name}.
            In seguito aggiungeremo:
          </p>

          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>• Rosa completa</li>
            <li>• Storico risultati</li>
            <li>• Grafico andamento stagione</li>
            <li>• Fantapunti totali</li>
            <li>• Record e statistiche</li>
          </ul>
        </div>

      </div>
    </main>
  )
}