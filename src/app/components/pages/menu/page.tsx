// "use client";
// import React from "react";

// export default function MenuSection() {
//   const menuItems = [
//     {
//       name: "Espresso",
//       description: "Strong and bold, served in a small cup.",
//       price: "$3.50",
//     },
//     {
//       name: "Cappuccino",
//       description: "Espresso with steamed milk and foam.",
//       price: "$4.00",
//     },
//     {
//       name: "Latte",
//       description: "Creamy blend of espresso and steamed milk.",
//       price: "$4.50",
//     },
//     {
//       name: "Mocha",
//       description: "Espresso with chocolate and steamed milk.",
//       price: "$4.75",
//     },
//     {
//       name: "Iced Coffee",
//       description: "Chilled coffee served over ice.",
//       price: "$3.75",
//     },
//   ];

//   return (
//     <section id="menu" className="bg-white py-16 px-6 md:px-12">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Menu</h2>
//         <p className="text-gray-600 mb-12">
//           Explore our variety of coffee and specialty drinks.
//         </p>

//         <div className="grid md:grid-cols-2 gap-8">
//           {menuItems.map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {item.name}
//               </h3>
//               <p className="text-gray-600 mb-2">{item.description}</p>
//               <p className="text-amber-600 font-medium">{item.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
