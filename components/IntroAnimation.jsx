// components/AnimatedIcon.js
"use client";

import Lottie from "lottie-react";
import callAnimation from "@/public/Lockopen.json"; // your downloaded .json file

export default function LockAnimation() {
  return (
    <div className="w-90 h-90">
      <Lottie animationData={callAnimation} loop={true} />
    </div>
  );
}
