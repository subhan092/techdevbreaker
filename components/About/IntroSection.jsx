"use client";
import React from "react";
import LockAnimation from "../IntroAnimation";

export default function AboutSection() {
  return (
    <section className=" w-full  -mt-12 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side (Text Content) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            ⚡ We Break Barriers, <br />
            <span className="text-blue-700">You Break Through.</span>
          </h2>

          <p className="mt-4 text-lg text-gray-300">
          We’re not just developers — we’re builders of bold ideas.
          At <span className="font-bold text-white text-xl">TechDevBreakers</span>, we use AI, design, and strategy differently
          </p>

          {/* Highlights */}
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-700 text-xl">🤖</span>
              <p className="text-gray-200">
                <strong>AI That Matters</strong> Not hype, just real solutions that work.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-700 text-xl">🎨</span>
              <p className="text-gray-200">
                <strong>Designs That Speak</strong> – Creative visuals that grab attention instantly.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-700 text-xl">📈</span>
              <p className="text-gray-200">
                <strong>Strategies That Scale</strong> Marketing built to grow with you, not just get clicks.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-700 text-xl">🎯</span>
              <p className="text-gray-200">
                <strong> Impact-First</strong> Every project built to deliver measurable results.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side (Lottie Animation Placeholder) */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl flex items-center justify-center">
            <LockAnimation/>
          </div>
        </div>
      </div>
    </section>
  );
}
