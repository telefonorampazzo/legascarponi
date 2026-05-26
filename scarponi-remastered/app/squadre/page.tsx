import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default async function SquadrePage() {
  const { data: teams } = await supabase
    .from('teams')
    .select('*')
    .order('points', { ascending: false })

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <h1 className="text-6xl font-black mb-12">
          Squadre
        </h1>

        <div className="grid gap-4">

          {teams?.map((team, index) => (
            <Link
              key={team.id}
              href={`/squadre/${team.slug}`}
              className="
                rounded-2xl
                border
                border-zinc-900
                bg-zinc-950
                p-6
                flex
                justify-between
                items-center
                hover:border-cyan-500
                transition
              "
            >
              <div className="flex items-center gap-4">

                <div className="text-zinc-500 text-xl w-10">
                  #{index + 1}
                </div>

                <div>
                  <div className="font-bold text-2xl">
                    {team.name}
                  </div>

                  <div className="text-zinc-500">
                    {team.slug}
                  </div>
                </div>

              </div>

              <div className="text-cyan-400 text-3xl font-black">
                {team.points}
              </div>
            </Link>
          ))}

        </div>
      </div>
    </main>
  )
}