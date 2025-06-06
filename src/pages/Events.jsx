import React from "react";

const Events = () => (
  <main className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6 text-green-700">Events & News</h1>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Upcoming Events</h2>
      <ul className="space-y-4">
        {/* Example event card */}
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">Annual General Meeting 2025</div>
          <div className="text-gray-600">September 10, 2025 - Nairobi</div>
          <div className="text-gray-700 mt-2">Join us for our annual meeting with keynote speakers, workshops, and networking sessions.</div>
        </li>
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">Facility Management Expo</div>
          <div className="text-gray-600">November 22, 2025 - Virtual</div>
          <div className="text-gray-700 mt-2">A virtual expo showcasing the latest innovations in facility management.</div>
        </li>
      </ul>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-3">Latest News</h2>
      <ul className="space-y-4">
        <li className="bg-gray-50 rounded-lg p-4">
          <div className="font-bold">HEFMA Launches New Website</div>
          <div className="text-gray-600 text-sm">June 2025</div>
          <div>We are excited to launch our new digital platform for members and industry professionals.</div>
        </li>
      </ul>
    </section>
  </main>
);

export default Events;
