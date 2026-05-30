"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
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

            {/* DESKTOP */}
            <nav className="hidden md:flex items-center gap-8">

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

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="
                md:hidden
                text-white
                text-3xl
                font-light
              "
            >
              ☰
            </button>

          </div>

        </div>

      </header>

      {/* OVERLAY */}
      {open && (
        <div
          className="
            fixed inset-0 z-[60]
            bg-black/95
            backdrop-blur-xl
          "
        >

          <div className="flex justify-end p-8">

            <button
              onClick={() => setOpen(false)}
              className="
                text-white
                text-4xl
              "
            >
              ×
            </button>

          </div>

          <nav
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-10
              h-[80vh]
            "
          >

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="
                text-4xl
                font-black
                hover:text-zinc-400
                transition
              "
            >
              Home
            </Link>

            <Link
              href="/squadre"
              onClick={() => setOpen(false)}
              className="
                text-4xl
                font-black
                hover:text-zinc-400
                transition
              "
            >
              Squadre
            </Link>

            <Link
              href="/statistiche"
              onClick={() => setOpen(false)}
              className="
                text-4xl
                font-black
                hover:text-zinc-400
                transition
              "
            >
              Statistiche
            </Link>

            <Link
              href="/regolamento"
              onClick={() => setOpen(false)}
              className="
                text-4xl
                font-black
                hover:text-zinc-400
                transition
              "
            >
              Regolamento
            </Link>

          </nav>

        </div>
      )}
    </>
  );
}