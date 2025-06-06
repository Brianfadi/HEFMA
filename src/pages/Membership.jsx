import React from "react";

const Membership = () => (
  <main className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6 text-green-700">Membership</h1>
    <p className="mb-4 text-lg">
      Join HEFMA and become part of a vibrant community of hospitality engineers and facility managers. Enjoy exclusive benefits, networking opportunities, and access to industry resources.
    </p>
    <div className="bg-green-50 rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-2">Membership Benefits</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Access to exclusive publications and resources</li>
        <li>Discounts on events and training</li>
        <li>Networking with industry leaders</li>
        <li>Professional development opportunities</li>
        <li>Member-only newsletters and updates</li>
      </ul>
    </div>
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">How to Join</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Fill out the online application form (coming soon)</li>
        <li>Submit required documents</li>
        <li>Pay the membership fee</li>
        <li>Receive your membership confirmation</li>
      </ol>
    </div>
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-2">Questions?</h2>
      <p>Contact our membership team at <a href="mailto:info@hefma.org" className="text-green-700 underline">info@hefma.org</a></p>
    </div>
  </main>
);

export default Membership;
