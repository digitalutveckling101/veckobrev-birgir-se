import Image from "next/image";

export function About() {
  return (
    <section className="section bg-cream-200">
      <div className="container-wide">
        <div className="grid gap-10 md:gap-16 md:grid-cols-[auto_1fr] items-center">
          <div className="flex justify-center md:justify-start">
            <Image
              src="https://cdn.jsdelivr.net/gh/digitalutveckling101/birgir-design-system@main/assets/birgir.jpg"
              alt="Birgir Birgisson"
              width={400}
              height={400}
              priority={false}
              className="rounded-full object-cover w-[160px] h-[160px] md:w-[200px] md:h-[200px] shadow-md"
            />
          </div>
          <div>
            <p className="eyebrow">Vem står bakom</p>
            <h2 className="mt-4 font-serif font-semibold text-ink-900 text-[32px] md:text-[40px] leading-[1.15]">
              Birgir <em className="serif-italic">Birgisson</em>
            </h2>
            <p className="mt-5 text-ink-500 text-[18px] leading-[1.65] max-w-[560px]">
              Jag heter Birgir Birgisson. För ett år sedan hade jag aldrig byggt en webbapp. Idag bygger jag dem varje vecka med Claude Code och skriver om mina lärdomar i det här veckobrevet. Här delar jag allt jag lär mig, verktyg, arbetsflöden, och de etiska frågor som dyker upp på vägen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
