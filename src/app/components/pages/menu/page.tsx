"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaStar, FaSnowflake } from "react-icons/fa";
import { MdOutlineLocalCafe } from "react-icons/md";
import { useEffect } from "react";

const menuData = [
  {
    type: "Espresso",
    items: [
      {
        name: "Classic Espresso",
        image: "/images/Capuccino Cup.jpeg",
        price: "$3.00",
        description: "Rich and bold espresso shot.",
        popular: true,
        seasonal: false,
      },
      {
        name: "Double Espresso",
        image: "/images/expresso.jpeg",
        price: "$4.00",
        description: "Twice the intensity, twice the flavor.",
        popular: false,
        seasonal: false,
      },
    ],
  },
  {
    type: "Latte",
    items: [
      {
        name: "Vanilla Latte",
        image: "/images/late.jpeg",
        price: "$4.50",
        description: "Smooth espresso with vanilla and steamed milk.",
        popular: true,
        seasonal: false,
      },
      {
        name: "Pumpkin Spice Latte",
        image: "/images/blackcoffe.jpg",
        price: "$5.00",
        description: "Seasonal favorite with pumpkin spice.",
        popular: false,
        seasonal: true,
      },
    ],
  },
  {
    type: "Cold Brew",
    items: [
      {
        name: "Classic Cold Brew",
        image: "/images/late.jpeg",
        price: "$4.00",
        description: "Slow-steeped cold brew coffee.",
        popular: false,
        seasonal: false,
      },
      {
        name: "Nitro Cold Brew",
        image: "/images/late.jpeg",
        price: "$5.00",
        description: "Infused with nitrogen for a creamy finish.",
        popular: true,
        seasonal: false,
      },
    ],
  },
];

export default function FancyCoffeeMenu() {
  const [active, setActive] = useState("All");
  const router = useRouter();

  const categories = ["All", ...menuData.map((cat) => cat.type)];

  const allItems =
    active === "All"
      ? menuData.flatMap((sec) => sec.items)
      : menuData.find((c) => c.type === active)?.items ?? [];

  const displayedItems = allItems.slice(0, 3);

  const handleExploreMore = () => {
    router.push("/menu/orders/");
  };

  const handleCustomizeOrder = (item: { name: string }) => {
    router.push(`/menu/order?name=${encodeURIComponent(item.name)}`);
  };

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
    <section className="bg-[#fef9f1] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <div className="relative inline-block mb-4">
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#c79559] rounded-full"></span>
            <span className="inline-block w-24 h-1 bg-[#c79559] rounded-full"></span>
            <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#c79559] rounded-full"></span>
          </div>
          <h4 className="text-[#c79559] uppercase tracking-widest text-sm font-semibold mb-2">
            Discover the Taste
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2e1d0e] mb-4">
            Our Signature Coffee Menu
          </h2>
          <p className="text-[#7c6b5a] max-w-md mx-auto text-base md:text-lg">
            Carefully crafted with passion, our coffees are made from the
            freshest and finest organic beans.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
              }}
              className={`px-5 py-2 rounded-full font-semibold text-sm shadow-md transition-all duration-300 ${
                active === cat
                  ? "bg-[#d2a679] text-white"
                  : "bg-white text-[#5b3e2c] hover:bg-[#f7eee4]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3">
          {displayedItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group p-4 bg-white/40 backdrop-blur-lg rounded-xl shadow-xl hover:scale-[1.03] transition-all duration-300 border border-[#e2d5c3]"
            >
              <div className="relative w-full h-52 sm:h-56 md:h-60 lg:h-64 mb-3 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 group-hover:brightness-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                {item.popular && (
                  <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded shadow">
                    <FaStar className="inline-block mr-1" />
                    Popular
                  </span>
                )}
                {item.seasonal && (
                  <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow">
                    <FaSnowflake className="inline-block mr-1" />
                    Seasonal
                  </span>
                )}
              </div>

              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-[#3e2c21]">
                  {item.name}
                </h3>
                <span className="text-[#d2a679] font-semibold text-sm bg-[#fef6ee] px-3 py-1 rounded-full shadow-sm">
                  {item.price}
                </span>
              </div>

              <p className="text-sm text-[#5c4a3b] mt-2">{item.description}</p>

              <button
                onClick={() => handleCustomizeOrder(item)}
                className="mt-4 flex items-center gap-2 text-sm text-[#a76c3e] font-semibold hover:underline transition"
              >
                <MdOutlineLocalCafe className="text-lg" />
                Customize Order
              </button>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleExploreMore}
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#d2a679] text-white text-lg font-semibold hover:bg-[#b88b55] transition-all shadow-lg"
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
