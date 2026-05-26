import type { Metadata } from 'next'
import Link from 'next/link'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Lega Scarponi Remastered',
  description: 'Dashboard ufficiale della Lega Scarponi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-black text-white">

        {/* NAVBAR */}
        <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

            <Link
              href="/"
              className="font-black text-xl tracking-tight"
            >
              ⚽ LEGA SCARPONI
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium">

              <Link
                href="/"
                className="text-zinc-400 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                href="/teams"
                className="text-zinc-400 hover:text-white transition"
              >
                Classifica
              </Link>

              <Link
                href="/squadre"
                className="text-zinc-400 hover:text-white transition"
              >
                Squadre
              </Link>

              <Link
                href="/statistiche"
                className="text-zinc-400 hover:text-white transition"
              >
                Statistiche
              </Link>
            </nav>

          </div>
        </header>

        {/* CONTENUTO */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-zinc-900 py-10 text-center text-zinc-500">
          <p>Lega Scarponi Remastered</p>

          <p className="mt-2 text-sm">
            Aggiornamento automatico Fantacalcio • Next.js • Supabase • Vercel
          </p>
        </footer>

      </body>
    </html>
  )
}