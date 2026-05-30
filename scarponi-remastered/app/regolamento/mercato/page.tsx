import Link from "next/link";

export default function MercatoPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Regolamento
          </div>

          <h1 className="mt-8 text-7xl md:text-8xl font-black tracking-tight leading-none">
            MERCATO.
          </h1>

          <p className="mt-10 max-w-3xl text-xl text-zinc-400 leading-10">
            Svincoli, mercato di riparazione e gestione dei crediti.
            Tutte le regole che disciplinano la costruzione della rosa
            durante la stagione.
          </p>

        </div>

      </section>

      {/* SVINCOLI */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid xl:grid-cols-2 gap-8">

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

            <div className="text-7xl font-black">
              4
            </div>

            <h2 className="mt-6 text-4xl font-black">
              Svincoli Massimi
            </h2>

            <p className="mt-8 text-zinc-300 leading-9">
              Ogni fantallenatore dispone di un massimo
              di quattro svincoli durante il mercato di riparazione.
            </p>

          </div>

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

            <div className="text-7xl font-black">
              €
            </div>

            <h2 className="mt-6 text-4xl font-black">
              Recupero Crediti
            </h2>

            <p className="mt-8 text-zinc-300 leading-9">
              Il valore recuperato dipende dal prezzo d'acquisto
              e dalla variazione di quotazione del giocatore.
            </p>

          </div>

        </div>

      </section>

      {/* VALORE SVINCOLO */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Sezione 01
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Calcolo del Valore
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-5xl">

            <p>
              Svincolando un calciatore si recupera un valore
              proporzionato al prezzo d'acquisto e alla variazione
              di quotazione maturata durante la stagione.
            </p>

            <p>
              Eventuali arrotondamenti vengono effettuati per difetto.
            </p>

            <p>
              In caso di infortunio o squalifica fino al termine
              della stagione, verrà considerata l'ultima quotazione
              disponibile del calciatore.
            </p>

          </div>

        </div>

      </section>

      {/* CASI SPECIALI */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Sezione 02
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Casi Particolari
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-5xl">

            <p>
              Gli svincoli non comprendono i giocatori
              contrassegnati con asterisco, come calciatori
              ceduti all'estero o svincolati dal proprio club.
            </p>

            <p>
              È possibile svincolare un giocatore ottenuto
              tramite scambio estivo recuperando il valore
              del proprio calciatore originario.
            </p>

            <p>
              È possibile svincolare una riconferma,
              rinunciando però al diritto di prelazione
              per la stagione successiva.
            </p>

          </div>

        </div>

      </section>

      {/* LIMITAZIONI */}
      <section className="max-w-7xl mx-auto px-8 pb-32">

        <div className="rounded-[40px] border border-red-500/20 bg-zinc-950 p-12">

          <div className="text-red-400 uppercase tracking-[0.2em] text-sm">
            Limitazioni
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Operazioni Vietate
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-5xl">

            <p>
              Non è possibile svincolare giocatori
              acquisiti durante il mercato di gennaio.
            </p>

            <p>
              Ogni operazione dovrà rispettare i limiti
              previsti dal regolamento ufficiale della lega.
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