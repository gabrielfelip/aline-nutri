
export default function FinalCTA() {
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=5512997652552&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Aline.";

  return (
    <section
      id="contato"
      className="bg-brand-600 px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
          Pronta para ter mais saúde, leveza e bem-estar?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/80">
          Agende sua consulta hoje mesmo e dê o primeiro passo para
          transformar sua relação com a comida.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-brand-800 transition-colors duration-300 hover:bg-brand-100"
        >
          Agendar Consulta via WhatsApp
          <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
