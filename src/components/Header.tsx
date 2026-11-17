"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyecto", label: "El proyecto" },
  { href: "#manifiesto", label: "Manifiesto" },
  { href: "#aliados", label: "Aliados" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [active, setActive] = useState("#inicio");
  const [open, setOpen] = useState(false);

  // Marca en el menú la sección que está visible al hacer scroll
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-20 bg-crema">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-8 lg:py-5">
        <a href="#inicio" className="shrink-0">
          <Image
            src="/logo.png"
            alt="En nuestras palabras · Revista cultural"
            width={1000}
            height={223}
            preload
            className="h-auto w-48 sm:w-64"
          />
        </a>

        <nav className="hidden lg:block" aria-label="Principal">
          <ul className="flex items-center gap-2 text-2xl font-bold">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setActive(l.href)}
                  className={`rounded-md px-3 py-1 transition-colors hover:bg-rosa ${
                    active === l.href ? "bg-rosa" : ""
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="lg:hidden rounded-md p-2 hover:bg-rosa"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-vino/10 px-4 pb-4" aria-label="Principal móvil">
          <ul className="flex flex-col gap-1 pt-2 text-xl font-bold">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => {
                    setActive(l.href);
                    setOpen(false);
                  }}
                  className={`block rounded-md px-3 py-2 hover:bg-rosa ${active === l.href ? "bg-rosa" : ""}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
