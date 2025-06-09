import React from "react";
import image9 from '../assets/image9.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

const Publications = () => {
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
        <h1 className="text-4xl font-bold mb-4">Knowledge Hub & Resources</h1>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Access guidelines, technical resources, articles, and best practices for hospitality engineering and facilities management professionals.
        </p>
      </div>
    </section>

    <main className="max-w-5xl mx-auto py-12 px-4">
      {/* Guidelines & Technical Resources */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Guidelines & Technical Resources</h2>
        <ul className="space-y-3">
          <li className="bg-blue-50 rounded p-4 flex items-center justify-between">
            <span>HEFMA Facility Maintenance Guidelines (2025)</span>
            <a href="#" className="bg-blue-700 text-white px-4 py-2 rounded shadow hover:bg-blue-800 transition">Download PDF</a>
          </li>
          <li className="bg-blue-50 rounded p-4 flex items-center justify-between">
            <span>Energy & Sustainability Best Practices</span>
            <a href="#" className="bg-blue-700 text-white px-4 py-2 rounded shadow hover:bg-blue-800 transition">Download PDF</a>
          </li>
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
  </>
  );
}

export default Publications;
