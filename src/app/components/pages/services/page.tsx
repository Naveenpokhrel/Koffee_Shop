"use client";

import { FaTruck, FaCoffee, FaStar, FaBook } from "react-icons/fa";
import Image from "next/image";

const services = [
  {
    title: "Fastest Door Delivery",
    icon: <FaTruck className="text-white" />,
    image: "/images/service-1.jpg",
    desc: "Sit lorem ipsum et diam elit est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
  },
  {
    title: "Fresh Coffee Beans",
    icon: <FaCoffee className="text-white" />,
    image: "/images/service-2.jpg",
    desc: "Sit lorem ipsum et diam elit est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
  },
  {
    title: "Best Quality Coffee",
    icon: <FaStar className="text-white" />,
    image: "/images/service-3.jpg",
    desc: "Sit lorem ipsum et diam elit est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
  },
  {
    title: "Online Table Booking",
    icon: <FaBook className="text-white" />,
    image: "/images/service-4.jpg",
    desc: "Sit lorem ipsum et diam elit est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
  },
];

export default function ServiceGrid() {
  return (
    <div className="bg-[#fef9f1] py-20 px-4 md:px-8">
      {/* Header */}
       <div className="text-center mb-12">
          <div className="w-1 h-20 mx-auto bg-[#c79559] mb-4"></div>
          <h4 className="text-[#c79559] tracking-widest text-sm font-semibold uppercase">
            Our Services
          </h4>
          <h2 className="text-4xl font-bold text-[#2e1d0e]">
            Fresh & Organic Beans
          </h2>
        </div>


      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-start gap-6">
            {/* Image */}
            <div className="relative w-full sm:w-125 h-50 rounded-lg overflow-hidden shadow-md">
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center text-[#3b2c20]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#b88653] w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2e2017]">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[#5b4635]">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
