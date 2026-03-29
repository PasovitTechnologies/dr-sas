import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TreatmentApproach from "@/components/TreatmentApproach";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Locations />
      <TreatmentApproach />
      <Footer />
    </>
  );
}
