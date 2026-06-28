import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { TrustStrip } from "@/components/site/trust-strip";
import { Programs } from "@/components/site/programs";
import { Conditions } from "@/components/site/conditions";
import { SchoolsSection } from "@/components/site/schools-section";
import { Process } from "@/components/site/process";
import { Roadmap } from "@/components/site/roadmap";
import { StudentsGallery } from "@/components/site/students-gallery";
import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Fab } from "@/components/site/fab";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Programs />
        <Conditions />
        <SchoolsSection />
        <Process />
        <Roadmap />
        <StudentsGallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
