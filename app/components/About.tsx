
import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="bg-brand-50 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Imagem da Aline */}
        <div className="mx-auto w-full max-w-lg">
          <div className="group relative h-160 overflow-hidden rounded-3xl bg-brand-200 shadow-xl">
            <Image
              src="/nutrisala3.jpg"
              alt="Nutricionista Aline Corrêa"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Apresentação */}
        <div className="pt-4 lg:pt-0">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Prazer, sou a sua Nutri
          </span>

          <h2 className="mb-6 font-serif text-4xl font-medium leading-tight text-brand-900 sm:text-5xl">
            Aline Corrêa
          </h2>

          <p className="mb-5 leading-relaxed text-brand-800/80">
            Acredito que cuidar da alimentação não precisa ser sinônimo de
            restrições ou culpa. Ao longo de mais de 6 mil atendimentos, ajudei
            homens e mulheres a recuperarem o prazer de comer e a construírem
            uma relação mais leve com a alimentação.
          </p>

          <p className="mb-8 leading-relaxed text-brand-800/80">
            Com foco em Saúde Intestinal, Doenças Autoimunes e Emagrecimento,
            meu trabalho é orientar escolhas alimentares de forma
            individualizada, considerando seu histórico de saúde, suas
            necessidades e seus objetivos, sempre com acolhimento e embasamento
            científico.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "Planos 100% Personalizados",
              "Análise Cuidadosa de Exames",
              "Sem Dietas Restritivas",
              "Suporte Direto via WhatsApp",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <i
                  className="fa-solid fa-circle-check text-brand-500"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-brand-800">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=5512997652552&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700"
          >
            <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            Falar Diretamente Comigo
          </a>
        </div>
      </div>
    </section>
  );
}
