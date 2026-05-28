import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
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
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col bg-black text-white">

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENUTO */}
        <main className="flex-1">
          {children}
        </main>

        {/* FOOTER */}
        <footer
          className="
            border-t border-cyan-500/10
            bg-black/60
            backdrop-blur-xl
            py-10
            text-center
            text-zinc-500
          "
        >

          <p className="font-semibold tracking-wide">
            ⚡ Lega Scarponi Remastered
          </p>

          <p className="mt-2 text-sm text-zinc-600">
            Dashboard fantasy premium •
            Next.js • Supabase • Analytics AI
          </p>

        </footer>

      </body>
    </html>
  )
}