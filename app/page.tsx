import { Hero } from "./components/Hero";
import { WhatYouGet } from "./components/WhatYouGet";
import { FormSection } from "./components/FormSection";
import { About } from "./components/About";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhatYouGet />
        <FormSection />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
