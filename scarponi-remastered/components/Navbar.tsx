"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

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

            {/* DESKTOP MENU */}
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

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setOpen(true)}
              className="
                md:hidden
                flex
                flex-col
                gap-1.5
              "
            >
              <span className="w-6 h-[2px] bg-white block" />
              <span className="w-6 h-[2px] bg-white block" />
              <span className="w-6 h-[2px] bg-white block" />
            </button>

          </div>

        </div>

      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-[60]
          bg-black/95
          backdrop-blur-2xl
          transition-all duration-500
          ${
            open
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }
        `}
      >

        <div className="flex justify-between items-center p-8">

          <div
            className="
              text-white
              font-black
              text-2xl
            "
          >
            LEGA SCARPONI
          </div>

          <button
            onClick={() => setOpen(false)}
            className="
              text-white
              text-5xl
              leading-none
            "
          >
            ×
          </button>

        </div>

        <nav
          className="
            flex
            flex-col
            justify-center
            items-center
            gap-10
            h-[75vh]
          "
        >

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="
              text-5xl
              md:text-6xl
              font-black
              tracking-tight
              hover:text-zinc-500
              transition
            "
          >
            Home
          </Link>

          <Link
            href="/squadre"
            onClick={() => setOpen(false)}
            className="
              text-5xl
              md:text-6xl
              font-black
              tracking-tight
              hover:text-zinc-500
              transition
            "
          >
            Squadre
          </Link>

          <Link
            href="/statistiche"
            onClick={() => setOpen(false)}
            className="
              text-5xl
              md:text-6xl
              font-black
              tracking-tight
              hover:text-zinc-500
              transition
            "
          >
            Statistiche
          </Link>

          <Link
            href="/regolamento"
            onClick={() => setOpen(false)}
            className="
              text-5xl
              md:text-6xl
              font-black
              tracking-tight
              hover:text-zinc-500
              transition
            "
          >
            Regolamento
          </Link>

        </nav>

      </div>
    </>
  );
}