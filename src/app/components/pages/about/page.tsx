"use client";
import Image from "next/image";
import { Check } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AboutUs() {
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
    <section
      id="about"
      className="bg-[#fff9f0] py-20 px-6 sm:px-10 min-h-screen flex flex-col justify-center"
    >
      {/* Header Section */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <div className="relative inline-block mb-4">
          <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#c79559] rounded-full"></span>
          <span className="inline-block w-24 h-1 bg-[#c79559] rounded-full"></span>
          <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#c79559] rounded-full"></span>
        </div>
        <h4 className="text-[#c79559] tracking-widest text-sm font-semibold uppercase mb-2">
          About Us
        </h4>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2e1d0e] drop-shadow-lg">
          Serving Since 1950
        </h2>
        <p className="mt-4 text-[#5b4a2a] font-medium">
          Proudly crafting experiences and serving excellence for over 70 years.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Our Story */}
        <div>
          <h3 className="text-2xl font-bold text-[#2e1d0e] mb-4">Our Story</h3>
          <p className="text-[#3a2d26] mb-4 font-medium">
            Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed
            vero dolor sea.
          </p>
          <p className="text-gray-600 mb-6">
            Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
            nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no.
            Est nonumy sed labore eirmod sit magna.
          </p>
          <button className="bg-[#2e1d0e] text-white px-6 py-2 font-semibold rounded hover:bg-[#1f1309] transition">
            Learn More
          </button>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <Image
              src="/images/about.png"
              alt="about image"
              width={300}
              height={300}
              className="w-full h-auto object-contain rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Our Vision */}
        <div>
          <h3 className="text-2xl font-bold text-[#2e1d0e] mb-4">Our Vision</h3>
          <p className="text-gray-600 mb-6">
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
            dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
          </p>
          <ul className="space-y-3 text-[#2e1d0e] font-medium">
            <li className="flex items-center gap-2">
              <Check className="text-[#c79559]" size={18} /> Lorem ipsum dolor
              sit amet
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-[#c79559]" size={18} /> Sed diam voluptua
              rebum
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-[#c79559]" size={18} /> Amet kasd tempor
              diam
            </li>
          </ul>
          <button className="mt-6 bg-[#c79559] text-white px-6 py-2 font-semibold rounded hover:bg-[#a6783d] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
