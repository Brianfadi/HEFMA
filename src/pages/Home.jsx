import React, { useState, useEffect } from "react";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

console.log('image1:', image1);
console.log('image2:', image2);
console.log('image3:', image3);

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white py-16 px-4 text-center overflow-hidden"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none" aria-hidden="true"></div>
      <div className="relative z-10">


      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to HEFMA</h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl mb-6">
        The official hub for Hospitality Engineers and Facility Managers Association. 
        Promoting excellence, knowledge sharing, and industry leadership.
      </p>
      <a href="#membership" className="inline-block bg-white text-blue-700 px-6 py-2 rounded font-semibold shadow hover:bg-blue-500 transition">Join Now</a>
      </div>
    </section>

    {/* Featured Programs - Attractive Image Cards */}
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Featured Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <img src={require('../assets/image1.jpg')} alt="Leadership Program" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Leadership Program</h3>
            <p className="text-gray-700 mb-4">Empowering the next generation of facility leaders through workshops and mentorship.</p>
            <a href="/events" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">Learn More</a>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <img src={require('../assets/image3.jpg')} alt="Innovation Hub" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Innovation Hub</h3>
            <p className="text-gray-700 mb-4">Explore the latest trends and technologies in hospitality engineering and management.</p>
            <a href="/publications" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">Explore</a>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <img src={require('../assets/image4.jpg')} alt="Community Outreach" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Community Outreach</h3>
            <p className="text-gray-700 mb-4">Making a difference through sustainability projects and community engagement.</p>
            <a href="/blog" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">Get Involved</a>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Event */}
    <section className="max-w-3xl mx-auto mt-8 mb-8 px-4">
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center p-6 gap-6 border-l-4 border-blue-700">
        <div className="flex-1 text-left">
          <h3 className="text-blue-700 font-bold text-lg mb-2">Featured Event</h3>
          <div className="text-xl font-semibold mb-1">Annual General Meeting 2025</div>
          <div className="text-gray-600 mb-2">September 10, 2025 &bull; Nairobi</div>
          <p className="mb-2">Join us for our annual meeting with keynote speakers, workshops, and networking sessions.</p>
          <a href="/events" className="text-blue-700 underline font-medium">Learn More</a>
        </div>
        <div className="hidden md:block">
          <span className="inline-block bg-blue-500 text-blue-700 rounded-full px-4 py-2 font-semibold text-sm">Upcoming</span>
        </div>
      </div>
    </section>

    {/* Quick Links */}
    <section className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-50 rounded-lg shadow p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Events & News</h2>
        <p className="mb-4">Stay updated with the latest events and announcements.</p>
        <a href="/events" className="text-blue-700 font-semibold hover:underline">View Events</a>
      </div>
      <div className="bg-gray-50 rounded-lg shadow p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Membership</h2>
        <p className="mb-4">Discover the benefits of joining HEFMA and become a member today.</p>
        <a href="/membership" className="text-blue-700 font-semibold hover:underline">Join HEFMA</a>
      </div>
      <div className="bg-gray-50 rounded-lg shadow p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Resources</h2>
        <p className="mb-4">Access publications, guides, and industry best practices.</p>
        <a href="/publications" className="text-blue-700 font-semibold hover:underline">Explore Resources</a>
      </div>
    </section>

    {/* Latest News */}
    <section className="max-w-4xl mx-auto px-4 mb-12">
      <h3 className="text-2xl font-bold text-blue-700 mb-4">Latest News</h3>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded shadow flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <span className="inline-block bg-blue-500 text-blue-700 px-2 py-1 rounded text-xs font-semibold mr-2">News</span>
            <span className="font-medium">HEFMA Launches New Website</span>
            <div className="text-blue-500 text-sm">June 2025</div>
          </div>
          <a href="/blog" className="text-blue-700 font-semibold hover:underline mt-2 md:mt-0">Read More</a>
        </li>
        <li className="bg-white p-4 rounded shadow flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <span className="inline-block bg-blue-500 text-blue-700 px-2 py-1 rounded text-xs font-semibold mr-2">Event</span>
            <span className="font-medium">Upcoming Facility Management Expo</span>
            <div className="text-blue-500 text-sm">November 2025</div>
          </div>
          <a href="/events" className="text-blue-700 font-semibold hover:underline mt-2 md:mt-0">Details</a>
        </li>
      </ul>
    </section>

    {/* Testimonials */}
    <section
      className="relative py-12"
      style={{
        backgroundImage: `url(${require('../assets/image4.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none" aria-hidden="true"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">What Our Members Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-90 rounded shadow p-6 flex flex-col items-center">
            <div className="font-bold text-lg mb-2 text-gray-900">Jane Doe</div>
            <div className="text-gray-600 text-center mb-2">“HEFMA has helped me connect with industry leaders and grow my career.”</div>
            <span className="text-blue-700 font-semibold text-sm">Facility Manager</span>
          </div>
          <div className="bg-white bg-opacity-90 rounded shadow p-6 flex flex-col items-center">
            <div className="font-bold text-lg mb-2 text-gray-900">John Smith</div>
            <div className="text-gray-600 text-center mb-2">“The events and resources are top-notch. Highly recommended!”</div>
            <span className="text-blue-700 font-semibold text-sm">Engineer</span>
          </div>
          <div className="bg-white bg-opacity-90 rounded shadow p-6 flex flex-col items-center">
            <div className="font-bold text-lg mb-2 text-gray-900">Alex Lee</div>
            <div className="text-gray-600 text-center mb-2">“Membership has given me access to invaluable knowledge and contacts.”</div>
            <span className="text-blue-700 font-semibold text-sm">Member</span>
          </div>
        </div>
      </div>
    </section>

    {/* Image Gallery */}
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Gallery</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <img src={require('../assets/image1.jpg')} alt="Gallery 1" className="rounded-lg shadow object-cover w-full h-48" />
        <img src={require('../assets/image2.jpg')} alt="Gallery 2" className="rounded-lg shadow object-cover w-full h-48" />
        <img src={require('../assets/image3.jpg')} alt="Gallery 3" className="rounded-lg shadow object-cover w-full h-48" />
        <img src={require('../assets/image4.jpg')} alt="Gallery 4" className="rounded-lg shadow object-cover w-full h-48" />
      </div>
    </section>

    {/* Social Media Banner */}
    <section className="bg-gray-100 py-8 text-center">
      <p className="text-lg font-medium mb-2">Connect with us on social media:</p>
      <div className="flex justify-center space-x-6">
        <a href="#" className="hover:text-blue-700">Facebook</a>
        <a href="#" className="hover:text-blue-700">Instagram</a>
        <a href="#" className="hover:text-blue-700">LinkedIn</a>
        <a href="#" className="hover:text-blue-700">X</a>
      </div>
    </section>
  </main>
);
}

export default Home;
