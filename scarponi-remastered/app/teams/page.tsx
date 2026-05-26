import { supabase } from '@/lib/supabase'

export default async function TeamsPage() {
  const { data: teams, error } = await supabase
    .from('teams')
    .select('*')
    .order('points', { ascending: false })

  if (error) {
    return (
      <main className="p-10 text-red-500">
        Errore: {error.message}
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Classifica Lega Scarponi Remastered
      </h1>

      <div className="space-y-4">
        {teams?.map((team, index) => (
          <div
            key={team.id}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 flex justify-between items-center"
          >
            <div>
              <span className="text-zinc-500 mr-4">
                #{index + 1}
              </span>

              <span className="text-xl font-bold">
                {team.name}
              </span>
            </div>

            <div className="text-cyan-400 font-bold text-2xl">
              {team.points}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}