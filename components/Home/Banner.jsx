import React from 'react'

const Banner = () => {
  return (
    <section className=" py-16 px-3   text-center text-white bg-gradient-to-r from-[#0A0F2C] via-[#1447E6] to-[#0A0F2C]">
  <h2 className="text-3xl leading-12 md:text-4xl font-bold mb-4 drop-shadow-[0_0_15px_#1447E6]">
    Ready to Break Barriers with TechDevBreakers?
  </h2>
  <p className="text-gray-200 mb-6">Let’s build something extraordinary together.</p>
  <button className="px-6 py-3 bg-white text-[#1447E6] font-semibold rounded-lg shadow-md hover:cursor-pointer hover:bg-gray-300 transition">
    Book a Call
  </button>
</section>

  )
}

export default Banner