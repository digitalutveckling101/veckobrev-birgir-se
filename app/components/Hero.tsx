import Link from "next/link";

export function Hero() {
  return (
    <section className="section bg-cream-100">
      <div className="container-narrow text-center">
        <p className="eyebrow">Veckobrev</p>
        <h1 className="mt-5 font-serif font-semibold text-ink-900 text-[44px] sm:text-[56px] md:text-[68px] leading-[1.05] tracking-[-0.02em]">
          Veckobrev om AI, etik och{" "}
          <em className="serif-italic">vibe coding</em>
        </h1>
        <p className="mt-7 text-ink-500 text-[19px] md:text-[20px] leading-[1.6] max-w-[620px] mx-auto">
          Varje onsdag eftermiddag. En personlig reflektion, en konkret
          AI-insikt, en mikroövning. Inget spam.
        </p>
        <div className="mt-9 flex justify-center">
          <Link href="#prenumerera" className="btn btn-amber btn-lg">
            Prenumerera
          </Link>
        </div>
        <p className="mt-5 text-[13px] text-ink-400">
          Onsdagar · under 5 minuters läsning · ingen spam
        </p>
      </div>
    </section>
  );
}
