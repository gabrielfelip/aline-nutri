import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import About from "./components/About";
import Specialties from "./components/Specialties";
import Method from "./components/Method";
import Testimonials from "./components/Testimonials";
import Office from "./components/Office";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PainPoints />
      <About />
      <Specialties />
      <Method />
      <Testimonials />
      <Office />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}