const faqs = [
  {
    question: "How many bottles should I order?",
    answer: "Most customers choose the 3 or 6 bottle packages so they can follow the full recommended routine while securing the best price per bottle.",
  },
  {
    question: "Is there a guarantee?",
    answer: "Yes. Every order is backed by a 60-day satisfaction guarantee, so you can try it without risk.",
  },
  {
    question: "When will my order ship?",
    answer: "Orders are processed quickly, and shipping details are provided after checkout.",
  },
];

export const OprahFAQSection = () => {
  return (
    <section className="bg-white box-border w-full px-4 py-12">
      <div className="mx-auto max-w-[900px] reveal">
        <h2 className="text-center text-4xl font-black leading-tight text-emerald-950 font-work_sans">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-stone-50">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="cursor-pointer list-none text-xl font-bold text-zinc-900 font-work_sans">
                {faq.question}
              </summary>
              <p className="mt-3 text-base leading-relaxed text-zinc-700 font-work_sans">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
