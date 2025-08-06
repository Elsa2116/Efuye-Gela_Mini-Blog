import React from "react";

export default function Home() {
  return (
    <main className="p-8 text-center bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-100 min-h-screen flex flex-col justify-center items-center space-y-6">
      <h1 className="text-4xl font-bold text-indigo-600 drop-shadow-lg">
        Welcome to DevConnect
      </h1>
      <p className="text-lg mt-4 text-gray-700 max-w-xl">
        Your place to connect with developers.
      </p>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition">
        Get Started
      </button>
    </main>
  );
}
