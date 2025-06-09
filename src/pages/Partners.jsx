import React from "react";

const Partners = () => (
  <main className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6 text-blue-700">Partners & Sponsors</h1>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Our Partners</h2>
      <p className="text-gray-700">HEFMA collaborates with leading organizations, sponsors, and industry associations to advance our mission.</p>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Become a Sponsor</h2>
      <p className="text-gray-700">Interested in partnering with us? Contact us to explore sponsorship and partnership opportunities.</p>
      <a href="/contact" className="inline-block bg-green-700 text-white px-5 py-2 rounded shadow hover:bg-green-800 transition">Contact Us</a>
    </section>
  </main>
);

export default Partners;
