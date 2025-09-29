// components/AnimatedIcon.js
"use client";

import Lottie from "lottie-react";
import callAnimation from "@/public/Process.json"; // your downloaded .json file

export default function ProcessAnimation() {
  return (
    <div className="w-[92vw] h-[100vh]   absolute overflow-hidden backdrop-opacity-15 blur-xs  ">
      <Lottie animationData={callAnimation} loop={true} />
    </div>
  );
}
