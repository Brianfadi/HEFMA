import React from "react";

import image2 from '../assets/image2.jpg';

const About = () => (
  <>
    <section
      className="relative text-white py-16 px-4 text-center overflow-hidden"
      style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
    </section>

    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">About Us</h1>
      <p className="mb-4 text-lg">
        The Hospitality Engineers and Facility Managers Association (HEFMA) is dedicated to promoting excellence, knowledge sharing, and leadership in the hospitality and facility management industry. Our mission is to connect professionals, provide resources, and advance industry standards.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Association Overview</h2>
      <p className="text-lg">
        HEFMA is a professional organization that brings together individuals and organizations from the hospitality and facility management industries. Our goal is to provide a platform for networking, education, and collaboration.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Vision</h2>
      <p className="text-lg">
        Our vision is to be the leading authority in hospitality engineering and facility management, driving innovation and excellence in the industry.
      </p>
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded shadow p-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full mb-3"></div>
            <div className="font-bold">Jane Doe</div>
            <div className="text-blue-700 text-sm">President</div>
          </div>
          <div className="bg-white rounded shadow p-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full mb-3"></div>
            <div className="font-bold">John Smith</div>
            <div className="text-blue-700 text-sm">Vice President</div>
          </div>
          <div className="bg-white rounded shadow p-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full mb-3"></div>
            <div className="font-bold">Alex Lee</div>
            <div className="text-blue-700 text-sm">Secretary</div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Featured Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img src={require('../assets/image1.jpg')} alt="Mentorship" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-700">Mentorship</h3>
              <p className="text-blue-500 mb-4">Connect with industry leaders and grow your career through our mentorship program.</p>
              <a href="/membership" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">Become a Mentee</a>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img src={require('../assets/image2.jpg')} alt="Leadership Workshops" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-700">Leadership Workshops</h3>
              <p className="text-blue-500 mb-4">Participate in exclusive workshops designed for professional growth and leadership.</p>
              <a href="/events" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">See Events</a>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img src={require('../assets/image4.jpg')} alt="Community Projects" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-700">Community Projects</h3>
              <p className="text-blue-500 mb-4">Join our community outreach and sustainability projects for real-world impact.</p>
              <a href="/blog" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">Get Involved</a>
            </div>
          </div>
        </div>
      </section>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Our History</h2>
      <p className="text-lg">
        Founded in 2025, HEFMA has grown into a vibrant community of professionals dedicated to shaping the future of hospitality engineering and facility management.
      </p>
    </main>
  </>
);

export default About;
