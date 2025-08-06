"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (res.ok) setSuccess(true);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md text-sm">
      <h1 className="text-xl font-semibold mb-3 text-center text-gray-800">
        Contact Us
      </h1>

      {success && (
        <p className="text-green-600 text-center mb-3 text-sm">Message sent!</p>
      )}

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          required
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm"
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          required
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          rows="4"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-blue-600 px-3 py-2 rounded shadow hover:bg-blue-700 transition duration-300 text-sm"
        >
          <span className="bg-teal-500 text-white px-3 py-1 rounded text-sm">
            Send
          </span>
        </button>
      </form>
    </div>
  );
}
