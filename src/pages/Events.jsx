import React from "react";

import image4 from '../assets/image4.jpg';

const Events = () => (
  <>
    <section
      className="relative text-white py-16 px-4 text-center overflow-hidden"
      style={{
        backgroundImage: `url(${image4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
    </section>
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Events & News</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-4">
            <div className="font-bold text-lg">Annual General Meeting 2025</div>
            <div className="text-gray-600">September 10, 2025 - Nairobi</div>
            <div className="text-blue-700 mt-2">Join us for our annual meeting with keynote speakers, workshops, and networking sessions.</div>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <div className="font-bold text-lg">Facility Management Expo</div>
            <div className="text-gray-600">November 22, 2025 - Virtual</div>
            <div className="text-blue-700 mt-2">A virtual expo showcasing the latest innovations in facility management.</div>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <div className="font-bold text-lg">Workshop: Sustainability in FM</div>
            <div className="text-gray-600">January 15, 2026 - Mombasa</div>
            <div className="text-blue-700 mt-2">A hands-on workshop on sustainable practices in facility management.</div>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Upcoming Events</h2>
        <ul className="space-y-4">
          <li className="bg-blue-50 rounded p-4 shadow flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <div className="font-semibold">Annual General Meeting 2025</div>
              <div className="text-blue-500 text-sm">September 10, 2025 &bull; Nairobi</div>
            </div>
            <a href="#" className="text-blue-700 font-semibold hover:underline mt-2 md:mt-0">Details</a>
          </li>
          <li className="bg-blue-50 rounded p-4 shadow flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <div className="font-semibold">Facility Management Expo</div>
              <div className="text-blue-500 text-sm">November 5, 2025 &bull; Mombasa</div>
            </div>
            <a href="#" className="text-blue-700 font-semibold hover:underline mt-2 md:mt-0">Details</a>
          </li>
        </ul>
      </section>
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Spotlight Moments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img src={require('../assets/image2.jpg')} alt="Keynote Speakers" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-700">Keynote Speakers</h3>
              <p className="text-blue-700 mb-4">Highlights from our most inspiring keynote presentations and industry leaders.</p>
              <a href="/events" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">See More</a>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img src={require('../assets/image3.jpg')} alt="Workshops" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-700">Workshops</h3>
              <p className="text-blue-700 mb-4">Interactive sessions and hands-on learning from recent events and expos.</p>
              <a href="/events" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">Learn More</a>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img src={require('../assets/image4.jpg')} alt="Networking" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-700">Networking</h3>
              <p className="text-blue-700 mb-4">Connect with peers and professionals during our special networking moments.</p>
              <a href="/membership" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">Join Now</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-3">Image Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <img src={require('../assets/image1.jpg')} alt="Event Gallery 1" className="w-full h-48 object-cover rounded" />
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <img src={require('../assets/image1.jpg')} alt="Event Gallery 1" className="w-full h-48 object-cover rounded" />
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <img src={require('../assets/image1.jpg')} alt="Event Gallery 1" className="w-full h-48 object-cover rounded" />
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Past Events Archive</h2>
        <ul className="space-y-4">
          <li className="bg-gray-50 rounded-lg p-4">
            <div className="font-bold">HEFMA Annual General Meeting 2024</div>
            <div className="text-gray-600 text-sm">September 10, 2024 - Nairobi</div>
            <div>View event details and photos.</div>
          </li>
          <li className="bg-gray-50 rounded-lg p-4">
            <div className="font-bold">Facility Management Conference 2023</div>
            <div className="text-gray-600 text-sm">November 22, 2023 - Virtual</div>
            <div>View event details and presentations.</div>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-3">Image Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <img src={require('../assets/image1.jpg')} alt="Event Gallery 1" className="w-full h-48 object-cover rounded" />
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <img src={require('../assets/image1.jpg')} alt="Event Gallery 1" className="w-full h-48 object-cover rounded" />
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <img src={require('../assets/image1.jpg')} alt="Event Gallery 1" className="w-full h-48 object-cover rounded" />
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Events;
