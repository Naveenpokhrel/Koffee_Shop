"use client";

import { FaTruck, FaCoffee, FaStar, FaBook } from "react-icons/fa";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Fastest Door Delivery",
    icon: <FaTruck className="text-white" />,
    image: "/images/service-1.jpg",
    desc: "Sit lorem ipsum et diam elit est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor.",
  },
  {
    title: "Fresh Coffee Beans",
    icon: <FaCoffee className="text-white" />,
    image: "/images/service-2.jpg",
    desc: "Sit lorem ipsum et diam elit est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor.",
  },
  {
    title: "Best Quality Coffee",
    icon: <FaStar className="text-white" />,
    image: "/images/service-3.jpg",
    desc: "Sit lorem ipsum et diam elit est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor.",
  },
  {
    title: "Online Table Booking",
    icon: <FaBook className="text-white" />,
    image: "/images/service-4.jpg",
    desc: "Sit lorem ipsum et diam elit est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor.",
  },
];

export default function ServiceGrid() {
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
    <section id="services" className="bg-[#fef9f1] py-24 px-4 md:px-10">
      {/* Header */}
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <div className="relative inline-block mb-4">
          <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#c79559] rounded-full"></span>
          <span className="inline-block w-24 h-1 bg-[#c79559] rounded-full"></span>
          <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#c79559] rounded-full"></span>
        </div>
        <h4 className="text-[#c79559] tracking-widest text-sm font-semibold uppercase mb-2">
          Our Services
        </h4>
        <h2 className="text-5xl font-extrabold text-[#2e1d0e] drop-shadow-lg">
          Fresh & Organic Beans
        </h2>
        <p className="mt-4 text-[#5b4a2a] font-medium">
          Handpicked quality and fast delivery — crafted for true coffee lovers.
        </p>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start gap-8"
          >
            {/* Image */}
            <div className="relative w-full md:w-[320px] h-[240px] rounded-xl overflow-hidden shadow-md shrink-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center text-[#3b2c20] flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#b88653] w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#2e2017]">
                  {service.title}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-[#5b4635]">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
