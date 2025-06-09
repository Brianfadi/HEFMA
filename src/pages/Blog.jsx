import React from "react";
import image9 from '../assets/image9.jpg';

const Blog = () => {
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
        <h1 className="text-4xl font-bold mb-4">News & Insights</h1>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Stay updated with the latest industry news, HEFMA updates, member spotlights, and announcements in hospitality engineering and facilities management.
        </p>
      </div>
    </section>
  <main className="max-w-5xl mx-auto py-12 px-4">
    {/* Industry News */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Industry News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="font-bold mb-1">Sustainable Facility Design Trends in 2025</div>
          <div className="text-gray-600 mb-2">Green building and energy efficiency take center stage in new hospitality projects.</div>
          <a href="#" className="text-blue-700 underline">Read More</a>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="font-bold mb-1">HEFMA Joins Global FM Alliance</div>
          <div className="text-gray-600 mb-2">HEFMA partners with international FM bodies to promote standards and collaboration.</div>
          <a href="#" className="text-blue-700 underline">Read More</a>
        </div>
      </div>
    </section>

    {/* HEFMA Updates */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">HEFMA Updates</h2>
      <ul className="space-y-3">
        <li className="bg-blue-50 rounded p-4">New member portal launching Q3 2025 with enhanced features.</li>
        <li className="bg-blue-50 rounded p-4">2025 Annual Conference registrations now open.</li>
      </ul>
    </section>

    {/* Member Spotlights */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Member Spotlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-lg shadow p-4">
          <div className="font-bold mb-1">Jane Doe, Facility Manager of the Year</div>
          <div className="text-gray-600 mb-2">Recognized for her innovative approach to sustainable operations at Grand Hotel.</div>
        </div>
        <div className="bg-green-50 rounded-lg shadow p-4">
          <div className="font-bold mb-1">Alex Lee, Rising Star</div>
          <div className="text-gray-600 mb-2">Awarded for outstanding contributions to HEFMA community projects.</div>
        </div>
      </div>
    </section>

    {/* Announcements */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Announcements</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Call for speakers: Submit your proposal for the 2025 Conference.</li>
        <li>Submit your news, articles, or spotlights to be featured here!</li>
      </ul>
    </section>

    {/* Call to Action Buttons */}
    <div className="flex flex-wrap gap-4 mt-8 justify-center">
      <a href="#" className="bg-green-700 text-white px-6 py-3 rounded font-semibold shadow hover:bg-green-800 transition">Submit News or Article</a>
      <a href="#" className="bg-blue-700 text-white px-6 py-3 rounded font-semibold shadow hover:bg-blue-800 transition">View All Updates</a>
    </div>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Recent Posts</h2>
      <ul className="space-y-4">
        {/* Example blog post */}
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">5 Trends in Facility Management for 2025</div>
          <div className="text-blue-600 text-sm">By Admin | June 2025</div>
          <div className="mt-2">Discover the latest trends shaping the industry this year.</div>
          <a href="#" className="text-blue-700 underline">Read More</a>
        </li>
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">The Future of Facility Management: Trends and Insights</div>
          <div className="text-blue-600 text-sm">By Admin | May 2025</div>
          <div className="mt-2">Explore the latest trends and insights shaping the industry.</div>
          <a href="#" className="text-blue-700 underline">Read More</a>
        </li>
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">Maximizing Efficiency in Facility Management</div>
          <div className="text-blue-600 text-sm">By Admin | April 2025</div>
          <div className="mt-2">Learn how to maximize efficiency in facility management.</div>
          <a href="#" className="text-blue-700 underline">Read More</a>
        </li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Featured Article</h2>
      <div className="bg-white shadow rounded-lg p-4">
        <div className="font-bold text-lg">The Impact of Technology on Facility Management</div>
        <div className="text-blue-600 text-sm">By Admin | March 2025</div>
        <div className="mt-2">Discover how technology is transforming the facility management industry.</div>
        <a href="#" className="text-blue-700 underline">Read More</a>
      </div>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Categories</h2>
      <ul className="space-y-4">
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">Facility Management</div>
          <div className="text-blue-600 text-sm">Explore the latest trends and insights in facility management.</div>
          <a href="/blog" className="text-blue-700 underline">View All</a>
        </li>
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">Sustainability</div>
          <div className="text-blue-600 text-sm">Learn how to reduce your environmental impact and improve sustainability.</div>
          <a href="/blog" className="text-blue-700 underline">View All</a>
        </li>
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">Technology</div>
          <div className="text-blue-600 text-sm">Discover the latest technology trends and innovations in facility management.</div>
          <a href="/blog" className="text-blue-700 underline">View All</a>
        </li>
      </ul>
    </section>
  </main>
    </>
  );
}

export default Blog;
