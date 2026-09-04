
import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import axios from 'axios';

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user && userData) {
      setContact({
        username: user.username || "",
        email: user.email || "",
        message: "",
      });
      setUserData(false);
    }
  }, [user, userData]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://lms-platform-backend-psal.onrender.com/api/form/contact`,
        contact,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response) {
        setContact(defaultContactFormData);
        alert("Message sent successfully");
      }
    } catch (error) {
      alert("Message not sent");
      console.error(error.message);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] py-12 px-4">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center gap-16">
        
        {/* Left */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl font-extrabold text-purple-500">Contact Us</h1>
          <p className="text-gray-400 text-lg max-w-md">
            Have questions or feedback? Fill out the form and we’ll get back to you as soon as possible.
          </p>
          <img
            src="/images/support.png"
            alt="Support"
            className="w-[320px] md:w-[400px] mx-auto md:mx-0"
          />
        </div>

        {/* Right */}
        <div className="flex-1 w-full max-w-xl bg-[#1e1e1e] p-8 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6 text-white">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block mb-1 text-sm font-semibold">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                required
                value={contact.username}
                onChange={handleInput}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={contact.email}
                onChange={handleInput}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-semibold">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={contact.message}
                onChange={handleInput}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition text-white font-bold text-lg rounded-lg shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

