"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const logos = [
  "/logos/riky.png",
  "/logos/fede.png",
  "/logos/halley.png",
  "/logos/lore.png",
  "/logos/gian.png",
  "/logos/ema.png",
  "/logos/ely.png",
  "/logos/checco.png",
  "/logos/matte.png",
  "/logos/tino.png",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

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
          border-b border-white/5
        "
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <div className="h-20 flex items-center gap-4">

            {/* STEMMI */}
            <Link
              href="/"
              className="
                flex
                items-center
                gap-1
                flex-1
                overflow-x-auto
              "
            >
              {logos.map((logo) => (
                <Image
                  key={logo}
                  src={logo}
                  alt=""
                  width={52}
                  height={52}
                  className="
                    shrink-0
                    object-contain
                    transition-all
                    duration-300
                    hover:scale-125
                    hover:-translate-y-1
                  "
                />
              ))}
            </Link>

            {/* MENU DESKTOP */}
            <nav
              className="
                hidden
                xl:flex
                items-center
                gap-8
              "
            >
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

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(true)}
              className="
                xl:hidden
                flex
                flex-col
                gap-1.5
                shrink-0
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

        <div className="flex justify-end p-8">

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