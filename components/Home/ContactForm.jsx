// components/ContactForm.js
"use client";

import { User, Mail, Building2, FileText } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thanks for contacting us! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="bg-[#0A0F2C] py-16 px-6">
      <div className="max-w-3xl mx-auto bg-[#0F1639] rounded-2xl shadow-lg p-8 border border-white/10">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Let’s Build Something Great
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3 bg-[#0A0F2C] border border-white/10 rounded-lg px-4 py-3 focus-within:border-[#1447E6] transition">
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3 bg-[#0A0F2C] border border-white/10 rounded-lg px-4 py-3 focus-within:border-[#1447E6] transition">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Company / Brand (optional)
            </label>
            <div className="flex items-center gap-3 bg-[#0A0F2C] border border-white/10 rounded-lg px-4 py-3 focus-within:border-[#1447E6] transition">
              <Building2 size={18} className="text-gray-400" />
              <input
                type="text"
                name="company"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Service Needed */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Service Needed <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-[#0A0F2C] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#1447E6] transition"
            >
              <option value="">Select a service</option>
              <option value="web">Web Development</option>
              <option value="ai">AI Solutions</option>
              <option value="cloud">Cloud Services</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Budget (optional)
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-[#0A0F2C] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#1447E6] transition"
            >
              <option value="">Select a budget</option>
              <option value="<1k">Less than $1,000</option>
              <option value="1k-5k">$1,000 – $5,000</option>
              <option value="5k+">Above $5,000</option>
              <option value="not-sure">Not Sure</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message / Project Details <span className="text-red-500">*</span>
            </label>
            <div className="flex items-start gap-3 bg-[#0A0F2C] border border-white/10 rounded-lg px-4 py-3 focus-within:border-[#1447E6] transition">
              <FileText size={18} className="text-gray-400 mt-1" />
              <textarea
                name="message"
                required
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent outline-none text-white placeholder-gray-500 resize-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#1447E6] hover:bg-blue-700 transition font-semibold shadow-lg cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
