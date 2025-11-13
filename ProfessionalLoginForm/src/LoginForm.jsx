import React, { useState } from "react";

function LoginForm() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">
          Login
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-700 outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-700 outline-none"
            required
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center space-x-2 text-gray-600">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="#" className="text-green-700 text-sm">
            Forgot?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded-lg font-medium hover:bg-green-800 active:scale-95 transition-all duration-300"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
