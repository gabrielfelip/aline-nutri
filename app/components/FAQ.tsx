
"use client";

import { useState } from "react";

const questions = [
  {
    question: "O atendimento online funciona da mesma forma que o presencial?",
    answer:
      "Sim! O atendimento online permite receber orientação nutricional sem precisar se deslocar até o consultório. A consulta é conduzida de forma individualizada, considerando seu histórico, sua rotina e seus objetivos.",
  },
  {
    question: "Onde é localizado o consultório presencial?",
    answer:
      "Os atendimentos presenciais são realizados em Caçapava/SP em um espaço acolhedor preparado com todo conforto para você.",
  },
  {
    question: "Aceita plano de saúde / convênio?",
    answer:
      "O atendimento é particular. Para informações sobre recibo, nota fiscal e possibilidade de reembolso pelo seu plano de saúde, entre em contato para conhecer as condições disponíveis.",
  },
  {
    question: "Vou precisar cortar glúten e lactose da minha rotina?",
    answer:
      "Não necessariamente! A alimentação é avaliada de forma individualizada, e a exclusão de glúten, lactose ou outros alimentos depende das necessidades de cada pessoa. O objetivo é evitar restrições desnecessárias e orientar escolhas alimentares adequadas.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  function toggleQuestion(index: number) {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  }

  return (
    <section id="faq" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Tire suas dúvidas
          </span>

          <h2 className="font-serif text-3xl font-medium leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => {
            const isOpen = openItems.includes(index);
            const answerId = `faq-answer-${index}`;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-2xl border border-brand-100 bg-brand-50/70 transition-colors duration-300 hover:border-brand-200"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-semibold leading-relaxed text-brand-900">
                    {item.question}
                  </span>

                  <i
                    className={`fa-solid fa-chevron-down shrink-0 text-brand-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={answerId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6">
                      <p className="border-t border-brand-200 pt-4 text-sm leading-relaxed text-brand-800/80">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
