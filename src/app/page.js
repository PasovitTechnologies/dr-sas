import About from "@/components/About";
import Blog from "@/components/Blog"; 
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import TreatmentApproach from "@/components/TreatmentApproach";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <StatsSection />
      <Blog /> 
      <Testimonials />
      <Locations />
      {/* <TreatmentApproach /> */}
      <Contact />
    </>
  );
}
