const items = [
  {
    number: "01",
    title: "En personlig reflektion",
    body: "Om att använda AI utan att tappa sin mänsklighet. Det jag funderar på den här veckan.",
  },
  {
    number: "02",
    title: "En konkret AI-insikt",
    body: "Ett verktyg, en teknik eller ett fenomen att ha koll på. Förklarat på svenska.",
  },
  {
    number: "03",
    title: "En mikroövning",
    body: "Något du kan göra på under tio minuter. Praktiskt och tillämpbart direkt.",
  },
];

export function WhatYouGet() {
  return (
    <section className="section bg-cream-200">
      <div className="container-wide">
        <div className="max-w-[620px]">
          <p className="eyebrow">Vad du får</p>
          <h2 className="mt-4 font-serif font-semibold text-ink-900 text-[32px] md:text-[40px] leading-[1.15]">
            Tre saker, varje onsdag.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.number}
              className="bg-cream-50 border border-ink-200/60 rounded-[16px] p-8 shadow-sm"
            >
              <p className="font-mono text-[12px] font-medium text-amber-700 tracking-wider">
                {item.number}
              </p>
              <h3 className="mt-4 font-serif font-semibold text-ink-900 text-[20px] md:text-[22px] leading-[1.25]">
                {item.title}
              </h3>
              <p className="mt-3 text-ink-500 text-[16px] leading-[1.6]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
