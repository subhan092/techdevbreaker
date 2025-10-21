

import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F2C]  text-white pt-12 pb-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Tagline */}
        <div>
          <h3 className="text-2xl font-bold">
            Tech<span className="text-[#1447E6]">Dev</span>Breakers
          </h3>
          <p className="mt-3 text-sm text-gray-300">
            Breaking barriers in digital innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Services", "Portfolio", "About", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#1447E6] transition-colors cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2 hover:text-[#1447E6] cursor-pointer transition">
              <Mail size={18} /> hello@techdevbreakers.com
            </li>
            <li className="flex items-center gap-2 hover:text-[#1447E6] cursor-pointer transition">
              <Phone size={18} /> +92 300 1234567
            </li>
            <li className="flex items-center gap-2 hover:text-[#1447E6] cursor-pointer transition">
              <MapPin size={18} /> Lahore, Pakistan
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-2 rounded-full border border-white/20 hover:bg-[#1447E6] transition cursor-pointer"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="p-2 rounded-full border border-white/20 hover:bg-[#1447E6] transition cursor-pointer"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="p-2 rounded-full border border-white/20 hover:bg-[#1447E6] transition cursor-pointer"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="p-2 rounded-full border border-white/20 hover:bg-[#1447E6] transition cursor-pointer"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} TechDevBreakers. All rights reserved.
      </div>
    </footer>
  );
}
