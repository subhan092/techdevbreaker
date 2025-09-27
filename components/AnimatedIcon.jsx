// components/AnimatedIcon.js
"use client";

import Lottie from "lottie-react";
import callAnimation from "@/public/hero-animation.json"; // your downloaded .json file

export default function AnimatedIcon() {
  return (
    <div className="w-70 h-70">
      <Lottie animationData={callAnimation} loop={true} />
    </div>
  );
}
