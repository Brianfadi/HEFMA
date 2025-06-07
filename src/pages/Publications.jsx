import React from "react";

const Publications = () => (
  <main className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6 text-blue-700">Publications & Resources</h1>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Featured Publications</h2>
      <ul className="space-y-4">
        {/* Example publication card */}
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">2025 Annual Industry Report</div>
          <div className="text-blue-500">PDF | Released: May 2025</div>
          <a href="/publications" className="text-blue-700 underline">Download</a>
        </li>
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">HEFMA Newsletter - June 2025</div>
          <div className="text-blue-500">PDF | Released: June 2025</div>
          <a href="/publications" className="text-blue-700 underline">Download</a>
        </li>
      </ul>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-3">Resource Library</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Categories</h3>
        <ul className="flex space-x-4 mb-4">
          <li><a href="/publications" className="text-blue-700 underline">All</a></li>
          <li><a href="/publications" className="text-blue-500">Safety Guidelines</a></li>
          <li><a href="/publications" className="text-blue-500">Facility Management</a></li>
          <li><a href="/publications" className="text-blue-500">Industry Reports</a></li>
        </ul>
      </div>
      <ul className="space-y-4">
        <li className="bg-gray-50 rounded-lg p-4">
          <div className="font-bold">Safety Guidelines for Facility Managers</div>
          <a href="/publications" className="text-blue-700 underline">View PDF</a>
        </li>
        <li className="bg-gray-50 rounded-lg p-4">
          <div className="font-bold">Facility Management Best Practices</div>
          <a href="/publications" className="text-blue-700 underline">View PDF</a>
        </li>
        <li className="bg-gray-50 rounded-lg p-4">
          <div className="font-bold">2025 Industry Report</div>
          <a href="/publications" className="text-blue-700 underline">View PDF</a>
        </li>
      </ul>
    </section>
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-3">Stay Informed</h2>
      <p className="mb-4">Sign up for our newsletter to receive updates on new publications and resources.</p>
      <form className="flex space-x-4">
        <input type="email" placeholder="Email address" className="py-2 pl-10 text-sm text-gray-700" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Sign up</button>
      </form>
    </section>
  </main>
);

export default Publications;
