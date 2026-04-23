export function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-100 border-t border-ink-800">
      <div className="container-wide py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-[20px] font-semibold text-cream-100">
              Veckobrev <span className="text-amber-400">·</span> Birgir Birgisson
            </p>
            <p className="mt-3 text-ink-300 text-[14px] max-w-[420px] leading-[1.6]">
              Ett veckobrev om AI, etik och vibe coding. Varje onsdag eftermiddag.
            </p>
          </div>
          <nav aria-label="Cross-länkar" className="flex flex-col gap-2 text-[15px] md:items-end">
            <a
              href="https://www.facebook.com/groups/vibecodingsverige"
              target="_blank"
              rel="noreferrer"
              className="text-cream-100 hover:text-amber-400 transition-colors"
            >
              Vibe Coding Sverige (Facebook-gruppen)
            </a>
            <a
              href="https://www.youtube.com/@birgirbirgisson"
              target="_blank"
              rel="noreferrer"
              className="text-cream-100 hover:text-amber-400 transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://birgir.se"
              target="_blank"
              rel="noreferrer"
              className="text-cream-100 hover:text-amber-400 transition-colors"
            >
              birgir.se
            </a>
          </nav>
        </div>
        <div className="mt-12 pt-8 border-t border-ink-800 text-[13px] text-ink-400">
          © Birgir Birgisson
        </div>
      </div>
    </footer>
  );
}
