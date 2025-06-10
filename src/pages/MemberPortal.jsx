import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MemberPortal = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true, offset: 80, easing: 'ease-out-cubic' });
  }, []);

  return (
    <main className="max-w-4xl mx-auto py-12 px-4" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-6 text-blue-700" data-aos="fade-right">Member Portal</h1>
      <section className="mb-8" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-3" data-aos="fade-right">Welcome, Member!</h2>
        <p className="text-gray-700">Access exclusive resources, update your profile, renew membership, and connect with other members. (Authentication required for full access.)</p>
      </section>
      <section className="mb-8" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-3" data-aos="fade-right">Member Tools</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Download certificates</li>
          <li>View payment history</li>
          <li>Member-only announcements</li>
        </ul>
      </section>
    </main>
  );
};

export default MemberPortal;
