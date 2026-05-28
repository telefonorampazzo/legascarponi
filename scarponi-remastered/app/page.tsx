import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default async function HomePage() {

  /* =========================
     REAL DATA
  ========================== */

  const { data: teams } = await supabase
    .from('teams')
    .select('*')
    .order('points', {
      ascending: false,
    })

  const topTeams = teams?.slice(0, 5) ?? []

  const leader = topTeams[0]

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-end overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-black" />

        {/* GRID */}
        <div
          className="
            absolute inset-0
            opacity-[0.04]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:120px_120px]
          "
        />

        {/* GLOW */}
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

        {/* CONTENT */}
        <div
          className="
            relative z-10
            max-w-7xl mx-auto
            px-8
            pb-24
            w-full
          "
        >

          <div className="max-w-5xl">

            <div
              className="
                text-sm uppercase
                tracking-[0.4em]
                text-zinc-500
              "
            >
              Lega Scarponi Remastered
            </div>

            <h1
              className="
                mt-8
                text-7xl md:text-[10rem]
                font-black
                leading-[0.9]
                tracking-tight
              "
            >
              LIVE
              <br />
              THE
              <br />
              GAME.
            </h1>

            <p
              className="
                mt-10
                text-xl
                text-zinc-400
                max-w-2xl
                leading-10
              "
            >
              Classifica live, statistiche avanzate
              e schede squadra aggiornate automaticamente.
            </p>

            <div className="mt-14 flex flex-wrap gap-4">

              <Link
                href="/squadre"
                className="
                  rounded-full
                  bg-white
                  text-black
                  px-8 py-4
                  font-semibold
                  hover:bg-zinc-200
                  transition
                "
              >
                Esplora le Squadre
              </Link>

              <Link
                href="/regolamento"
                className="
                  rounded-full
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  px-8 py-4
                  font-semibold
                  hover:bg-white/10
                  transition
                "
              >
                Regolamento
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* LEADER */}
      {leader && (
        <section className="border-t border-white/10">

          <div className="max-w-7xl mx-auto px-8 py-32">

            <div className="grid xl:grid-cols-2 gap-20 items-end">

              <div>

                <div
                  className="
                    text-sm uppercase
                    tracking-[0.4em]
                    text-zinc-500
                  "
                >
                  Team Leader
                </div>

                <h2
                  className="
                    mt-8
                    text-6xl md:text-[8rem]
                    font-black
                    leading-[0.9]
                    tracking-tight
                  "
                >
                  {leader.name}.
                </h2>

              </div>

              <div>

                <div className="space-y-10">

                  <div className="flex items-center justify-between">

                    <span className="text-zinc-500 text-lg">
                      Punti
                    </span>

                    <span className="text-6xl font-black">
                      {leader.points}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-zinc-500 text-lg">
                      Fantapunti
                    </span>

                    <span className="text-6xl font-black">
                      {leader.total_points}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-zinc-500 text-lg">
                      Vittorie
                    </span>

                    <span className="text-6xl font-black">
                      {leader.wins}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>
      )}

      {/* CLASSIFICA */}
      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div
            className="
              text-sm uppercase
              tracking-[0.4em]
              text-zinc-500
            "
          >
            Classifica Live
          </div>

          <div className="mt-20 space-y-10">

            {topTeams.map((team, index) => (

              <Link
                key={team.id}
                href={`/squadre/${team.slug}`}
                className="
                  flex items-center justify-between
                  border-b border-white/10
                  pb-10
                  group
                "
              >

                <div className="flex items-center gap-10">

                  <div
                    className="
                      text-3xl
                      text-zinc-500
                      font-black
                      w-16
                    "
                  >
                    0{index + 1}
                  </div>

                  <div>

                    <div
                      className="
                        text-4xl md:text-6xl
                        font-black
                        tracking-tight
                        group-hover:text-zinc-300
                        transition
                      "
                    >
                      {team.name}
                    </div>

                    <div className="mt-3 text-zinc-500">

                      {team.wins}V ·
                      {' '}
                      {team.draws}N ·
                      {' '}
                      {team.losses}P

                    </div>

                  </div>

                </div>

                <div
                  className="
                    text-4xl md:text-5xl
                    font-black
                    text-zinc-400
                  "
                >
                  {team.points}
                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="grid xl:grid-cols-3 gap-8">

            <div
              className="
                rounded-[40px]
                border border-white/10
                bg-zinc-950
                p-12
              "
            >

              <div
                className="
                  text-sm uppercase
                  tracking-[0.3em]
                  text-zinc-500
                "
              >
                Squadre
              </div>

              <div
                className="
                  mt-8
                  text-7xl
                  font-black
                  tracking-tight
                "
              >
                {teams?.length ?? 0}
              </div>

            </div>

            <div
              className="
                rounded-[40px]
                border border-white/10
                bg-zinc-950
                p-12
              "
            >

              <div
                className="
                  text-sm uppercase
                  tracking-[0.3em]
                  text-zinc-500
                "
              >
                Leader
              </div>

              <div
                className="
                  mt-8
                  text-5xl
                  font-black
                  tracking-tight
                  leading-tight
                "
              >
                {leader?.name}
              </div>

            </div>

            <div
              className="
                rounded-[40px]
                border border-white/10
                bg-zinc-950
                p-12
              "
            >

              <div
                className="
                  text-sm uppercase
                  tracking-[0.3em]
                  text-zinc-500
                "
              >
                Punti Leader
              </div>

              <div
                className="
                  mt-8
                  text-7xl
                  font-black
                  tracking-tight
                "
              >
                {leader?.points}
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="max-w-5xl">

            <div
              className="
                text-sm uppercase
                tracking-[0.4em]
                text-zinc-500
              "
            >
              Lega Scarponi
            </div>

            <h2
              className="
                mt-8
                text-6xl md:text-[8rem]
                font-black
                tracking-tight
                leading-[0.9]
              "
            >
              COMPETI.
              <br />
              DOMINA.
              <br />
              VINCI.
            </h2>

            <div className="mt-16">

              <Link
                href="/squadre"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-white
                  text-black
                  px-8 py-4
                  font-semibold
                  hover:bg-zinc-200
                  transition
                "
              >
                Visualizza Classifica
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}