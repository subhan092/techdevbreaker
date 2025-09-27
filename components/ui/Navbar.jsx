// components/Navbar.js
"use client";

import { useEffect, useState } from "react";
import { LucideMenuSquare, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  // { label: "Rewards", id: "rewards" },
  { label: "Contact us", id: "contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      onscroll()
      setIsOpen(false); 
    }
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md ${isScrolled ? 'border-b border-white/10 shadow-lg bg-[#0A0F2C] ': " bg-transparent"} `}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Tech<span className="text-[#1447E6]">Dev</span>Breakers
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#1447E6] transition hover:cursor-pointer"
            >
              {item.label}
            </button>
          ))}

          {/* Call-to-action */}
          <button
            onClick={() => handleScroll("contact")}
            className="ml-4 px-4 py-2 rounded-lg bg-[#1447E6] hover:bg-blue-800 transition font-medium shadow-md"
          >
            Book free Meeting
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white">
          {isOpen ? (
            <X size={28} onClick={() => setIsOpen(false)} className="cursor-pointer" />
          ) : (
            <LucideMenuSquare size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0F2C]/95 text-white px-6 py-6 flex flex-col  items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-left hover:text-[#1447E6] hover:cursor-pointer   transition"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleScroll("contact")}
            className="px-4 py-2 rounded-lg bg-[#1447E6] hover:bg-blue-800 transition font-medium shadow-md w-fit"
          >
            Book free Meeting
          </button>
        </div>
      )}
    </nav>
  );
}
