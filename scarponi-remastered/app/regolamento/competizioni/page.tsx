import Link from "next/link";

export default function CompetizioniPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Regolamento
          </div>

          <h1 className="mt-8 text-7xl md:text-8xl font-black tracking-tight leading-none">
            COMPETIZIONI.
          </h1>

          <p className="mt-10 max-w-3xl text-xl text-zinc-400 leading-10">
            La Lega Scarponi Remastered si articola in tre competizioni
            ufficiali che si svolgono durante l'intera stagione:
            Campionato, Coppa di Lega e Battle Royale.
          </p>

        </div>

      </section>

      {/* CAMPIONATO */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Competizione 01
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Campionato
          </h2>

          <p className="mt-8 text-zinc-300 text-lg leading-10 max-w-3xl">
            Competizione principale della lega.
            Si disputa attraverso un calendario di scontri diretti
            tra tutte le squadre partecipanti.
          </p>

        </div>

      </section>

      {/* COPPA */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Competizione 02
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Coppa di Lega
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-10">

            <div>

              <h3 className="text-2xl font-bold">
                Prima Fase
              </h3>

              <ul className="mt-6 space-y-4 text-zinc-300 leading-8">
                <li>• Due gironi da 5 squadre.</li>
                <li>• Accedono alla fase successiva le prime 4 classificate.</li>
              </ul>

            </div>

            <div>

              <h3 className="text-2xl font-bold">
                Fase Finale
              </h3>

              <ul className="mt-6 space-y-4 text-zinc-300 leading-8">
                <li>• Tabellone a eliminazione diretta.</li>
                <li>• Gare di andata e ritorno.</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* BATTLE ROYALE */}
      <section className="max-w-7xl mx-auto px-8 pb-32">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Competizione 03
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Battle Royale
          </h2>

          <p className="mt-8 text-zinc-300 text-lg leading-10 max-w-4xl">
            Durante ogni giornata di gioco, ogni squadra affronta
            contemporaneamente tutte le altre partecipanti alla lega.
            Ogni confronto viene considerato come uno scontro diretto,
            generando una classifica separata dalla competizione principale.
          </p>

        </div>

      </section>

      {/* NAVIGAZIONE */}
      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-20">

          <Link
            href="/regolamento"
            className="
              inline-flex
              items-center
              text-zinc-400
              hover:text-white
              transition
            "
          >
            ← Torna al Regolamento
          </Link>

        </div>

      </section>

    </main>
  );
}