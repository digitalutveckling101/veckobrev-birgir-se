import { SignupForm } from "./SignupForm";

export function FormSection() {
  return (
    <section id="prenumerera" className="section bg-cream-100">
      <div className="container-narrow">
        <div className="text-center">
          <p className="eyebrow">Prenumerera</p>
          <h2 className="mt-4 font-serif font-semibold text-ink-900 text-[32px] md:text-[40px] leading-[1.15]">
            Häng med på <em className="serif-italic">onsdagar</em>.
          </h2>
          <p className="mt-5 text-ink-500 text-[18px] leading-[1.6] max-w-[520px] mx-auto">
            Jag mejlar dig varje onsdag eftermiddag. Du kan avregistrera dig när du vill.
          </p>
        </div>
        <div className="mt-10">
          <SignupForm />
        </div>
      </div>
    </section>
  );
}
