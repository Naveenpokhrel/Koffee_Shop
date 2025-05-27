import Image from "next/image";

const coffeeMenu = [
  {
    type: "Hot Coffee",
    items: [
      { name: "Black Coffee", price: "$5", image: "/images/black-coffee.png" },
      {
        name: "Chocolette Coffee",
        price: "$7",
        image: "/images/choco-coffee.png",
      },
      {
        name: "Coffee With Milk",
        price: "$9",
        image: "/images/milk-coffee.png",
      },
    ],
  },
  {
    type: "Cold Coffee",
    items: [
      { name: "Black Coffee", price: "$5", image: "/images/black-coffee.png" },
      {
        name: "Chocolette Coffee",
        price: "$7",
        image: "/images/choco-coffee.png",
      },
      {
        name: "Coffee With Milk",
        price: "$9",
        image: "/images/milk-coffee.png",
      },
    ],
  },
];

export default function CoffeeMenu() {
  return (
    <>
      <div className="bg-[#fef9f1] min-h-screen px-6 py-12 text-center">
        <div className="text-center mb-12">
          <div className="w-1 h-20 mx-auto bg-[#c79559] mb-4"></div>
          <h4 className="text-[#c79559] tracking-widest text-sm font-semibold uppercase">
            Menu
          </h4>
          <h2 className="text-4xl font-bold text-[#2e1d0e]">
            Competitive Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {coffeeMenu.map((section) => (
            <div key={section.type}>
              <h2 className="text-2xl font-semibold text-black mb-6">
                {section.type}
              </h2>
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 mb-6 text-left"
                >
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute -top-2 -right-2 bg-orange-400 text-white text-sm font-bold rounded-full px-2 py-1">
                      {item.price}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-black">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Sit lorem ipsum et diam elitr est dolor sed duo guberg sea
                      et et lorem dolor
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
            View More Items
          </button>
        </div>
      </div>
    </>
  );
}
