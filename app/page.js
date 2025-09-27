import IntroSection from "@/components/About/IntroSection";
import BgAnimation from "@/components/BgAnimation";
import Banner from "@/components/Home/Banner";
import BreakProblemsSection from "@/components/Home/BreakproblemSection";
import ContactForm from "@/components/Home/ContactForm";
import HeroSection from "@/components/Home/HeroSection";
import WhyChooseUs from "@/components/Home/WhyUs";
import AiLinesBackground from "@/components/ParticlesBackground";
import FeatureProjects from "@/components/Portfolio/FeatureProjects";
import ServicesCards from "@/components/Services/ServicesCards";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <section className="relative">
        <Navbar />
      <BgAnimation />
      {/* <div className="absolute top-0 w-full h-full inset-0 overflow-hidden">
            <AiLinesBackground/>
          </div> */}
      <section id="hero">
      <HeroSection/>
      </section>
      <section id="about">
      <IntroSection/>
      <WhyChooseUs/>
      </section>
      <section id="services">     
      <ServicesCards/>
      </section>
      <section id="portfolio">
      <FeatureProjects/>
      </section>
      <section id="rewards">
      <BreakProblemsSection/>
      </section>
      <section>
        <Banner/>
      </section>
      <section id="contact-us">
        <ContactForm/>
      </section>
    </section>
  );
}
