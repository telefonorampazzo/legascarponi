import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default async function SquadrePage() {

  const { data: teams } = await supabase
    .from('teams')
    .select('*')
    .order('points', {
      ascending: false,
    })

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative pt-40 pb-24 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-8">

          <div className="max-w-5xl">

            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-zinc-400
              "
            >
              Competition
            </div>

            <h1
              className="
                mt-8
                text-7xl md:text-[9rem]
                font-black
                tracking-tight
                leading-[0.9]
              "
            >
              SQUADRE.
            </h1>

            <p
              className="
                mt-10
                text-xl
                text-zinc-400
                max-w-2xl
                leading-9
              "
            >
              Tutte le squadre della Lega Scarponi.
              Analytics, ranking, performance e statistiche live.
            </p>

          </div>

        </div>

      </section>

      {/* TEAMS GRID */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-8">

          {teams?.map((team, index) => {

            const matches =
              team.wins +
              team.draws +
              team.losses

            const winRate = Math.round(
              (team.wins / matches) * 100
            )

            const goalDiff =
              team.goals_for -
              team.goals_against

            return (

              <Link
                key={team.slug}
                href={`/squadre/${team.slug}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[40px]
                  min-h-[520px]
                  border border-white/10
                  bg-zinc-950
                "
              >

                {/* IMAGE */}
                <div
                  className="
                    absolute inset-0
                    overflow-hidden
                  "
                >

                  <img
                    src={`https://picsum.photos/1200/1200?random=${index + 1}`}
                    className="
                      h-full w-full
                      object-cover
                      opacity-60
                      group-hover:scale-105
                      transition duration-700
                    "
                  />

                  <div className="absolute inset-0 bg-black/50" />

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/30
                      to-transparent
                    "
                  />

                </div>

                {/* CONTENT */}
                <div
                  className="
                    relative z-10
                    h-full
                    flex flex-col
                    justify-between
                    p-10
                  "
                >

                  {/* TOP */}
                  <div className="flex items-start justify-between">

                    <div
                      className="
                        text-sm
                        uppercase
                        tracking-[0.3em]
                        text-zinc-300
                      "
                    >
                      #{index + 1} Ranking
                    </div>

                    <div
                      className="
                        rounded-full
                        bg-white/10
                        backdrop-blur-xl
                        border border-white/10
                        px-4 py-2
                        text-sm
                      "
                    >
                      {team.points} PT
                    </div>

                  </div>

                  {/* CENTER */}
                  <div>

                    <h2
                      className="
                        text-5xl md:text-6xl
                        font-black
                        leading-none
                        tracking-tight
                      "
                    >
                      {team.name}
                    </h2>

                    <div
                      className="
                        mt-8
                        flex flex-wrap
                        gap-3
                      "
                    >

                      <div
                        className="
                          rounded-full
                          border border-white/10
                          bg-white/5
                          px-4 py-2
                          text-sm
                          backdrop-blur-xl
                        "
                      >
                        {team.wins} Vittorie
                      </div>

                      <div
                        className="
                          rounded-full
                          border border-white/10
                          bg-white/5
                          px-4 py-2
                          text-sm
                          backdrop-blur-xl
                        "
                      >
                        {winRate}% Win Rate
                      </div>

                      <div
                        className="
                          rounded-full
                          border border-white/10
                          bg-white/5
                          px-4 py-2
                          text-sm
                          backdrop-blur-xl
                        "
                      >
                        GD {goalDiff > 0 ? '+' : ''}
                        {goalDiff}
                      </div>

                    </div>

                  </div>

                  {/* BOTTOM */}
                  <div
                    className="
                      flex items-end
                      justify-between
                    "
                  >

                    <div>

                      <div className="text-zinc-400 text-sm">
                        Fantapunti Totali
                      </div>

                      <div
                        className="
                          mt-2
                          text-5xl
                          font-black
                          tracking-tight
                        "
                      >
                        {team.total_points}
                      </div>

                    </div>

                    <div
                      className="
                        text-sm
                        uppercase
                        tracking-[0.3em]
                        text-zinc-300
                      "
                    >
                      View Team →
                    </div>

                  </div>

                </div>

              </Link>

            )
          })}

        </div>

      </section>

    </main>
  )
}