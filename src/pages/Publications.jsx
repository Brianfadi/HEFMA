import React from "react";

const Publications = () => (
  <main className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6 text-green-700">Publications & Resources</h1>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Featured Publications</h2>
      <ul className="space-y-4">
        {/* Example publication card */}
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">2025 Annual Industry Report</div>
          <div className="text-gray-600">PDF | Released: May 2025</div>
          <a href="#" className="text-green-700 underline">Download</a>
        </li>
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">HEFMA Newsletter - June 2025</div>
          <div className="text-gray-600">PDF | Released: June 2025</div>
          <a href="#" className="text-green-700 underline">Download</a>
        </li>
      </ul>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-3">Resource Library</h2>
      <ul className="space-y-4">
        <li className="bg-gray-50 rounded-lg p-4">
          <div className="font-bold">Safety Guidelines for Facility Managers</div>
          <a href="#" className="text-green-700 underline">View PDF</a>
        </li>
      </ul>
    </section>
  </main>
);

export default Publications;
