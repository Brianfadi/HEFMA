import React from "react";

const AdminLogin = () => (
  <main className="flex items-center justify-center min-h-[60vh] py-12 px-4">
    <form className="bg-white shadow rounded-lg p-8 w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-green-700 text-center">Admin Login</h1>
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="username">Username</label>
        <input type="text" id="username" className="w-full border rounded px-3 py-2" placeholder="Enter admin username" />
      </div>
      <div className="mb-6">
        <label className="block mb-1 font-semibold" htmlFor="password">Password</label>
        <input type="password" id="password" className="w-full border rounded px-3 py-2" placeholder="Enter password" />
      </div>
      <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded w-full font-semibold hover:bg-green-800 transition">Login</button>
    </form>
  </main>
);

export default AdminLogin;
