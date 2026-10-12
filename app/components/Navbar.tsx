
"use client";

import { useState } from "react";

const whatsappUrl =
  "https://api.whatsapp.com/send?phone=5512997652552&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Aline.";

const navLinks = [
  { href: "#sobre", label: "Sobre Mim" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#metodo", label: "O Método" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-200/50 bg-brand-50/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 font-serif text-xl font-bold text-white">
            AC
          </div>

          <div>
            <span className="block font-serif text-xl font-bold leading-tight text-brand-800">
              Aline Corrêa
            </span>
            <span className="text-xs font-medium tracking-wider text-brand-600">
              Nutrição Funcional
            </span>
          </div>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
          >
            <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            Agendar Consulta
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-brand-800 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i
            className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} text-xl`}
            aria-hidden="true"
          />
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação mobile"
          className="border-t border-brand-200/50 bg-brand-50 px-4 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-stone-700 transition-colors hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              Agendar via WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
