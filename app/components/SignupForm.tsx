"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";

export function SignupForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!consent) {
      setError("Du behöver godkänna hanteringen av dina uppgifter.");
      return;
    }
    if (name.trim().length < 1 || name.trim().length > 80) {
      setError("Skriv in ett förnamn på 1 till 80 tecken.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Den där e-postadressen ser inte rätt ut.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), consent }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(
          data?.error ||
            "Något gick fel när vi försökte registrera dig. Försök igen om en stund."
        );
        setLoading(false);
        return;
      }
      track("signup");
      router.push("/tack");
    } catch {
      setError("Något gick fel när vi försökte registrera dig. Försök igen om en stund.");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-cream-50 border border-ink-200/60 rounded-[16px] p-7 md:p-9 shadow-md"
    >
      <div className="grid gap-5">
        <label className="block">
          <span className="block text-[13px] font-semibold text-ink-900 mb-2">
            Förnamn
          </span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            placeholder="Ditt förnamn"
            autoComplete="given-name"
            required
          />
        </label>

        <label className="block">
          <span className="block text-[13px] font-semibold text-ink-900 mb-2">
            E-post
          </span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="din@epost.se"
            autoComplete="email"
            required
          />
        </label>

        <label className="flex items-start gap-3 text-[14px] text-ink-500 leading-[1.5]">
          <input
            type="checkbox"
            name="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 accent-amber-600 flex-shrink-0"
            required
          />
          <span>
            Jag godkänner att Birgir Birgisson lagrar mitt namn och min e-postadress för att skicka veckobrevet. Jag kan när som helst avregistrera mig eller begära att mina uppgifter raderas.
          </span>
        </label>

        {error && (
          <div
            role="alert"
            className="rounded-[10px] border border-amber-600/40 bg-amber-50 px-4 py-3 text-[14px] text-amber-700"
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn btn-amber btn-lg w-full disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Skickar..." : "Prenumerera"}
        </button>

        <p className="text-[13px] text-ink-400 text-center">
          Inga skräpmejl. Hanteras enligt GDPR.
        </p>
      </div>
    </form>
  );
}
