import React from "react";

const Contact = () => (
  <main className="max-w-2xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6 text-green-700">Contact Us</h1>
    <form className="bg-white shadow rounded-lg p-6 space-y-4">
      <div>
        <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
        <input type="text" id="name" className="w-full border rounded px-3 py-2" placeholder="Your Name" />
      </div>
      <div>
        <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
        <input type="email" id="email" className="w-full border rounded px-3 py-2" placeholder="Your Email" />
      </div>
      <div>
        <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
        <textarea id="message" className="w-full border rounded px-3 py-2" rows="4" placeholder="How can we help you?"></textarea>
      </div>
      <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">Send Message</button>
    </form>
    <div className="mt-8 text-center">
      <div className="mb-2">Or email us at <a href="mailto:info@hefma.org" className="text-green-700 underline">info@hefma.org</a></div>
      <div className="mb-2">Nairobi, Kenya</div>
    </div>
  </main>
);

export default Contact;
