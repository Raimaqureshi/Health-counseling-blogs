"use client";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // For showing success/error messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName(""); setEmail(""); setMessage(""); // Clear form after submit
      } else {
        setStatus(result.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Error sending message.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-6">
        Fill out the form below, and one of our team members will get back to you as soon as possible. We value your time and are here to provide the support you need.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          {status && (
            <div className={`text-center ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
              {status}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
        
        <p className="text-gray-600 text-center mt-6">
          We believe that every interaction is an opportunity to build a meaningful connection. Your questions and feedback matter to us, and we are committed to providing you with the best possible support. Whether you're seeking advice or simply want to reach out, we&apos;re here to listen and assist you in any way we can. Let&apos;s work together to create a healthier, happier future.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-lg max-w-full mt-6">
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <p className="text-lg text-gray-600">
      <span className="font-semibold">Email:</span> <br />
      qraima1@gmail.com
    </p>
  </div>
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <p className="text-lg text-gray-600">
      <span className="font-semibold">Phone:</span> <br />
      +92 123 456 7890
    </p>
  </div>
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <p className="text-lg text-gray-600">
      <span className="font-semibold">Location:</span> <br />
      Karachi, Pakistan
    </p>
  </div>
</div>

    </div>
  );
};

export default Contact;
