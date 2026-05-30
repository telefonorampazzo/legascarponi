import Link from "next/link";

export default function IntornoPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Regolamento
          </div>

          <h1 className="mt-8 text-7xl md:text-8xl font-black tracking-tight leading-none">
            INTORNO.
          </h1>

          <p className="mt-10 max-w-3xl text-xl text-zinc-400 leading-10">
            Una regola speciale che consente di mantenere il pareggio
            quando la differenza tra due squadre è minima.
          </p>

        </div>

      </section>

      {/* SPIEGAZIONE */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Regola Speciale
          </div>

          <h2 className="mt-6 text-5xl md:text-6xl font-black">
            Cos'è
            <br />
            l'Intorno.
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-4xl">

            <p>
              Quando due squadre si trovano in fasce di punteggio differenti,
              può comunque verificarsi una situazione di pareggio.
            </p>

            <p>
              Se la differenza tra i due punteggi non supera
              il valore di 0,5 punti fantacalcio,
              il risultato rimane invariato.
            </p>

            <p>
              Questa regola evita che scarti minimi producano
              differenze eccessive nel risultato finale.
            </p>

          </div>

        </div>

      </section>

      {/* ESEMPIO */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="rounded-[40px] border border-green-500/20 bg-zinc-950 p-12 text-center">

          <div className="text-green-400 uppercase tracking-[0.2em] text-sm">
            Esempio
          </div>

          <h2 className="mt-8 text-6xl md:text-8xl font-black">
            69.5
            <span className="text-zinc-500 mx-6">vs</span>
            70
          </h2>

          <div className="mt-10 text-4xl md:text-5xl font-black">
            1 - 1
          </div>

          <p className="mt-8 text-zinc-400 text-lg">
            Lo scarto è pari a 0,5 punti.
            Il risultato resta in parità.
          </p>

        </div>

      </section>

      {/* ALTRI CASI */}
      <section className="max-w-7xl mx-auto px-8 pb-32">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-10">

            <div className="text-4xl font-black">
              71 vs 71.5
            </div>

            <div className="mt-6 text-zinc-400">
              Risultato invariato.
            </div>

          </div>

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-10">

            <div className="text-4xl font-black">
              70 vs 71
            </div>

            <div className="mt-6 text-zinc-400">
              Differenza superiore a 0,5.
              La regola non si applica.
            </div>

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