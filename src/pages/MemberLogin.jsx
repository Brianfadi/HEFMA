import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const MemberLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple demo logic; replace with real authentication
    if (email === "member@hefma.org" && password === "password123") {
      setIsLoggedIn(true);
      setTimeout(() => navigate("/memberportal"), 500); // Redirect after login
    } else {
      setError("Invalid email or password.");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/memberportal" />;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-blue-700 text-center">Member Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">Login</button>
        </form>
      </div>
    </main>
  );
};

export default MemberLogin;
