import React from "react";

const Home = () => (
  <main className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="bg-green-700 text-white py-16 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to HEFMA</h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl mb-6">
        The official hub for Hospitality Engineers and Facility Managers Association. 
        Promoting excellence, knowledge sharing, and industry leadership.
      </p>
      <a href="#membership" className="inline-block bg-white text-green-700 px-6 py-2 rounded font-semibold shadow hover:bg-green-100 transition">Join Now</a>
    </section>

    {/* Quick Links */}
    <section className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-50 rounded-lg shadow p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Events & News</h2>
        <p className="mb-4">Stay updated with the latest events and announcements.</p>
        <a href="/events" className="text-green-700 font-semibold hover:underline">View Events</a>
      </div>
      <div className="bg-gray-50 rounded-lg shadow p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Membership</h2>
        <p className="mb-4">Discover the benefits of joining HEFMA and become a member today.</p>
        <a href="/membership" className="text-green-700 font-semibold hover:underline">Join HEFMA</a>
      </div>
      <div className="bg-gray-50 rounded-lg shadow p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Resources</h2>
        <p className="mb-4">Access publications, guides, and industry best practices.</p>
        <a href="/publications" className="text-green-700 font-semibold hover:underline">Explore Resources</a>
      </div>
    </section>

    {/* Social Media Banner */}
    <section className="bg-gray-100 py-8 text-center">
      <p className="text-lg font-medium mb-2">Connect with us on social media:</p>
      <div className="flex justify-center space-x-6">
        <a href="#" className="hover:text-green-700">Facebook</a>
        <a href="#" className="hover:text-green-700">Instagram</a>
        <a href="#" className="hover:text-green-700">LinkedIn</a>
        <a href="#" className="hover:text-green-700">X</a>
      </div>
    </section>
  </main>
);

export default Home;
