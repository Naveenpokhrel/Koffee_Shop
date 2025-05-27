"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import react-slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };

  return (
    <div className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      {/* Slider */}
      <Slider {...settings} className="w-full h-full">
        {["/images/herobanner.jpg", "/images/carousel-1.jpg", "/images/carousel-2.jpg"].map((src, index) => (
          <div key={index} className="relative w-full h-[90vh] md:h-screen">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>

      {/* Custom overlay using inline RGBA */}
      <div
        className=" inset-0 z-10"
        style={{ backgroundColor: "rgba(51, 33, 29, 0.7)" }}
      />

      {/* Centered content */}
      <div className=" inset-0 z-20 flex flex-col items-center justify-center text-center px-4 text-white">
        <p className="text-lg md:text-xl text-orange-300 font-medium mb-2 tracking-wide">
          We Have Been Serving
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#c79559] drop-shadow-lg">
          KOFFE
        </h1>
        <p className="text-base md:text-2xl mt-4 tracking-wide font-light">
          * SINCE 1950 *
        </p>
      </div>
    </div>
  );
}
