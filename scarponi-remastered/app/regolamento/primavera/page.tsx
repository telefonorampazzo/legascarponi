import Link from "next/link";

export default function PrimaveraPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Regolamento
          </div>

          <h1 className="mt-8 text-7xl md:text-8xl font-black tracking-tight leading-none">
            PRIMAVERA.
          </h1>

          <p className="mt-10 max-w-3xl text-xl text-zinc-400 leading-10">
            Investire sui giovani significa costruire il futuro.
            La competizione Primavera premia intuizione,
            pazienza e valorizzazione dei talenti emergenti.
          </p>

        </div>

      </section>

      {/* PRE ASTA */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid xl:grid-cols-2 gap-8">

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

            <div className="text-7xl font-black">
              15
            </div>

            <h2 className="mt-6 text-4xl font-black">
              Crediti Iniziali
            </h2>

            <p className="mt-8 text-zinc-300 leading-9">
              Ogni fantallenatore dispone di 15 crediti
              da utilizzare durante la pre-asta Primavera.
            </p>

          </div>

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

            <div className="text-7xl font-black">
              4
            </div>

            <h2 className="mt-6 text-4xl font-black">
              Giocatori U20
            </h2>

            <p className="mt-8 text-zinc-300 leading-9">
              Ogni squadra può aggiudicarsi
              fino a quattro calciatori Under 20.
            </p>

          </div>

        </div>

      </section>

      {/* REGOLE */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Sezione 01
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Regole Primavera
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-5xl">

            <p>
              La lista Primavera viene generata selezionando
              i giovani calciatori con la quotazione più bassa
              presenti nel listone ufficiale.
            </p>

            <p>
              I giocatori Primavera non possono essere scambiati
              durante la stagione.
            </p>

            <p>
              In caso di cessione o grave infortunio,
              verranno conteggiati esclusivamente i risultati
              ottenuti fino a quel momento.
            </p>

          </div>

        </div>

      </section>

      {/* PREMI PRESENZE */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
          Sezione 02
        </div>

        <h2 className="mt-6 text-6xl font-black tracking-tight">
          PREMI
          <br />
          PRESENZE.
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-4xl font-black">5 - 10</div>
            <div className="mt-4 text-zinc-400">3 crediti</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-4xl font-black">11 - 15</div>
            <div className="mt-4 text-zinc-400">5 crediti</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-4xl font-black">16 - 20</div>
            <div className="mt-4 text-zinc-400">8 crediti</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-4xl font-black">21 - 30</div>
            <div className="mt-4 text-zinc-400">10 crediti</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-4xl font-black">31 - 35</div>
            <div className="mt-4 text-zinc-400">23 crediti</div>
          </div>

        </div>

      </section>

      {/* BONUS */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="rounded-[40px] border border-green-500/20 bg-zinc-950 p-12">

            <div className="text-6xl font-black text-green-400">
              +3
            </div>

            <h3 className="mt-6 text-4xl font-black">
              Goal
            </h3>

            <p className="mt-6 text-zinc-300">
              Ogni rete realizzata assegna
              3 crediti bonus.
            </p>

          </div>

          <div className="rounded-[40px] border border-blue-500/20 bg-zinc-950 p-12">

            <div className="text-6xl font-black text-blue-400">
              +1
            </div>

            <h3 className="mt-6 text-4xl font-black">
              Assist
            </h3>

            <p className="mt-6 text-zinc-300">
              Ogni assist assegna
              1 credito bonus.
            </p>

          </div>

        </div>

      </section>

      {/* RICONFERME */}
      <section className="max-w-7xl mx-auto px-8 pb-32">

        <div className="rounded-[40px] border border-yellow-500/20 bg-zinc-950 p-12">

          <div className="text-yellow-400 uppercase tracking-[0.2em] text-sm">
            Sezione 03
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Riconferme
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-5xl">

            <p>
              Ogni fantallenatore può indicare un calciatore
              acquistato all'asta estiva per la riconferma
              nella stagione successiva.
            </p>

            <p>
              Il diritto è riservato ai giocatori acquistati
              a un costo pari o inferiore a 5 crediti.
            </p>

            <p>
              La dichiarazione di riconferma non rappresenta
              un obbligo, ma garantisce un diritto di prelazione
              esclusivamente per la stagione seguente.
            </p>

          </div>

        </div>

      </section>

      {/* NAV */}
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