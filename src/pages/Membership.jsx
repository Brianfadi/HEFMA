import React from "react";

import image9 from '../assets/image9.jpg';
import image8 from '../assets/image8.jpg';
import image10 from '../assets/image10.jpg';

const Membership = () => (
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
      <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none" aria-hidden="true"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Membership</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-6">
          Join HEFMA and become part of a vibrant professional community.
        </p>
      </div>
    </section>

    {/* Why Join HEFMA */}
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Membership</h1>
      <h2 className="text-2xl font-semibold mb-4">Why Join HEFMA?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Access to industry standards, publications, and technical resources</li>
        <li>Professional networking with peers and leaders in hospitality and FM</li>
        <li>Training, certifications, and professional development opportunities</li>
        <li>Advocacy for members' interests at national and regional levels</li>
        <li>Discounts on events, workshops, and industry tools</li>
      </ul>
      {/* Membership Categories */}
      <h2 className="text-2xl font-semibold mb-4">Membership Categories</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Individual Members</li>
        <li>Corporate Members</li>
        <li>Student/Graduate Members</li>
        <li>Honorary Fellows</li>
      </ul>
      {/* How to Join */}
      <h2 className="text-2xl font-semibold mb-4">How to Join</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
        <li>Complete the online application form or download the application</li>
        <li>Submit required documents</li>
        <li>Pay the membership fee</li>
        <li>Receive your membership confirmation</li>
      </ol>
      <div className="flex flex-wrap gap-4 mb-6">
        <a href="#" className="bg-green-700 text-white px-6 py-2 rounded font-semibold shadow hover:bg-green-800 transition">Apply for Membership</a>
        <a href="#" className="bg-blue-700 text-white px-6 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">Renew Membership</a>
        <a href="#" className="bg-gray-700 text-white px-6 py-2 rounded font-semibold shadow hover:bg-gray-800 transition">Download Application</a>
      </div>
      {/* Member Directory Placeholder */}
      <div className="bg-gray-100 border-l-4 border-blue-700 p-4 rounded mb-8">
        <h3 className="text-lg font-semibold mb-1">Member Directory</h3>
        <p className="text-gray-700">(Access to the member directory is available for logged-in members.)</p>
      </div>
    </section>

    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Member Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <img src={image8} alt="Scholarships" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Scholarships</h3>
            <p className="text-blue-500 mb-4">Apply for exclusive scholarships available to HEFMA members.</p>
            <a href="/membership" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">Apply Now</a>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <img src={image9} alt="Networking Events" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Networking Events</h3>
            <p className="text-blue-500 mb-4">Attend exclusive events and connect with industry professionals.</p>
            <a href="/events" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">See Events</a>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <img src={image10} alt="Professional Development" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Professional Development</h3>
            <p className="text-blue-500 mb-4">Access resources and tools to enhance your professional skills.</p>
            <a href="/publications" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    {/* Membership Info Cards */}
    <section className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
      {/* How to Join Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">How to Join</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Fill out the online application form <span className="italic text-gray-400">(coming soon)</span></li>
          <li>Submit required documents</li>
          <li>Pay the membership fee</li>
          <li>Receive your membership confirmation</li>
        </ol>
      </div>
      {/* FAQ Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Frequently Asked Questions</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>What are the benefits of membership?</li>
          <li>How do I join?</li>
          <li>What is the membership fee?</li>
          <li>How long does the membership last?</li>
        </ul>
      </div>
      {/* Testimonials Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Testimonials</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-green-600 pl-4 italic text-gray-700">
            "HEFMA has been instrumental in my professional development. The networking opportunities and access to industry resources have been invaluable."
            <div className="mt-2 text-sm font-semibold text-gray-500">- John Doe, Member since 2020</div>
          </div>
          <div className="border-l-4 border-green-600 pl-4 italic text-gray-700">
            "I've been a member of HEFMA for over 5 years and have seen the organization grow and evolve. The membership benefits are top-notch and the community is supportive and knowledgeable."
            <div className="mt-2 text-sm font-semibold text-gray-500">- Jane Smith, Member since 2015</div>
          </div>
          <div className="border-l-4 border-green-600 pl-4 italic text-gray-700">
            "HEFMA has provided me with the tools and resources I need to stay up-to-date in my field. The membership has been a game-changer for my career."
            <div className="mt-2 text-sm font-semibold text-gray-500">- Bob Johnson, Member since 2018</div>
          </div>
        </div>
      </div>
    </section>

    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-2">Questions?</h2>
      <p>Contact our membership team at <a href="mailto:info@hefma.org" className="text-blue-700 underline">info@hefma.org</a></p>
    </div>
  </>
);

export default Membership;
