import React from "react";
import image9 from '../assets/image9.jpg';

const Contact = () => {
  return (
    <>
      <section
      className="relative text-white py-16 px-4 text-center overflow-hidden"
      style={{
        backgroundImage: `url(${image9})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none" aria-hidden="true"></div>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Reach out to HEFMA for membership inquiries, support, partnerships, or general questions. We're here to help!
        </p>
      </div>
    </section>
  <main className="max-w-3xl mx-auto py-12 px-4">
    {/* Contact Information */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Contact Information</h2>
      <div className="bg-white rounded-lg shadow p-6 mb-4">
        <div className="mb-2"><span className="font-semibold">Address:</span> 123 HEFMA Avenue, Nairobi, Kenya</div>
        <div className="mb-2"><span className="font-semibold">Phone:</span> +254 700 000 000</div>
        <div className="mb-2"><span className="font-semibold">Email:</span> <a href="mailto:info@hefma.org" className="text-blue-700 underline">info@hefma.org</a></div>
        <div className="flex gap-4 mt-2">
          <a href="#" className="text-blue-700 hover:text-blue-900">Twitter</a>
          <a href="#" className="text-blue-700 hover:text-blue-900">LinkedIn</a>
          <a href="#" className="text-blue-700 hover:text-blue-900">Facebook</a>
        </div>
      </div>
    </section>

    {/* Contact Form */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Send Us a Message</h2>
      <form className="bg-blue-50 rounded-lg shadow p-6 flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        <input type="email" placeholder="Your Email" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        <textarea placeholder="Your Message" rows="5" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"></textarea>
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">Send Message</button>
      </form>
    </section>

    {/* Map/Location Placeholder */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Location</h2>
      <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-600">[Map of HEFMA HQ coming soon]</div>
    </section>

    {/* Call to Action */}
    <div className="flex justify-center mt-8">
      <a href="mailto:info@hefma.org" className="bg-green-700 text-white px-8 py-3 rounded font-semibold shadow hover:bg-green-800 transition">Email Us</a>
    </div>

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
      <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">Send Message</button>
    </form>
    <div className="mt-8 text-center">
      <div className="mb-2">Or email us at <a href="mailto:info@hefma.org" className="text-blue-700 underline">info@hefma.org</a></div>
      <div className="mb-2">Nairobi, Kenya</div>
    </div>
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Association Info</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
    </div>
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
      <ul>
        <li><a href="/events" className="text-blue-700 underline">Events</a></li>
        <li><a href="/about" className="text-blue-700 underline">About</a></li>
        <li><a href="/membership" className="text-blue-700 underline">Membership</a></li>
      </ul>
    </div>
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Find Us</h2>
      <div className="h-64 bg-gray-200 rounded-lg"></div>
    </div>
  </main>
  </>
  );
}

export default Contact;
