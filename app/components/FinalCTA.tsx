import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="section bg-ink-900 text-cream-100">
      <div className="container-narrow text-center">
        <p className="eyebrow">Kom igång</p>
        <h2 className="mt-4 font-serif font-semibold text-cream-100 text-[32px] md:text-[44px] leading-[1.15]">
          Få nästa brev i din inbox på <em className="serif-italic">onsdag</em>.
        </h2>
        <p className="mt-5 text-ink-300 text-[18px] leading-[1.6] max-w-[520px] mx-auto">
          En personlig reflektion, en AI-insikt, en mikroövning. Under fem minuters läsning.
        </p>
        <div className="mt-9 flex justify-center">
          <Link href="#prenumerera" className="btn btn-amber btn-lg">
            Prenumerera
          </Link>
        </div>
      </div>
    </section>
  );
}
