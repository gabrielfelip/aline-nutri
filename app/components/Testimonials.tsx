
const testimonials = [
  {
    initials: "MC",
    name: "Paciente 1",
    location: "Paciente Presencial",
    quote:
      "Eu sofria com intestino preso e enxaquecas há anos. Depois que comecei o acompanhamento com a Dra. Aline, minha digestão mudou 100% e não sinto mais aquele estufamento horrível!",
  },
  {
    initials: "PR",
    name: "Paciente 2",
    location: "Paciente Online",
    quote:
      "Tenho Hashimoto e sempre achei que não conseguiria emagrecer. A Aline ajustou minha dieta sem cortar tudo e consegui eliminar 12kg sem sofrer!",
  },
  {
    initials: "CS",
    name: "Paciente 3",
    location: "Paciente Caçapava/SP",
    quote:
      "A melhor escolha que fiz! A consulta é detalhada, ela escuta e compreende nossas rotinas. Me ensinou a ter uma relação saudável e leve com a comida.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Transformações Reais
          </span>

          <h2 className="font-serif text-3xl font-medium leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
            O que dizem os pacientes
          </h2>

          <p className="mx-auto mt-5 inline-block rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-medium text-brand-700">
            Área pronta para inserir os prints / depoimentos reais da Dra.
            Aline
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.initials}
              className="card-shadow rounded-2xl border border-brand-100 bg-brand-50 p-7"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-brand-600">
                Exemplo Demo
              </p>

              <div
                className="mb-5 flex gap-1 text-amber-500"
                aria-label="Cinco estrelas ilustrativas"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <i
                    key={index}
                    className="fa-solid fa-star"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="mb-7 text-sm leading-relaxed text-brand-800/85">
                “{testimonial.quote}”
              </blockquote>

              <div className="flex items-center gap-3 border-t border-brand-200 pt-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-200 font-serif font-bold text-brand-800">
                  {testimonial.initials}
                </div>

                <div>
                  <p className="font-semibold text-brand-900">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs text-brand-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
