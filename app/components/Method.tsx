
import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Anamnese Detalhada",
    description:
      "Conversamos sobre seu histórico de saúde, sintomas, hábitos alimentares, rotina e preferências para compreender suas necessidades individuais.",
  },
  {
    number: "02",
    title: "Avaliação de Exames",
    description:
      "Quando disponíveis e pertinentes, seus exames laboratoriais são considerados junto ao histórico de saúde e às demais informações da avaliação.",
  },
  {
    number: "03",
    title: "Planejamento Individualizado",
    description:
      "Elaboração de estratégias alimentares alinhadas à sua rotina, preferências e objetivos. Quando necessário, a suplementação pode ser avaliada individualmente.",
  },
  {
    number: "04",
    title: "Acompanhamento e Ajustes",
    description:
      "Acompanhamos sua evolução e, conforme a modalidade contratada, avaliamos dúvidas e possíveis ajustes nas estratégias nutricionais.",
  },
];

export default function Method() {
  return (
    <section id="metodo" className="gradient-bg px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Jornada do Paciente
          </span>

          <h2 className="font-serif text-3xl font-medium leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
            Como Funciona o Acompanhamento?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-brand-800/75">
            Conheça as etapas de um acompanhamento nutricional pensado para
            suas necessidades e seus objetivos.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 120}>
              <article className="card-shadow h-full rounded-2xl border border-brand-100 bg-white/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="mb-5 block font-serif text-4xl font-bold text-brand-300">
                  {step.number}
                </span>

                <h3 className="mb-3 font-serif text-xl font-semibold text-brand-900">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-brand-800/75">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
