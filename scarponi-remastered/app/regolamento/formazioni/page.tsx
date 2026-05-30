import Link from "next/link";

export default function FormazioniPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Regolamento
          </div>

          <h1 className="mt-8 text-7xl md:text-8xl font-black tracking-tight leading-none">
            FORMAZIONI.
          </h1>

          <p className="mt-10 max-w-3xl text-xl text-zinc-400 leading-10">
            Schieramento iniziale, gestione della panchina
            e regole relative alla consegna della formazione.
          </p>

        </div>

      </section>

      {/* CONSEGNA */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Sezione 01
          </div>

          <h2 className="mt-6 text-5xl md:text-6xl font-black">
            Consegna
            <br />
            Formazione.
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-4xl">

            <p>
              La formazione dovrà essere inserita entro
              5 minuti dall'inizio della prima gara della giornata.
            </p>

            <p>
              Ogni fantallenatore è responsabile del corretto
              inserimento della propria formazione entro i termini stabiliti.
            </p>

          </div>

        </div>

      </section>

      {/* MANCATA CONSEGNA */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="rounded-[40px] border border-red-500/20 bg-zinc-950 p-12">

          <div className="text-red-400 uppercase tracking-[0.2em] text-sm">
            Penalità
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Mancata Consegna
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-4xl">

            <p>
              In caso di mancata presentazione verrà recuperata
              l'ultima formazione valida schierata.
            </p>

            <p>
              Verranno inoltre assegnati
              3 punti di penalizzazione in classifica.
            </p>

          </div>

        </div>

      </section>

      {/* PANCHINA */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Sezione 02
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Panchina
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-4xl">

            <p>
              La panchina è composta da 12 calciatori,
              di cui almeno un portiere.
            </p>

            <p>
              I giocatori devono essere schierati in ordine
              di preferenza assoluta.
            </p>

            <p>
              Il primo giocatore indicato sarà il primo che
              il sistema tenterà di utilizzare nelle sostituzioni.
            </p>

          </div>

        </div>

      </section>

      {/* ORDINE */}
      <section className="max-w-7xl mx-auto px-8 pb-32">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Sezione 03
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Ordine di Preferenza
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-4xl">

            <p>
              Nel sistema Mantra la panchina non deve essere
              ordinata per ruolo come nel Fantacalcio Classic.
            </p>

            <p>
              L'ordine della panchina è fondamentale perché
              governa l'intero meccanismo delle sostituzioni automatiche.
            </p>

            <p>
              I calciatori devono essere inseriti seguendo
              l'ordine con cui si desidera farli entrare in campo.
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