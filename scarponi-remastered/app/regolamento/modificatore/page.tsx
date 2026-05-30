import Link from "next/link";

export default function ModificatorePage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Regolamento
          </div>

          <h1 className="mt-8 text-7xl md:text-8xl font-black tracking-tight leading-none">
            MODIFICATORE
            <br />
            DIFENSIVO.
          </h1>

          <p className="mt-10 max-w-3xl text-xl text-zinc-400 leading-10">
            Il bonus che premia l'organizzazione difensiva
            e valorizza le migliori prestazioni del reparto arretrato.
          </p>

        </div>

      </section>

      {/* COSA E */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Sezione 01
          </div>

          <h2 className="mt-6 text-5xl md:text-6xl font-black">
            Cos'è il
            <br />
            Modificatore.
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-4xl">

            <p>
              Il Modificatore Difensivo attribuisce punti bonus
              alle squadre che ottengono ottime prestazioni
              dal proprio reparto difensivo.
            </p>

            <p>
              Il calcolo viene effettuato utilizzando
              la media voto dei migliori giocatori difensivi
              schierati nella formazione.
            </p>

            <p>
              Una difesa solida può quindi trasformarsi
              in un vantaggio concreto nel risultato finale.
            </p>

          </div>

        </div>

      </section>

      {/* REQUISITI */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="grid xl:grid-cols-2 gap-8">

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

            <div className="text-6xl font-black">
              5
            </div>

            <h3 className="mt-6 text-3xl font-black">
              Giocatori Considerati
            </h3>

            <p className="mt-6 text-zinc-300 leading-9">
              Vengono presi in considerazione i 5 migliori
              calciatori difensivi della squadra.
            </p>

          </div>

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

            <div className="text-6xl font-black">
              3
            </div>

            <h3 className="mt-6 text-3xl font-black">
              Difensori Puri
            </h3>

            <p className="mt-6 text-zinc-300 leading-9">
              Almeno tre giocatori devono possedere
              ruolo Dc, Dd o Ds.
            </p>

          </div>

        </div>

      </section>

      {/* RUOLI VALIDI */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Sezione 02
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Ruoli Coinvolti
          </h2>

          <div className="grid md:grid-cols-5 gap-6 mt-12">

            <div className="rounded-3xl border border-white/10 p-6 text-center">
              <div className="text-3xl font-black">DC</div>
            </div>

            <div className="rounded-3xl border border-white/10 p-6 text-center">
              <div className="text-3xl font-black">DD</div>
            </div>

            <div className="rounded-3xl border border-white/10 p-6 text-center">
              <div className="text-3xl font-black">DS</div>
            </div>

            <div className="rounded-3xl border border-white/10 p-6 text-center">
              <div className="text-3xl font-black">E</div>
            </div>

            <div className="rounded-3xl border border-white/10 p-6 text-center">
              <div className="text-3xl font-black">M</div>
            </div>

          </div>

        </div>

      </section>

      {/* CASI PARTICOLARI */}
      <section className="max-w-7xl mx-auto px-8 pb-32">

        <div className="rounded-[40px] border border-red-500/20 bg-zinc-950 p-12">

          <div className="text-red-400 uppercase tracking-[0.2em] text-sm">
            Attenzione
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Numero Legale
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-4xl">

            <p>
              Se non viene raggiunto il numero minimo
              di giocatori necessari al calcolo,
              il modificatore non viene assegnato.
            </p>

            <p>
              Questo può accadere solamente nei casi
              in cui la squadra giochi in inferiorità numerica.
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