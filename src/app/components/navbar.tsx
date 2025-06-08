"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICE", href: "/" },
  { label: "MENU", href: "/components/pages/menu/page.tsx" },
  { label: "GALLERY", href: "/gallery" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full text-white px-6 py-4 shadow-sm backdrop-blur-sm z-50 bg-[#303030]/70">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-bold text-white tracking-wide"
        >
          Coffee House
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="hover:text-amber-500 transition duration-200 text-sm font-medium uppercase"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium hidden md:block">
            BOOK A TABLE
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start bg-[#1f1f1f] text-white text-lg px-6 py-4 space-y-4 rounded-b-md shadow-md">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block w-full hover:text-amber-500 uppercase text-sm"
            >
              {label}
            </Link>
          ))}
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full mt-2">
            BOOK A TABLE
          </button>
        </div>
      )}
    </nav>
  );
}
