import Link from 'next/link'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'

type PageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function PlayerPage({
  params,
}: PageProps) {
  const { id } = await params

  const { data: player } = await supabase
    .from('players')
    .select('*')
    .eq('id', id)
    .single()

  if (!player) {
    notFound()
  }

  const { data: stats } = await supabase
    .from('player_stats')
    .select('*')
    .eq('player_id', id)
    .single()

  const fantasyScore =
    player.fantamedia != null
      ? Number(player.fantamedia).toFixed(2)
      : '-'

  return (
    <main className="min-h-screen bg-black text-white">

      <section className="relative overflow-hidden border-b border-white/10">

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

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">

          <Link
            href="/squadre"
            className="text-zinc-400 hover:text-white transition"
          >
            ← Torna alle squadre
          </Link>

          <div className="mt-12">

            <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
              Player Profile
            </p>

            <h1
              className="
                mt-6
                text-6xl
                md:text-8xl
                font-black
                tracking-tight
              "
            >
              {player.player_name}
            </h1>

            <div className="mt-8 flex flex-wrap gap-4">

              <div className="rounded-full bg-white text-black px-6 py-3 font-semibold">
                {player.real_team}
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold">
                {player.cost} cr
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold">
                {player.role}
              </div>

            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-10">

              <div>
                <div className="text-zinc-500 uppercase text-xs">
                  Rating FotMob
                </div>

                <div className="text-7xl font-black mt-2">
                  {stats?.rating ?? '-'}
                </div>
              </div>

              <div>
                <div className="text-zinc-500 uppercase text-xs">
                  Fantamedia
                </div>

                <div className="text-7xl font-black mt-2">
                  {fantasyScore}
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          <StatCard
            title="RATING"
            value={stats?.rating ?? '-'}
          />

          <StatCard
            title="GOL"
            value={stats?.goals ?? 0}
          />

          <StatCard
            title="ASSIST"
            value={stats?.assists ?? 0}
          />

          <StatCard
            title="PRESENZE"
            value={stats?.appearances ?? 0}
          />

          <StatCard
            title="MINUTI"
            value={stats?.minutes_played ?? 0}
          />

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-8 pb-20">

        <div
          className="
            rounded-[40px]
            border border-white/10
            bg-zinc-950
            p-10
          "
        >

          <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
            Statistics
          </p>

          <h2 className="mt-6 text-5xl font-black">
            OVERVIEW.
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

            <InfoRow
              label="Fantamedia"
              value={fantasyScore}
            />

            <InfoRow
              label="Rating FotMob"
              value={stats?.rating ?? '-'}
            />

            <InfoRow
              label="Gol"
              value={stats?.goals ?? 0}
            />

            <InfoRow
              label="Assist"
              value={stats?.assists ?? 0}
            />

            <InfoRow
              label="Presenze"
              value={stats?.appearances ?? 0}
            />

            <InfoRow
              label="Minuti giocati"
              value={stats?.minutes_played ?? 0}
            />

            <InfoRow
              label="Gialli"
              value={stats?.yellow_cards ?? 0}
            />

            <InfoRow
              label="Rossi"
              value={stats?.red_cards ?? 0}
            />

            <InfoRow
              label="Clean Sheet"
              value={stats?.clean_sheets ?? 0}
            />

            <InfoRow
              label="Gol Subiti"
              value={stats?.goals_conceded ?? 0}
            />

          </div>

        </div>

      </section>

    </main>
  )
}

function StatCard({
  title,
  value,
}: {
  title: string
  value: string | number
}) {
  return (
    <div
      className="
        rounded-[32px]
        border border-white/10
        bg-zinc-950
        p-8
      "
    >
      <div className="text-zinc-500 text-sm uppercase tracking-[0.3em]">
        {title}
      </div>

      <div className="mt-6 text-6xl font-black">
        {value}
      </div>
    </div>
  )
}

function InfoRow({
  label,
  value,
}: {
  label: string
  value: string | number
}) {
  return (
    <div>
      <div className="text-zinc-500 uppercase text-sm">
        {label}
      </div>

      <div className="mt-2 text-4xl font-black">
        {value}
      </div>
    </div>
  )
}

