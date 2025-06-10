import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image10 from '../assets/image10.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

console.log('image10:', image10);
console.log('image2:', image2);
console.log('image3:', image3);

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // re-animate every time section enters viewport
      mirror: true,
      offset: 80,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white py-16 px-4 text-center overflow-hidden"
        style={{
          backgroundImage: `url(${image10})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        data-aos="fade-up"
      >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none" aria-hidden="true"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 transition duration-300 hover:text-green-500 hover:scale-105 cursor-pointer" data-aos="fade-right">HEFMA - Hospitality Engineers & Facilities Managers Association</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-4 transition duration-300 hover:text-blue-700 hover:underline cursor-pointer" data-aos="fade-left">
          Welcome to HEFMA, the registered professional association representing members across the hospitality and facilities management sectors. We bring together engineers, facility managers, hotel and hospitality operations experts, and service providers under one collaborative network to promote standards, education, innovation, and excellence in the built environment and hospitality infrastructure.
        </p>
        <div className="text-2xl md:text-3xl font-semibold italic text-green-300 mb-8 transition duration-300 hover:text-green-500 hover:scale-105 cursor-pointer" data-aos="fade-up">Connecting Expertise. Driving Excellence & Sustainable Solutions</div>
        <div className="flex flex-col md:flex-row justify-center gap-4" data-aos="fade-up">
          <a href="/events" className="inline-block bg-green-700 text-white px-6 py-3 rounded font-semibold shadow hover:bg-green-800 transition" data-aos="fade-up">Events</a>
          <a href="/membership" className="inline-block bg-blue-700 text-white px-6 py-3 rounded font-semibold shadow hover:bg-blue-800 transition" data-aos="fade-up" data-aos-delay="100">Membership</a>
          <a href="/blog" className="inline-block bg-gray-900 text-white px-6 py-3 rounded font-semibold shadow hover:bg-gray-800 transition" data-aos="fade-up" data-aos-delay="200">Latest Updates</a>
        </div>
      </div>
    </section>

    {/* Featured Programs - Attractive Image Cards */}
    <section className="max-w-6xl mx-auto py-12 px-4" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center transition duration-300 hover:text-green-600 hover:underline cursor-pointer" data-aos="fade-right">Featured Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl" data-aos="fade-up">
          <img src={require('../assets/image1.jpg')} alt="Leadership Program" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" data-aos="zoom-in" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700 transition duration-300 hover:text-green-600 hover:underline cursor-pointer" data-aos="fade-up">Leadership Program</h3>
            <p className="text-gray-700 mb-4 transition duration-300 hover:text-blue-700 cursor-pointer" data-aos="fade-left">Empowering the next generation of facility leaders through workshops and mentorship.</p>
            <a href="/events" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition" data-aos="fade-up">Learn More</a>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="100">
          <img src={require('../assets/image3.jpg')} alt="Innovation Hub" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" data-aos="zoom-in" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700 transition duration-300 hover:text-green-600 hover:underline cursor-pointer" data-aos="fade-up">Innovation Hub</h3>
            <p className="text-gray-700 mb-4 transition duration-300 hover:text-blue-700 cursor-pointer" data-aos="fade-left">Explore the latest trends and technologies in hospitality engineering and management.</p>
            <a href="/publications" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition" data-aos="fade-up">Explore</a>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="200">
          <img src={require('../assets/image4.jpg')} alt="Community Outreach" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" data-aos="zoom-in" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700 transition duration-300 hover:text-green-600 hover:underline cursor-pointer" data-aos="fade-up">Community Outreach</h3>
            <p className="text-gray-700 mb-4 transition duration-300 hover:text-blue-700 cursor-pointer" data-aos="fade-left">Making a difference through sustainability projects and community engagement.</p>
            <a href="/blog" className="inline-block bg-blue-700 text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition" data-aos="fade-up">Get Involved</a>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Event */}
    <section className="max-w-3xl mx-auto mt-8 mb-8 px-4" data-aos="fade-up">
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center p-6 gap-6 border-l-4 border-blue-700" data-aos="fade-up">
        <div className="flex-1 text-left">
          <h3 className="text-blue-700 font-bold text-lg mb-2" data-aos="fade-right">Featured Event</h3>
          <div className="text-xl font-semibold mb-1" data-aos="fade-left">Annual General Meeting 2025</div>
          <div className="text-gray-600 mb-2" data-aos="fade-up">September 10, 2025 &bull; Nairobi</div>
          <p className="mb-2" data-aos="fade-left">Join us for our annual meeting with keynote speakers, workshops, and networking sessions.</p>
          <a href="/events" className="text-blue-700 underline font-medium" data-aos="fade-up">Learn More</a>
        </div>
        <div className="hidden md:block" data-aos="zoom-in">
          <span className="inline-block bg-blue-500 text-blue-700 rounded-full px-4 py-2 font-semibold text-sm">Upcoming</span>
        </div>
      </div>
    </section>

    {/* Quick Links */}
    <section className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-50 rounded-lg shadow p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Events & News</h2>
        <p className="mb-4">Stay updated with the latest events and announcements.</p>
        <a href="/events" className="text-blue-700 font-semibold hover:underline">View Events</a>
      </div>
      <div className="bg-gray-50 rounded-lg shadow p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Membership</h2>
        <p className="mb-4">Discover the benefits of joining HEFMA and become a member today.</p>
        <a href="/membership" className="text-blue-700 font-semibold hover:underline">Join HEFMA</a>
      </div>
      <div className="bg-gray-50 rounded-lg shadow p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Resources</h2>
        <p className="mb-4">Access publications, guides, and industry best practices.</p>
        <a href="/publications" className="text-blue-700 font-semibold hover:underline">Explore Resources</a>
      </div>
    </section>

    {/* Latest News */}
    <section className="max-w-4xl mx-auto px-4 mb-12">
      <h3 className="text-2xl font-bold text-blue-700 mb-4">Latest News</h3>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded shadow flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <span className="inline-block bg-blue-500 text-blue-700 px-2 py-1 rounded text-xs font-semibold mr-2">News</span>
            <span className="font-medium">HEFMA Launches New Website</span>
            <div className="text-blue-500 text-sm">June 2025</div>
          </div>
          <a href="/blog" className="text-blue-700 font-semibold hover:underline mt-2 md:mt-0">Read More</a>
        </li>
        <li className="bg-white p-4 rounded shadow flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <span className="inline-block bg-blue-500 text-blue-700 px-2 py-1 rounded text-xs font-semibold mr-2">Event</span>
            <span className="font-medium">Upcoming Facility Management Expo</span>
            <div className="text-blue-500 text-sm">November 2025</div>
          </div>
          <a href="/events" className="text-blue-700 font-semibold hover:underline mt-2 md:mt-0">Details</a>
        </li>
      </ul>
    </section>

    {/* Testimonials */}
    <section
      className="relative py-12"
      style={{
        backgroundImage: `url(${image10})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none" aria-hidden="true"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">What Our Members Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-90 rounded shadow p-6 flex flex-col items-center">
            <div className="font-bold text-lg mb-2 text-gray-900">Jane Doe</div>
            <div className="text-gray-600 text-center mb-2">“HEFMA has helped me connect with industry leaders and grow my career.”</div>
            <span className="text-blue-700 font-semibold text-sm">Facility Manager</span>
          </div>
          <div className="bg-white bg-opacity-90 rounded shadow p-6 flex flex-col items-center">
            <div className="font-bold text-lg mb-2 text-gray-900">John Smith</div>
            <div className="text-gray-600 text-center mb-2">“The events and resources are top-notch. Highly recommended!”</div>
            <span className="text-blue-700 font-semibold text-sm">Engineer</span>
          </div>
          <div className="bg-white bg-opacity-90 rounded shadow p-6 flex flex-col items-center">
            <div className="font-bold text-lg mb-2 text-gray-900">Alex Lee</div>
            <div className="text-gray-600 text-center mb-2">“Membership has given me access to invaluable knowledge and contacts.”</div>
            <span className="text-blue-700 font-semibold text-sm">Member</span>
          </div>
        </div>
      </div>
    </section>

    {/* Image Gallery */}
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Gallery</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <img src={require('../assets/image1.jpg')} alt="Gallery 1" className="rounded-lg shadow object-cover w-full h-48" />
        <img src={require('../assets/image2.jpg')} alt="Gallery 2" className="rounded-lg shadow object-cover w-full h-48" />
        <img src={require('../assets/image3.jpg')} alt="Gallery 3" className="rounded-lg shadow object-cover w-full h-48" />
        <img src={require('../assets/image4.jpg')} alt="Gallery 4" className="rounded-lg shadow object-cover w-full h-48" />
      </div>
    </section>

    {/* Social Media Banner */}
    <section className="bg-gray-100 py-8 text-center">
      <p className="text-lg font-medium mb-2">Connect with us on social media:</p>
      <div className="flex justify-center space-x-6">
        <a href="#" className="hover:text-blue-700">Facebook</a>
        <a href="#" className="hover:text-blue-700">Instagram</a>
        <a href="#" className="hover:text-blue-700">LinkedIn</a>
        <a href="#" className="hover:text-blue-700">X</a>
      </div>
    </section>
  </main>
);
}

export default Home;
