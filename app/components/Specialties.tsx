
const specialties = [
  {
    icon: "fa-solid fa-wheat-awn-circle-exclamation",
    title: "Saúde Intestinal & Disbiose",
    description:
      "Acompanhamento nutricional voltado à saúde intestinal, considerando seus sintomas, histórico de saúde, hábitos alimentares e necessidades individuais.",
    benefits: [
      "Orientação alimentar individualizada",
      "Estratégias para lidar com desconfortos intestinais",
    ],
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Doenças Autoimunes & Hashimoto",
    description:
      "Uma abordagem nutricional individualizada, que considera suas necessidades e complementa o acompanhamento dos profissionais de saúde responsáveis pelo seu tratamento.",
    benefits: [
      "Orientações alimentares com embasamento científico",
      "Atenção ao histórico e às necessidades nutricionais",
    ],
  },
  {
    icon: "fa-solid fa-scale-balanced",
    title: "Emagrecimento Sustentável",
    description:
      "Um processo de mudança de hábitos que respeita sua rotina e suas preferências, priorizando uma alimentação equilibrada e estratégias que possam ser mantidas a longo prazo.",
    benefits: [
      "Construção de hábitos alimentares duradouros",
      "Refeições que combinam com sua rotina",
    ],
  },
];

export default function Specialties() {
  return (
    <section
      id="especialidades"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Áreas de Atuação
          </span>

          <h2 className="font-serif text-3xl font-medium leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
            Pilares do Meu Acompanhamento
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-brand-800/75">
            Um acompanhamento nutricional pensado para suas necessidades,
            sua rotina e seus objetivos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty) => (
            <article
              key={specialty.title}
              className="card-shadow rounded-3xl border border-brand-100 bg-brand-50 p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                <i
                  className={`${specialty.icon} text-2xl`}
                  aria-hidden="true"
                />
              </div>

              <h3 className="mb-4 font-serif text-2xl font-semibold leading-snug text-brand-900">
                {specialty.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-brand-800/80">
                {specialty.description}
              </p>

              <ul className="space-y-3 border-t border-brand-200 pt-5">
                {specialty.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm text-brand-800"
                  >
                    <i
                      className="fa-solid fa-check mt-1 text-brand-500"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
