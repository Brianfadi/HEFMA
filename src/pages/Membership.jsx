import React from "react";

import image3 from '../assets/image3.jpg';

const Membership = () => (
  <>
    <section
      className="relative text-white py-16 px-4 text-center overflow-hidden"
      style={{
        backgroundImage: `url(${image3})`,
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

    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Member Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <img src={require('../assets/image1.jpg')} alt="Scholarships" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Scholarships</h3>
            <p className="text-blue-500 mb-4">Apply for exclusive scholarships available to HEFMA members.</p>
            <a href="/membership" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">Apply Now</a>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <img src={require('../assets/image2.jpg')} alt="Networking Events" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Networking Events</h3>
            <p className="text-blue-500 mb-4">Attend exclusive events and connect with industry professionals.</p>
            <a href="/events" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">See Events</a>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <img src={require('../assets/image4.jpg')} alt="Career Center" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Career Center</h3>
            <p className="text-blue-500 mb-4">Access job postings and career resources for members.</p>
            <a href="/publications" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">Browse Jobs</a>
          </div>
        </div>
      </div>
    </section>

    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">How to Join</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Fill out the online application form (coming soon)</li>
        <li>Submit required documents</li>
        <li>Pay the membership fee</li>
        <li>Receive your membership confirmation</li>
      </ol>
    </div>
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>What are the benefits of membership?</li>
        <li>How do I join?</li>
        <li>What is the membership fee?</li>
        <li>How long does the membership last?</li>
      </ul>
    </div>
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-lg">"HEFMA has been instrumental in my professional development. The networking opportunities and access to industry resources have been invaluable."</p>
            <p className="text-sm text-gray-600">- John Doe, Member since 2020</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-lg">"I've been a member of HEFMA for over 5 years and have seen the organization grow and evolve. The membership benefits are top-notch and the community is supportive and knowledgeable."</p>
            <p className="text-sm text-gray-600">- Jane Smith, Member since 2015</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-lg">"HEFMA has provided me with the tools and resources I need to stay up-to-date in my field. The membership has been a game-changer for my career."</p>
            <p className="text-sm text-gray-600">- Bob Johnson, Member since 2018</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-2">Questions?</h2>
      <p>Contact our membership team at <a href="mailto:info@hefma.org" className="text-blue-700 underline">info@hefma.org</a></p>
    </div>
  </>
);

export default Membership;
