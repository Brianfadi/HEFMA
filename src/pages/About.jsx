import React from "react";

const About = () => (
  <main className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6 text-green-700">About Us</h1>
    <p className="mb-4 text-lg">
      The Hospitality Engineers and Facility Managers Association (HEFMA) is dedicated to promoting excellence, knowledge sharing, and leadership in the hospitality and facility management industry. Our mission is to connect professionals, provide resources, and advance industry standards.
    </p>
    <h2 className="text-2xl font-semibold mt-8 mb-3">Leadership Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Example team member cards (replace with real data as needed) */}
      <div className="bg-white shadow rounded-lg p-4 text-center">
        <img src="/assets/profile1.png" alt="Leader 1" className="mx-auto h-20 w-20 rounded-full mb-2" />
        <div className="font-bold">Jane Doe</div>
        <div className="text-sm text-gray-500">President</div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 text-center">
        <img src="/assets/profile2.png" alt="Leader 2" className="mx-auto h-20 w-20 rounded-full mb-2" />
        <div className="font-bold">John Smith</div>
        <div className="text-sm text-gray-500">Vice President</div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 text-center">
        <img src="/assets/profile3.png" alt="Leader 3" className="mx-auto h-20 w-20 rounded-full mb-2" />
        <div className="font-bold">Alex Lee</div>
        <div className="text-sm text-gray-500">Secretary</div>
      </div>
    </div>
    <h2 className="text-2xl font-semibold mt-8 mb-3">Our History</h2>
    <p className="text-lg">
      Founded in 2025, HEFMA has grown into a vibrant community of professionals dedicated to shaping the future of hospitality engineering and facility management.
    </p>
  </main>
);

export default About;
