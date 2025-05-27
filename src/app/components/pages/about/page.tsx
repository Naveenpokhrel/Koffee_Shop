import Image from "next/image";
import { Check } from "lucide-react";
import Navbar from "../../navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <section className="bg-[#fff9f0] py-16 h-[100vh]">
        <div className="text-center mb-12">
          <div className="w-1 h-20 mx-auto bg-[#c79559] mb-4"></div>
          <h4 className="text-[#c79559] tracking-widest text-sm font-semibold uppercase">
            About Us
          </h4>
          <h2 className="text-4xl font-bold text-[#2e1d0e]">
            Serving Since 1950
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">
          {/* Our Story */}
          <div>
            <h3 className="text-2xl font-bold text-[#2e1d0e] mb-4">
              Our Story
            </h3>
            <p className="text-[#3a2d26] mb-4 font-medium">
              Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet
              sed vero dolor sea
            </p>
            <p className="text-gray-500 mb-6">
              Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
              nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet
              no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit
              ut. Labor diam sed ipsum et eirmod.
            </p>
            <button className="bg-[#2e1d0e] text-white px-6 py-2 font-semibold">
              Learn More
            </button>
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <Image
              src="/images/about.png"
              alt="about image"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          {/* Our Vision */}
          <div>
            <h3 className="text-2xl font-bold text-[#2e1d0e] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-500 mb-6">
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor.
            </p>
            <ul className="space-y-4 text-[#2e1d0e] font-medium">
              <li className="flex items-center gap-2">
                <Check className="text-[#c79559]" size={18} /> Lorem ipsum dolor
                sit amet
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#c79559]" size={18} /> Lorem ipsum dolor
                sit amet
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#c79559]" size={18} /> Lorem ipsum dolor
                sit amet
              </li>
            </ul>
            <button className="mt-6 bg-[#c79559] text-white px-6 py-2 font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
