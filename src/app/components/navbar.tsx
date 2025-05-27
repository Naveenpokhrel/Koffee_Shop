"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed w-full z-20 text-white px-6 py-4 shadow-sm backdrop-blur-sm"
      style={{ backgroundColor: "rgba(51, 33, 29, 0.7)" }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold tracking-wide">
          KOPPEE
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="hover:text-yellow-300 transition duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col items-start bg-[#33211d] text-white text-lg px-6 py-4 space-y-4 shadow-md rounded-b-md">
          {navLinks.map(({ label, href }) => (
            <li key={label} className="w-full">
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className="block w-full hover:text-yellow-300 transition duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

// Navigation links
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/services" },
  { label: "Menu", href: "/components/pages/menu" },
  { label: "Pages", href: "#" }, // if you want a dropdown or something here, handle differently
  { label: "Contact", href: "/contact" },
];
