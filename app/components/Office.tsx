
import Image from "next/image";

export default function Office() {
  return (
    <section className="border-y border-brand-200/50 bg-brand-50/50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Atendimento Presencial
          </span>

          <h2 className="font-serif text-3xl font-medium leading-tight text-brand-900 sm:text-4xl">
            Um espaço acolhedor para cuidar de você
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-brand-800/75">
            Um ambiente pensado para tornar sua experiência de atendimento
            mais confortável, em Caçapava/SP.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="group overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src="/sala1.jpg"
                alt="Imagem ilustrativa de uma sala de consulta nutricional"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="font-serif text-xl font-semibold text-brand-900">
                Recepção / Consultório
              </h3>
            </div>
          </article>

          <article className="group overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src="/sala1.jpg"
                alt="Imagem ilustrativa de um espaço para avaliação nutricional"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="font-serif text-xl font-semibold text-brand-900">
                Espaço de Avaliação
              </h3>
            </div>
          </article>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-brand-600">
          Imagem ilustrativa para a demonstração do projeto.
        </p>
      </div>
    </section>
  );
}
