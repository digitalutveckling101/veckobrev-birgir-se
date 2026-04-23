import Link from "next/link";

export function Header() {
  return (
    <header className="bg-cream-100 border-b border-ink-200/60">
      <div className="container-wide flex items-center justify-between py-5">
        <Link href="/" className="font-serif text-lg font-semibold text-ink-900">
          birgir<span className="text-amber-700">.se</span>
        </Link>
        <Link href="#prenumerera" className="btn btn-amber">
          Prenumerera
        </Link>
      </div>
    </header>
  );
}
