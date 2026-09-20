import React from "react";
import { PageShell } from "./components/PageShell";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Discipline } from "./sections/Discipline";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <PageShell>
      {/* Real Hero Section */}
      <Hero />

      {/* Real About Section */}
      <About />

      {/* Real Projects Section */}
      <Projects />

      {/* Real Skills Section */}
      <Skills />

      {/* Real Discipline / Athlete Section */}
      <Discipline />

      {/* Real Contact Section */}
      <Contact />

      <Footer />
    </PageShell>
  );
};

export default App;
