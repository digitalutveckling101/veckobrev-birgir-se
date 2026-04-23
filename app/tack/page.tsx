import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Tack · Veckobrev · Birgir Birgisson",
  description: "Tack! Du är med i veckobrevet.",
  robots: { index: false, follow: false },
};

export default function TackPage() {
  return (
    <>
      <main>
        <section className="section bg-cream-100">
          <div className="container-narrow text-center">
            <p className="eyebrow">Prenumeration</p>
            <h1 className="mt-5 font-serif font-semibold text-ink-900 text-[44px] sm:text-[56px] md:text-[64px] leading-[1.05] tracking-[-0.02em]">
              Tack! <em className="serif-italic">Du är med.</em>
            </h1>
            <p className="mt-7 text-ink-500 text-[19px] leading-[1.6] max-w-[560px] mx-auto">
              Jag mejlar dig på onsdag eftermiddag. Tills dess, slå gärna följe på andra ställen där jag skriver och pratar om det här.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.youtube.com/@birgirbirgisson"
                target="_blank"
                rel="noreferrer"
                className="btn btn-amber btn-lg w-full sm:w-auto"
              >
                Följ på YouTube
              </a>
              <a
                href="https://www.facebook.com/groups/vibecodingsverige"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg w-full sm:w-auto"
              >
                Gå med i Facebook-gruppen
              </a>
            </div>
            <p className="mt-10 text-[14px] text-ink-400">
              <Link href="/" className="underline decoration-ink-200 hover:text-amber-700">
                Tillbaka till startsidan
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
