
import Reveal from "./Reveal";

const painPoints = [
  {
    icon: "fa-solid fa-leaf",
    title: "Intestino Preso ou Estufado",
    description:
      "Sente estufamento frequente, má digestão ou passa dias sem ir ao banheiro? Esses desconfortos merecem atenção e podem ser avaliados em conjunto com seus hábitos alimentares.",
  },
  {
    icon: "fa-solid fa-battery-quarter",
    title: "Cansaço e Falta de Energia",
    description:
      "Acorda sem disposição, sente fadiga à tarde ou percebe muita vontade de comer doces? Sua alimentação, rotina e histórico de saúde podem ajudar a investigar esses sinais.",
  },
  {
    icon: "fa-solid fa-ribbon",
    title: "Hashimoto e Doenças Autoimunes",
    description:
      "O acompanhamento nutricional pode ajudar a adequar a alimentação às suas necessidades, em conjunto com o tratamento e o acompanhamento da equipe de saúde.",
  },
  {
    icon: "fa-solid fa-rotate-left",
    title: "Efeito Sanfona Recorrente",
    description:
      "Já tentou dietas restritivas e teve dificuldade para manter os resultados? Um plano individualizado pode ajudar a construir hábitos mais sustentáveis, sem depender de restrições extremas.",
  },
];

export default function PainPoints() {
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=5512997652552&text=Ol%C3%A1!%20Quero%20entender%20como%20funciona%20o%20acompanhamento.";

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Você se identifica?
          </span>

          <h2 className="font-serif text-3xl font-medium leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
            Você já se acostumou a viver com desconfortos no dia a dia?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-brand-800/75">
            Conviver frequentemente com desconfortos merece atenção. Cuidar
            do seu corpo não precisa e não deve parecer uma punição.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <article className="card-shadow h-full rounded-2xl border border-brand-100 bg-brand-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <i
                    className={`${item.icon} text-xl`}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-3 font-serif text-xl font-semibold text-brand-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-brand-800/75">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Destaque sobre a importância da nutrição funcional */}
        <Reveal delay={150}>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-brand-200 bg-brand-100 p-8 text-brand-900 shadow-xl transition-shadow duration-300 hover:shadow-2xl sm:p-12">
            <div className="relative z-10">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-600">
                A Importância da Nutrição Funcional
              </span>

              <h3 className="mb-5 max-w-3xl font-serif text-2xl font-medium leading-relaxed text-brand-900 sm:text-3xl">
                &quot;Exames são importantes, mas precisam ser interpretados
                junto com a sua história e suas necessidades.&quot;
              </h3>

              <p className="mb-8 max-w-3xl leading-relaxed text-brand-800/80">
                O acompanhamento nutricional considera seus sintomas,
                histórico de saúde e hábitos para orientar escolhas alimentares
                mais adequadas à sua individualidade.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700"
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                Agendar minha avaliação individual
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
