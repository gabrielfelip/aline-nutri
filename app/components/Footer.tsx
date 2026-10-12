
export default function Footer() {
  return (
    <footer className="border-t border-brand-200 bg-brand-50 px-4 py-12 text-brand-700 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <div>
          <a
            href="#"
            className="font-serif text-2xl font-semibold text-brand-900 transition-colors hover:text-brand-600"
          >
            Dra. Aline Corrêa
          </a>

          <p className="mt-2 text-sm">
            Nutricionista Funcional • CRN 38948
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/aline.nutriconsult"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Aline Corrêa"
            title="Instagram"
            className="transition-colors hover:text-brand-500"
          >
            <i
              className="fa-brands fa-instagram text-2xl"
              aria-hidden="true"
            />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5512997652552"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp da Aline Corrêa"
            title="WhatsApp"
            className="transition-colors hover:text-brand-500"
          >
            <i
              className="fa-brands fa-whatsapp text-2xl"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-brand-200 pt-6 text-center text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 Aline Corrêa Nutrição. Todos os direitos reservados.
        </p>

        <p>Caçapava - SP | Atendimento Presencial e Online</p>
      </div>
    </footer>
  );
}
