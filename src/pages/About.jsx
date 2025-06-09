import React from "react";

import image1 from '../assets/image1.jpg';
import image9 from '../assets/image9.jpg';
import image12 from '../assets/image12.jpg';
import image13 from '../assets/image13.jpg';
import image14 from '../assets/image14.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';

const About = () => (
  <>
    <section
      className="relative text-white py-16 px-4 text-center overflow-hidden"
      style={{
        backgroundImage: `url(${image9})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
    </section>

    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">About Us</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Strategic Objectives</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Promote excellence and innovation in hospitality engineering and facilities management.</li>
          <li>Foster professional development, education, and networking among members.</li>
          <li>Advocate for industry standards, sustainability, and best practices.</li>
          <li>Support the advancement of the built environment and hospitality infrastructure.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Constitution & Governance</h2>
        <p className="mb-2">Our constitution outlines the governance structure, principles, and code of conduct for HEFMA. Download the full document below.</p>
        <a href="#" className="inline-block bg-blue-700 text-white px-5 py-2 rounded shadow hover:bg-blue-800 transition">Download Constitution (PDF)</a>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Who We Are</h2>
        <p className="text-gray-700">HEFMA is a member-driven, non-profit association committed to advancing the disciplines of hospitality engineering and facilities management. Our community includes professionals from hotels, resorts, hospitals, universities, corporate facilities, and service providers.<br/>Formed to unify and support professionals in the sector, our story is one of collaboration, growth, and a commitment to raising industry standards across the region and beyond.</p>
      </section>
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Our Mission</h3>
          <p className="text-gray-700">To unify and support hospitality and facilities management professionals through networking, advocacy, and professional development.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Our Vision</h3>
          <p className="text-gray-700">To be the leading voice and resource hub for hospitality engineers and facility management practitioners in the region and beyond.</p>
        </div>
      </section>
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-green-700 mb-2">Core Values</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Professionalism</li>
          <li>Sustainability</li>
          <li>Innovation</li>
          <li>Continuous Learning</li>
          <li>Member Empowerment</li>
        </ul>
      </section>
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
            <img src={image5} alt="Mentorship" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-700">Mentorship</h3>
              <p className="text-blue-500 mb-4">Connect with industry leaders and grow your career through our mentorship program.</p>
              <a href="/membership" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">Become a Mentee</a>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img src={image6} alt="Leadership Workshops" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-700">Leadership Workshops</h3>
              <p className="text-blue-500 mb-4">Participate in exclusive workshops designed for professional growth and leadership.</p>
              <a href="/events" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">See Events</a>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img src={image7} alt="Community Projects" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
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
