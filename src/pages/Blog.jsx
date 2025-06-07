import React from "react";

const Blog = () => (
  <main className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6 text-blue-700">Blog & Updates</h1>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Recent Posts</h2>
      <ul className="space-y-4">
        {/* Example blog post */}
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">5 Trends in Facility Management for 2025</div>
          <div className="text-blue-600 text-sm">By Admin | June 2025</div>
          <div className="mt-2">Discover the latest trends shaping the industry this year.</div>
          <a href="#" className="text-blue-700 underline">Read More</a>
        </li>
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">The Future of Facility Management: Trends and Insights</div>
          <div className="text-blue-600 text-sm">By Admin | May 2025</div>
          <div className="mt-2">Explore the latest trends and insights shaping the industry.</div>
          <a href="#" className="text-blue-700 underline">Read More</a>
        </li>
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">Maximizing Efficiency in Facility Management</div>
          <div className="text-blue-600 text-sm">By Admin | April 2025</div>
          <div className="mt-2">Learn how to maximize efficiency in facility management.</div>
          <a href="#" className="text-blue-700 underline">Read More</a>
        </li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Featured Article</h2>
      <div className="bg-white shadow rounded-lg p-4">
        <div className="font-bold text-lg">The Impact of Technology on Facility Management</div>
        <div className="text-blue-600 text-sm">By Admin | March 2025</div>
        <div className="mt-2">Discover how technology is transforming the facility management industry.</div>
        <a href="#" className="text-blue-700 underline">Read More</a>
      </div>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Categories</h2>
      <ul className="space-y-4">
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">Facility Management</div>
          <div className="text-blue-600 text-sm">Explore the latest trends and insights in facility management.</div>
          <a href="/blog" className="text-blue-700 underline">View All</a>
        </li>
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">Sustainability</div>
          <div className="text-blue-600 text-sm">Learn how to reduce your environmental impact and improve sustainability.</div>
          <a href="/blog" className="text-blue-700 underline">View All</a>
        </li>
        <li className="bg-white shadow rounded-lg p-4">
          <div className="font-bold text-lg">Technology</div>
          <div className="text-blue-600 text-sm">Discover the latest technology trends and innovations in facility management.</div>
          <a href="/blog" className="text-blue-700 underline">View All</a>
        </li>
      </ul>
    </section>
  </main>
);

export default Blog;
