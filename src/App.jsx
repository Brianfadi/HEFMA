import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import Governance from "./pages/Governance";
import Advocacy from "./pages/Advocacy";
import Community from "./pages/Community";
import Partners from "./pages/Partners";
import MemberPortal from "./pages/MemberPortal";
import MemberLogin from "./pages/MemberLogin";

const App = () => (
  <Router>
    <Header />
    <div className="min-h-[80vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/events" element={<Events />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/advocacy" element={<Advocacy />} />
        <Route path="/community" element={<Community />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/memberlogin" element={<MemberLogin />} />
        <Route path="/memberportal" element={<MemberPortal />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
