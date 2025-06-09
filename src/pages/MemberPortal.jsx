import React from "react";

const MemberPortal = () => (
  <main className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6 text-blue-700">Member Portal</h1>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Welcome, Member!</h2>
      <p className="text-gray-700">Access exclusive resources, update your profile, renew membership, and connect with other members. (Authentication required for full access.)</p>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Member Tools</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Download certificates</li>
        <li>View payment history</li>
        <li>Member-only announcements</li>
      </ul>
    </section>
  </main>
);

export default MemberPortal;
