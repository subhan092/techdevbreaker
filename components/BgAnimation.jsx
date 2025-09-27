"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 -z-10 w-full h-full bg-[#0A0F2C]" />
  ),
});

import callAnimation from "@/public/bgAnimation.json";

export default function BgAnimation() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <Lottie animationData={callAnimation} loop={true} />
    </div>
  );
}
