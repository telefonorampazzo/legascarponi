import Link from "next/link";

const sections = [
  {
    title: "Competizioni",
    description: "Campionato, Coppa di Lega e Battle Royale",
    href: "/regolamento/competizioni",
  },
  {
    title: "Sistema Mantra",
    description: "Ruoli, moduli e tattica",
    href: "/regolamento/mantra",
  },
  {
    title: "Formazioni",
    description: "Consegna formazione, panchina e penalità",
    href: "/regolamento/formazioni",
  },
  {
    title: "Sostituzioni",
    description: "Soluzioni ottimali, efficienti e adattate",
    href: "/regolamento/sostituzioni",
  },
  {
    title: "Modificatore",
    description: "Bonus difensivo e regole di calcolo",
    href: "/regolamento/modificatore",
  },
  {
    title: "Intorno",
    description: "Gestione dei pareggi nelle fasce limite",
    href: "/regolamento/intorno",
  },
  {
    title: "Primavera",
    description: "Pre-asta U20, bonus e riconferme",
    href: "/regolamento/primavera",
  },
  {
    title: "Mercato",
    description: "Svincoli e mercato di riparazione",
    href: "/regolamento/mercato",
  },
  {
    title: "Asta e Premi",
    description: "Crediti, sanzioni e montepremi",
    href: "/regolamento/asta",
  },
];

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

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-24 w-full">

          <div className="max-w-5xl">

            <div className="text-sm uppercase tracking-[0.3em] text-zinc-300">
              Regolamento Ufficiale
            </div>

            <h1 className="mt-8 text-7xl md:text-[10rem] font-black tracking-tight leading-[0.9]">
              LEGA
              <br />
              SCARPONI.
            </h1>

            <p className="mt-10 text-xl text-zinc-300 max-w-2xl leading-9">
              Tutte le regole ufficiali della Lega Scarponi.
            </p>

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-8 py-32">

        <div className="max-w-5xl">

          <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Regolamento
          </div>

          <h2 className="mt-8 text-6xl md:text-8xl font-black tracking-tight leading-none">
            TUTTO.
            <br />
            IN UN
            <br />
            POSTO SOLO.
          </h2>

          <p className="mt-10 max-w-3xl text-xl text-zinc-400 leading-10">
            Consulta tutte le sezioni del regolamento.
                    </p>

        </div>

      </section>

      {/* SEZIONI */}
      <section className="max-w-7xl mx-auto px-8 pb-32">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="
                group
                rounded-[40px]
                border
                border-white/10
                bg-zinc-950
                p-10
                hover:border-white/30
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
                Regolamento
              </div>

              <h3 className="mt-6 text-4xl font-black tracking-tight">
                {section.title}
              </h3>

              <p className="mt-8 text-zinc-300 leading-8">
                {section.description}
              </p>

              <div className="mt-12 text-white font-semibold group-hover:translate-x-2 transition">
                Apri sezione →
              </div>

            </Link>
          ))}

        </div>

      </section>

      {/* CTA FINALE */}
      <section className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-32">

          <div className="max-w-4xl">

            <h2 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
              DALLA
              <br />
              PRIMA
              <br />
              ALL'ULTIMA
              <br />
              GIORNATA.
            </h2>

            <p className="mt-12 text-xl text-zinc-400 leading-10 max-w-2xl">
              Ogni fantallenatore partecipante è tenuto a rispettare
              il regolamento e a impegnarsi dalla prima all'ultima giornata
              della stagione.
            </p>

            <div className="mt-16">

              <Link
                href="/squadre"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-white
                  text-black
                  px-8
                  py-4
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
  );
}