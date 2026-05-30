import Link from "next/link";

export default function AstaPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Regolamento
          </div>

          <h1 className="mt-8 text-7xl md:text-8xl font-black tracking-tight leading-none">
            ASTA.
            <br />
            PREMI.
            <br />
            SANZIONI.
          </h1>

          <p className="mt-10 max-w-3xl text-xl text-zinc-400 leading-10">
            Le regole che disciplinano l'asta iniziale,
            la composizione delle rose, il montepremi
            e le penalità previste dalla Lega Scarponi Remastered.
          </p>

        </div>

      </section>
{/* DISPOSIZIONE ASTA */}
<section className="max-w-7xl mx-auto px-8 py-24">

  <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
    Sezione 01
  </div>

  <h2 className="mt-6 text-6xl md:text-7xl font-black tracking-tight">
    DISPOSIZIONE
    <br />
    UFFICIALE.
  </h2>

  <p className="mt-8 text-xl text-zinc-400 max-w-3xl leading-10">
    La disposizione delle postazioni è parte integrante
    del regolamento d'asta e rappresenta l'unica configurazione
    ufficiale riconosciuta dalla Lega Scarponi Remastered.
  </p>

  <div className="mt-16 rounded-[40px] border border-white/10 bg-zinc-950 p-12">

    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-3xl border border-white/10 p-8 text-center">
        <div className="text-3xl font-black">FEDE</div>
      </div>

      <div className="rounded-3xl border border-white/10 p-8 text-center">
        <div className="text-3xl font-black">LORE</div>
      </div>

      <div className="rounded-3xl border border-white/10 p-8 text-center">
        <div className="text-3xl font-black">RIKY</div>
      </div>

      <div className="rounded-3xl border border-white/10 p-8 text-center">
        <div className="text-3xl font-black">MATTIE</div>
      </div>

      <div className="rounded-3xl border border-white/10 p-8 text-center">
        <div className="text-3xl font-black">ELY</div>
      </div>

      <div className="rounded-3xl border border-white/10 p-8 text-center">
        <div className="text-3xl font-black">HALLEY</div>
      </div>

      <div className="rounded-3xl border border-white/10 p-8 text-center">
        <div className="text-3xl font-black">GIAN</div>
      </div>

      <div className="rounded-3xl border border-white/10 p-8 text-center">
        <div className="text-3xl font-black">CHECCO</div>
      </div>

      <div className="rounded-3xl border border-white/10 p-8 text-center">
        <div className="text-3xl font-black">EMA</div>
      </div>

      <div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/5 p-8 text-center md:col-span-3">
        <div className="text-3xl font-black">TINO / SIMO</div>
      </div>

    </div>

    <div className="mt-10 rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-8">

      <p className="text-lg text-zinc-300 leading-9">
        La disposizione sopra indicata è l'unica configurazione
        valida e riconosciuta durante lo svolgimento dell'asta.
      </p>

    </div>

  </div>

</section>

      {/* ASTA */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
          Sezione 01
        </div>

        <h2 className="mt-6 text-6xl md:text-7xl font-black tracking-tight">
          ASTA.
        </h2>

        <div className="grid xl:grid-cols-2 gap-8 mt-16">

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

            <div className="text-7xl font-black">
              28
            </div>

            <h3 className="mt-6 text-4xl font-black">
              Giocatori
            </h3>

            <p className="mt-6 text-zinc-300 leading-9">
              La rosa deve essere composta da 28 calciatori
              senza vincoli di ruolo.
            </p>

          </div>

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

            <div className="text-7xl font-black">
              🎲
            </div>

            <h3 className="mt-6 text-4xl font-black">
              Asta Random
            </h3>

            <p className="mt-6 text-zinc-300 leading-9">
              Nel primo giro è possibile skippare un giocatore.
              Nel secondo giro ogni giocatore saltato
              viene definitivamente perso.
            </p>

          </div>

        </div>

      </section>

      {/* REGOLE */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

          <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Sezione 02
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Regole d'Asta
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-5xl">

            <p>
              Ogni fantallenatore può rilanciare
              esclusivamente entro il limite
              dei propri crediti disponibili.
            </p>

            <p>
              Non è consentito effettuare rilanci
              superiori alla propria puntata massima.
            </p>

            <p>
              Nel calcolo dei risultati si farà riferimento
              ai bonus e malus previsti dall'applicazione ufficiale.
            </p>

          </div>

        </div>

      </section>

      {/* SANZIONI */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="grid xl:grid-cols-2 gap-8">

          <div className="rounded-[40px] border border-red-500/20 bg-zinc-950 p-12">

            <div className="text-red-400 text-7xl font-black">
              -5
            </div>

            <h3 className="mt-6 text-4xl font-black">
              Confusione all'Asta
            </h3>

            <p className="mt-6 text-zinc-300 leading-9">
              Chi genera confusione durante l'asta
              viene penalizzato di 5 crediti.
            </p>

          </div>

          <div className="rounded-[40px] border border-red-500/20 bg-zinc-950 p-12">

            <div className="text-red-400 text-7xl font-black">
              5 TURNI
            </div>

            <h3 className="mt-6 text-4xl font-black">
              Stop ai Rilanci
            </h3>

            <p className="mt-6 text-zinc-300 leading-9">
              Chi rilancia oltre il proprio massimo
              viene escluso dai rilanci per cinque turni.
            </p>

          </div>

        </div>

      </section>

      {/* QUOTE */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

            <div className="text-7xl font-black">
              80€
            </div>

            <h3 className="mt-6 text-4xl font-black">
              Quota Iscrizione
            </h3>

            <p className="mt-6 text-zinc-300">
              Quota di partecipazione per ogni fantallenatore.
            </p>

          </div>

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

            <div className="text-7xl font-black">
              800€
            </div>

            <h3 className="mt-6 text-4xl font-black">
              Montepremi
            </h3>

            <p className="mt-6 text-zinc-300">
              Montepremi complessivo della stagione.
            </p>

          </div>

        </div>

      </section>

      {/* PREMI */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
          Sezione 03
        </div>

        <h2 className="mt-6 text-6xl md:text-7xl font-black tracking-tight">
          MONTEPREMI.
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mt-16">

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 text-center">
            <div className="text-5xl font-black">350€</div>
            <div className="mt-3 text-zinc-400">1° Posto</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 text-center">
            <div className="text-5xl font-black">200€</div>
            <div className="mt-3 text-zinc-400">2° Posto</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 text-center">
            <div className="text-5xl font-black">100€</div>
            <div className="mt-3 text-zinc-400">3° Posto</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 text-center">
            <div className="text-5xl font-black">100€</div>
            <div className="mt-3 text-zinc-400">Coppa</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 text-center">
            <div className="text-5xl font-black">50€</div>
            <div className="mt-3 text-zinc-400">Champions</div>
          </div>

        </div>

      </section>

      {/* REGOLE FINALI */}
      <section className="max-w-7xl mx-auto px-8 pb-32">

        <div className="rounded-[40px] border border-yellow-500/20 bg-zinc-950 p-12">

          <div className="text-yellow-400 uppercase tracking-[0.2em] text-sm">
            Disposizioni Finali
          </div>

          <h2 className="mt-6 text-5xl font-black">
            Dalla Prima all'Ultima Giornata
          </h2>

          <div className="mt-10 space-y-8 text-zinc-300 text-lg leading-10 max-w-5xl">

            <p>
              Ogni fantallenatore è tenuto a partecipare
              attivamente dalla prima all'ultima giornata.
            </p>

            <p>
              In caso di mancata formazione verrà applicata
              una multa progressiva:
              10€, 20€, 40€, 80€ e così via.
            </p>

            <p>
              Ad ogni mancata formazione corrispondono inoltre
              3 punti di penalizzazione in classifica.
            </p>

            <p>
              L'ultimo classificato della stagione avrà
              l'onore e l'onere di portare da bere
              all'asta successiva.
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