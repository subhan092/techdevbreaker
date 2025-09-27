// components/AnimatedIcon.js
"use client";

import Lottie from "lottie-react";
import aiAnimation from "@/public/AI.json"; // your downloaded .json file
import designAnimation from "@/public/Designs.json"; // your downloaded .json file
import marketingAnimation from "@/public/Marketing.json"; // your downloaded .json file
import WebAnimation from "@/public/Webdev.json"; // your downloaded .json file
import GraphicAnimation from "@/public/Graphic.json"; // your downloaded .json file







export  function WebIcon() {
  return (
    <div className="w-70 h-70">
      <Lottie animationData={WebAnimation} loop={true} />
    </div>
  );
}

export  function DesignIcon() {
    return (
      <div className="w-90 h-90">
        <Lottie animationData={designAnimation} loop={true} />
      </div>
    );
  }

export  function AiIcon() {
    return (
      <div className="w-70 h-70 ">
        <Lottie animationData={aiAnimation} loop={true} />
      </div>
    );
}

export  function MarketingIcon() {
    return (
      <div className="w-40 h-40">
        <Lottie animationData={marketingAnimation} loop={true} />
      </div>
    );
  }

  export  function GraphicsIcon() {
    return (
      <div className="w-30 h-30">
        <Lottie animationData={GraphicAnimation} loop={true} />
      </div>
    );
  }  