import { Rocket, Zap, Handshake } from "lucide-react";
import AiLinesBackground from "../ParticlesBackground";

const features = [
  {
    id: 1,
    title: "Future-Ready Skills",
    description: "AI, Cloud & Web expertise to power tomorrow.",
    icon: Rocket,
    position: "top-0 left-1/2 -translate-x-1/2", // top
  },
  {
    id: 2,
    title: "Barrier-Breaking Mindset",
    description: "We challenge “impossible.”",
    icon: Zap,
    position: "left-0 top-1/2 -translate-y-1/2", // left
  },
  {
    id: 3,
    title: "True Collaboration",
    description: "We grow with you, not just for you.",
    icon: Handshake,
    position: "right-0 top-1/2 -translate-y-1/2", // right
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative   text-white py-12 flex items-center justify-center">
       <div className="absolute top-0 w-full h-full inset-0 overflow-hidden">
            <AiLinesBackground/>
          </div>
          
      <div className="relative w-full max-w-6xl flex flex-col items-center px-6">
        
        {/* Center Text */}
        <div className="text-center max-w-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose{" "}
            <span className="text-[#1447E6] drop-shadow-[0_0_12px_#1447E6]">
              TechDevBreakers?
            </span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            We don’t just deliver projects — we deliver breakthroughs.
          </p>
        </div>

        {/* Desktop Circle Layout */}
        <div className="hidden md:flex relative w-[500px] h-[500px] items-center justify-center">
          {/* Circle Border */}
          <div className="w-full h-full rounded-full border-2 border-[#1447E6] absolute"></div>

          {/* Features in Circle */}
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`absolute ${feature.position} text-center w-40`}
            >
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center border-2 border-[#1447E6] mb-3 bg-[#0A0F2C]">
                <feature.icon size={28} className="text-[#1447E6]" />
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-gray-400 text-xs">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Stacked Layout */}
        <div className="flex flex-col gap-8 md:hidden w-full">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#1447E6]">
                <feature.icon size={24} className="text-[#1447E6]" />
              </div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

