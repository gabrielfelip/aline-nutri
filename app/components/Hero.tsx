import Image from "next/image";

export default function Hero() {
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=5512997652552&text=Ol%C3%A1!%20Quero%20agendar%20uma%20consulta";

  return (
    <section className="relative overflow-hidden gradient-bg pt-8 pb-20 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Conteúdo principal */}
        <div className="relative z-10 text-center lg:col-span-7 lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-2 text-sm font-medium text-brand-700">
            <i className="fa-solid fa-sparkles" aria-hidden="true" />
            Atendimento Presencial em Caçapava/SP &amp; Online
          </div>

          <h1 className="mb-6 font-serif text-4xl font-medium leading-tight text-brand-900 sm:text-5xl lg:text-6xl">
            Te ajudo a cuidar da sua saúde de forma{" "}
            <span className="font-normal italic text-brand-600">
              leve e definitiva
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-brand-800/80 lg:mx-0">
            Chega de dietas restritivas e punições. Recupere sua saúde
            intestinal, equilibre seus hormônios e conquiste o corpo que deseja
            com ciência, empatia e sem passar fome.
          </p>

          {/* Indicadores */}
          <div className="mb-9 flex flex-wrap justify-center gap-8 lg:justify-start">
            <div>
              <p className="font-serif text-3xl font-bold text-brand-700">
                +6.000
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-600">
                Atendimentos
              </p>
            </div>

            <div>
              <p className="font-serif text-3xl font-bold text-brand-700">
                CRN 38948
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-600">
                Nutri Registrada
              </p>
            </div>

            <div>
              <p className="font-serif text-3xl font-bold text-brand-700">
                100%
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-600">
                Individualizado
              </p>
            </div>
          </div>

          {/* Chamadas para ação */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-glow inline-flex items-center justify-center gap-3 rounded-full bg-brand-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700"
            >
              <i className="fa-brands fa-whatsapp text-xl" aria-hidden="true" />
              Quero Transformar Minha Saúde
            </a>

            <a
              href="#sobre"
              className="inline-flex items-center gap-2 font-semibold text-brand-700 transition-colors hover:text-brand-900"
            >
              Saiba mais sobre mim
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Foto da nutricionista */}
        <div className="relative mx-auto w-full max-w-lg lg:col-span-5 lg:max-w-none">
          <div className="absolute -inset-4 rounded-4xl bg-brand-200/40 blur-2xl" />

          <div className="group hero-glow relative overflow-hidden rounded-4xl bg-brand-200">
            <Image
              src="/nutrisala4.jpg"
              alt="Nutricionista em seu consultório"
              width={1000}
              height={1250}
              className="h-120 w-full object-cover object-top transition duration-500 group-hover:scale-105 sm:h-137.5"
              sizes="(max-width: 1023px) 100vw, 42vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}