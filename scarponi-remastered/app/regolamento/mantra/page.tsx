import Link from "next/link";

export default function MantraPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Regolamento
          </div>

          <h1 className="mt-8 text-7xl md:text-8xl font-black tracking-tight leading-none">
            SISTEMA
            <br />
            MANTRA.
          </h1>

          <p className="mt-10 max-w-3xl text-xl text-zinc-400 leading-10">
            Ruoli specifici, moduli avanzati e gestione tattica.
            Il sistema Mantra rappresenta il cuore strategico
            della Lega Scarponi Remastered.
          </p>

        </div>

      </section>

      {/* FILOSOFIA MANTRA */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Sezione 01
          </div>

          <h2 className="mt-6 text-5xl md:text-6xl font-black tracking-tight">
            FILOSOFIA
            <br />
            MANTRA.
          </h2>

          <div className="mt-12 space-y-8 text-zinc-300 text-lg leading-10 max-w-4xl">

            <p>
              Il sistema Mantra introduce una dimensione tattica più avanzata
              rispetto al fantacalcio tradizionale.
            </p>

            <p>
              Ogni calciatore possiede uno o più ruoli specifici e deve essere
              schierato coerentemente all'interno del modulo scelto.
            </p>

            <p>
              I calciatori polivalenti consentono una maggiore flessibilità
              tattica e diventano elementi strategici nella costruzione della rosa.
            </p>

            <p>
              La scelta del modulo, l'ordine della panchina e la compatibilità
              dei ruoli incidono direttamente sulle sostituzioni automatiche
              e sulle prestazioni della squadra.
            </p>

          </div>

        </div>

      </section>

      {/* RUOLI UFFICIALI */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
          Sezione 02
        </div>

        <h2 className="mt-6 text-6xl md:text-7xl font-black tracking-tight">
          RUOLI
          <br />
          UFFICIALI.
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-5xl font-black">POR</div>
            <div className="mt-3 text-zinc-400">Portiere</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-5xl font-black">DC</div>
            <div className="mt-3 text-zinc-400">Difensore Centrale</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-5xl font-black">DD</div>
            <div className="mt-3 text-zinc-400">Difensore Destro</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-5xl font-black">DS</div>
            <div className="mt-3 text-zinc-400">Difensore Sinistro</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-5xl font-black">E</div>
            <div className="mt-3 text-zinc-400">Esterno</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-5xl font-black">M</div>
            <div className="mt-3 text-zinc-400">Mediano</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-5xl font-black">C</div>
            <div className="mt-3 text-zinc-400">Centrocampista</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-5xl font-black">T</div>
            <div className="mt-3 text-zinc-400">Trequartista</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-5xl font-black">W</div>
            <div className="mt-3 text-zinc-400">Ala</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-5xl font-black">A</div>
            <div className="mt-3 text-zinc-400">Seconda Punta</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="text-5xl font-black">PC</div>
            <div className="mt-3 text-zinc-400">Punta Centrale</div>
          </div>

        </div>

      </section>

      {/* GLI SCHEMI */}
      <section className="max-w-7xl mx-auto px-8 pb-32">

        <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
          Sezione 03
        </div>

        <h2 className="mt-6 text-6xl md:text-7xl font-black tracking-tight">
          GLI
          <br />
          SCHEMI.
        </h2>

        <p className="mt-8 text-xl text-zinc-400 max-w-3xl leading-10">
          Il sistema Mantra mette a disposizione undici differenti
          configurazioni tattiche.
        </p>

        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center">
            <div className="text-5xl font-black">343</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center">
            <div className="text-5xl font-black">3412</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center">
            <div className="text-5xl font-black">3421</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center">
            <div className="text-5xl font-black">352</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center">
            <div className="text-5xl font-black">433</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center">
            <div className="text-5xl font-black">4312</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center">
            <div className="text-5xl font-black">4321</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center">
            <div className="text-5xl font-black">442</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center">
            <div className="text-5xl font-black">4411</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center">
            <div className="text-5xl font-black">451</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center">
            <div className="text-5xl font-black">532</div>
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