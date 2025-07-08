"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image: "/images/Photo-3.jpg",
      subtitle: "WELCOME TO COFFEE HOUSE",
      title: "Discover Coffee",
      highlight: "Perfection",
      description:
        "Experience the finest coffee with our carefully selected beans and expert brewing techniques.",
    },
    {
      image: "/images/Photo-2.jpg",
      subtitle: "ARTISAN COFFEE SHOP",
      title: "Savor Our",
      highlight: "Signature Blends",
      description:
        "Each cup is prepared with premium beans and crafted with passion by our skilled baristas.",
    },
    {
      image: "/images/Photo-1.jpg",
      subtitle: "PREMIUM QUALITY",
      title: "Enjoy Our",
      highlight: "Barista Creations",
      description:
        "Our special coffee creations will elevate your coffee experience to new heights.",
    },
  ];

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [isAnimating, slides.length]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isAnimating, nextSlide]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="absolute inset-0 bg-[#303030]/70 z-0"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto h-full flex items-center justify-center px-4 md:px-12">
        <div
          className={`transition-all duration-1000 ${
            isAnimating
              ? "translate-y-10 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <p className="text-sm md:text-base tracking-wider text-white/80 mb-2 animate-fadeIn">
            {slides[currentSlide].subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fadeIn">
            {slides[currentSlide].title} <br />
            <span className="text-amber-400">
              {slides[currentSlide].highlight}
            </span>
          </h1>
          <p className="text-gray-200 text-base md:text-lg mb-8 max-w-2xl mx-auto animate-fadeIn">
            {slides[currentSlide].description}
          </p>

          <div className="flex justify-center gap-4 flex-wrap animate-fadeIn">
            <Link href="/Orders" passHref>
              <button
                className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition transform hover:scale-105"
                onClick={() => console.log("Order Now clicked")}
              >
                ORDER NOW
              </button>
            </Link>

            <button
              className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition transform hover:scale-105"
              onClick={() => {
                const section = document.getElementById("menu");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
                console.log("View Menu clicked");
              }}
            >
              VIEW OUR MENU
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
              }
            }}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? "bg-amber-500 w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Global Styles for Animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
