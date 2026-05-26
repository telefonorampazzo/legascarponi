import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'

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
      <div className="max-w-5xl mx-auto p-10">
        <h1 className="text-6xl font-black mb-10">
          {team.name}
        </h1>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl">
            <div className="text-zinc-400">Punti</div>
            <div className="text-4xl font-bold text-cyan-400">
              {team.points}
            </div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <div className="text-zinc-400">Slug</div>
            <div className="text-xl">
              {team.slug}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}