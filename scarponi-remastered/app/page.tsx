import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default async function HomePage() {
  const { data: teams } = await supabase
    .from('teams')
    .select('*')
    .order('points', {
      ascending: false,
    })

  const topTeams = teams?.slice(0, 5) ?? []
  const leader = topTeams[0]

  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <section
        className="
          relative
          min-h-screen
          flex
          items-center
          bg-gradient-to-b
          from-black
          via-zinc-950
          to-emerald-950/20
          text-white
        "
      >

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            h-[700px]
            w-[700px]
            rounded-full
            bg-emerald-500/10
            blur-[180px]
          "
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8">

          <div
            className="
              text-sm
              uppercase
              tracking-[0.4em]
              text-zinc-500
            "
          >
            Lega Scarponi Remastered
          </div>

          <h1
            className="
              mt-8
              text-7xl
              md:text-[11rem]
              font-black
              leading-[0.85]
              tracking-tight
            "
          >
            LEGA
            <br />
            SCARPONI
            <br />
            REMASTERED.
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
            Fantacalcio Mantra.
            Competizione reale.
            Statistiche live.
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
                border
                border-white/10
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

      </section>

      {/* NUMERI */}
      <section className="bg-zinc-100 text-black">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="grid md:grid-cols-3 gap-16">

            <div>

              <div className="text-8xl md:text-9xl font-black">
                10
              </div>

              <div className="mt-4 text-xl text-zinc-500">
                Fantallenatori
              </div>

            </div>

            <div>

              <div className="text-8xl md:text-9xl font-black">
                800€
              </div>

              <div className="mt-4 text-xl text-zinc-500">
                Montepremi
              </div>

            </div>

            <div>

              <div className="text-8xl md:text-9xl font-black">
                380
              </div>

              <div className="mt-4 text-xl text-zinc-500">
                Partite
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CAPOLISTA */}
      {leader && (
        <section className="bg-black text-white">

          <div className="max-w-7xl mx-auto px-8 py-32">

            <div
              className="
                text-sm
                uppercase
                tracking-[0.4em]
                text-zinc-500
              "
            >
              Team Leader
            </div>

            <h2
              className="
                mt-8
                text-[5rem]
                md:text-[10rem]
                font-black
                tracking-tight
                leading-[0.85]
              "
            >
              {leader.name}
            </h2>

            <div className="grid md:grid-cols-3 gap-10 mt-20">

              <div>

                <div className="text-zinc-500">
                  Punti
                </div>

                <div className="text-6xl font-black mt-3">
                  {leader.points}
                </div>

              </div>

              <div>

                <div className="text-zinc-500">
                  Fantapunti
                </div>

                <div className="text-6xl font-black mt-3">
                  {leader.total_points}
                </div>

              </div>

              <div>

                <div className="text-zinc-500">
                  Vittorie
                </div>

                <div className="text-6xl font-black mt-3">
                  {leader.wins}
                </div>

              </div>

            </div>

          </div>

        </section>
      )}

      {/* CLASSIFICA */}
      <section className="bg-zinc-100 text-black">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div
            className="
              text-sm
              uppercase
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
                  flex
                  items-center
                  justify-between
                  border-b
                  border-zinc-300
                  pb-10
                  group
                  transition-all
                  hover:translate-x-3
                "
              >

                <div className="flex items-center gap-10">

                  <div
                    className="
                      text-3xl
                      font-black
                      text-zinc-400
                      w-16
                    "
                  >
                    0{index + 1}
                  </div>

                  <div>

                    <div
                      className="
                        text-4xl
                        md:text-6xl
                        font-black
                        tracking-tight
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
                    text-5xl
                    font-black
                  "
                >
                  {team.points}
                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section
        className="
          bg-gradient-to-b
          from-black
          to-emerald-950/20
          text-white
        "
      >

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="max-w-5xl">

            <div
              className="
                text-sm
                uppercase
                tracking-[0.4em]
                text-zinc-500
              "
            >
              Lega Scarponi
            </div>

            <h2
              className="
                mt-8
                text-6xl
                md:text-[9rem]
                font-black
                tracking-tight
                leading-[0.85]
              "
            >
              LA STAGIONE
              <br />
              NON
              <br />
              ASPETTA.
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
                Visualizza la Classifica
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}