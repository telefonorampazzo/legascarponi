import Link from "next/link";

export default function SostituzioniPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Regolamento
          </div>

          <h1 className="mt-8 text-7xl md:text-8xl font-black tracking-tight leading-none">
            SOSTITUZIONI.
          </h1>

          <p className="mt-10 max-w-3xl text-xl text-zinc-400 leading-10">
            Il sistema Mantra gestisce automaticamente le sostituzioni
            seguendo un preciso ordine gerarchico di priorità.
          </p>

        </div>

      </section>

      {/* PRIORITA */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
          Ordine Gerarchico
        </div>

        <h2 className="mt-6 text-6xl md:text-7xl font-black tracking-tight">
          PRIORITÀ
          <br />
          DEL SISTEMA.
        </h2>

        <div className="grid xl:grid-cols-3 gap-8 mt-20">

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-10">

            <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
              01
            </div>

            <h3 className="mt-6 text-4xl font-black">
              Soluzioni Ottimali
            </h3>

            <p className="mt-8 text-zinc-300 leading-9">
              Rispettano completamente il modulo scelto dal
              fantallenatore senza ricorrere a fuori ruolo
              o malus tattici.
            </p>

          </div>

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-10">

            <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
              02
            </div>

            <h3 className="mt-6 text-4xl font-black">
              Soluzioni Efficienti
            </h3>

            <p className="mt-8 text-zinc-300 leading-9">
              Consentono un cambio modulo utilizzando
              uno degli schemi previsti dal sistema Mantra.
            </p>

          </div>

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-10">

            <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
              03
            </div>

            <h3 className="mt-6 text-4xl font-black">
              Soluzioni Adattate
            </h3>

            <p className="mt-8 text-zinc-300 leading-9">
              Consentono l'utilizzo di uno o più
              calciatori fuori posizione applicando
              il relativo malus di 1 punto.
            </p>

          </div>

        </div>

      </section>

      {/* COME FUNZIONANO */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Sezione 02
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Come Funzionano
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-5xl">

            <p>
              Le sostituzioni dei calciatori di movimento
              non vengono effettuate una alla volta,
              ma vengono valutate complessivamente dal sistema.
            </p>

            <p>
              Una volta individuati i titolari assenti o senza voto,
              il sistema ricerca automaticamente la migliore
              combinazione possibile di sostituti.
            </p>

            <p>
              Viene sempre privilegiata la soluzione con il rango
              gerarchico più elevato disponibile.
            </p>

          </div>

        </div>

      </section>

      {/* ORDINE PANCHINA */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Sezione 03
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Ordine Panchina
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-5xl">

            <p>
              Quando esistono più combinazioni valide,
              la scelta è determinata dall'ordine con cui
              i giocatori sono stati inseriti in panchina.
            </p>

            <p>
              Il sistema considera sempre per primi
              i calciatori schierati nelle posizioni più alte
              della panchina.
            </p>

            <p>
              Per questo motivo l'ordine della panchina
              rappresenta una vera scelta tattica.
            </p>

          </div>

        </div>

      </section>

      {/* INFERIORITA NUMERICA */}
      <section className="max-w-7xl mx-auto px-8 pb-32">

        <div className="rounded-[40px] border border-red-500/20 bg-zinc-950 p-12">

          <div className="text-red-400 uppercase tracking-[0.2em] text-sm">
            Caso Limite
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Inferiorità Numerica
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-5xl">

            <p>
              Se il sistema non riesce a trovare alcuna
              soluzione valida tra quelle disponibili,
              la squadra giocherà in inferiorità numerica.
            </p>

            <p>
              Verranno schierati soltanto i calciatori
              per i quali è stato possibile trovare
              una collocazione regolamentare.
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