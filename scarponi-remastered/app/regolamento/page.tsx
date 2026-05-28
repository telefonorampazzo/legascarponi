import Link from 'next/link'

export default function RegolamentoPage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">

        <div
          className="
            absolute inset-0
            bg-[url('https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=2070')]
            bg-cover
            bg-center
          "
        />

        <div className="absolute inset-0 bg-black/65" />

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
          "
        />

        <div
          className="
            relative z-10
            max-w-7xl mx-auto
            px-8
            pb-24
            w-full
          "
        >

          <div className="max-w-5xl">

            <div
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-zinc-300
              "
            >
              Regolamento Ufficiale
            </div>

            <h1
              className="
                mt-8
                text-7xl md:text-[10rem]
                font-black
                tracking-tight
                leading-[0.9]
              "
            >
              LEGA
              <br />
              SCARPONI.
            </h1>

            <p
              className="
                mt-10
                text-xl
                text-zinc-300
                max-w-2xl
                leading-9
              "
            >
              Regolamento Mantra 2025/26.
            </p>

          </div>

        </div>

      </section>

      {/* COMPETIZIONI */}
      <section className="max-w-7xl mx-auto px-8 py-32">

        <div className="max-w-5xl">

          <div
            className="
              text-sm uppercase
              tracking-[0.3em]
              text-zinc-500
            "
          >
            Competizioni
          </div>

          <h2
            className="
              mt-8
              text-6xl md:text-8xl
              font-black
              tracking-tight
              leading-none
            "
          >
            FORMATO
            <br />
            DELLA LEGA.
          </h2>

        </div>

        <div className="grid xl:grid-cols-3 gap-8 mt-20">

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-10">

            <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
              Campionato
            </div>

            <p className="mt-8 text-xl text-zinc-300 leading-9">
              Competizione a calendario con scontri diretti.
            </p>

          </div>

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-10">

            <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
              Coppa di Lega
            </div>

            <div className="mt-8 space-y-4 text-zinc-300 leading-8">

              <p>
                Prima fase:
                due gironi da 5 squadre,
                passano le prime 4.
              </p>

              <p>
                Seconda fase:
                eliminazione diretta
                con gare andata e ritorno.
              </p>

            </div>

          </div>

          <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-10">

            <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
              Battle royale
            </div>

            <p className="mt-8 text-xl text-zinc-300 leading-9">
              Competizione in cui ogni squadra affronta tutte le altre partecipanti in scontri diretti durante ogni giornata di gioco.
            </p>

          </div>

        </div>

      </section>

      {/* MANTRA */}
      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="max-w-4xl">

            <div
              className="
                text-sm uppercase
                tracking-[0.3em]
                text-zinc-500
              "
            >
              Sistema Mantra
            </div>

            <h2
              className="
                mt-8
                text-6xl md:text-8xl
                font-black
                tracking-tight
                leading-none
              "
            >
              RUOLI.
              <br />
              MODULI.
              <br />
              TATTICA.
            </h2>

          </div>

          <div className="grid xl:grid-cols-2 gap-8 mt-24">

            <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

              <h3 className="text-4xl font-black tracking-tight">
                Definizione dei Ruoli
              </h3>

              <div className="mt-10 space-y-6 text-zinc-300 leading-9">

                <p>
                  Ogni calciatore in lista ha un ruolo specifico
                  e dovrà essere inserito coerentemente
                  negli schemi disponibili.
                </p>

                <p>
                  Esistono anche calciatori polivalenti,
                  schierabili in più ruoli.
                </p>

              </div>

            </div>

            <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

              <h3 className="text-4xl font-black tracking-tight">
                Schemi di Gioco
              </h3>

              <div className="mt-10 space-y-6 text-zinc-300 leading-9">

                <p>
                  Gli schemi tattici disponibili
                  per il sistema MANTRA sono undici.
                </p>

                <p>
                  Tutti gli schemi richiedono
                  5 calciatori difensivi
                  e 5 offensivi.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FORMAZIONE */}
      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="grid xl:grid-cols-2 gap-12">

            <div>

              <div
                className="
                  text-sm uppercase
                  tracking-[0.3em]
                  text-zinc-500
                "
              >
                Formazione
              </div>

              <h2
                className="
                  mt-8
                  text-6xl
                  md:text-7xl
                  font-black
                  leading-none
                  tracking-tight
                "
              >
                SCHIERAMENTO
                <br />
                E PANCHINA.
              </h2>

            </div>

            <div className="space-y-8 text-zinc-300 text-lg leading-10">

              <p>
                La formazione dovrà essere presentata
                entro 5 minuti dall’inizio
                della prima gara di giornata.
              </p>

              <p>
                In caso di mancata presentazione
                verrà recuperata l’ultima formazione inserita
                con malus di tre punti in classifica.
              </p>

              <p>
                La panchina è composta da 12 calciatori,
                di cui almeno un portiere,
                schierati in ordine di preferenza assoluta.
              </p>

              <p>
                In Mantra l’ordine della panchina
                governa i meccanismi delle sostituzioni.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SOSTITUZIONI */}
      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="max-w-5xl">

            <div
              className="
                text-sm uppercase
                tracking-[0.3em]
                text-zinc-500
              "
            >
              Sostituzioni
            </div>

            <h2
              className="
                mt-8
                text-6xl md:text-8xl
                font-black
                tracking-tight
                leading-none
              "
            >
              PRIORITÀ
              <br />
              DEL SISTEMA.
            </h2>

          </div>

          <div className="grid xl:grid-cols-3 gap-8 mt-24">

            <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-10">

              <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
                01
              </div>

              <h3 className="mt-6 text-4xl font-black">
                Soluzioni Ottimali
              </h3>

              <p className="mt-8 text-zinc-300 leading-9">
                Rispettano lo schema tattico scelto
                senza malus fuori posizione.
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
                Consentono il cambio modulo
                con gli schemi disponibili.
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
                Consentono fuori ruolo
                con malus di 1 punto.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* MODIFICATORE */}
      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="grid xl:grid-cols-2 gap-12">

            <div>

              <div
                className="
                  text-sm uppercase
                  tracking-[0.3em]
                  text-zinc-500
                "
              >
                Modificatore Difensivo
              </div>

              <h2
                className="
                  mt-8
                  text-6xl md:text-7xl
                  font-black
                  leading-none
                  tracking-tight
                "
              >
                DIFESA.
                <br />
                BONUS.
              </h2>

            </div>

            <div className="space-y-8 text-zinc-300 text-lg leading-10">

              <p>
                Il modificatore difensivo attribuisce
                punti bonus in caso di buone performance
                del pacchetto difensivo.
              </p>

              <p>
                Vengono considerati i migliori 5 uomini difensivi.
              </p>

              <p>
                Almeno 3 devono avere ruolo Dc, Dd o Ds.
              </p>

              <p>
                Se non viene raggiunto il numero legale,
                il modificatore non si attiva.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PRIMAVERA */}
      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="max-w-5xl">

            <div
              className="
                text-sm uppercase
                tracking-[0.3em]
                text-zinc-500
              "
            >
              Primavera
            </div>

            <h2
              className="
                mt-8
                text-6xl md:text-8xl
                font-black
                tracking-tight
                leading-none
              "
            >
              U20.
              <br />
              PRE-ASTA.
            </h2>

          </div>

          <div className="mt-20 grid xl:grid-cols-2 gap-8">

            <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

              <div className="space-y-6 text-zinc-300 leading-9">

                <p>
                  Ogni fantallenatore avrà 15 crediti
                  per aggiudicarsi 4 calciatori U20.
                </p>

                <p>
                  Non è possibile scambiare i primavera.
                </p>

                <p>
                  I premi crediti dipendono
                  dal numero di voti ottenuti.
                </p>

              </div>

            </div>

            <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

              <div className="space-y-4 text-zinc-300">

                <p>5-10 voti → 3 crediti</p>
                <p>11-15 voti → 5 crediti</p>
                <p>16-20 voti → 10 crediti</p>
                <p>21-30 voti → 15 crediti</p>
                <p>31-35 voti → 20 crediti</p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ASTA */}
      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="max-w-5xl">

            <div
              className="
                text-sm uppercase
                tracking-[0.3em]
                text-zinc-500
              "
            >
              Asta e Premi
            </div>

            <h2
              className="
                mt-8
                text-6xl md:text-8xl
                font-black
                tracking-tight
                leading-none
              "
            >
              CREDITI.
              <br />
              MULTE.
              <br />
              PREMI.
            </h2>

          </div>

          <div className="grid xl:grid-cols-2 gap-8 mt-24">

            <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

              <div className="space-y-6 text-zinc-300 leading-9">

                <p>
                  La rosa dovrà essere composta
                  da 28 giocatori senza vincoli di ruolo.
                </p>

                <p>
                  Chi crea confusione durante l’asta
                  verrà penalizzato di 5 crediti.
                </p>

                <p>
                  Non è consentito rilanciare
                  oltre la propria puntata massima.
                </p>

              </div>

            </div>

            <div className="rounded-[40px] border border-white/10 bg-zinc-950 p-12">

              <div className="space-y-6 text-zinc-300 leading-9">

                <p>
                  Quota partecipazione:
                  80€ per fantallenatore.
                </p>

                <p>
                  Montepremi totale:
                  800€.
                </p>

                <p>
                  1° → 350€
                </p>

                <p>
                  2° → 200€
                </p>

                <p>
                  3° → 100€
                </p>

                <p>
                  Coppa → 150€
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FINALE */}
      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="max-w-5xl">

            <h2
              className="
                text-6xl md:text-8xl
                font-black
                tracking-tight
                leading-none
              "
            >
              DALLA
              <br />
              PRIMA
              <br />
              ALL’ULTIMA
              <br />
              GIORNATA.
            </h2>

            <p
              className="
                mt-12
                max-w-2xl
                text-xl
                leading-10
                text-zinc-400
              "
            >
              Ogni fantallenatore partecipante
              è obbligato a impegnarsi
              dalla prima all’ultima giornata.
            </p>

            <div className="mt-16">

              <Link
                href="/squadre"
                className="
                  inline-flex items-center
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

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}