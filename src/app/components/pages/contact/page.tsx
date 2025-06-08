"use client";
import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaClock,
  FaCommentDots,
} from "react-icons/fa";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Contact() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router]);

  return (
    <div id="contact" className="bg-[#fff9f0] min-h-screen px-4 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[#a16741] font-semibold tracking-widest uppercase">
          Contact Us
        </p>
        <h1 className="text-5xl font-bold text-[#2c1e10] mt-3 leading-snug drop-shadow">
          Book Your Table <br className="hidden md:block" /> Today
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Reserve your perfect coffee moment — we’re ready to serve you with
          freshness and comfort.
        </p>
      </div>

      {/* Booking Form */}
      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/80 border border-orange-100 shadow-2xl p-10 rounded-3xl transition-all duration-300 ease-in-out">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div className="relative">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-orange-400">
              <FaUser className="text-orange-400 mr-3" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-orange-400">
              <FaEnvelope className="text-orange-400 mr-3" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Date */}
          <div className="relative">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Date
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-orange-400">
              <FaCalendarAlt className="text-orange-400 mr-3" />
              <input
                type="date"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Time */}
          <div className="relative">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Time
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-orange-400">
              <FaClock className="text-orange-400 mr-3" />
              <input
                type="time"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Message
            </label>
            <div className="flex items-start border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-orange-400">
              <FaCommentDots className="text-orange-400 mt-1 mr-3" />
              <textarea
                rows={4}
                placeholder="Special requests..."
                className="w-full bg-transparent outline-none resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300"
            >
              Book a Table
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
