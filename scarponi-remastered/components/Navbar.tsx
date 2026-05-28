import Link from 'next/link'

export default function Navbar() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-black/30
        backdrop-blur-xl
      "
    >

      <div className="max-w-7xl mx-auto px-8">

        <div className="h-20 flex items-center justify-between">

          <Link
            href="/"
            className="
              text-white
              font-black
              tracking-tight
              text-2xl
            "
          >
            LEGA SCARPONI
          </Link>

          <nav className="flex items-center gap-8">

            <Link
              href="/"
              className="text-sm text-zinc-300 hover:text-white transition"
            >
              Home
            </Link>

            <Link
              href="/squadre"
              className="text-sm text-zinc-300 hover:text-white transition"
            >
              Squadre
            </Link>

            <Link
              href="/statistiche"
              className="text-sm text-zinc-300 hover:text-white transition"
            >
              Statistiche
            </Link>

            <Link
              href="/regolamento"
              className="text-sm text-zinc-300 hover:text-white transition"
            >
              Regolamento
            </Link>

          </nav>

        </div>

      </div>

    </header>
  )
}