"use client";
import React from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const AiLinesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="overflow-hidden"
      style={{ width: "100%", height: "100%"  }}
      options={{
        fullScreen: { enable: false }, // stays inside parent
        background: { color: "transparent" },
        fpsLimit: 40,
        particles: {
          number: {
            value: window.innerWidth < 768 ? 200 : 250, // fewer on mobile, more on desktop
            density: { enable: true, area: 900 },
          },
          color: { value: "#FFD700" },
          links: {
            enable: true,
            color: "#ffff",
            distance: 100,
            opacity: 0.3,
            width: 1.3,
          },
          move: {
            enable: true,
            speed: 0.8,
            outModes: "out",
          },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 2 } },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
            resize: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default AiLinesBackground;
