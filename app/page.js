import IntroSection from "@/components/About/IntroSection";
import Banner from "@/components/Home/Banner";
import BreakProblemsSection from "@/components/Home/BreakproblemSection";
import ContactForm from "@/components/Home/ContactForm";
import HeroSection from "@/components/Home/HeroSection";
import WhyChooseUs from "@/components/Home/WhyUs";
import FeatureProjects from "@/components/Portfolio/FeatureProjects";
import ServicesCards from "@/components/Services/ServicesCards";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <section className="relative max-w-full overflow-hidden">
      <Navbar />

      {/* Background animation full-page */}
      <div className="fixed inset-0 -z-10">
        <BackgroundGradientAnimation
          gradientBackgroundStart={"rgb(10, 15, 44)"}
          gradientBackgroundEnd={"rgb(10, 15, 44)"}
          firstColor={"12, 15, 207"}
          secondColor={"12, 15, 207"}
          thirdColor={"12, 15, 207"}
          fourthColor={"12, 15, 207"}
          fifthColor={"12, 15, 207"}
          pointerColor={"12, 15, 207"}
          size={"70%"}
          blendingValue="screen"
        />
      </div>

      {/* Page content */}
      <div className="relative z-50">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <IntroSection />
          <WhyChooseUs />
        </section>

        <section id="services">
          <ServicesCards />
        </section>

        <section id="portfolio">
          <FeatureProjects />
        </section>

        <section id="rewards">
          <BreakProblemsSection />
        </section>

        <section>
          <Banner />
        </section>

        <section id="contact-us">
          <ContactForm />
        </section>
      </div>
    </section>
  );
}

