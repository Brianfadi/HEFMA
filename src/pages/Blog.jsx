import React from "react";

const Blog = () => (
  <main className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6 text-green-700">Blog & Updates</h1>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Latest Posts</h2>
      <ul className="space-y-4">
        {/* Example blog post */}
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">5 Trends in Facility Management for 2025</div>
          <div className="text-gray-600 text-sm">By Admin | June 2025</div>
          <div className="mt-2">Discover the latest trends shaping the industry this year.</div>
          <a href="#" className="text-green-700 underline">Read More</a>
        </li>
      </ul>
    </section>
  </main>
);

export default Blog;
